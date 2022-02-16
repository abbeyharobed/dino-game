var Character = document.getElementById("character");
var Block = document.getElementById("block");
var Counter = 0;

function jump() {
    if (Character.classList != "animate") {
        Character.classList.add("animate"); //this would add the class "animation" to the variable "character"
        Counter++;
    }
    
    setTimeout(function(){
        Character.classList.remove("animate"); //this would remove the class "animation" to the variable "character"
    },500)
    
}

var dead = setInterval(function(){
    var charTop = parseInt(window.getComputedStyle(Character).getPropertyValue("top"));
    var blockLeft = parseInt(window.getComputedStyle(Block).getPropertyValue("left"));

    if (blockLeft<20 && blockLeft>0 && charTop>=130) {
        Block.style.animation = "none" 
        alert("Muahhhahahahahaha! I own you now! You scored " +Counter)
    }
}, 10);




//on this document, get the element with the id "character" and ascribe them to the variabe "Character"
//on this document, get the element with the id "block" and ascribe them to the variabe "Block"
//Note the capital and small letter differnce  

//this is the function "jump" called in the head tag of the html page. it is to link the animation stipulated in the style sheet to the element ascribed to the "Charcter" variable
//the (condition of the) if statement says if the element ascribed to Character's classlist dosen't include animate, then (the action part goes) add the class "animate" to it

//setTimeout is used to add a timer of some sorts to when/how often something (the code in it's brackets)can happen, it has a timer in milisecons at the end thatll specify how long  in this case how often the "animate" class should be removed agter it has been activated once
//i.e once the "animate" class has been added and ran once, it'll be removed every 500ms

//the above would make the character jump up and down on everyclick

//the next part of the code would check if the character and block are on top of each other, hence meaning the game would be lost
//the variable dead is set to a  setInterval. this is very similar to the setTimeout, only that this would run the code repetedly on it's own after the time in the timer has passed
//in this case, this code will run every 10 milliseconds to see if the conditions stipilated are met. below is the syntax
//setInterval(() => {
    
//}, interval);
// the "() => {}" is another way of writing "function(){}" it's like saying (if this is met) => {do this}. dont know if it'll work outside of the setInterval context though...
//i'm not sure what the parseInt part means exactly, but i know that bit should get the position of the character and the block and ascribe it to the variables
//i think the parseInt bit was to convert it to a figure... don't know what/ hpw thatll work exactly

//the if statement says if the position gotten of the block(that has been ascribed to the var blockLeft) is less than 20 and greater than 0, i.e if its position is between 0 and 20
//and the character's top position (ascribed to charTop) is grater than or equal to 130, (it is assumed that at these positions, the two didvs would have made contact)
//stop the animation of the moving block and alert the stipulated alert. 

//to replay, reload the page with F5 or tap the reload icon.