"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.radianHalfAngle = exports.radianNormalizedAngle = exports.degreesToRadians = exports.radiansToDegrees = void 0;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5nbGVzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2FuZ2xlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFDQSxTQUFnQixnQkFBZ0IsQ0FBQyxPQUFlO0lBQzlDLE9BQU8sT0FBTyxHQUFHLENBQUMsR0FBRyxHQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztBQUNqQyxDQUFDO0FBRkQsNENBRUM7QUFFRCxTQUFnQixnQkFBZ0IsQ0FBQyxPQUFlO0lBQzlDLE9BQU8sT0FBTyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsR0FBQyxHQUFHLENBQUMsQ0FBQztBQUNqQyxDQUFDO0FBRkQsNENBRUM7QUFFRCxTQUFnQixxQkFBcUIsQ0FBQyxXQUFrQjtJQUN0RCxXQUFXLEdBQUcsV0FBVyxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUMxQyxPQUFPLFdBQVcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsV0FBVyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDO0FBQ3BFLENBQUM7QUFIRCxzREFHQztBQUVELFNBQWdCLGVBQWUsQ0FBQyxZQUFvQixFQUFFLFlBQW9CO0lBQ3hFLElBQUksRUFBRSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDaEMsSUFBSSxFQUFFLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUNoQyxJQUFJLEVBQUUsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQ2hDLElBQUksRUFBRSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDaEMsSUFBSSxVQUFVLEdBQUcsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUM7SUFDdkMsSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUMxRyxJQUFJLFNBQVMsR0FBRyxVQUFVLEdBQUMsT0FBTyxDQUFDO0lBQ25DLElBQUksS0FBSyxDQUFDO0lBRVYsSUFBSSxTQUFTLEdBQUcsQ0FBQyxFQUFFO1FBQ2pCLEtBQUssR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0tBQ3RCO1NBQU0sSUFBSSxTQUFTLEdBQUcsQ0FBQyxDQUFDLEVBQUU7UUFDekIsS0FBSyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztLQUN2QjtTQUFNO1FBQ0wsS0FBSyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7S0FDOUI7SUFFRCxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUUsR0FBRyxDQUFDLEdBQUcsS0FBSyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDO0FBQy9DLENBQUM7QUFuQkQsMENBbUJDIn0=