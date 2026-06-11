window.addEventListener("load", () => {
  sidebarClick()
  profileData()
  profilePopup()
  userLogout()
  profileDelete_modal()
  userAccountdelete()
})

function showLoader() {
  document.getElementById('loader').style.display = 'flex'
}
function hideLoader() {
  document.getElementById('loader').style.display = 'none'
}
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
  const token = localStorage.getItem("token");

  userLogout.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault()
      if(!token){
        showToast("Please signup or login first","danger")
        setTimeout(()=>{
          window.location.href = "../frontend/Home.html"
        })
      }
      modalPopup.classList.toggle('active')

      logoutBtn.addEventListener('click', () => {
        localStorage.removeItem("token")
        setTimeout(() => {
          window.location.href = "../frontend/Home.html"
        }, 2000)
        showToast("Account logout successful", 'success')
      })

      cancleModal.addEventListener('click', () => {
        modalPopup.classList.remove('active')
      })
    })
  })

}

function profileDelete_modal() {

  const profileDelete = document.querySelector('#user_deleteAccount')
  const modalPopup = document.querySelector('#profile_delete_msg')
  const cancleModal = document.querySelector('#profile-delete-cancle')

  profileDelete.addEventListener('click', () => {
    modalPopup.classList.toggle('active')
  })

  cancleModal.addEventListener('click', () => {
    modalPopup.classList.remove('active')
  })
}

async function profileData() {
  const token = localStorage.getItem("token")
  if (!token) {
    showToast("Please login or signup first.", "danger")
    setTimeout(() => {
      window.location.href = "../frontend/Home.html"
    }, 2000)

    return
  }
  try {
    showLoader()
    const res = await fetch("http://127.0.0.1:5000/api/auth/profile", {
      headers: {
        "authorization": token
      }
    })
    const data = await res.json()
    if (data.success) {
      document.getElementById('user_name').value = data.user.name;
      document.getElementById('user_email').value = data.user.email;
    }
  } catch (err) {
    console.log(err)
    showToast("Something went wrong.", "danger")
  } finally {
    hideLoader()
  }
}
function userAccountdelete() {
  const deleteBtn = document.querySelector("#profile-delete-btn")
  deleteBtn.addEventListener('click', async (e) => {
    e.preventDefault()
    token = localStorage.getItem("token")
    try {
      showLoader()
      const res = await fetch("http://127.0.0.1:5000/api/auth/userdelete", {
        method: "DELETE",
        headers: {
          "authorization": token
        }
      })
      const data = await res.json()
      if (data.success) {
        localStorage.removeItem("token")
        showToast(data.message, "success");
        setTimeout(() => {
          window.location.href = "../frontend/sign_up.html"
        }, 2000)
      } else {
        showToast(data.message, "danger");
      }
    } catch (err) {
      console.log(err)
      showToast("Something went wrong.", "danger")
    } finally {
      hideLoader()
    }
  })
}


