"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addVectors = exports.multiplyVectorByScalar = exports.getPointFromVector = exports.isPointOnLine = exports.areCirclesColliding = exports.distanceBetweenPoints = exports.isPointInCircle = exports.intersectionOfSlopeIntercepts = exports.getSlopeInterceptForm = exports.getPerpendicularSlope = exports.slopeInterceptFromTwoPoints = exports.interceptOfVectors = exports.getSlopeInterceptFromVector = exports.areAlmostTheSame = void 0;
function areAlmostTheSame(n1, n2, tolerance = 0.0001) {
    return Math.abs(n1 - n2) < tolerance;
}
exports.areAlmostTheSame = areAlmostTheSame;
function getSlopeInterceptFromVector(v) {
    return getSlopeInterceptForm(v, Math.tan(v.direction));
}
exports.getSlopeInterceptFromVector = getSlopeInterceptFromVector;
;
function interceptOfVectors(v1, v2) {
    return intersectionOfSlopeIntercepts(getSlopeInterceptFromVector(v1), getSlopeInterceptFromVector(v2));
}
exports.interceptOfVectors = interceptOfVectors;
;
function slopeInterceptFromTwoPoints(p1, p2) {
    let slope = (p1.y - p2.y) / (p1.x - p2.x);
    return {
        slope: slope,
        intercept: (slope * (-p1.x)) + p1.y
    };
}
exports.slopeInterceptFromTwoPoints = slopeInterceptFromTwoPoints;
;
function getPerpendicularSlope(si) {
    if (si.slope === 0)
        return Math.PI / 2;
    return (-1 / si.slope);
}
exports.getPerpendicularSlope = getPerpendicularSlope;
;
function getSlopeInterceptForm(p, slope) {
    return {
        slope: slope,
        intercept: p.y - (slope * p.x)
    };
}
exports.getSlopeInterceptForm = getSlopeInterceptForm;
;
function intersectionOfSlopeIntercepts(s1, s2) {
    if (areAlmostTheSame(s1.slope, s2.slope))
        return null;
    let x = (s2.intercept - s1.intercept) / (s1.slope - s2.slope);
    return {
        x: x,
        y: (s1.slope * x) + s1.intercept,
    };
}
exports.intersectionOfSlopeIntercepts = intersectionOfSlopeIntercepts;
;
function isPointInCircle(p, circle) {
    return distanceBetweenPoints(p, circle) <= circle.radius;
}
exports.isPointInCircle = isPointInCircle;
;
function distanceBetweenPoints(p1, p2) {
    return Math.sqrt(Math.pow((p2.x - p1.x), 2) + Math.pow((p2.y - p1.y), 2));
}
exports.distanceBetweenPoints = distanceBetweenPoints;
;
function areCirclesColliding(c1, c2) {
    return distanceBetweenPoints(c1, c2) <= c1.radius + c2.radius;
}
exports.areCirclesColliding = areCirclesColliding;
function isPointOnLine(p0, line) {
    const { p1, p2 } = line;
    return (p0.y - p1.y) * (p2.x - p1.x) === (p2.y - p1.y) * (p0.x - p1.x);
}
exports.isPointOnLine = isPointOnLine;
function getPointFromVector(v) {
    return {
        x: v.length * Math.cos(v.direction),
        y: v.length * Math.sin(v.direction)
    };
}
exports.getPointFromVector = getPointFromVector;
;
function multiplyVectorByScalar(v, scalar) {
    return {
        x: v.x * scalar,
        y: v.y * scalar
    };
}
exports.multiplyVectorByScalar = multiplyVectorByScalar;
;
function addVectors(v1, v2) {
    return {
        x: v1.x + v2.x,
        y: v1.y + v2.y
    };
}
exports.addVectors = addVectors;
;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sbGlzaW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NvbGxpc2lvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFFQSxTQUFnQixnQkFBZ0IsQ0FBRSxFQUFVLEVBQUUsRUFBVSxFQUFFLFlBQW9CLE1BQU07SUFDbEYsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsR0FBRyxTQUFTLENBQUM7QUFDdkMsQ0FBQztBQUZELDRDQUVDO0FBRUQsU0FBZ0IsMkJBQTJCLENBQUUsQ0FBUztJQUNyRCxPQUFPLHFCQUFxQixDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO0FBQ3hELENBQUM7QUFGRCxrRUFFQztBQUFBLENBQUM7QUFFRixTQUFnQixrQkFBa0IsQ0FBRSxFQUFVLEVBQUUsRUFBVTtJQUN6RCxPQUFPLDZCQUE2QixDQUFDLDJCQUEyQixDQUFDLEVBQUUsQ0FBQyxFQUFFLDJCQUEyQixDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDeEcsQ0FBQztBQUZELGdEQUVDO0FBQUEsQ0FBQztBQUVGLFNBQWdCLDJCQUEyQixDQUFFLEVBQVMsRUFBRSxFQUFTO0lBQy9ELElBQUksS0FBSyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUMxQyxPQUFPO1FBQ0wsS0FBSyxFQUFFLEtBQUs7UUFDWixTQUFTLEVBQUUsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDO0tBQ3BDLENBQUE7QUFDSCxDQUFDO0FBTkQsa0VBTUM7QUFBQSxDQUFDO0FBRUYsU0FBZ0IscUJBQXFCLENBQUUsRUFBa0I7SUFDdkQsSUFBSSxFQUFFLENBQUMsS0FBSyxLQUFLLENBQUM7UUFBRSxPQUFPLElBQUksQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQ3ZDLE9BQU8sQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDekIsQ0FBQztBQUhELHNEQUdDO0FBQUEsQ0FBQztBQUVGLFNBQWdCLHFCQUFxQixDQUFFLENBQVEsRUFBRSxLQUFhO0lBQzVELE9BQU87UUFDTCxLQUFLLEVBQUUsS0FBSztRQUNaLFNBQVMsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7S0FDL0IsQ0FBQztBQUNKLENBQUM7QUFMRCxzREFLQztBQUFBLENBQUM7QUFFRixTQUFnQiw2QkFBNkIsQ0FBRSxFQUFrQixFQUFFLEVBQWtCO0lBQ25GLElBQUksZ0JBQWdCLENBQUMsRUFBRSxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDO1FBQUUsT0FBTyxJQUFJLENBQUM7SUFDdEQsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzlELE9BQU87UUFDTCxDQUFDLEVBQUUsQ0FBQztRQUNKLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLFNBQVM7S0FDakMsQ0FBQTtBQUNILENBQUM7QUFQRCxzRUFPQztBQUFBLENBQUM7QUFFRixTQUFnQixlQUFlLENBQUUsQ0FBUSxFQUFFLE1BQWM7SUFDdkQsT0FBTyxxQkFBcUIsQ0FBQyxDQUFDLEVBQUUsTUFBTSxDQUFDLElBQUksTUFBTSxDQUFDLE1BQU0sQ0FBQztBQUMzRCxDQUFDO0FBRkQsMENBRUM7QUFBQSxDQUFDO0FBRUYsU0FBZ0IscUJBQXFCLENBQUUsRUFBUyxFQUFFLEVBQVM7SUFDekQsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUM1RSxDQUFDO0FBRkQsc0RBRUM7QUFBQSxDQUFDO0FBRUYsU0FBZ0IsbUJBQW1CLENBQUUsRUFBVSxFQUFFLEVBQVU7SUFDMUQsT0FBTyxxQkFBcUIsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLElBQUksRUFBRSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUMsTUFBTSxDQUFDO0FBQy9ELENBQUM7QUFGRCxrREFFQztBQUVELFNBQWdCLGFBQWEsQ0FBQyxFQUFTLEVBQUUsSUFBVTtJQUNqRCxNQUFNLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxHQUFHLElBQUksQ0FBQztJQUN4QixPQUFPLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDekUsQ0FBQztBQUhELHNDQUdDO0FBRUQsU0FBZ0Isa0JBQWtCLENBQUMsQ0FBUztJQUMzQyxPQUFPO1FBQ04sQ0FBQyxFQUFFLENBQUMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO1FBQ25DLENBQUMsRUFBRSxDQUFDLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztLQUNuQyxDQUFDO0FBQ0gsQ0FBQztBQUxELGdEQUtDO0FBQUEsQ0FBQztBQUVGLFNBQWdCLHNCQUFzQixDQUFFLENBQVMsRUFBRSxNQUFjO0lBQ2hFLE9BQU87UUFDTixDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxNQUFNO1FBQ2YsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsTUFBTTtLQUNmLENBQUM7QUFDSCxDQUFDO0FBTEQsd0RBS0M7QUFBQSxDQUFDO0FBRUYsU0FBZ0IsVUFBVSxDQUFDLEVBQVUsRUFBRSxFQUFVO0lBQ2hELE9BQU87UUFDTixDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQztRQUNkLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDO0tBQ2QsQ0FBQztBQUNILENBQUM7QUFMRCxnQ0FLQztBQUFBLENBQUMifQ==