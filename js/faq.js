let question=document.querySelectorAll(".question")
question.forEach(function(question){
  question.addEventListener("click",function(){
      let answer=this.nextElementSibling
      if(answer.style.display==="block"){
          answer.style.display="none"
         
      }else{
          answer.style.display="block"
      }
  
  })
})