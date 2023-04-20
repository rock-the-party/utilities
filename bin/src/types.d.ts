export type Point = {
    x: number;
    y: number;
};
export type Circle = Point & {
    radius: number;
};
export type Vector = Point & {
    direction: number;
    length: number;
};
export type CollisionObject = Vector & {
    mass: number;
};
export type SlopeIntercept = {
    slope: number;
    intercept: number;
};
export type Line = {
    p1: Point;
    p2: Point;
};
