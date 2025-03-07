// Code your solution in this file!
// Function to calculate the number of blocks from Scuber HQ
function distanceFromHqInBlocks(someValue) {
    const hqLocation = 42; // Scuber HQ is at block 42
    return Math.abs(someValue - hqLocation);
}

// Function to calculate the number of feet from Scuber HQ
function distanceFromHqInFeet(someValue) {
    return distanceFromHqInBlocks(someValue) * 264; // 1 block = 264 feet
}

// Function to calculate the distance traveled in feet
function distanceTravelledInFeet(start, destination) {
    return Math.abs(destination - start) * 264;
}

// Function to calculate the fare price
function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination);

    if (distance <= 400) {
        return 0; // First 400 feet are free
    } else if (distance > 400 && distance <= 2000) {
        return (distance - 400) * 0.02; // 2 cents per foot after 400 feet
    } else if (distance > 2000 && distance <= 2500) {
        return 25; // Flat rate for distances over 2000 but under 2500 feet
    } else {
        return 'cannot travel that far'; // Distance over 2500 feet is not allowed
    }
}

// Testing the functions
console.log(distanceFromHqInBlocks(43)); // 1
console.log(distanceFromHqInFeet(50)); // 2112
console.log(distanceTravelledInFeet(34, 38)); // 1056
console.log(calculatesFarePrice(34, 32)); // 0.56
console.log(calculatesFarePrice(50, 58)); // 25
console.log(calculatesFarePrice(50, 80)); // 'cannot travel that far'
