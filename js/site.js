//   image_array = [
//     'box.jpg',
//     'circle.jpg',
//     'cube.jpg',
//     'dead.jpg',
//     'dragon.jpg',
//     'eyes.jpg',
//     'fold.jpg',
//     'frog.jpg',
//     'lay.jpg',
//     'squish.jpg',
//     'stretch.jpg',
//     'surprise.jpg',
//     'wink.jpg',
// ]

// let user = {
//     name: 'elleyse',
//     age: 20,
//     email: 'elleyse.na@gmail.com',
//     location: 'New York City',
//     time: Boolean,
//     hunger: true,
//     comprehension: true,
//     classes: [
//         { title: 'kinship', time: 4 },
//         { title: 'studio', time: 12 },
//         { title: 'lab', time: 4 },
//         { title: 'drawing', time: 4 },
//         { title: 'history', time: 7 },
//         { title: 'fashion', time: 4 },
//     ],
//          login: function(){
//              console.log('the user logged in')
//          },
//          logout: function(){
//              console.log('the user logged out');
//          },
//          logClasses: function(){
//              console.log(this.classes);
//              console.log('this user is registered for the following classes:');
//              this.classes.forEach(classes => {
//                  console.log(classes.title, classes.time);
//              })
//          }
//      };


// user.js
// var user = {
    // name: 'Elleyse',
    // time: ['12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm', '9pm'],
    // email: 'elleyse.na@gmail.com',
    // location: 'New York City',
    // classes: ['kinship', 'studio', 'lab', 'drawing', 'history', 'fashion'],
    // displayInfo: function() {
    //     console.log('Name: ' + this.name);
    //     console.log('Age: ' + this.age);
    //     console.log('Email: ' + this.email);
    //     console.log('Location: ' + this.location);
    //     console.log('Interests: ' + this.interests.join(', '));
    //     console.log('Has Time: ' + this.hastime);
    // }

// };

function displayName() {
    let name = document.getElementById("name");
    console.log(name.value);
    user.name = name.value;
    console.log(user);
    let display = document.getElementById("response");
    let time = document.getElementById("time");
    user.time = time.value;
    console.log(time.value);
    let emotion = document.getElementById("emotion");
    console.log(emotion.value);
    display.innerHTML = user.time;
    let classes = document.getElementById("classes");
    console.log(classes.value);
   // string = user.name+"\n"+user.time;
   let image = generateImage(user.name);
    string = `<img src="${image}">`
    display.innerHTML = string;
}

function generateImage(name){
    if (name.length != 0){
        let randomposition = getRandomInt(images.length);
        let imageLocation = "milo/" + images[randomposition] + ".jpg";
        return imageLocation;
    }
    
}
// var a = "This is";
// var b = "a string";
// var c = a+b;
// console.log(c);

const images = [
    "box",
    "circle",
    "cube",
    "dead",
    "dragon",
    "eyes",
    "fold",
    "frog",
    "lay",
    "squish",
    "strench",
    "surprise",
    "wink",
];

console.log(images[getRandomInt(images.length)]);
console.log(images[1]);
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }


// function displayTime() {
//     let time = document.getElementById("time");
//     console.log(time.value);
//     user.time = time.value;
//     console.log(user);
//     let display = document.getElementById("response");
//     display.innerHTML = user.time;
// }

//string , string = user.name+"\n"+user.time; 
