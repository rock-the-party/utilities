import { 
  randomPointOnCircle,
  degreesToRadians,
  randomPointOnCircleBetweenAngles,
  radianHalfAngle,
  radianNormalizedAngle,
  radiansToDegrees,
  angleFromTwoPoints
 } from "./angles"

describe("radiansToDegrees", () => {
  it("should convert pi/2 radians to 90 degrees", () => {
    expect(radiansToDegrees(Math.PI/2)).toBeCloseTo(90);
  });

  it("should convert pi/4 radians to 45 degrees", () => {
    expect(radiansToDegrees(Math.PI/4)).toBeCloseTo(45);
  });

  it("should convert 0 radians to 0 degrees", () => {
    expect(radiansToDegrees(0)).toBeCloseTo(0);
  });
});

describe("degreesToRadians", () => {
  it("should convert 180 degrees to pi radians", () => {
    expect(degreesToRadians(180)).toBeCloseTo(Math.PI);
  });

  it("should convert 0 degrees to 0 radians", () => {
    expect(degreesToRadians(0)).toBeCloseTo(0);
  });
});

describe("radianNormalizedAngle", () => {
  it("should return the same angle when it's already in the range [0, 2pi]", () => {
    expect(radianNormalizedAngle(Math.PI)).toBeCloseTo(Math.PI);
    expect(radianNormalizedAngle(3*Math.PI)).toBeCloseTo(Math.PI);
  });

  it("should return an equivalent angle in the range [0, 2pi]", () => {
    expect(radianNormalizedAngle(-Math.PI)).toBeCloseTo(Math.PI);
    expect(radianNormalizedAngle(5*Math.PI)).toBeCloseTo(Math.PI);
  });
});

describe("radianHalfAngle", () => {
  it("should return 1 when given identical angles", () => {
    expect(radianHalfAngle(0, 0)).toBeCloseTo(1);
    expect(radianHalfAngle(Math.PI, Math.PI)).toBeCloseTo(1);
  });

  it("should return 0 when given orthogonal angles", () => {
    expect(radianHalfAngle(0, Math.PI/2)).toBeCloseTo(0);
    expect(radianHalfAngle(Math.PI/2, Math.PI)).toBeCloseTo(0);
  });

  it("should return a value between 0 and 1 for non-orthogonal angles", () => {
    expect(radianHalfAngle(0, Math.PI/4)).toBeGreaterThan(0);
    expect(radianHalfAngle(0, Math.PI/4)).toBeLessThan(1);
  });

  describe('pointOnCircle', () => {
    it('returns a point on the unit circle', () => {
      for (let i = 0; i < 1000; i++) {
        let point = randomPointOnCircle();
        expect(point.x * point.x + point.y * point.y).toBeCloseTo(1, 5);
      }
    });
  });

  it("should return a point on the circle with min and max angles", () => {
    for (let i = 0; i < 1000; ++i){
      const min = 0;
      const max = 2*Math.PI;
      const point = randomPointOnCircleBetweenAngles(min, max);
      expect(point.x**2 + point.y**2).toBeCloseTo(1);
    }
  });

  it("should return a point with an angle between min and max", () => {
    for (let i = 0; i < 1000; ++i) {
      const min = Math.PI/4;
      const max = 3*Math.PI/4;
      const point = randomPointOnCircleBetweenAngles(min, max);
      const angle = Math.atan2(point.y, point.x);
      expect(angle).toBeGreaterThanOrEqual(min);
      expect(angle).toBeLessThanOrEqual(max);
    }
  });

  it("should return a different point for different calls", () => {
    for (let i = 0; i < 1000; ++i) {
      const min = 0;
      const max = 2*Math.PI;
      const point1 = randomPointOnCircleBetweenAngles(min, max);
      const point2 = randomPointOnCircleBetweenAngles(min, max);
      expect(point1).not.toEqual(point2);
    }
  });
  it('should calculate the angle correctly when dx is not 0', () => {
    const p1 = { x: 0, y: 0 };
    const p2 = { x: 1, y: 1 };
    const expected = -0.7853981633974483; // -45 degrees in radians
    expect(angleFromTwoPoints(p1, p2)).toBe(expected);
  });

  it('should return 90 degrees when dx is 0', () => {
    const p1 = { x: 0, y: 0 };
    const p2 = { x: 0, y: 1 };
    const expected = Math.PI / 2; // 90 degrees in radians
    expect(angleFromTwoPoints(p1, p2)).toBe(expected);
  });
});

