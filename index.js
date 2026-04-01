const attendee = {
  attendeeId: "T001",
  name: "Alice Smith",
  event: "JavaScript Conference",
  ticketType: "VIP",
  ticketPrice: 150.00
};

// Log the attendee's name
function logAttendeeName(attendee) {
  console.log(attendee.name);
}

// Log the attendee's ticket price
function logTicketPrice(attendee) {
  console.log(attendee.ticketPrice);
}

// Update the ticket type
function updateTicketType(attendee, newTicketType) {
  attendee.ticketType = newTicketType;
}

// Update the ticket price
function updateTicketPrice(attendee, newPrice) {
  attendee.ticketPrice = newPrice;
}

// Remove the event property
function removeEventProperty(attendee) {
  delete attendee.event;
}

// Add a checkedIn property with value true
function addCheckedInProperty(attendee) {
  attendee.checkedIn = true;
}

// Example usage (use a copy to avoid modifying the original for tests)
const attendeeCopy = { ...attendee };

logAttendeeName(attendeeCopy);        // Alice Smith
logTicketPrice(attendeeCopy);         // 150

updateTicketType(attendeeCopy, "Standard");
updateTicketPrice(attendeeCopy, 200);
removeEventProperty(attendeeCopy);
addCheckedInProperty(attendeeCopy);

console.log("Updated attendee copy:");
console.log(attendeeCopy);

// Original attendee object stays intact for tests
console.log("Original attendee object:");
console.log(attendee);

//Needed for the tests to work. Don't modify
module.exports = {
  ...(typeof attendee !== 'undefined' && { attendee }),
  ...(typeof logAttendeeName !== 'undefined' && { logAttendeeName }),
  ...(typeof logTicketPrice !== 'undefined' && { logTicketPrice }),
  ...(typeof updateTicketType !== 'undefined' && { updateTicketType }),
  ...(typeof updateTicketPrice !== 'undefined' && { updateTicketPrice }),
  ...(typeof removeEventProperty !== 'undefined' && { removeEventProperty }),
  ...(typeof addCheckedInProperty !== 'undefined' && { addCheckedInProperty })
};