$(document).scroll(function() {
  var y = $(this).scrollTop();
  if (y > 200) {
    $('.p-column').fadeIn();
  } else {
    $('.p-column').fadeOut();
  }
});

// FOR THE QUIZ
// Access the button on HTML
var submitBtn = $(".submit");

// Event listener
submitBtn.on("click", scoreQuiz);


// Function to be run when button is clicked on
function scoreQuiz(){
  
  event.preventDefault();    //prevented the default action from the form
  
  var q1 = Number($(".question1:checked").val());     //grabs the value for the checked option from the HTML...then converts it to a number (values in HTML are automatically stored as text)
  
      //breaking this apart even more, the .question1 selector will return ALL the inputs with the class name "question1." 
      
      //That's great, but we don't want ALL of the inputs for question1. The only one that matters is the one that the user selected. So we can use the pseudoselector :checked which is telling the computer "Hey, go find an HTML element from the DOM that has a class of "question1" and is "":checked"
      
      //because we planned ahead and made it so that the user will only be able to select one option, then there's only ONE element that has the class of ".question1" AND is in a :checked state.
      
  //Repeated this syntax for all the question in our quiz:
    var q2 = Number($(".question2:checked").val());
    var q3 = Number($(".question3:checked").val());
    var q4 = Number($(".question4:checked").val());
    var q5 = Number($(".question5:checked").val());
  
  //Add up all the values for each of the questions. 
    var total = q1 + q2 + q3 + q4 + q5;                 
  //conditional for the total value to decide which HTML page to serve up
    if (total >= 10){                    
      window.location.replace("advanced.html");          //the window.location.replace just serves up different HTML pages once the submit button is pressed.
    } else if(total>=5){
      window.location.replace("intermediate.html"); 
      } else{
      window.location.replace("beginner.html");
    }
  }

//for pictures
const faders = document.querySelectorAll(".fade-in");
const sliders = document.querySelectorAll(".slide-in");

const appearOptions = {
  threshold: 0,
  rootMargin: "0px 0px -250px 0px"
};

const appearOnScroll = new IntersectionObserver(function(
  entries,
  appearOnScroll
) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add("appear");
      appearOnScroll.unobserve(entry.target);
    }
  });
},
appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});

sliders.forEach(slider => {
  appearOnScroll.observe(slider);
});



























// collection = {
//   acute: [__, __, __, __, __, __, __],
//    chronic: {tips: [__, __, __, __, __, __, __], links: [array of links]}
//  }

// append same tips function (Iteration 1) ... Iteration 2: append random top 3
    // if chronic, then append into the empty resources container
// calculates the score
// randomization (Iteration 2)

// highest number = chronic ... 15
// lowest number = acute ... 0

// need some running total variable

// var steps = {
//   acute: {tips: ["desk yoga", "deep breathing", "visualize something positive",
//                 "give yourself a pep talk", "meditate", "look at landscape photos", "check out your rainy day folder",], links: []},
//   chronic: {tips: [], links: []}
// }