const saveButton = document.getElementById("saveButton");
const currentTime = document.getElementById("currentTime");
const timeBlock = document.querySelectorAll(".time-block");
const timeByHour = document.querySelectorAll(".input-group-text");



// Sets current date up top
var today = moment();
currentTime.textContent = today.format("MMM Do, YYYY");



//Function for updating the rows based on time
function updatedTime(){
    var hour = moment().hours();
    console.log(hour > timeByHour[0].textContent);
     for (i = 0; i < timeBlock.length; i++){
        //  console.log(timeBlock[i]);
        //  console.log(timeByHour);
        if (hour > timeByHour[i].textContent) {
            timeBlock[i].classList.add("past");
        } else if (hour == timeByHour[i].textContent) {
            timeBlock[i].classList.add("present");
        } else if (hour < timeByHour[i].textContent) {
            timeBlock[i].classList.add("future");
        }
     }
}

updatedTime();


function saveMessage(event) {
         console.log(event.target)
       }

       saveButton.addEventListener("click", function(event) {saveMessage(event)})




// function saveMessage(){
//     console.log(this);
// }

saveButton.addEventListener("click", saveMessage);



//addEventListener for buttons
//make it able to save to local storage when you click on Save

//addevent listener for buttons, 
