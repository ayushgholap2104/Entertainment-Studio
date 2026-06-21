window.addEventListener("load", () => {
  sidebarClick()
  profileData()
  userImage()
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
      if (!token) {
        showToast("Please login first.", "danger")
        setTimeout(() => {
          window.location.href = "../frontend/Home.html"
        }, 2000)
      }
      modalPopup.classList.toggle('active')

      logoutBtn.addEventListener('click', () => {
        showLoader()
        localStorage.removeItem("token")
        showToast("Logged out successfully.", "success")
        setTimeout(() => {
          window.location.href = "../frontend/Home.html"
        }, 2000)
      })

      cancleModal.addEventListener('click', () => {
        modalPopup.classList.remove('active')
      })
      hideLoader()
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
  const profile_form = document.querySelector('form');
  const userprofileName = document.querySelectorAll('#user_profileName');
  const token = localStorage.getItem("token")
  if (!token) {
    showToast("Please login first.", "danger")
    setTimeout(() => {
      window.location.href = "../frontend/Home.html"
    }, 2000)

    return
  }
  try {
    showLoader()
    const res = await fetch("http://127.0.0.1:5000/api/auth/profile", {
      method: "GET",
      headers: {
        "authorization": token
      }
    })
    const data = await res.json()
    if (data.success) {
      document.getElementById('user_name').value = data.user.name;
      document.getElementById('user_email').value = data.user.email;

      const userfullName = data.user.name;
      const parts = userfullName.trim().split(" ");
      let displayName;
      if (parts.length === 3) {
        displayName = `${parts[0]} ${parts[1].charAt(0)} ${parts[2]}`;
      } else {
        displayName = userfullName;
      }
      userprofileName.forEach(userName => {
        userName.textContent = displayName;
      })

    }

    // Profile Update Code
    profile_form.addEventListener('submit', async (e) => {
      e.preventDefault()
      const userGenre = document.querySelector('#user_genre').value;
      const userLocation = document.querySelector('#user_location').value;
      const userInstagram = document.querySelector('#user_instagram').value;
      const userFacebook = document.querySelector('#user_facebook').value;
      const userGithub = document.querySelector('#user_github').value;
      console.log(userGenre)

      const formData = new FormData();
      formData.append("genre", userGenre)
      formData.append("location", userLocation)
      formData.append("instagramId", userInstagram)
      formData.append("facebookId", userFacebook)
      formData.append("githubId", userGithub)

      if (userimgFile) {
        formData.append("profileImg", userimgFile)
      }
      try {
        const res = await fetch("http://127.0.0.1:5000/api/auth/profile", {
          method: "PATCH",
          headers: {
            "authorization": token
          },
          body: formData
        })

        const data = await res.json();
        if (data.success) {
          showToast("Profile update successful", "success")
          document.querySelector('#user_genre').value = data.user.genre;
          document.querySelector('#user_location').value = data.user.location;
          document.querySelector('#user_instagram').value = data.user.instagram;
          document.querySelector('#user_facebook').value = data.user.facebook;
          document.querySelector('#user_github').value = data.user.github;
          document.querySelector('#profileImage').src = `http://127.0.0.1:5000/uploads/${data.user.profileImg}`;
        }
      } catch (err) {
        console.log("Something went wrong.",err)
      }


    })

  } catch (err) {
    console.log(err)
    showToast("Something went wrong.", "danger")
  }
  hideLoader()
}

let userimgFile = null;
function userImage() {
  const profileInput = document.getElementById('profileInput');
  const cameraBtn = document.getElementById('profile_edit_icon');
  const profileImage = document.getElementById('profileImage');

  cameraBtn.addEventListener('click', () => {
    profileInput.click();
  })

  profileInput.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (!file) {
      return
    }
    userimgFile = file;
    const imgUrl = URL.createObjectURL(file);
    profileImage.src = imgUrl;
  })
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
    }
    hideLoader()
  })
}


