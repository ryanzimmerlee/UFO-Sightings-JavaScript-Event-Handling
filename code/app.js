// from data.js
var tableData = data;

// YOUR CODE HERE!

// Select the table body
var tbody = d3.select("tbody");

// Function to extract each object from the data.js array and add it to the table
tableData.forEach((ufoSightings) => {
    var row = tbody.append("tr");
    Object.entries(ufoSightings).forEach(([key, value]) => {
      row.append("td").text(value);
    });
  });

// Function to replace UFO table data when user clicks 'Filter Data' button
function replaceUfoData() {
  // d3.event.preventDefault();
  
  // Locate datetime entry box and grab user's input value using the .property method
  var userInput = d3.select("#datetime").property("value");

  // Using the user's inputted value, find the matches in the existing table and store in a variable
  var usersFilteredData = tableData.filter(x => x.datetime === userInput);  

  // Remove the existing table
  d3.selectAll("tr").remove(); 

  // Same as above -- create a new table that only shows the data matching the user's entered date
  usersFilteredData.forEach((ufoSightings) => {
    var row = tbody.append("tr");
    Object.entries(ufoSightings).forEach(([key, value]) => {
      row.append("td").text(value);
    });
  });
 
// Test to see if clicking the 'Filter Data' actually does something and made it through my function
console.log("Testing...testing 1, 2, 3...");

}

// Assign the html button to a variable
var filterDataButton = d3.select("#filter-btn");

// Event listener for when user clicks the button after entering a date value to run the above function
filterDataButton.on("click", replaceUfoData);

document.querySelector(filterDataButton).addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    replaceUfoData;
  }
});
