export interface IPoint {
    x: number;
    y: number;
}
export declare function radiansToDegrees(radians: number): number;
export declare function degreesToRadians(degrees: number): number;
export declare function radianNormalizedAngle(radianAngle: number): number;
export declare function radianHalfAngle(radianAngleA: number, radianAngleB: number): number;
export declare function PointOnCircle(): IPoint;
export declare function PointOnCircleBetweenAngles(min: number, max: number): IPoint;
