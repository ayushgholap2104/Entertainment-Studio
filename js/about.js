window.addEventListener("load", () => {
  sidebarClick()
  profilePopup()
  userLogout()
})

function sidebarClick(){
  const sidebarIcon = document.querySelector('.sidebar')
  const sidebarMenu = document.querySelector('#side-menu')

  sidebarIcon.addEventListener('click', () => {
    sidebarMenu.classList.toggle('active')
    sidebarIcon.classList.toggle('active')
  })
}

function profilePopup(){
  const userProfilebtn = document.querySelector('.language')
  const showProfile = document.querySelector('.profile_popup')
  userProfilebtn.addEventListener('click',()=>{
    showProfile.classList.toggle('active');
    userProfilebtn.classList.toggle('active');
  })
}
function userLogout(){
  const userLogout = document.querySelector('#user_logout');
  userLogout.addEventListener('click', (e)=>{
    e.preventDefault()
    localStorage.removeItem("token")
    window.location.href = "../index.html"
  })
}
