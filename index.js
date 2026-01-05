const userInput = prompt ("What flavor(s) would you like: Vanilla, Strawberry, Coffee", "Vanilla, Vanilla, Vanilla, Strawberry, Coffee, Coffee");

const flavorChoices = userInput.split (",");
console.table(flavorChoices);

// this ^^^ function is for the flavors separated to be used as data

// const flavorOption = userInput.split (",")
console.log (flavorChoices)

function count(arr) {
  const flavorMap = {};

  for (let i = 0; i < arr.length; i++) {
    const flavor = arr[i].trim();

    if (flavor in flavorMap) {
      flavorMap[flavor] += 1;
    } else {
      flavorMap[flavor] = 1;
    }
  }

  return flavorMap;
} 
