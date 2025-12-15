window.addEventListener("load", () => {
  feedback_msg()
})

const form = document.getElementById('my_form')
async function handleSubmit(event) {
  event.preventDefault()
  const status = document.querySelector('.popup-center')
  var data = new FormData(event.target);

  // await fetch(event.target.action,{
  //   method:form.method,
  //   body:data,
  //   headers:{'accept':'application/json'},
  // }).then(response =>{
  //   if(response.ok){
  //     status.classList.add('active')
  //     form.reset()
  //   }else{
  //     status.innerHTML = 'Oops! There Was a Problem Submitting Your Form'
  //   }
  // }).catch(error =>{
  //   status.innerHTML = 'Oops! There Was a Problem Submitting Your Form'
  // });

  try{

    var res = await fetch(event.target.action, {
      method: form.method,
      body: data,
      headers: { 'accept': 'application/json' },
    })
  
    if (res.ok) {
      status.classList.add('active')
      form.reset()
    } else {
      status.innerHTML = 'Oops! There Was a Problem Submitting Your Form'
    }
    
  } catch(err) {
    console.log(err)
  }
}
form.addEventListener('submit', handleSubmit)
const feedback_close_btn = document.querySelector('#popup-btn-close')
feedback_close_btn.addEventListener('click', () => {
  document.getElementById('status').classList.remove('active')
})