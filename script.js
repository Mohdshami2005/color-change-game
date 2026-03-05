const allButtons=document.querySelectorAll("button");
console.log(allButtons);
allButtons.forEach(function (button){
    // so this loop will traverse through all buttons.
    // so on each button we add a event listner which will listen to the button and perform the task.
    // click represents that on clicking the task will be performed.
    button.addEventListener("click",function(e){
        // e is the event object , it is created automatically by the browser, it contains all the info about the event that just happened
        //e contains info like -->
        // e.type ->click,
        //e. target -> element that was clicked,
        // e.key -> which key was pressed on  the keyboard.
        console.log(e);
        console.log(e.target);
        // e.target tells us from where does the event came i.e which button was clicked.
        document.body.style.backgroundColor=e.target.id;
        // as we kept the id of buttons as the color name so e.target.id directly catches that color.
        // otherwise we can also do like if(e.target.id=="gre") document.body.backgroundColor="grey etc."
    })
});