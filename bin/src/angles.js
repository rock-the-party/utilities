"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.angleFromTwoPoints = exports.randomPointOnCircleBetweenAngles = exports.randomPointOnCircle = exports.radianHalfAngle = exports.radianNormalizedAngle = exports.degreesToRadians = exports.radiansToDegrees = void 0;
const random_1 = require("./random");
function radiansToDegrees(radians) {
    return radians * (180 / Math.PI);
}
exports.radiansToDegrees = radiansToDegrees;
function degreesToRadians(degrees) {
    return degrees * (Math.PI / 180);
}
exports.degreesToRadians = degreesToRadians;
function radianNormalizedAngle(radianAngle) {
    radianAngle = radianAngle % (2 * Math.PI);
    return radianAngle >= 0 ? radianAngle : radianAngle + 2 * Math.PI;
}
exports.radianNormalizedAngle = radianNormalizedAngle;
function radianHalfAngle(radianAngleA, radianAngleB) {
    let uX = Math.sin(radianAngleA);
    let uY = Math.cos(radianAngleA);
    let vX = Math.sin(radianAngleB);
    let vY = Math.cos(radianAngleB);
    let dotProduct = (uX * vX) + (uY * vY);
    let divisor = Math.sqrt(Math.pow(uX, 2) + Math.pow(uY, 2)) * Math.sqrt(Math.pow(vX, 2) + Math.pow(vY, 2));
    let angleDiff = dotProduct / divisor;
    let angle;
    if (angleDiff > 1) {
        angle = Math.acos(1);
    }
    else if (angleDiff < -1) {
        angle = Math.acos(-1);
    }
    else {
        angle = Math.acos(angleDiff);
    }
    return (Math.PI / 2 - angle) / (Math.PI / 2);
}
exports.radianHalfAngle = radianHalfAngle;
function randomPointOnCircle() {
    let angle = (0, random_1.NextDouble)() * 2 * Math.PI;
    return {
        x: Math.cos(angle),
        y: Math.sin(angle)
    };
}
exports.randomPointOnCircle = randomPointOnCircle;
function randomPointOnCircleBetweenAngles(minRadian, maxRadian) {
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
exports.randomPointOnCircleBetweenAngles = randomPointOnCircleBetweenAngles;
function angleFromTwoPoints(p1, p2) {
    const dx = p2.x - p1.x;
    const dy = p2.y - p1.y;
    if (dx === 0) {
        return Math.PI / 2;
    }
    return Math.atan(-dy / dx);
}
exports.angleFromTwoPoints = angleFromTwoPoints;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5nbGVzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2FuZ2xlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxxQ0FBc0M7QUFHdEMsU0FBZ0IsZ0JBQWdCLENBQUMsT0FBZTtJQUM5QyxPQUFPLE9BQU8sR0FBRyxDQUFDLEdBQUcsR0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7QUFDakMsQ0FBQztBQUZELDRDQUVDO0FBRUQsU0FBZ0IsZ0JBQWdCLENBQUMsT0FBZTtJQUM5QyxPQUFPLE9BQU8sR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLEdBQUMsR0FBRyxDQUFDLENBQUM7QUFDakMsQ0FBQztBQUZELDRDQUVDO0FBRUQsU0FBZ0IscUJBQXFCLENBQUMsV0FBa0I7SUFDdEQsV0FBVyxHQUFHLFdBQVcsR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDMUMsT0FBTyxXQUFXLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLFdBQVcsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQztBQUNwRSxDQUFDO0FBSEQsc0RBR0M7QUFFRCxTQUFnQixlQUFlLENBQUMsWUFBb0IsRUFBRSxZQUFvQjtJQUN4RSxJQUFJLEVBQUUsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQ2hDLElBQUksRUFBRSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDaEMsSUFBSSxFQUFFLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUNoQyxJQUFJLEVBQUUsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQ2hDLElBQUksVUFBVSxHQUFHLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxD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