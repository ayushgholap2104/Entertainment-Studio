window.addEventListener("load", () => {
  sidebarClick()
  profilePopup()
  userLogout()
})
function sidebarClick() {
  const sidebarIcon = document.querySelector('.sidebar')
  const sidebarMenu = document.querySelector('#side-menu')

  sidebarIcon.addEventListener('click', () => {
    sidebarMenu.classList.toggle('active')
    sidebarIcon.classList.toggle('active')
  })
}
function profilePopup() {
  const userProfilebtn = document.querySelector('.language')
  const showProfile = document.querySelector('.profile_popup')
  userProfilebtn.addEventListener('click', () => {
    showProfile.classList.toggle('active');
    userProfilebtn.classList.toggle('active');
  })

}
function userLogout() {
  const userLogout = document.querySelectorAll('#user_logout');
  const modalPopup = document.querySelector('#profile_logout_msg');
  const logoutBtn = document.querySelector("#profile-logout-btn");
  const cancleModal = document.querySelector('#profile-logout-cancle');

  userLogout.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault()
      modalPopup.classList.toggle('active')

      logoutBtn.addEventListener('click', () => {
        localStorage.removeItem("token")
        window.location.href = "../frontend/Home.html"
      })

      cancleModal.addEventListener('click', () => {
        modalPopup.classList.remove('active')
      })
    })
  })

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

  try {

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

  } catch (err) {
    console.log(err)
  }
}
form.addEventListener('submit', handleSubmit)
const feedback_close_btn = document.querySelector('#popup-btn-close')
feedback_close_btn.addEventListener('click', () => {
  document.getElementById('status').classList.remove('active')
})