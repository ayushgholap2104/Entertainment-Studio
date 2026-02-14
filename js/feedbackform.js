window.addEventListener("load", () => {
  sidebarClick()
  feedback_msg()
})
function sidebarClick(){
  const sidebarIcon = document.querySelector('.sidebar')
  const sidebarMenu = document.querySelector('#side-menu')

  sidebarIcon.addEventListener('click', () => {
    sidebarMenu.classList.toggle('active')
  })
}

function toggleTheme() {
  const body = document.body
  const Icon = document.querySelector('#icons')
  body.classList.toggle("dark_theme")

  if (body.classList.contains("dark_theme")) {
    Icon.classList.replace('fa-sun', 'fa-moon');
    document.documentElement.classList.add('dark_theme')

  } else {
    Icon.classList.replace('fa-moon', 'fa-sun')
    document.documentElement.classList.remove('dark_theme')
  }
}

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