
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
