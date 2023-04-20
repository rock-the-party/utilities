import { Circle, Line, Point, SlopeIntercept, Vector } from "./types";

export function areAlmostTheSame (n1: number, n2: number, tolerance: number = 0.0001): boolean {
  return Math.abs(n1 - n2) < tolerance;
}

export function getSlopeInterceptFromVector (v: Vector): SlopeIntercept {
	return getSlopeInterceptForm(v, Math.tan(v.direction));
};

export function interceptOfVectors (v1: Vector, v2: Vector):Point | null {
	return intersectionOfSlopeIntercepts(getSlopeInterceptFromVector(v1), getSlopeInterceptFromVector(v2));
};

export function slopeInterceptFromTwoPoints (p1: Point, p2: Point): SlopeIntercept {
  let slope = (p1.y - p2.y) / (p1.x - p2.x);
  return {
    slope: slope,
    intercept: (slope * (-p1.x)) + p1.y
  }
};

export function getPerpendicularSlope (si: SlopeIntercept): number {
  if (si.slope === 0) return Math.PI / 2;
  return (-1 / si.slope);
};

export function getSlopeInterceptForm (p: Point, slope: number): SlopeIntercept {
  return {
    slope: slope,
    intercept: p.y - (slope * p.x)
  };
};

export function intersectionOfSlopeIntercepts (s1: SlopeIntercept, s2: SlopeIntercept): Point | null {
  if (areAlmostTheSame(s1.slope, s2.slope)) return null;
  let x = (s2.intercept - s1.intercept) / (s1.slope - s2.slope);
  return {
    x: x,
    y: (s1.slope * x) + s1.intercept,
  }
};

export function isPointInCircle (p: Point, circle: Circle): boolean {
  return distanceBetweenPoints(p, circle) <= circle.radius;
};

export function distanceBetweenPoints (p1: Point, p2: Point): number {
  return Math.sqrt(Math.pow((p2.x - p1.x), 2) + Math.pow((p2.y - p1.y), 2));
};

export function areCirclesColliding (c1: Circle, c2: Circle): boolean {
	return distanceBetweenPoints(c1, c2) <= c1.radius + c2.radius;
}

export function isPointOnLine(p0: Point, line: Line): boolean {
  const { p1, p2 } = line;
  return (p0.y - p1.y) * (p2.x - p1.x) === (p2.y - p1.y) * (p0.x - p1.x);
}

export function getPointFromVector(v: Vector): Point {
	return {
		x: v.length * Math.cos(v.direction),
		y: v.length * Math.sin(v.direction)
	};
};

export function multiplyVectorByScalar (v: Vector, scalar: number): Point {
	return {
		x: v.x * scalar,
		y: v.y * scalar
	};
};

export function addVectors(v1: Vector, v2: Vector): Point {
	return {
		x: v1.x + v2.x,
		y: v1.y + v2.y
	};
};