import {
  areAlmostTheSame,
  distanceBetweenPoints,
  getSlopeInterceptForm,
  getPerpendicularSlope,
  getSlopeInterceptFromVector,
  interceptOfVectors,
  intersectionOfSlopeIntercepts,
  areCirclesColliding,
  isPointInCircle,
  isPointOnLine,
  slopeInterceptFromTwoPoints,
  addVectors,
  getPointFromVector,
  multiplyVectorByScalar
} from './collision';
import {
  Vector,
  Point,
  SlopeIntercept,
  Line,
  Circle
} from './types';

describe('Test Suite', () => {
  describe('areAlmostTheSame', () => {
    it('should return true when numbers are almost the same', () => {
      expect(areAlmostTheSame(0.1 + 0.2, 0.3)).toBe(true);
    });

    it('should return false when numbers are not almost the same', () => {
      expect(areAlmostTheSame(0.1 + 0.2, 0.4)).toBe(false);
    });
  });

  describe('getSlopeInterceptFromVector', () => {
    it('should return the correct slope and intercept from vector', () => {
      const vector: Vector = { x: 1, y: 2, direction: 1, length: 1 };
      const result = getSlopeInterceptFromVector(vector);
      expect(result.slope).toBeCloseTo(1.5574077);
      expect(result.intercept).toBeCloseTo(0.442592);
    });
  });

  describe('interceptOfVectors', () => {
    it('should return the point of intersection between two vectors', () => {
      const v1: Vector = { x: 0, y: 0, direction: Math.PI / 4, length: 1 };
      const v2: Vector = { x: 1, y: 1, direction: Math.PI / 7, length: 1 };
      const result = interceptOfVectors(v1, v2);
      expect(result?.x).toBeCloseTo(1);
      expect(result?.y).toBeCloseTo(1);
    });

    it('should return null when the vectors are parallel', () => {
      const v1: Vector = { x: 0, y: 0, direction: 0, length: 1 };
      const v2: Vector = { x: 1, y: 0, direction: 0, length: 1 };
      const result = interceptOfVectors(v1, v2);
      expect(result).toBeNull();
    });
  });

  describe('slopeInterceptFromTwoPoints', () => {
    it('should return the correct slope and intercept from two points', () => {
      const p1: Point = { x: 0, y: 0 };
      const p2: Point = { x: 1, y: 1 };
      const result = slopeInterceptFromTwoPoints(p1, p2);
      expect(result.slope).toBeCloseTo(1);
      expect(result.intercept).toBeCloseTo(0);
    });
  });

  describe('getPerpendicularSlope', () => {
    it('should return the perpendicular slope given a slope', () => {
      const si: SlopeIntercept = { slope: 1, intercept: 0 };
      const result = getPerpendicularSlope(si);
      expect(result).toBeCloseTo(-1);
    });
  });

  describe('equationFromPointSlope', () => {
    it('should return the slope intercept form given a point and slope', () => {
      const p: Point = { x: 0, y: 0 };
      const slope = 1;
      const result = getSlopeInterceptForm(p, slope);
      expect(result.slope).toBeCloseTo(1);
      expect(result.intercept).toBeCloseTo(0);
    });
  });

  describe('intersectionOfSlopeIntercepts', () => {
    it('returns null if slopes are almost the same', () => {
      const s1 = { slope: 2, intercept: 3 };
      const s2 = { slope: 2.0000001, intercept: 5 };
      expect(intersectionOfSlopeIntercepts(s1, s2)).toBeNull();
    });
  
    it('returns the correct intersection point', () => {
      const s1 = { slope: 2, intercept: 3 };
      const s2 = { slope: -0.5, intercept: 7 };
      expect(intersectionOfSlopeIntercepts(s1, s2)).toEqual({ x: 1.6, y: 6.2 });
    });
  });
  
  describe('isPointInCircle', () => {
    it('returns true for a point inside the circle', () => {
      const p = { x: 1, y: 2 };
      const circle = { x: 0, y: 0, radius: 3 };
      expect(isPointInCircle(p, circle)).toBe(true);
    });
  
    it('returns false for a point outside the circle', () => {
      const p = { x: 4, y: 4 };
      const circle = { x: 0, y: 0, radius: 3 };
      expect(isPointInCircle(p, circle)).toBe(false);
    });
  });
  
  describe('distanceBetweenPoints', () => {
    it('returns the correct distance', () => {
      const p1 = { x: 0, y: 0 };
      const p2 = { x: 3, y: 4 };
      expect(distanceBetweenPoints(p1, p2)).toBe(5);
    });
  });
  
  describe('isCirclesColliding', () => {
    it('returns true if circles are overlapping', () => {
      const c1 = { x: 0, y: 0, radius: 2 };
      const c2 = { x: 1, y: 1, radius: 2 };
      expect(areCirclesColliding(c1, c2)).toBe(true);
    });
  
    it('returns false if circles are not overlapping', () => {
      const c1 = { x: 0, y: 0, radius: 2 };
      const c2 = { x: 5, y: 5, radius: 2 };
      expect(areCirclesColliding(c1, c2)).toBe(false);
    });
  });

  describe('isPointInLine', () => {
    const line: Line = {
      p1: { x: 0, y: 0 },
      p2: { x: 4, y: 4 },
    };
  
    it('should return true if point is on the line', () => {
      const point: Point = { x: 2, y: 2 };
      expect(isPointOnLine(point, line)).toBe(true);
    });
  
    it('should return false if point is not on the line', () => {
      const point: Point = { x: 1, y: 3 };
      expect(isPointOnLine(point, line)).toBe(false);
    });
  
    it('should return true if point is at the start of the line', () => {
      const point: Point = { x: 0, y: 0 };
      expect(isPointOnLine(point, line)).toBe(true);
    });
  
    it('should return true if point is at the end of the line', () => {
      const point: Point = { x: 4, y: 4 };
      expect(isPointOnLine(point, line)).toBe(true);
    });
  });


  describe('Geometry functions', () => {

    describe('getPointFromVector()', () => {
      it('should return the correct point for a vector with 0 direction and positive length', () => {
        const vector = { x: 0, y: 0, direction: 0, length: 5 };
        const expected = { x: 5, y: 0 };
        const result = getPointFromVector(vector);
        expect(result).toEqual(expected);
      });
  
      it('should return the correct point for a vector with PI/4 direction and length of 1', () => {
        const vector = { x: 0, y: 0, direction: Math.PI/4, length: 1 };
        const expected = { x: Math.sqrt(0.5), y: Math.sqrt(0.5) };
        const result = getPointFromVector(vector);
        expect(result.x).toBeCloseTo(expected.x, 6);
        expect(result.y).toBeCloseTo(expected.y, 6);
      });
    });
  
    describe('multiplyVectorByScalar()', () => {
      it('should return the zero vector for any scalar and the zero vector', () => {
        const v = { x: 0, y: 0, direction: 0, length: 0 };
        const scalar = 5;
        const result = multiplyVectorByScalar(v, scalar);
        expect(result).toEqual({x: 0, y: 0});
      });
  
      it('should scale the length of the vector by the scalar', () => {
        const v = { x: 1, y: 1, direction: Math.PI/4, length: 2 };
        const scalar = 3;
        const expected = { x: 3, y: 3 };
        const result = multiplyVectorByScalar(v, scalar);
        expect(result).toEqual(expected);
      });
    });
  
    describe('addVectors()', () => {
      it('should return the zero vector when adding it to any vector', () => {
        const v1 = { x: 1, y: 1, direction: Math.PI/4, length: 2 };
        const v2 = { x: 0, y: 0, direction: 0, length: 0 };
        const expected = { x: 1, y: 1 };
        const result = addVectors(v1, v2);
        expect(result).toEqual(expected);
      });

      it('should add the components of the vectors', () => {
        const v1 = { x: 1, y: 1, direction: Math.PI/4, length: 2 };
        const v2 = { x: 0.5, y: 1.5, direction: Math.PI/2, length: 2 };
        const expected = { x: 1.5, y: 2.5 };
        const result = addVectors(v1, v2);
        expect(result).toEqual(expected);
      });
    });
  });
});