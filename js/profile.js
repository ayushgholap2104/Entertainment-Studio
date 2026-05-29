window.addEventListener("load", () => {
  sidebarClick()
  profilePopup()
  // profileData()
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
// const profile_form = document.querySelector('.profile_form')
// function profileDelete_modal(event) {
//   event.preventDefault()
//   const profileDelete = document.querySelector('#user_deleteAccount')
//   const modalPopup = document.querySelector('.profile_warning_msg')
//   const cancleModal = document.querySelector('#profile-btn-cancle')
//   profileDelete.addEventListener('click', () => {
//     modalPopup.classList.toggle('active')
//   })

//   cancleModal.addEventListener('click', () => {
//     modalPopup.classList.remove('active')
//   })
// }

async function profileData() {
  const token = localStorage.getItem("token")

  const res = await fetch("http://localhost:5000/api/auth/profile", {
    headers: {
      "authorization": token
    }
  })
  const data = await res.json()
  console.log(data)
}


