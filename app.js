// LAB TO-DO LIST:
//  - ADD A CHART TO SHOW THE VOTES
//  - LIMIT THE VOTES WITH THE MAXROUND VARIABLE TO 25 VOTES


//  - - - - - - - LAB 11 BEGINS HERE

'use strict'

// keep track of which images have been displayed so none of them are shown on the next refresh
storeItem.allItems = []; // Bussmall is going to be the name of a constructor. When we make the constructor, it'll put whatever is in the prototype INTO the array
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
function storeItem(name, source) {
    //constructor accepts name and source ONLY
    //has four properties, but only specifies what the first two have to be displayed
    this.name = name;
    this.source = source;
    this.viewed = 0; // starts with 0 bc never viewed 
    this.clicked = 0; // never been clicked on
    storeItem.allItems.push(this) // spits out an object with four properties and pushes them into the entire instance of this.[EVERYTHING]
}

// underneath is all the bus items for the images that are randomly selected 
new storeItem('bag', './img/bag.jpg'); // creating a new busmall item with those specific parameters from your BusMall Constructor 
new storeItem('banana', './img/banana.jpg');
new storeItem('bathroom', './img/bathroom.jpg');
new storeItem('boots', './img/boots.jpg');
new storeItem('breakfast', './img/breakfast.jpg');
new storeItem('bubblegum', './img/bubblegum.jpg');
new storeItem('chair.jpg', './img/chair.jpg');
new storeItem('cthulu', './img/cthulhu.jpg');
new storeItem('dog-duck', './img/dog-duck.jpg')
new storeItem('dragon', './img/dragon.jpg');
new storeItem('pen', './img/pen.jpg');
new storeItem('pet-sweep', './img/pet-sweep.jpg');
new storeItem('scissors', './img/scissors.jpg')
new storeItem('shark', './img/shark.jpg');
new storeItem('sweep', './img/sweep.png');
new storeItem('tauntaun', './img/tauntaun.jpg');
new storeItem('unicorn', './img/unicorn.jpg');
new storeItem('usb', './img/usb.gif');
new storeItem('water-can', './img/water-can.jpg');
new storeItem('wine-glass', './img/wine-glass.jpg')

// creating a random item function to randomly generate the three images
function randomBusMallItem() { // not uppercase R bc we are not constructing anything
    //random number?
    //calc value between min and max
    var random = Math.floor(Math.random() * (storeItem.allItems.length)); // using math. random to generate a random number, and multiply bus mall times the amount of objects (the BusMallItems') in the array
    return random;
}

function renderItems() {

    // ================================================================================
    // this stuff just dooes the same thing to render the images randomly. it's just a different way of doing it :D

    // var renderItem = [leftID.src, centerID.src, rightID.src]; //RENDERING THE SOURCE OF THE ITEMS
    // var tempItems = []; // CREATES THE ARRAY FOR THE OF THE ITEMS THAT ARE TO BE SHOWN

    // var generatedItem = storeItem.allItems[randomBusMallItem()].image;

    // while (!renderItem.includes[generatedItem] && tempItems.length < 3) { // only allows up to three images to be shown in from the array
    //     generatedItem = storeItem.allItems[randomBusMallItem()].image;
    //     tempItems.push(generatedItem);
    // }
    // renderItems = tempItems; // eventually this will fill all our images
    // ================================================================================

    // 
    var leftPrev = leftImg;
    var centerPrev = centerImg;
    var rightPrev = rightImg;

    // generate the random mall items 
    // these functions won't allow repeats of the same item in the same rendered image set 
    leftImg = randomBusMallItem();
    while (leftImg === leftPrev || leftImg === centerPrev || leftImg === rightPrev)
        leftImg = randomBusMallItem();

    centerImg = randomBusMallItem();
    while (centerImg == leftImg || centerImg === leftPrev || centerImg === centerPrev || centerImg === rightPrev)
        centerImg = randomBusMallItem();

    rightImg = randomBusMallItem();
    while (rightImg == leftImg || rightImg == centerImg || rightImg === leftPrev || rightImg === centerPrev || rightImg === rightPrev)
        rightImg = randomBusMallItem();

    // This code just makes sure the images are rendered 
    // stores images from lines 86 - 88
    leftID.src = storeItem.allItems[leftImg].source; // the [html] 'leftID src' is located at [#]; it is 'source on the right because we're grabbing the source from the constructor. we are inside 'leftID', while we're inside of it, we're telling it what it is equal to  
    centerID.src = storeItem.allItems[centerImg].source; // the .source allows us to touch the src value. we're going inside our array and are touching the 'source' source of the array
    rightID.src = storeItem.allItems[rightImg].source;
    // we are looping through the array to get the random images

    //
    storeItem.allItems[leftImg].viewed++;
    storeItem.allItems[centerImg].viewed++;
    storeItem.allItems[rightImg].viewed++;
}




console.log(randomBusMallItem()); // console is firing the function. we get back whatever is returned in the array

// // keep track of votes per image and render images
function handleClick(event) {
    console.log(event.target.id); // console logs the targetted id of the image that has been clicked
    var click = event.target.src; // clicker targets the src of the image
    console.log(click);
    console.log(storeItem.allItems);

    // make an switch, a series of if-else's
    switch (event.target.id) {
        case 'left': storeItem.allItems[leftImg].clicked++;
            break;
        case 'center': storeItem.allItems[centerImg].clicked++;
            break;
        case 'right': storeItem.allItems[rightImg].clicked++;
            break;
    }

    maxRounds--;

    renderItems(); // putting the rendering item function inside the event listener to tie the click to the change of images

}

leftID.addEventListener('click', handleClick);
centerID.addEventListener('click', handleClick);
rightID.addEventListener('click', handleClick);

renderItems();


//  - - - - LAB 13 BEGINS HERE - - - - 

//  CREATE A LOCAL STORAGE FOR THE WEBSITE 


// interface Storage {
//     var foo = localStorage.getIte,('click');
// localStorage.setItem('click', handleClick)
// }

//  using javascript library to register event handlers

if (window.addEventListener) {
    window.addEventListener("storage", handle_storage, false);
} else {
    window.RTCDataChannelEvent("onstorage", handle_storage);
};

function handle_storage(e) {
    if (!e) {
        e = window.event;
    }
}