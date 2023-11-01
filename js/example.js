// const classes = [
//     { title: 'kinship', time: 4 },
//     { title: 'studio', time: 12 },
//     { title: 'lab', time: 4 },
//     { title: 'drawing', time: 4 },
//     { title: 'history', time: 7 },
//     { title: 'fashion', time: 4 },
// ];

// console.log(classes);

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
//     milo_array = [
//         'box.jpg',
//         'circle.jpg',
//         'cube.jpg',
//         'dead.jpg',
//         'dragon.jpg',
//         'eyes.jpg',
//         'fold.jpg',
//         'frog.jpg',
//         'lay.jpg',
//         'squish.jpg',
//         'stretch.jpg',
//         'surprise.jpg',
//         'wink.jpg',
//         ]
//     ],
//     login: function(){
//         console.log('the user logged in')
//     },
//     logout: function(){
//         console.log('the user logged out');
//     },
//     logClasses: function(){
//         console.log(this.classes);
//         console.log('this user is registered for the following classes:');
//         this.classes.forEach(classes => {
//             console.log(classes.title, classes.time);
//         })
//     }
// };

// console.log(user);

// user.login();
// user.logout();

// user.logClasses();
// console.log(this);

// const name = 'alley';
// name.toUpperCase();



// console.log(Math);
// console.log(Math.PI);
// console.log(Math.E);

// const area = 7.7;

// console.log(Math.round(area));
// console.log(Math.floor(area));
// console.log(Math.ceil(area));
// console.log(Math.trunc(area));

// // random numbers

// const random = Math.random();

// console.log(random);
// console.log(Math.round(random * 100));

// image_array = [
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

// function get_random_image(){
//     random_index = Math.floor(Math.random() * image_array.length);

//     selected_image = image_array[random_index]

//     document.getElementById('image_shower').src = './milo/${selected_image}'
// }

document.body.style.cursor = 'url("milo/squish.jpg"), auto';

//CODE FOR QUIZZZZ

// var allQuestions = [{
//     question: "what time of the day is it?",
//     choices: ['9', '10', '11', '12', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
//     correctAnswer: 3
// },
// {
//     question: 'are you hungry',
//     choices: ['yes', 'a little', 'no'],
//     correctAnswer: 1
// },
// {
//     question: 'how well am I understanding the subject?',
//     choices: ['onw hundred percent','pretty good', 'medium', 'not at all'],
//     correctAnswer: 3
// },
// {
//     question: 'what class are you in?',
//     choices: ['kinship', 'studio', 'lab', 'drawing', 'history', 'fashion'],
//     correctAnswer: 2
// }
// ];

// var questionTitle = document.getElementById('questionTitle');
// var selectionList = document.getElementById('selectionList');
// var nextButton = document.getElementById('nextButton');

// var i = 0;
// var length1 = allQuestions.length;
// var correctAnswer = 0;

// function populateQuestion() {}

// nextButton.onclick = function() {
//     if(i > allQuestions.length - 1){
//         i=0;
//     }
//     populateQuestion(i);
//     i++;
// };

// function populateQuestion(qNum) {
//     var individualQuestion = allQuestions[i];
//     questionTitle.innerText = individualQuestion.question;

//     selectionList.innerHTML = "";
//     for(key in individualQuestion.choices){
//         var radioBtnName = "question"+i+"_choice";
//         var choiceText = individualQuestion.choices[key];
//         selectionList.appendChild(createLi(radioBtnName,choiceText));
//     }
// }

// function createLi(name, choiceText) {
//     var li = document.createElememt('li');
//     var radioHtml = '<input type="radio" name="'
// + name + '"';
//     radioHtml += '/>';
//     radioHtml += choiceText;
//     e.innerHtml = radioHtml;
//     return e;
// }
//real coding this time maybe :')

const ul_1 = document.querySelector("option1");
const ul_2 = document.querySelector("option2");
const ul_3 = document.querySelector("option3");

const q1 = document.querySelector(".q1");
const q2 = document.querySelector(".q2");
const q3 = document.querySelector(".q3");
