// Function to calculate number of blocks from Scuber HQ
function distanceFromHqInBlocks(pickupLocation) {
  const hqStreet = 42;
  return Math.abs(pickupLocation - hqStreet);
}

// Function to convert block distance to feet
function distanceFromHqInFeet(pickupLocation) {
  const blockDistance = distanceFromHqInBlocks(pickupLocation);
  const feetPerBlock = 264;
  return blockDistance * feetPerBlock;
}

// Example usage:
console.log(distanceFromHqInBlocks(50)); // Output: 8
console.log(distanceFromHqInFeet(50));   // Output: 2112 (8 blocks * 264 feet)
//.....................................
function distanceTravelledInFeet(start, destination) {
  const feetPerBlock = 264;
  return Math.abs(destination - start) * feetPerBlock;
}
console.log(distanceTravelledInFeet(34, 38)); // Output: 1056
console.log(distanceTravelledInFeet(50, 42)); // Output: 2112
//........................
function calculatesFarePrice(start, destination) {
  const distance = Math.abs(destination - start) * 264;

  if (distance <= 400) {
    return 0;
  } else if (distance <= 2000) {
    return (distance - 400) * 0.02;
  } else if (distance <= 2500) {
    return 25;
  } else {
    return 'cannot travel that far';
  }
}
console.log(calculatesFarePrice(34, 32)); // 0 (2 blocks = 528ft → only 128ft is charged)
console.log(calculatesFarePrice(34, 38)); // 13.12 (1056ft → 656ft * 0.02)
console.log(calculatesFarePrice(34, 60)); // 25 (Flat fare)
console.log(calculatesFarePrice(34, 100)); // 'cannot travel that far'

