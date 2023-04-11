import { degreesToRadians, radianHalfAngle, radianNormalizedAngle, radiansToDegrees } from "./angles"

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
});
