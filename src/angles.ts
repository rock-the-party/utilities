import { NextDouble } from "./random";
import { Point } from "./types";

export function radiansToDegrees(radians: number): number {
  return radians * (180/Math.PI);
}

export function degreesToRadians(degrees: number): number {
  return degrees * (Math.PI/180);
}

export function radianNormalizedAngle(radianAngle:number): number {
  radianAngle = radianAngle % (2 * Math.PI); 
  return radianAngle >= 0 ? radianAngle : radianAngle + 2 * Math.PI;
}

export function radianHalfAngle(radianAngleA: number, radianAngleB: number): number {
  let uX = Math.sin(radianAngleA);
  let uY = Math.cos(radianAngleA);
  let vX = Math.sin(radianAngleB);
  let vY = Math.cos(radianAngleB);
  let dotProduct = (uX * vX) + (uY * vY);
  let divisor = Math.sqrt(Math.pow(uX, 2) + Math.pow(uY, 2)) * Math.sqrt(Math.pow(vX, 2) + Math.pow(vY, 2));
  let angleDiff = dotProduct/divisor;
  let angle;

  if (angleDiff > 1) {
    angle = Math.acos(1);
  } else if (angleDiff < -1) {
    angle = Math.acos(-1);
  } else {
    angle = Math.acos(angleDiff);
  }

  return (Math.PI / 2 - angle) / (Math.PI / 2);
}

export function randomPointOnCircle(): Point {
  let angle = NextDouble() * 2 * Math.PI;
  return {
    x: Math.cos(angle),
    y: Math.sin(angle)
  }
}

export function randomPointOnCircleBetweenAngles(minRadian: number, maxRadian:number): Point {
  if (minRadian > maxRadian) {
    let temp = maxRadian;
    maxRadian = minRadian;
    minRadian = temp;
  }
  const angleRange = maxRadian - minRadian;
  const angle = minRadian + Math.random() * angleRange;

  return {
    x: Math.cos(angle),
    y: Math.sin(angle)
  };
}

export function angleFromTwoPoints(p1: Point, p2: Point): number {
  const dx = p2.x - p1.x;
  const dy = p2.y - p1.y;
  if (dx === 0) {
    return Math.PI / 2; // 90 degrees
  }
  return Math.atan(-dy / dx);
}
