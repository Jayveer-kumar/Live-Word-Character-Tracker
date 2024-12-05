// 6. Reset Functionality
//Add a button to reset the textarea and all counters.
// 7. Real-Time Character Limit Warning
// Instead of an alert, display a real-time warning message.
let textarea=document.getElementById("textarea");
let typed_char_score=document.getElementById("typed_char");
let totalLength=document.getElementById("remain_char");
let progressBar = document.getElementById("progress-bar");
let ResetButton=document.getElementById("reset");
let warningMessage=document.createElement("div");
warningMessage.id="warning";
warningMessage.style.color="red";
document.querySelector(".container").appendChild(warningMessage);
let cureentScore=0;
typed_char_score.textContent=cureentScore;
totalLength.textContent=textarea.minLength;
textarea.addEventListener("input",function (){
    if(this.textLength>=100){
        warningMessage.textContent="You have reached the maximum character limit.";
    } else{
        warningMessage.textContent="";
    }
    if(typed_char_score.innerText>=100){
        alert("Maximum Length: ");        
    } else{
        typed_char_score.textContent=this.textLength;  
        totalLength.textContent= textarea.minLength-typed_char_score.textContent; 
        let progress = (this.textLength / textarea.minLength) * 100;
        progressBar.style.width = progress + "%";

        ResetButton.addEventListener("click",()=>{
            textarea.value="";
            typed_char_score.textContent="0";
            totalLength.textContent=textarea.minLength;
            progressBar.style.width = 0 + "%";
        })
        
    }
});

// Complete
