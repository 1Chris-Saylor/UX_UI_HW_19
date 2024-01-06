// index.js

console.log("Your index.js file is loaded correctly!!!! NEW");

// Other JavaScript code can go here



// js/index.js

// Test the event listener with a console.log
console.log("Hello world!");

// Add an event listener for the element with the ID "myID"
$("#myID").on("click", function() {
    console.log("You clicked on #myID");

    // Your jQuery code to manipulate the UI
    $(".fadeMe").fadeToggle("slow");
});

