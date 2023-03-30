function distanceFromHqInBlocks(someValue){
    // if (someValue > 42){
        // return someValue - 42
    // }
    // else {
    //     return 42 - someValue
    // }
    return Math.abs(someValue - 42)
}
function distanceFromHqInFeet(someValue){
    let blocks = distanceFromHqInBlocks(someValue)
    return blocks * 264
}
function distanceTravelledInFeet(start, destination){
    let feet = Math.abs(start - destination) * 264
    return feet
}
  
function distanceTravelledInFeet(start, end) {
    return Math.abs((start - end) * 264);
  }
  
  function calculatesFarePrice(start, end) {
    const distanceTravelled = distanceTravelledInFeet(start, end); //changed from distanceFromHqInFeet() to distanceTravelledInFeet()
    if (distanceTravelled < 400) {
      return 0;
    } else if (distanceTravelled >= 400 && distanceTravelled < 2000){
        let newDistance= distanceTravelled - 400
      return newDistance * .02;
    }
    else if ((distanceTravelled >= 2000) && (distanceTravelled <= 2500)) {
      return 25;
    }
    else {
      return 'cannot travel that far';
    }
  }