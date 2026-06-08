window.addEventListener("load", () => {
  sidebarClick()
  profileData()
  profilePopup()
  userLogout()
  profileDelete_modal()
  userAccountdelete()
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
  userLogout.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault()
      localStorage.removeItem("token")
      window.location.href = "../Home.html"
    })
  })

}

function profileDelete_modal() {

  const profileDelete = document.querySelector('#user_deleteAccount')
  const modalPopup = document.querySelector('.profile_warning_msg')
  const cancleModal = document.querySelector('#profile-btn-cancle')

  profileDelete.addEventListener('click', () => {
    modalPopup.classList.toggle('active')
  })

  cancleModal.addEventListener('click', () => {
    modalPopup.classList.remove('active')
  })
}

async function profileData() {
  const token = localStorage.getItem("token")

  const res = await fetch("http://127.0.0.1:5000/api/auth/profile", {
    headers: {
      "authorization": token
    }
  })
  const data = await res.json()
  console.log(data)
}
function userAccountdelete() {
  const deleteBtn = document.querySelector("#profile-btn-close")
  deleteBtn.addEventListener('click', async (e) => {
    e.preventDefault()
    token = localStorage.getItem("token")

    const res = await fetch("http://127.0.0.1:5000/api/auth/userdelete", {
      method: "DELETE",
      headers: {
        "authorization": token
      }
    })
    const data = await res.json()
    if (data.success) {
      localStorage.removeItem("token")
      alert(data.message, "success");
      setTimeout(() => {
        window.location.href = "../frontend/sign_up.html"
      }, 2000)
    } else {
      alert(data.message, "danger");
    }
  })
}


