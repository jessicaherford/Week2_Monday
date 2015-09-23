//THE OBJECT OF MY AFFECTION: OBJECTS
//IN CLASS OBJECT EXERCISES

// For any methods that we didn't cover, please refer to the Object Documentation.
// Please console.log("Question#") followed by console.log(yourAnswer) after each question.
// If you would like, practice using document.write() as well. Use any elements you like!
// ==========================================================================

// 1. Create an object called "me" that describes you with your name, city, and job title.

console.log("Question 1");

var me = {
name: 'Jessica',
city: 'Westminster',
jobTitle: 'Chef'
};

console.log(me);

// 2. To your "me" object, add a key of "family" with the value being an array of three of your family members.
// Example of desired output: { name: 'Bob Smith',
//                              city: 'Denver',
//                              jobTitle: 'professional wrestler',
//                               family: ['Joan', 'Kyle', 'Hank'] }
console.log('Question 2');
me.family = ["Spencer", "Raven", "Tine"];
console.log(me);


// 3. Using the "me" object, use two different methods of accessing your city.
console.log('Question 3');
me.city

me['city']


// Use the following Object for questions 4-9:
var invitees = { adults: [{
                          name: "Penny",
                          table: 10,
                          dinnerChoice: ["salad", "beef", "ice cream"]
                        },
                        {
                          name: "Billy",
                          table: 12,
                          dinnerChoice: ["soup", "beef", "sorbet"]
                        },
                        {
                          name: "Lauren",
                          table: 3,
                          dinnerChoice: ["soup", "chicken", "ice cream"],
                          specialConsiderations: { allergies: "melon",
                                                   seating: "Don't sit her next to ex husband at table 8."}
                        }
                        ],
                  children: [{
                             name: "Junior",
                             table: 4,
                             allergies: ["nuts"]
                            },
                            { name: "Pablo",
                            table: 4,
                            allergies: ["gluten", "following directions"]
                            },
                            { name: "Ada",
                            table: 4,
                            allergies: ["boys"]
                            }
                         ]
                      };

// 4. Access Penny's dinner choice (this will be the second item in his dinneChoice array)
console.log('Question 4');
var pennysDinner = invitees.adults[0].dinnerChoice;

console.log(pennysDinner);
// 5. Access Pablo's table number.
console.log('Question 5');
var pablosTableNumber = invitees.children[1].table;
console.log(pablosTableNumber);

// 6. Access Lauren's seating specialConsideration.
console.log('Question 6');
var laurensSpecial = invitees.adults[2].specialConsiderations.seating;
console.log(laurensSpecial);

// 7. Access Billy's dessert choice (this will be the third item in his dinneChoice array)
console.log('Question 7');
var billysDessertChoice = invitees.adults[1].dinnerChoice[2];
console.log(billysDessertChoice);

// 8. Access Ada's allergies.
console.log('Question 8');
var adasAllergies = invitees.children[2].allergies;
console.log(adasAllergies);


// 9. Create a string that reads Lauren's dinner choice in a sentence.
// Desired result: "Lauren's appetizer is _______. She will be eating ______ for dinner
// and has selected ________ as her dessert."
console.log('Question 9');
var laurensAppetizer = invitees.adults[2].dinnerChoice[0];
var laurensEntree = invitees.adults[2].dinnerChoice[1];
var laurensDessert = invitees.adults[2].dinnerChoice[2];


var laurensDinnerChoice = "Lauren's appetizer is " + laurensAppetizer + "." + " She will be eating " + laurensEntree + " for dinner and has selected " + laurensDessert + " as her dessert.";

console.log(laurensDinnerChoice);
// 10. Create an empty object called "jsWorkshop" using Constructor Notation.
console.log('Question 10');
var jsWorkshop = new Object();

// 11. To your "jsWorkshop" object, assign a key of "classmates" with the value being an array of five your classmates.
console.log('Question 11');
jsWorkshop.classmates = ['Robert', 'Caleb', 'Jenny', 'Todd', 'Chris'];
console.log(jsWorkshop);

// 12. Acesss the third classmate in your "jsWorkshop" object.
console.log('Question 12');
var thirdClassmate = jsWorkshop.classmates[2];
console.log(thirdClassmate);

// 13. Get the length of the fourth classmate's name.
console.log('Question 13');
var fourthClassmateLength = jsWorkshop.classmates[3].length;
console.log(fourthClassmateLength);

// 14. Clear the classmates value.
console.log('Question 14');
jsWorkshop.classmates = '';
console.log(jsWorkshop);
// 15. Create an emtpy array called "books".
console.log('Question 15');
var books = [];
console.log(books);
// Create three objects that contain book titles, their author, and number of pages.
var allThingsCode = {
      title: "All Things Code",
      author: "The Code Master",
      pages: 1999
}
var masterOfJavascript = {
  title: "Master Of Javascript",
  author: "The Master",
  pages: 695
}

var debuggingTips = {
  title: "Debugging Tips",
  author: "Beetle Juice",
  pages: 574
}
// Insert the three objects into the "books" array.
books.push(allThingsCode, masterOfJavascript, debuggingTips);
console.log(books);


// (Feel free to make up the titles. And the authors. Have fun. No pressure.)
// Example of desired array: [ youHadMeAtWoof, bangkokHaunts, theCatcherInTheRye]
// Example of desired object: {title: "You Had Me at Woof", author: "Julie Klum", pages: 207}
// Final desired result:
    /*var books = [{ allThingsCode: {
                                  title: "All Things Code",
                                  author: "The Code Master",
                                  pages: 1999
                                  },
                   masterOfJavascript: {
                                  title: "Master Of Javascript",
                                  author: "The Master",
                                  pages: 695
                                  },
                   debuggingTips: {
                                  title: "Debugging Tips",
                                  author: "Beetle Juice",
                                  pages: 574,
                                  }
                }]*/

// 15a. Access the author of the first book.
console.log('Question 15a');
var firstBookAuthor = books[0].author;
console.log(firstBookAuthor);


// 15b. Print the length of the author the the third book.
console.log('Question 15b')
var thirdBookAuthorLength = books[2].author.length;
console.log(thirdBookAuthorLength);

// 16. To each book object variable, add a key of "dateRead" with a value of the year you read the book.
// (Go ahead and make this up, too. Get wild.)
console.log('Question 16');

allThingsCode.dateRead = 2015;
console.log(allThingsCode);

masterOfJavascript.dateRead = 2014;
console.log(allThingsCode);

debuggingTips.dateRead = 2013;
console.log(books);

// 17. Remove the second book from the books Array.
console.log('Question 17');
delete books[1];
console.log(books);

// Bonus: Explain, in your own words, the difference between Literal Notation and Constructor.
console.log('Bonus');
console.log('Literal Notation seems like it is useful when creating an object that does not have a behaviour associated with it, where Constructor Notation can be used if behaviours are going to be involved. So if no methods are involved use Object Literal, if methods will be used Constructor Notation.');

// 17b. Let's play a game. Create an object (like we did with the bike in class) and assign it at least five properties.
// The class will guess what your object is based on it's properties.
console.log('Question 17b');
var mysteryItem = {
  ibus: 88,
  srm: 18,
  abv: 6.8,
  type: 'IPA',
  brand: 'SKA',
};
console.log(mysteryItem);

// You're a zookeeper and keeping a detailed log of each of the animals in your zoo.
// 18. Create an empty object called "zoo"
console.log('Question 18');
var zoo = [];
console.log(zoo);

// 19. Create assign three animals as your keys in the "zoo" object. The values of the animals should be empty objects.
console.log('Question 19');
var tiger = {};
var zebra = {};
var panda = {};
zoo.push(tiger, zebra, panda);
console.log(zoo);
// 20. Within each animal empty object, assign a key/value pair of "timeSlept" and a number indicating the hours of sleep each animal got. (Make this up, obvi)
console.log('Question 20');
tiger.timeSlept = 8;
zebra.timeSlept = 7;
panda.timeSlept = 9;
console.log(zoo);
// 21. Within each animal object, assign a object pair consisting of a key called "meals" and an empty array as the value.
console.log('Question 21');
tiger.meals = [];
zebra.meals = [];
panda.meals = [];
console.log(zoo);
// 22. Within each animal's meals array, create two objects with keys of "monday" and "wednesday". You only feed those jerks twice a week. It's fine.
console.log('Question 22');
var mondayTiger = {};
var wednesdayTiger = {};
tiger.meals.push(mondayTiger, wednesdayTiger);
var mondayZebra = {};
var wednesdayZebra = {};
zebra.meals.push(mondayZebra, wednesdayZebra);
var mondayPanda = {};
var wednesdayPanda = {};
panda.meals.push(mondayPanda, wednesdayPanda);
console.log(zoo);

// 23. In the individual days of the week, create an object with the key of each meal ("breakfast", "lunch", "dinner") and a made up value of what they ate.
// That array should look like this (within the meals object, within the animal object, within the zoo object):
  [ { monday: {
    breakfast: "cheetos on top of greek yogurt",
    lunch: "6 gallons of Diet Coke",
    dinner: "leftover lasagna"
  }},
   {wednesday: {
    breakfast: "cashews, diced apples, tuna, grapes, BubbleYum",
    lunch: "a ham and cheddar lunchable",
    dinner: "I put my thing down, flip it, and reverse it"
  }}]

console.log('Question 23');
mondayTiger.breakfast = "Frosted Flakes";
mondayTiger.lunch = "They're Great!";
mondayTiger.dinner = "Zebra";
wednesdayTiger.breakfast = "Big Hunk Of Meat";
wednesdayTiger.lunch = "Mac And Cheese";
wednesdayTiger.dinner = "Pizza";
mondayZebra.breakfast = "Steak";
mondayZebra.lunch = "Hamburger";
mondayZebra.dinner = "Meaty Meat";
wednesdayZebra.breakfast = "Bananas";
wednesdayZebra.lunch = "Hot Dogs";
wednesdayZebra.dinner = "Roasted Chicken With Mashed Potatoes";
mondayPanda.breakfast = "Bamboo";
mondayPanda.lunch = "Bamboo Leaves";
mondayPanda.dinner = "Bamboo Salad";
wednesdayPanda.breakfast = "Carrots";
wednesdayPanda.lunch = "Apples";
wednesdayPanda.dinner = "Sweet Potatos";

console.log(zoo);
// 24. Damn it. The night zookeeper just informed you that your second animal took a nap right before bed time. Add two hours to his "timeSlept" value.
console.log('Question 24');
zebra.timeSlept = zebra.timeSlept + 2;
console.log(zoo[1]);
// 25. To each animal object, add a "favoriteActivities" key with the value being an array of three of his/her favorite activities.
console.log('Question 25');
tiger.favoriteActivities = ["Eating, Sleeping, Playing"];
zebra.favoriteActivities = ["Running, Jumping, Being Striped"];
panda.favoriteActivities = ["Bamboo Munching, Laying In The Sun, Playing With Ball"];
console.log(zoo);
// 26. Your first animal just tossed his lunch at the zoo visitors. Change his monday lunch value to an empty string.
console.log('Question 26');
mondayTiger.lunch = '';
console.log(zoo);
// 27. You know your "zoo" object? The owner wants to add zookeepers to the object, too. But before we do that, we need to make sure
// the animals stay separate from the zookeepers. To do this, create an object within the "zoo" object. The key will be "animals" and the value will be an array
// containing the three animals you already defined.
console.log('Question 27');
var animals = [];
zoo.push(animals);
console.log(zoo);
animals.push(zebra, tiger, panda);
console.log(zoo);
// 28. To the "zoo" object, add an object named "zookeepers" with the value being and empty object.
console.log('Question 28');
var zooKeepers = [];
zoo.push(zooKeepers);
console.log(zoo);
// 29. To the empty "zookeepers" object, add two objects with their keys being two names and their values being an empty object.
console.log('Question 29');
var samantha = [];
var matt = [];
zooKeepers.push(samantha,matt);
console.log(zoo);

// 30. This joker wants you to add the "hireDate" for each zookeeper. Within the empty array attached to each name, assign a key/value pair of
// "hireDate" and the value being a string of hire date.
console.log('Question 30');
samantha.hireDate = '11-22-14';
matt.hireDate = '4-30-12';
console.log(zoo);
