window.addEventListener("load", () => {
  sidebarClick()
  profilePopup()
  // profileData()
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

async function profileData(){
  const token = localStorage.getItem("token")

  const res = await fetch("http://localhost:5000/api/auth/profile",{
    headers:{
      "authorization":token
    }
  })
  const data = await res.json()
  console.log(data)
}


