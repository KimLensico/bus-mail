//  - - - - - - - LAB 11 BEGINS HERE

'use strict'

// keep track of which images have been displayed so none of them are shown on the next refresh
Item.allItems = []; // Bussmall is going to be the name of a constructor. When we make the constructor, it'll put whatever is in the prototype INTO the array
var displayHistory = []; // keeps clicked history of the last displayed images in the last round

// the following gives access to the <img> in index.html 
var imgContainerID = document.getElementById('imgcontainer');
var leftID = document.getElementById('left');
var centerID = document.getElementById('center');
var rightID = document.getElementById('right');

// determines what value we want to put into each of the three images
var leftImg = null; // "null" will read  when it first reads the page 
var centerImg = null;
var rightImg = null;

// counts votes
var voteCount = 0; // adds up votes
var maxRounds = 25; // total number of voting rounds 

// make constructor to create objects for all the images
// times clicked on
// times viewed
// gives name, source
function Item(name, source) {
    //constructor accepts name and source ONLY
    //has four properties, but only specifies what the first two have to be displayed
    this.name = name;
    this.source = source;
    this.viewed = 0; // starts with 0 bc never viewed 
    this.clicked = 0; // never been clicked on
    Item.allItems.push(this) // spits out an object with four properties and pushes them into the entire instance of this.[EVERYTHING]
}

// underneath is all the bus items for the images that are randomly selected 
new Item('bag', './img/bag.jpg'); // creating a new busmall item with those specific parameters from your BusMall Constructor 
new Item('banana', './img/banana.jpg');
new Item('bathroom', './img/bathroom.jpg');
new Item('boots', './img/boots.jpg');
new Item('breakfast', './img/breakfast.jpg');
new Item('bubblegum', './img/bubblegum.jpg');
new Item('chair.jpg', './img/chair.jpg');
new Item('cthulu', './img/cthulhu.jpg');
new Item('dog-duck', './img/dog-duck.jpg')
new Item('dragon', './img/dragon.jpg');
new Item('pen', './img/pen.jpg');
new Item('pet-sweep', './img/pet-sweep.jpg');
new Item('scissors', './img/scissors.jpg')
new Item('shark', './img/shark.jpg');
new Item('sweep', './img/sweep.png');
new Item('tauntaun', './img/tauntaun.jpg');
new Item('unicorn', './img/unicorn.jpg');
new Item('usb', './img/usb.gif');
new Item('water-can', './img/water-can.jpg');
new Item('wine-glass', './img/wine-glass.jpg')

// creating a random item function to randomly generate the three images
function randomBusMallItem() { // not uppercase R bc we are not constructing anything
    //random number?
    //calc value between min and max
    var random = Math.floor(Math.random() * (Item.allItems.length)); // using math. random to generate a random number, and multiply bus mall times the amount of objects (the BusMallItems') in the array
    return random;
}

function renderItems() {

    var renderItem = [leftID.src, centerID.src, rightID.src]; //RENDERING THE SOURCE OF THE ITEMS
    var tempItems = []; // CREATES THE ARRAY FOR THE OF THE ITEMS THAT ARE TO BE SHOWN

    var generatedItem = Item.allItems[randomBusMallItem()].image;

    while (!renderItem.includes[generatedItem] && tempItems.length < 3) { // only allows up to three images to be shown in from the array
        generatedItem = Item.allItems[randomBusMallItem()].image;
        tempItems.push(generatedItem);
    }
    renderItems = tempItems; // eventually this will fill all our images

    // This code just makes sure the images are rendered 
    leftID.src = Item.allItems[randomBusMallItem()].source; // the [html] 'leftID src' is located at [#]; it is 'source on the right because we're grabbing the source from the constructor. we are inside 'leftID', while we're inside of it, we're telling it what it is equal to  
    centerID.src = Item.allItems[randomBusMallItem()].source; // the .source allows us to touch the src value. we're going inside our array and are touching the 'source' source of fthe array
    rightID.src = Item.allItems[randomBusMallItem()].source;
    // we are looping through the array to get the random images
}

var usedIDs = [];
var usedimg = 0;
if (usedIDs.length != Item.allItems.length) {
    do { // <= for when no image has been used yet
        usedimg = Math.floor(Math.random() * randomBusMallItem.length);
    } while (usedIDs.indexOf(usedimg) > -1);
    // below, would be a new randomized image id that has not been used
    usedIDs.push(usedimg);
    // do something with the new id
} else {
    // all images have been used
}

console.log(randomBusMallItem()); // console is firing the function. we get back whatever is returned in the array

// // keep track of votes per image
function handleVote(event) {

    var clickedItems = event.target
    var itemId = clickedItems.src;

    for (var i = 0; i < Item.allItems.length; i++) { // vote count is zero and encompasses all items to vote on within the BM array
        if (itemId.includes(Item[i].source)) {
            Item.allItems[i].clicks += 1;
            console.log(Item.allItems[i].name, Item.allItems[i].clicks);
        }
    }

    renderItems();
}

leftID.addEventListener('click', handleVote);
centerID.addEventListener('click', handleVote);
rightID.addEventListener('click', handleVote);

renderItems();


//  - - - - LAB 12 BEGINS HERE - - - - 

// going into the chart element and selecting what goes inside of it 
var voters = document.getElementById('voters').getContext('2d');
new Chart(voters).line(voteCount);