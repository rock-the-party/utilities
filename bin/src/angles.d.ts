import { Point } from "./types";
export declare function radiansToDegrees(radians: number): number;
export declare function degreesToRadians(degrees: number): number;
export declare function radianNormalizedAngle(radianAngle: number): number;
export declare function radianHalfAngle(radianAngleA: number, radianAngleB: number): number;
export declare function randomPointOnCircle(): Point;
export declare function randomPointOnCircleBetweenAngles(minRadian: number, maxRadian: number): Point;
export declare function angleFromTwoPoints(p1: Point, p2: Point): number;
