window.addEventListener("load", () => {
  boxfunctionality()
})

function boxfunctionality(){
  const inputs = document.querySelectorAll('.otp_input')

  inputs.forEach((input,index)=>{
    input.addEventListener("input",(e)=>{
      if(e.target.value.length === 1){
        if(index < inputs.length - 1){
          inputs[index+1].focus()
        }
      }
    })
    
    input.addEventListener("keydown",(e)=>{
      if(e.key=== "Backspace" && !input.value && index>0){
        inputs[index-1].focus()
      }
    })
  })

}