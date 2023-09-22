"use strict";
/*Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.

• Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.

• Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.

• Print a second set of invitation messages, one for each person who is still in your list.*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.guests = void 0;
const Exercise_14_1 = require("../Exercise 14");
Object.defineProperty(exports, "guests", { enumerable: true, get: function () { return Exercise_14_1.guests; } });
// console.log(guests);
let newGuest = "Obama";
console.log(`\n${Exercise_14_1.guests[1]} cant make it to dinner.`);
Exercise_14_1.guests.splice(1, 1, newGuest);
// console.log(guests);
for (let guest of Exercise_14_1.guests) {
    console.log(`Hey ${guest}! Please come to the dinner tonight.`);
}
