function menuclick() { // Show the navigation bar buttons
    'use strict'; // Use strict mode
    var mainbuttonimage = document.getElementById('main-button-image'), menucontainer = document.getElementById('menu-container');

    mainbuttonimage.src = mainbuttonimage.src.match("./images/nav/home.png") ? "./images/nav/homeclose.png" : "./images/nav/home.png"; // If image is home.png then change to homeclose.png, else change to home.png. This is a ternary operator and reduces lines of code.
    mainbuttonimage.style.height = mainbuttonimage.src.match("./images/nav/home.png") ? "30px" : "20px"; // If image is home.png then set height to 30px, else set height to 20px.
    menucontainer.style.display = mainbuttonimage.src.match("./images/nav/home.png") ? "none" : "block"; // If image is home.png then set display to none, else set display to block.
}

function HoverValues(widthvalue, heightvalue, margintopvalue, bordervalue) { // Function to stop repeated code. This gets called multiple times so I am using parameters to change the values.
    'use strict'; // Use strict mode
    var div = document.getElementById('circle'); // Get the id of the circle which replaces the mouse

    div.style.transition = "all 0.1s ease"; // Set the transiton so any changes that are made will happen slowly
    div.style.width = widthvalue; // The next 4 values are the parameters used which change based on where it is called
    div.style.height = heightvalue;
    div.style.marginTop = margintopvalue;
    div.style.border = bordervalue;
    
    setTimeout(function() { // after 0.1 seconds remove transition. This is because it takes 0.1 seconds to transition and if I don't remove it then the movement of the cursor won't be as smooth
        div.style.transition = "none";
    }, 100);
}

function SetStyles() { // Function to set width and height to 40px as it is used a lot
    'use strict'; // Use strict mode
    var div = document.getElementById('circle'); // Get the circle element again
    
    div.style.width = "40px";
    div.style.height = "40px";
}

function SetHoverEffect(value) { // This is another function to stop repeating the code, but for the hover effects
    'use strict'; // Use strict mode
    var i = 0;
    for (i = 0; i < value.length; i++) { // For loop to loop round all the classes
        value[i].onmouseover = function() { // If the mouse is over
            HoverValues("20px", "20px", "10px", "1px solid white", "1px solid white"); // Call the hover values function and set the values
        }
        value[i].onmouseout = function() { // If i don't call this then the values will not go back to normal. This says if the mouse is out of the hover
            SetStyles(); // Call the function to set the generic width and height
        }
    }
}

window.onload = function() { // On document load
    var formclass = document.getElementsByClassName('form-class'),
    atag = document.getElementsByTagName('a'),
    buttontag = document.getElementsByTagName('button'),
    clickabletitle = document.getElementsByClassName('clickable-title'),
    x = document.getElementsByClassName('x'); // Collect all the neccessary elements;
    const ptag = document.getElementsByTagName('p');
    
    // Start of creating the circle that follows the cursor. I made my own cursor to give it my own style. I like the customisation and i think it works well
    var div = document.createElement("div"); // First we create the element
    div.id = "circle"; // Then give it an ID so we can customise it else where
    div.style.width = "40px";
    div.style.height = "40px"; // Set the width and height of the initial circle. 40px is a reasonable size
    div.style.background = "transparent"; // Set the background as transparent so we can see through it
    div.style.border = "1px solid white"; // Set the border of the circle so it is a just a border with no background
    div.style.borderRadius = "50%"; // Set the boroder radius so it is a pure circle
    div.style.position = "fixed"; // Set the position as absolute to tell it to ignore its relative positioning
    div.style.left = "50%";
    div.style.top = "50%";
    div.style.transform = "translate(-50%, -50%)"; // Make sure the circle is in the middle of the cursor
    div.style.pointerEvents = "none"; // allow mouse events to pass through
    div.style.display = "none"; // Display it as none. We display it as block on mouse move
    div.style.zIndex = "1000"; // Set the zindex as 1000 to make sure nothing else can overlap it
    
    document.body.appendChild(div); // append the div to body
    document.onmousemove = function(e) { // On mouse move on the document
        var parentOffset = div.parentNode.getBoundingClientRect(); // Get the parent offset of the div
        var x = e.pageX - parentOffset.left; // Get the x and y position of the mouse left
        var y = e.pageY - parentOffset.top; // Get the x and y position of the mouse top
        div.style.left = x + 3 + 'px'; // Set the left and top of the div to the x and y position of the mouse
        div.style.top = y + 3 + 'px';
        div.style.display = "block"; // Display the div as block so we can see it
    }
    
    // if buttoncollection is hovered
    SetHoverEffect(buttontag);
    // if buttoncollection is hovered
    SetHoverEffect(atag);
    // if .form-class is hovered
    SetHoverEffect(formclass);
    // if clickable title is hovered. This is for the links to each product
    SetHoverEffect(clickabletitle);
    // if x is hovered. This is for the close button on the form
    SetHoverEffect(x);

    document.onmousedown = function() { // If mouse is down
        div.style.transition = "all 0.1s ease";
        div.style.background = "black"; // Set the colour as black so we know it is held down
        div.style.border = "none"; // Remove the border
        div.style.width = "10px";
        div.style.height = "10px"; // Set the width and height as smaller then the original even on hover
        
        setTimeout(function() { // Like before, make sure the transition is removed after 1ms
            div.style.transition = "none";
        }, 100);
    }
    
    document.onmouseup = function() { // if mouse is up return the values to normal
        div.style.background = "transparent";
        div.style.border = "1px solid white";
        SetStyles();
    }
};

function FormAccess(displayvalue, filtervalue, pointervalue) { // Function to stop repeated values
    var form = document.getElementsByTagName('form')[0],
    maincontent = document.getElementById('main-content');
    
    form.style.display = displayvalue; // Set the next values as the parameter so they can change
    maincontent.style.filter = filtervalue;
    maincontent.style.pointerEvents = pointervalue;
}

function showform() { // Function to show the form
    FormAccess("block", "blur(5px)", "none"); // Call the function and set the values
}

function closeform() { // Function to close the form
    FormAccess("none", "none", "auto"); // Call the function and set the values
}

function changeimage(imagename) { // Function to change the image
    var mainimage = document.getElementById('main-image'); // Get the main image
    mainimage.src = "images/" + imagename + ".png"; // Change the source of the image to the parameter
}
function main() { // Function to change the main image to the original image
    changeimage("main"); // Call the function with the correct file name
}
function mainblue() { // Function to change the main image to the blue image
    changeimage("mainblue");
}
function maindark() { // Function to change the main image to the dark image
    changeimage("maindark");
}
function maingreen() { // Function to change the main image to the green image
    changeimage("maingreen");
}

function Link(productNumber) { // Function to open the link of the product
    var productsLink = [ // Array of links
    "https://openai.com/blog/chatgpt",
    "https://www.midjourney.com/",
    "https://www.mailmentor.ai/",
    "https://otter.ai/",
    "https://www.copy.ai/",
    "https://quillbot.com/",
    "https://www.kuki.ai/",
    "https://www.airbrushai.com/",
    "https://www.pabbly.com/ai/",
    "https://tinywow.com/",
    "https://alternativeto.net/",
    "https://www.jasper.ai/",
];
window.open(productsLink[productNumber-1], '_blank'); // Open the link in a new tab with the product number - 1 as the index
}

function Showbuttons() { // Function to show navigation buttons on smaller screen resolutions. I used ternary operators to make the code shorter
    var shownav = document.getElementById('shownav'),
    hiddennav = document.getElementById('topbutton-collection-hidden');
    
    shownav.src = shownav.src.match("./images/nav/home.png") ? "./images/nav/homeclose.png" : "./images/nav/home.png"; // If the source is the home image, change it to the homeclose image, if not, change it to the home image
    shownav.style.height = shownav.src.match("./images/nav/home.png") ? "30px" : "20px"; // If the source is the home image, change the height to 30px, if not, change it to 20px
    
    // use ternary operator to change the display value of the hidden navigation buttons
    hiddennav.style.display = hiddennav.style.display == "flex" ? "none" : "flex";
}

// after 10 seconds of loading the page, show the popup
setTimeout(function() {
    var reminder = document.getElementById('reminder');
    
    reminder.style.animation = "slideleft 1s forwards"; // Add an animation for the popup so it slides in from the left
} , 10000); // Appear after 10 seconds

function closereminder() {
    var reminder = document.getElementById('reminder');
    
    // play slideleft animation backwards
    reminder.style.animation = "slideleft 2s reverse forwards"; // Reverse the animation so it slides out to the left and disapears.
}