// Course 1: Learn JavaScript

// Hello World
console.log("Hello World")

// Math
console.log(11+3.5)
console.log(2025-1969 + " years")
console.log(Math.ceil(65/240))
console.log(Math.floor(0.2708*100))
console.log(Number.isInteger(27))

// Variables
var favoriteFood = ("pizza".toUpperCase());
console.log(favoriteFood + " is my favorite food.")

let meal = 'Enchiladas';
console.log(meal);
meal = 'Burrito';
console.log(meal);

let price;
console.log(price);
price = 350;
console.log(price);

const entree = "Enchiladas"
console.log(entree)

// Math with Variables
let levelUp = 10;
levelUp += 5
let powerLevel = 9001;
powerLevel -= 100
let multiplyMe = 32;
multiplyMe *= 11
let quarterMe = 1152;
quarterMe /= 4

console.log('The value of levelUp:', levelUp);
console.log('The value of powerLevel:', powerLevel);
console.log('The value of multiplyMe:', multiplyMe);
console.log('The value of quarterMe:', quarterMe);

// Increment and Decrement
let gainedDollar = 3;
gainedDollar++;
console.log(gainedDollar)

let lostDollar = 50;
lostDollar--;
console.log(lostDollar)

// String Concatenation with Variables
const favoriteAnimal = "sigma"
console.log("My favorite animal: " + favoriteAnimal)

// String Interpolation
const myName = 'Ayaan'
const myCity = 'Ayaan City'
console.log(`My name is ${myName}. My favorite city is ${myCity}`)

// TypeOf operator
const unknown1 = 'foo';
console.log(typeof unknown1); // Output: string

const unknown2 = 10;
console.log(typeof unknown2); // Output: number

const unknown3 = true;
console.log(typeof unknown3); // Output: boolean

//Project 1: Kelvin Weather
//Setting Kelvin value to 293
const kelvin = 0;
// Defining Celsius from Kelvin
let celsius = (kelvin - 273);
// Defining Farenheit from Celsius
// Rounding it down or up by less than 1
let farenheit = (Math.floor(celsius * (9/5) + 32))
console.log("The temperature is " + farenheit + " degrees Farenheit")
// Defining Newton from Celsius
let newton = (celsius * (33/100))
console.log("The temperature is " + newton + " degrees Newton")

// Project 2: Dog Years
// Defining 'myAge'
const myAge = (11)
// Defining 'earlyYears'
let earlyYears = (2);
earlyYears *= 10.5
// Defining 'laterYears'
let laterYears = (myAge - 2);
laterYears *= 4
// Testing
console.log(earlyYears)
console.log(laterYears)
// Defining 'myAgeInDogYears'
let myAgeInDogYears = (earlyYears + laterYears);
// Defining 'myName1'
const myName1 = ("Ayaan".toLowerCase())
// Answer
console.log(`My name is ${myName1}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`)

// Conditional Statements
let sale = true;
sale = false

if (sale) {
    console.log("Time to buy!")
}  else {
    console.log('Time to wait for a sale.')
}

// Conditional Statements with comparision
let hungerLevel = (7);

if (hungerLevel > 7) {
    console.log("Time to eat!")
}  else {
    console.log("We can eat later!")
}

// Conditional Statements with other operators (&&, ||, !)
let mood = 'sleepy';
let tirednessLevel = 6;

if (mood === 'sleepy' && tirednessLevel > 8 ) {
    console.log('time to sleep')
}  else {
    console.log('not bedtime yet')
}

if (mood === 'sleepy' || tirednessLevel > 5 ) {
    console.log('time to sleep' + ' it is 9:30 PM')
} else {
    console.log('still not bedtime yet... ')
}

// Truthy and Falsy
let wordCount = 1;

if (wordCount) {
    console.log("Great! You've started your work!");
} else {
    console.log('Better get to work!');
}


let favoritePhrase = '';

if (favoritePhrase) {
    console.log("This string doesn't seem to be empty.");
} else {
    console.log('This string is definitely empty.');
}

// Short-Circuit Evaluvation
let tool = 'marker';

let writingUtensil = tool || 'pen';
console.log(`The ${writingUtensil} is mightier than the sword.`);

// Ternary Operators
let isLocked = false;
isLocked ? console.log('You will need a key to open the door.') : console.log('You will not need a key to open the door.')

let isCorrect = true;
isCorrect ? console.log('Correct!') : console.log('Incorrect!')

// Else If Statements
let stopLight = 'yellow';

if (stopLight === 'red') {
    console.log('Stop!');
} else if (stopLight === 'yellow') {
    console.log('Slow down.');
} else if (stopLight === 'green') {
    console.log('Go!');
} else {
    console.log('Caution, unknown!');
}

let season = 'summer';

if (season === 'spring') {
    console.log('It\'s spring! The trees are budding!');
} else if (season === 'winter') {
    console.log('It\'s winter! Everything is covered in snow.')
} else if (season === 'fall') {
    console.log('It\'s fall! Leaves are falling!')
} else if (season === 'summer') {
    console.log('It\'s sunny and warm because it\'s summer!')
} else {
    console.log('Invalid season.');
}

// Switch Statements
let groceryItem = 'papaya';

switch (groceryItem) {
    case 'tomato':
        console.log('Tomatoes are $0.49');
        break;
    case 'lime':
        console.log('Limes are $1.49');
        break;
    case 'papaya':
        console.log('Papayas are $1.29');
        break;
    default:
        console.log('Invalid item');
        break;
}

let athleteFinalPosition  = 'first place';
switch (athleteFinalPosition) {
    case 'first place' :
        console.log("You get the gold medal!");
        break;
    case 'second place' :
        console.log("You get the silver medal!")
        break;
    case 'third place':
        console.log("You get the bronze medal!")
        break;
    default:
        console.log("No medal awarded.")
        break;
}

// Project 3: Interactive Quiz for Browser
function format(n) {
    return n.trim().toLowerCase()
}

function prompt(question) { // Only for node.js enviornment
    return question
}

function alert(result) { // Only for node.js enviornment
    console.log(result)
}

function deityQuiz() {
    const diversion1 = format(prompt("Established or Risk?"))
    if (diversion1 !== "established" && diversion1 !== "risk") {
        alert("Invalid result")
    }
    else if (diversion1 === "established") {
        const diversion2 = format(prompt("Peace or Power?"))
        if (diversion2 !== "peace" && diversion2 !== "power") {
            alert("Invalid result")
        }
        else if (diversion2 === "power") {
            alert("Your result is Shiva.")
        }
        else {
            const diversion3 = format(prompt("Preserve or Create?"))
            if (diversion3 !== "preserve" && diversion3 !== "create") {
                alert("Invalid result")
            }
            else if (diversion3 === "preserve") {
                alert("Your result is Vishnu.")
            }
            else {
                alert("Your result is Bhrama.")
            }
        }
    }
    else {
        const diversion4 = format(prompt("Moon, Death, or Sun?"))
        if (diversion4 !== "moon" && diversion4 !== "death" && diversion4 !== "sun") {
            alert("Invalid result")
        }
        else if (diversion4 === "death") {
            alert("Your result is Yamaraja.")
        }
        else if (diversion4 === "sun") {
            const diversion5 = format(prompt("Mixed or Pure Sun?"))
            if (diversion5 !== "mixed" && diversion5 !== "pure sun") {
                alert("Invalid result")
            }
            else if (diversion5 === "pure sun") {
                alert("Your result is Surya.")
            }
            else {
                const diversion6 = format(prompt("Wind, Water, or Fire?"))
                if (diversion6 !== "wind" && diversion6 !== "water" && diversion6 !== "fire") {
                    alert("Invalid result")
                }
                else if (diversion6 === "wind") {
                    alert("Your result is Vayu.")
                }
                else if (diversion6 === "water") {
                    alert("Your result is Varuna.")
                }
                else {
                    alert("Your result is Agni.")
                }
            }
        }
        else {
            diversion7 = format(prompt("Mixed or Pure Moon?"))
            if (diversion7 !== "mixed" && diversion7 !== "pure moon") {
                alert("Invalid result")
            }
            else if (diversion7 === "pure moon") {
                alert("Your result is Chandra.")
            }
            else {
                diversion8 = format(prompt("Karma or King?"))
                if (diversion8 !== "karma" && diversion8 !== "king") {
                    alert("Invalid result")
                }
                else if (diversion8 === "karma") {
                    alert("Your result is Shani.")
                }
                else {
                    alert("Your result is Indra.")
                }
            }
        }
    }
}

deityQuiz()

// Functions
function getReminder() {
    console.log("Water the plants.")
}
function greetInSpanish() {
    console.log("Buenas tardes.")
}

// Interactive Functions
function checkInteger() {
    let userInput = prompt("Give an Integer!")
    let number = Number(userInput)
    let isInteger = (Number.isInteger(number))
    isInteger ? alert("This is indeed an integer!") : alert("This is not an integer!")
}

function allUpperCase() {
    let originalCase = prompt("Type anything...")
    alert(originalCase.toUpperCase())
}

function convertToDogYears() {
    let userAge = prompt("Enter a human age!")
    if (userAge >= 2) {
        let earlyYears = (2);
        earlyYears *= 10.5
        let laterYears = (userAge - 2);
        laterYears *= 4
        let userAgeInDogYears = (earlyYears + laterYears);
        alert(`Your age in dog years is ${userAgeInDogYears}`)
    } else{
        let userAgeInDogYears = (userAge*10.5)
        alert(`Your age in dog years is ${userAgeInDogYears}`)
    }
}

// Functions with Parameters and Arguments
function sayThanks(name) {
    console.log('Thank you for your purchase '+ name + '! We appreciate your business.');
}
sayThanks('Cole')

// Default Parameters
function greeting (name = 'stranger') {
    console.log(`Hello, ${name}!`)
}
greeting('Nick') // Output: Hello, Nick!
greeting() // Output: Hello, stranger!

function makeShoppingList(item1 = 'milk', item2 = 'bread', item3 = 'eggs'){
    console.log(`Remember to buy ${item1}`);
    console.log(`Remember to buy ${item2}`);
    console.log(`Remember to buy ${item3}`);
}
makeShoppingList()

// Functions with Return Values
function rectangleArea(width, height) {
    if (width < 0 || height < 0) {
        return 'You need positive integers to calculate area!';
    }
    return width * height;
}

console.log(rectangleArea(75,19))

// Helper Functions
function multiplyByNineFifths(number) {
    return number * (9/5);
};

function getFahrenheit(celsius) {
    return multiplyByNineFifths(celsius) + 32;
};

getFahrenheit(15); // Returns 59
console.log(getFahrenheit(15))

function monitorCount(rows, columns) {
    return rows * columns;
}

function costOfMonitors(rows, columns){
    return monitorCount(rows, columns) * 20
}

const totalCost = costOfMonitors(5,4);
console.log(totalCost)

// Function Expressions
const plantNeedsWater = function(day) {
    if (day === 'Wednesday') {
        return true
    } else{
        return false
    }
}

console.log(plantNeedsWater('Tuesday'))

//Arrow Functions
const plantNeedsWater0 = (day) => {
    if (day === "Wednesday") {
        return true;
    } else {
        return false;
    }
};
// Concise Arrow Functions
const plantNeedsWater1 = day => day === 'Wednesday' ? true : false;

// Project 4: Factorial Function
function factorial(n) {
    if (n <= 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

function interactiveFactorial() {
    let factorialNumber = prompt("Enter an integer: ")
    let number1 = Number(factorialNumber)
    let isInteger = (Number.isInteger(number1))
    isInteger ? alert(factorial(number1)) : alert("This is not an integer!")
}

// Blocks and Scope
const city = ('New York City')

function logCitySkyline() {
    let skyscraper = 'Empire State Building'
    return 'The stars over the ' + skyscraper + ' in ' + city;
}

console.log(logCitySkyline())

// Global Scope
const satellite = 'The Moon';
const galaxy = 'The Milky Way';
const stars = 'North Star';
function callMyNightSky() {
    return 'Night Sky: ' + satellite + ', ' + stars + ', and ' + galaxy;
}
console.log(callMyNightSky())

// Block Scope
function logVisibleLightWaves() {
    const lightWaves = ('Moonlight')
    console.log(lightWaves)
}
logVisibleLightWaves()

// Scope Pollution
const satellite1 = 'The Moon';
const galaxy1 = 'The Milky Way';
let stars1 = 'North Star';

const callMyNightSky1 = () => {
    stars1 = 'Sirius';
    return 'Night Sky: ' + satellite1 + ', ' + stars1 + ', ' + galaxy1;
};

console.log(callMyNightSky());
console.log(stars)

// Practice Good Scoping
const logVisibleLightWaves1 = () => {
    let lightWaves = 'Moonlight';
    let region = 'The Arctic';
    // Add if statement here:
    if (region === 'The Arctic') {
        let lightWaves = ('Northern Lights')
        console.log(lightWaves)
    }
    console.log(lightWaves);
};

logVisibleLightWaves1();

// Arrays
let newYearsResolutions = ['Keep a journal', 'Take a falconry class', 'Learn to juggle'];
console.log(newYearsResolutions);

const hobbies = ['hi', 'hello', 'bye']
console.log(hobbies)

// Accessing Array Elements
const famousSayings = ['Fortune favors the brave.', 'A joke is a very serious thing.', 'Where there is love there is life.'];

let listItem = famousSayings[0]
console.log(listItem)
console.log(famousSayings[2])
console.log(famousSayings[3])

// Updating Array Elements
let groceryList = ['bread', 'tomatoes', 'milk'];
groceryList[1] = 'avocados';
console.log(groceryList);

// Arrays with let and const
let condiments = ['Ketchup', 'Mustard', 'Soy Sauce', 'Sriracha'];
condiments[0] = 'Mayo'
condiments = ['Mayo']
console.log(condiments)

const utensils = ['Fork', 'Knife', 'Chopsticks', 'Spork'];
utensils[3] = 'Spoon'
console.log(utensils)

// The .length Property
const objectives = ['Learn a new language', 'Read 52 books', 'Run a marathon'];
console.log(objectives.length)

// The .push() Method
const chores = ['wash dishes', 'do laundry', 'take out trash'];
chores.push('Ayaan','is GOATed')
console.log(chores)

// The .pop() Method
const chores1 = ['wash dishes', 'do laundry', 'take out trash', 'cook dinner', 'mop floor'];
chores1.pop();
console.log(chores1);

// More Array Methods
const groceryList1 = ['orange juice', 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains'];

groceryList1.shift();
console.log(groceryList1);

groceryList1.unshift('popcorn');
console.log(groceryList1);
console.log(groceryList1.slice(1, 4));
console.log(groceryList1);

const pastaIndex = groceryList1.indexOf('pasta');
console.log(pastaIndex);

// Arrays and Functions
const concept = ['arrays', 'can', 'be', 'mutated'];

function changeArr(arr) {
    arr[3] = 'MUTATED';
}
changeArr(concept);
console.log(concept)

function removeElement(newArr) {
    newArr.pop();
}
removeElement(concept)
console.log(concept)

// Nested Arrays
const nestedArr = [[1], [2, 3]];
console.log(nestedArr[1]); // Output: [2, 3]
console.log(nestedArr[1][0]); // Output: 2

const numberClusters = [[1, 2], [3, 4], [5, 6]];
const target = numberClusters[2][1]
console.log(target)

// Loops
// Repeating Tasks Manually
let vacationSpots = ['India', 'USA', 'Tridev'];
console.log(vacationSpots[0])
console.log(vacationSpots[1])
console.log(vacationSpots[2])

// For Loops
for (let counter = 5; counter < 11; counter++) {
    console.log(counter)
}

// Looping in Reverse
for (let counter = 3; counter > -1; counter--){
    console.log(counter);
}

// Looping through Arrays
const vacationSpots1 = ['Bali', 'Paris', 'Tulum'];
for (let i = 0; i < vacationSpots1.length; i++) {
    console.log('I would love to visit ' + vacationSpots1[i])
}

// Nested Loops
const arrayA = [6, 19, 20];
const arrayB = [19, 81, 2];
for (let i = 0; i < arrayA.length; i++) {
    for (let j = 0; j < arrayB.length; j++) {
        if (arrayA[i] === arrayB[j]) {
            console.log('Both arrays have the number: ' + arrayB[j]);
        }
    }
}

const bobsFollowers = ['Ayaan', 'Arihant', 'Araika', 'Nishka']
const tinasFollowers = ['Araika', 'Ahana', 'Nishka']
const mutualFollowers = []

for (let i = 0; i < bobsFollowers.length; i++) {
    for (let j = 0; j < tinasFollowers.length; j++) {
        if (bobsFollowers[i] === tinasFollowers[j]) {
            mutualFollowers.push(tinasFollowers[j]);
        }
    }
}

console.log(mutualFollowers)

// The While Loop
let counterTwo = 1;
while (counterTwo < 4) {
    console.log(counterTwo);
    counterTwo++;
}

const cards = ["diamond", "spade", "heart", "club"];

let currentCard;
while (currentCard !== "spade") {
    currentCard = cards[Math.floor(Math.random() * 4)];
    console.log(currentCard)
}

// The Do...While Loop
let cupsOfSugarNeeded = 3;
let cupsAdded = 0;

do {
    cupsAdded++
    console.log(cupsAdded + ' cup was added')
} while (cupsAdded < cupsOfSugarNeeded);

// The Break Keyword
const rapperArray = ["Lil' Kim", "Jay-Z", "Notorious B.I.G.", "Tupac"];

for (let i = 0; i < rapperArray.length; i++) {
    console.log(rapperArray[i]);
    if (rapperArray[i] === 'Notorious B.I.G.') {
        break;
    }
}
console.log("And if you don't know, now you know.")

// Project 5: Triangle Pattern
for (let i = 1; i <= 5; i++) {
    let line = "";
    for (let j = 1; j <= i; j++) {
        line += "💥";
    }
    console.log(line);
}

// Functions as Data
function checkThatTwoPlusTwoEqualsFourAMillionTimes() {
    for(let i = 1; i <= 1000000; i++) {
        if ( (2 + 2) != 4) {
            console.log('Something has gone very wrong :( ');
        }
    }
};

const isTwoPlusTwo = checkThatTwoPlusTwoEqualsFourAMillionTimes;
isTwoPlusTwo()
console.log(isTwoPlusTwo.name)

// Functions as Parameters
const addTwo = num => {
    return num + 2;
}

const checkConsistentOutput = (func, val) => {
    const checkA = (val + 2);
    const checkB = func(val)
    if (checkA === checkB) {
        return func(val)
    } else {
        return ('inconsistent results')
    }
}

console.log(checkConsistentOutput(addTwo, 2));

// Introduction to Iterators
const artists = ['Picasso', 'Kahlo', 'Matisse', 'Utamaro'];
artists.forEach(function (artist) {
    console.log(artist + ' is one of my favorite artists.');
});

const numbers = [1, 2, 3, 4, 5];
const squareNumbers = numbers.map(number => {
    return number * number;
});
console.log(squareNumbers);

const things = ['desk', 'chair', 5, 'backpack', 3.14, 100];
const onlyNumbers = things.filter(thing => {
    return typeof thing === 'number';
});
console.log(onlyNumbers);

// The .forEach() Method
const cities = ['Orlando', 'Dubai', 'Edinburgh', 'Chennai', 'Accra', 'Denver', 'Eskisehir', 'San Fransisco']
cities.forEach(function(city) {
    console.log('I want to visit ' + city + '!')
})

const fruits = ['mango', 'papaya', 'pineapple', 'apple'];
fruits.forEach(function(fruit) {
    console.log('I want to eat a ' + fruit)
})

// The .map() method
let animals = ['Hen', 'elephant', 'llama', 'leopard', 'ostrich', 'Whale', 'octopus', 'rabbit', 'lion', 'dog'];

// Create the secretMessage array below
const secretMessage = animals.map(function(animal) {
    return animal[0]
})
console.log(secretMessage.join(''));

const bigNumbers = [100, 200, 300, 400, 500];
const smallNumbers = bigNumbers.map(function(number) {
    return number / 100
})
console.log(smallNumbers)

// The .filter() Method
const randomNumbers = [375, 200, 3.14, 7, 13, 852];
const smallNumbers1 = randomNumbers.filter(function(number) {
    return number < 250
});
console.log(smallNumbers1)

const favoriteWords = ['nostalgia', 'hyperbole', 'fervent', 'esoteric', 'serene'];
const longFavoriteWords = favoriteWords.filter(function(word) {
    return word.length > 7
})
console.log(longFavoriteWords)

// The .findIndex() Method
const animals1 = ['hippo', 'tiger', 'lion', 'seal', 'cheetah', 'monkey', 'salamander', 'elephant'];

const foundAnimal = animals1.findIndex(function(animal) {
    return animal === "elephant"
    return animal
});

const startsWithS = animals1.findIndex(function(animal) {
    return animal[0] === 's' ? true : false
});

// The .reduce() Method
const newNumbers = [1, 3, 5, 7];
const newSum = newNumbers.reduce(function(accumulator, currentValue){
    console.log('The value of accumulator: ', accumulator);
    console.log('The value of currentValue: ', currentValue);
    return accumulator + currentValue
}, 10);
console.log(newSum)

// Iterator Documentation
const words1 = ['unique', 'uncanny', 'pique', 'oxymoron', 'guise'];

console.log(words1.some((word) => {
    return word.length < 6;
}));

const interestingWords = words1.filter (function(word) {
    return word.length > 5
})

console.log(interestingWords.every((word) => {return word.length > 5} ));

// Choose the right Iterator
const cities2 = ['Orlando', 'Dubai', 'Edinburgh', 'Chennai', 'Accra', 'Denver', 'Eskisehir', 'Medellin', 'Yokohama'];
const nums2 = [1, 50, 75, 200, 350, 525, 1000];

cities2.forEach(city => console.log('Have you visited ' + city + '?'));

const longCities = cities2.filter(city => city.length > 7);

const word = cities2.reduce((acc, currVal) => {
    return acc + currVal[0]
}, "C");
console.log(word)

const smallerNums = nums2.map(num => num - 5); // OR
nums2.every(num => num < 0);

// Project 6: Name Effect
const names3 = ['Ash', 'Yaksh', 'Al', 'Arine', 'Nate']
const names3_effect = names3.reduce(function(acc, curVal) {
    return acc + curVal[0]
}, "")
console.log(names3_effect)

const citiesEffect = ['Indiana City', 'New Dehli', 'Denver', 'Illinois', 'Alabama']
citiesEffect.forEach(function(city) {
    console.log(city[0])
});

// Creating Object Literals
let fasterShip = {
    'Fuel Type': 'Turbo Fuel',
    color: 'silver'
};

// Accessing Object Properties using Dot Notation
let spaceship = {
    homePlanet: 'Earth',
    color: 'silver',
    'Fuel Type': 'Turbo Fuel',
    numCrew: 5,
    flightPath: ['Venus', 'Mars', 'Saturn']
};

crewCount = spaceship.numCrew;
planetArray = spaceship.flightPath;
console.log(crewCount, planetArray);

// Accessing Object Properties using Bracket Notation
spaceship = {
    'Fuel Type' : 'Turbo Fuel',
    'Active Mission' : true,
    homePlanet : 'Earth',
    numCrew: 5
};

let propName =  'Active Mission';
let isActive = spaceship['Active Mission']
console.log(propName + ": " + isActive)

// Property Assignment
spaceship = {
    'Fuel Type' : 'Turbo Fuel',
    homePlanet : 'Earth',
    color: 'silver',
    'Secret Mission' : 'Discover life outside of Earth.'
};

spaceship.color = 'glorious gold'
spaceship.numEngines = 9
delete spaceship['Secret Mission']

// Object Methods
let retreatMessage = 'We no longer wish to conquer your planet. It is full of dogs, which we do not care for.';

const alienShip = {
    invade () {
        console.log('Hello! We have come to dominate your planet. Instead of Earth, it shall be called New Xaculon.')
    },

    retreat() {
        console.log(retreatMessage)
    },

    takeOff() {
        console.log('Spim... Borp... Glix... Blastoff!')
    }
};

alienShip.retreat()
alienShip.takeOff()

// Nested Objects
spaceship = {
    passengers: [{name: 'Space Dog'}],
    telescope: {
        yearBuilt: 2018,
        model: "91031-XLT",
        focalLength: 2032
    },
    crew: {
        captain: {
            name: 'Sandra',
            degree: 'Computer Engineering',
            encourageTeam() { console.log('We got this!') },
            'favorite foods': ['cookies', 'cakes', 'candy', 'spinach'] }
    },
    engine: {
        model: "Nimbus2000"
    },
    nanoelectronics: {
        computer: {
            terabytes: 100,
            monitors: "HD"
        },
        'back-up': {
            battery: "Lithium",
            terabytes: 50
        }
    }
};

let capFave = spaceship.crew.captain['favorite foods'][0];
let firstPassenger = spaceship.passengers[0];
console.log(capFave, firstPassenger)

// Pass by Reference
spaceship = {
    'Fuel Type' : 'Turbo Fuel',
    homePlanet : 'Earth'
};

let greenEnergy = function(obj) {
    obj['Fuel Type'] = 'avocado oil'
};

let remotelyDisable = function(obj) {
    obj.disabled = true
};

greenEnergy(spaceship);
remotelyDisable(spaceship);
console.log(spaceship);

// Looping thorugh Objects
spaceship = {
    crew: {
        captain: {
            name: 'Lily',
            degree: 'Computer Engineering',
            cheerTeam() { console.log('You got this!') }
        },
        'chief officer': {
            name: 'Dan',
            degree: 'Aerospace Engineering',
            agree() { console.log('I agree, captain!') }
        },
        medic: {
            name: 'Clementine',
            degree: 'Physics',
            announce() { console.log(`Jets on!`) } },
        translator: {
            name: 'Shauna',
            degree: 'Conservation Science',
            powerFuel() { console.log('The tank is full!') }
        }
    }
};

for (let crewMember in spaceship.crew) {
    console.log(`${crewMember}: ${spaceship.crew[crewMember].name}`)
};

for (let crewMember in spaceship.crew) {
    console.log(`${spaceship.crew[crewMember].name}: ${spaceship.crew[crewMember].degree}`)
};

// Project 7: Detailed Object
const india = {
    type : 'country',
    name : 'India',
    capital : 'New Delhi',
    states : {
        Haryana : {
            capital : 'Chandigarh',
            Rulhanias : {
                Ayaan : {
                    birthplace : 'Bhiwani',
                    age : 11,
                    codingLanguage : 'JavaScript',
                },
                Monika : {
                    gender : 'woman',
                    birthplace : 'Narnaul',
                    decription : "Ayaan's mom"
                },
                Manjeet : {
                    gender : 'male',
                    birthplace : 'Bhiwani',
                    description : "Ayaan's dad",
                },
            },
        },
        Maharashtra : {
            capital : 'Mumbai',
            morestuff : null
        },
        Punjab : {
            capital : 'Chandigarh'
        },
        Rajasthan : {
            capital : 'Jaipur'
        },
        uttarPradesh : {
            capital : 'Lucknow'
        },
        'Many More' : {
            capital : 'undefined'
        },
    },
    getInfo() {
        console.log(india.states)
    }
};

console.log("Ayaan codes in " + india.states.Haryana.Rulhanias.Ayaan.codingLanguage);
console.log("He was born in " + india.states.Haryana.Rulhanias.Ayaan.birthplace);
console.log("Manjeet is " + india.states.Haryana.Rulhanias.Manjeet.description);
console.log("Monika is " + india.states.Haryana.Rulhanias.Monika.description);
console.log("The status of Mumbai having a family is " + india.states.Maharashtra.morestuff);
console.log("The capital of Rajasthan is " + india.states.Rajasthan.capital);
console.log("The state called " + india.states['Many More'] + "'s capital is " + india.states['Many More'.capital])
india.getInfo()

// Advanced Objects Introduction
const robot = {
    model: 'B-4MI',
    mobile: true,
    greeting() {
        console.log(`I'm model ${this.model}, how may I be of service?`);
    }
}

const massProdRobot = (model, mobile) => {
    return {
        model,
        mobile,
        greeting() {
            console.log(`I'm model ${this.model}, how may I be of service?`);
        }
    }
}

const shinyNewRobot = massProdRobot('TrayHax', true)

const chargingStation = {
    _name: 'Electrons-R-Us',
    _robotCapacity: 120,
    _active: true,
    _chargingRooms: ['Low N Slow', 'Middle of the Road', 'In and Output'],

    set robotCapacity(newCapacity) {
        if (typeof newCapacity === 'number') {
            this._robotCapacity = newCapacity;
        } else {
            console.log(`Change ${newCapacity} to a number.`)
        }
    },
    get robotCapacity() {
        return this._robotCapacity;
    }
}

// The this Keyword
const robot1 = {
    model: '1E78V2',
    energyLevel: 100,
    provideInfo() {
        return `I am ${this.model} and my current energy level is ${this.energyLevel}.`
    }
};

console.log(robot1.provideInfo());

// Functions and this
const robot2 = {
    energyLevel: 100,
    checkEnergy: function() {
        console.log(`Energy is currently at ${this.energyLevel}%.`)
    }
}

robot2.checkEnergy();

// Privacy
const robot3 = {
    _energyLevel: 'high',
    recharge() {
        this._energyLevel += 30
        console.log(`Recharged! Energy is currently at ${this._energyLevel}%.`)
    }
};

robot3.recharge()

// Getters
const person = {
    _firstName: 'John',
    _lastName: 'Doe',
    get fullName() {
        if (this._firstName && this._lastName){
            return `${this._firstName} ${this._lastName}`;
        } else {
            return 'Missing a first name or a last name.';
        }
    }
}

console.log(person.fullName);

const robot4 = {
    _model: '1E78V2',
    _energyLevel: 100,
    get energyLevel() {
        if (typeof(this._energyLevel) === 'number') {
            return ('My current energy level is ' + this._energyLevel)
        }
        else {
            return 'System malfunction: cannot retrieve energy level'
        }
    }
};

console.log(robot4.energyLevel)

// Setters
const robot5 = {
    _model: "1E78V2",
    _energyLevel: 100,
    _numOfSensors: 15,
    get numOfSensors() {
        if (typeof this._numOfSensors === "number") {
            return this._numOfSensors;
        } else {
            return "Sensors are currently down.";
        }
    },
    set numOfSensors(num) {
        if (typeof num === "number" && num >= 0) {
            this._numOfSensors = num;
        } else {
            console.log('Pass in a number that is greater than or equal to 0')
        }
    },
};

robot5.numOfSensors = 100;
console.log(robot5.numOfSensors)

// Factory Functions
const monsterFactory = (name, age, energySource, catchPhrase) => {
    return {
        name: name,
        age: age,
        energySource: energySource,
        scare() {
            console.log(catchPhrase);
        }
    }
};

const ghost = monsterFactory('Ghouly', 251, 'ectoplasm', 'BOO!');
ghost.scare();
console.log(ghost.name, ghost.age, ghost.energySource);

const robotFactory = function (model, mobile) {
    return {
        model: model,
        mobile: mobile,
        beep() {
            console.log("Beep Boop");
        },
    };
};

const tinCan = robotFactory('P-500', true);
tinCan.beep();
console.log(tinCan.model, tinCan.mobile)

// Property Value Shorthand
const robotFactory1 = (model, mobile) => {
    return {
        model,
        mobile,
        beep() {
            console.log('Beep Boop');
        }
    }
}

const newRobot = robotFactory1('P-501', false)
console.log(newRobot.model)
console.log(newRobot.mobile)

// Destructured Assignment
const robot7 = {
    model: "1E78V2",
    energyLevel: 100,
    functionality: {
        beep() {
            console.log("Beep Boop");
        },
        fireLaser() {
            console.log("Pew Pew");
        },
    },
};

const { functionality } = robot7;
functionality.beep()

// Built-in Object Methods
const robot6 = {
    model: 'SAL-1000',
    mobile: true,
    sentient: false,
    armor: 'Steel-plated',
    energyLevel: 75
};

const robotKeys = Object.keys(robot6);
console.log(robotKeys);

const robotEntries2 = Object.entries(robot6)
console.log(robotEntries2);

const newRobot2 = Object.assign({laserBlaster: true, voiceRecognition: true}, robot6);
console.log(newRobot2);

// Course 2: Intermediate JavaScript

// Introduction to Classes
class Dog {
    constructor(name) {
        this._name = name;
        this._behavior = 0;
    }

    get name() {
        return this._name;
    }
    get behavior() {
        return this._behavior;
    }

    incrementBehavior() {
        this._behavior ++;
    }
}

const halley = new Dog('Halley');
console.log(halley.name);
console.log(halley.behavior);
halley.incrementBehavior();
console.log(halley.name);
console.log(halley.behavior);

// Constructor
class Surgeon {
    constructor (name, department) {
        this.name = name
        this.department = department
    }
};

// Instance
class Surgeon1 {
    constructor(name, department) {
        this.name = name;
        this.department = department;
    };
};

const surgeonRomero1 = new Surgeon1('Francisco Romero', 'Cardiovascular');
const surgeonJackson1 = new Surgeon1('Ruth Jackson', 'Orthopedics')
console.log(surgeonRomero1.name, surgeonRomero1.department)
console.log(surgeonJackson1.name, surgeonJackson1.department)

// Methods
class Surgeon2 {
    constructor(name, department) {
        this._name = name;
        this._department = department;
        this._remainingVacationDays = 20;
    }

    get name() {
        return this._name;
    }

    get department() {
        return this._department;
    }

    get remainingVacationDays() {
        return this._remainingVacationDays;
    }

    takeVacationDays(daysOff) {
        this._remainingVacationDays -= daysOff;
    }
}

const surgeonRomero2 = new Surgeon2('Francisco Romero', 'Cardiovascular');
const surgeonJackson2 = new Surgeon2('Ruth Jackson', 'Orthopedics');

// Method Calls
class Surgeon3 {
    constructor(name, department) {
        this._name = name;
        this._department = department;
        this._remainingVacationDays = 20;
    }

    get name() {
        return this._name;
    }

    get department() {
        return this._department;
    }

    get remainingVacationDays() {
        return this._remainingVacationDays;
    }

    takeVacationDays(daysOff) {
        this._remainingVacationDays -= daysOff;
    }
}

const surgeonRomero3 = new Surgeon3('Francisco Romero', 'Cardiovascular');
const surgeonJackson3 = new Surgeon3('Ruth Jackson', 'Orthopedics');
console.log(surgeonRomero3.name)
console.log(surgeonRomero3.takeVacationDays(3))
console.log(surgeonRomero3.remainingVacationDays)

// Inheritance I
class HospitalEmployee {
    constructor(name) {
        this._name = name;
        this._remainingVacationDays = 20;
    }

    get name() {
        return this._name;
    }

    get remainingVacationDays() {
        return this._remainingVacationDays;
    }

    takeVacationDays(daysOff) {
        this._remainingVacationDays -= daysOff;
    }
}

// Inheritance II
class Nurse extends HospitalEmployee {
    constructor(name, certifications) {
        super(name);
        this._certifications = certifications;
    }
}

const nurseOlynyk = new Nurse('Olynyk', ['Trauma', 'Pediatrics']);

// Inheritance III
nurseOlynyk.takeVacationDays(5);
console.log(nurseOlynyk.remainingVacationDays);

// Inheritance IV
class SpecialNurse extends HospitalEmployee {
    constructor(name, certifications) {
        super(name);
        this._certifications = certifications;
    }
    get certifications() {
        return this._certifications;
    }
    addCertification(newCertification) {
        this._certifications.push(newCertification);
    }
}

const nurseOlynyk1 = new SpecialNurse('Olynyk', ['Trauma', 'Pediatrics']);
nurseOlynyk1.takeVacationDays(5);
nurseOlynyk1.addCertification('Genetics');
console.log(nurseOlynyk1.certifications)

// Static Methods
class StaticMethodTest {
    static generatePassword() {
        return Math.floor(Math.random() * 10000)
    }
}

// Project 8: Object-Oriented Class Diagram
class FamilyMember {
    constructor (name, age, height, ethnicity, residence) {
        this._name = name;
        this._age = age;
        this._height = height;
        this._ethnicity = ethnicity
        this._residence = residence;
    }

    get name() {
        return this._name;
    }
}

class Rulhania extends FamilyMember {
    constructor (name, age, height, gender) {
        super(name, age, height)
        this._gender = gender;
        this._ethnicity = 'Indian'
        this._residence = 'USA/India'
    }
}

const Rulhania1 = new Rulhania('Ayaan', 10, 5.8, 'male')
const Rulhania2 = new Rulhania('Advit', 4, 3.0, 'male')
const Rulhania3 = new Rulhania('Manjeet', 37, 6.0, 'male' )
const Rulhania4 = new Rulhania('Sanjeet', 34, 6.0, 'male' )
const Rulhania5 = new Rulhania('Monika', 30, 5.5, 'female' )
const Rulhania6 = new Rulhania('Dipika', 30, 5.5, 'female' )
const Rulhania7 = new Rulhania('Ompal', 80, 5.8, 'male' )
const Rulhania8 = new Rulhania('Maya', 76, 5.5, 'female' )

const allRulhanias = [Rulhania1, Rulhania2, Rulhania3, Rulhania4, Rulhania5, Rulhania6, Rulhania7, Rulhania8]

allRulhanias.forEach(function(person) {
    console.log(`${person._name} is ${person._age} years old and ${person._height} feet tall and is a ${person._gender} and is an ${person._ethnicity} by birth and now is a resident of ${person._residence}`);
});

// Constructing a Promise Object
const inventory = {
    sunglasses: 1900,
    pants: 1088,
    bags: 1344
};

const myExecutor = function(resolve, reject) {
    if (inventory.sunglasses > 0) {
        resolve('Sunglasses order processed.')
    }
    else {
        reject('That item is sold out.')
    }
}

function orderSunglasses() {
    return new Promise(myExecutor)
}

const orderPromise = orderSunglasses()
console.log(orderPromise)

// The Node setTimeout() Function
console.log("This is the first line of code in app.js.");

function usingSTO() {
    console.log("This message was delayed using setTimeout!");
}

setTimeout(usingSTO, 2000)

console.log("This is the last line of code in app.js.");

// Success and Failure Callback Functions
const inventory1 = {
    sunglasses: 1900,
    pants: 1088,
    bags: 1344
};

const checkInventory = (order) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let inStock = order.every(item => inventory[item[0]] >= item[1]);
            if (inStock) {
                resolve(`Thank you. Your order was successful.`);
            } else {
                reject(`We're sorry. Your order could not be completed because some items are sold out.`);
            }
        }, 1000);
    })
};

const order = [['sunglasses', 1], ['bags', 2]]; // Example order, modify as needed

function handleSuccess(resolvedValue) {
    console.log(resolvedValue);
}

function handleFailure(rejectionReason) {
    console.log(rejectionReason);
}

checkInventory(order)
    .then(handleSuccess, handleFailure);

// Using catch() with Promises
