window.addEventListener("load", async() => {
  await functions.cardDataBinding()
  await boxDetailstore.childBoxes()
  
  functions.cardDataBinding()
  sidebarClick()
  boxDetailstore.childBoxes()
  searchbarClick()
  sidebarSearchclick()
  profilePopup()
  profileData()
  userLogout()
  upButton()
  card_right_slide()
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

const functions = {
  cardDataBinding: async function () {
    // A variable that contains data in json format
    showLoader()
    try {
      const res = await fetch("https://entertainmentstudio-backend.onrender.com/api/auth/getContent?category=animePage", {
        method: "GET",
      })
      const data = await res.json()
      const container = document.querySelector('.card-container')

      banner = data.data
      console.log(banner)

      const bannerMovies = [];

      for (let i = 0; i < 4; i++) {
        const randomIndex = Math.floor(Math.random() * banner.length);
        bannerMovies.push(banner[randomIndex]);
      }

      bannerMovies.forEach(randomCard => {
        const bannerImg = `./img/${randomCard.img}`
        const card = document.createElement('div');
        card.classList.add('card');

        card.innerHTML = `
        <div class="card-bg-img-cont" style="background-image:url('${bannerImg}');"></div>
        <div class = "card-img-title-cont">
          <img src="${bannerImg}" alt="${randomCard.title}" srcset="" />
        </div>
      `;
        container.appendChild(card)
      })
    } catch (err) {
      console.log(err)
    }
    hideLoader()
    startslider()
    slide_left_rightbtn()
  },
}

function startslider() {
  const cardContainer = document.querySelector('.card-container');
  const Cards = document.querySelectorAll('.card');
  let cardIndex = 0;

  function slideNext() {
    const cardWidth = Cards[0].offsetWidth
    cardIndex = (cardIndex + 1) % Cards.length;
    const shift = cardIndex * -cardWidth;
    cardContainer.style.transform = `translateX(${shift}px)`;
  }
  setInterval(slideNext, 2000);
}
function slide_left_rightbtn() {
  const leftBtn = document.querySelector(".left-arrow");
  const rightBtn = document.querySelector(".right-arrow");
  const parentCard = document.querySelector(".card-container");
  let cards_store = document.querySelectorAll('.card').length;
  let all_cardsIndex = 0;


  rightBtn.addEventListener('click', () => {
    if (all_cardsIndex < cards_store - 1) {
      all_cardsIndex++;
    } else {
      all_cardsIndex = 0;
    }
    const rightSlide = all_cardsIndex * -100
    parentCard.style.transform = `translateX(${rightSlide}%)`

  })
  leftBtn.addEventListener('click', () => {
    if (all_cardsIndex > 0) {
      all_cardsIndex--;
    } else {
      all_cardsIndex = cards_store - 1;
    }
    const leftSlide = all_cardsIndex * -100
    parentCard.style.transform = `translateX(${leftSlide}%)`
  })

}
const boxDetailstore = {
  childBoxes: async function () {
    showLoader()
    try {
      const res = await fetch("https://entertainmentstudio-backend.onrender.com/api/auth/getContent?category=animePage", {
        method: "GET",
      })
      const boxesData = await res.json()
      const parentBox = document.querySelector('.parent-box')
      const genreMap = {}
      boxesData.data.forEach(boxData => {
        boxImg = `./img/${boxData.img}`
        const genre = boxData.genre
        if (!genreMap[genre]) {
          const childBoxcontent = document.createElement('div');
          childBoxcontent.classList.add('child-box-content');
          childBoxcontent.setAttribute("data-category", genre);
          childBoxcontent.innerHTML = `
          <h2 class="category">${genre}</h2>
          <button class="swipe-left-btn swipe-btn">
            <i class="fa-solid fa-angle-left"></i>
          </button>
          <div class="child-boxes"></div>
          <button class="swipe-right-btn swipe-btn">
            <i class="fa-solid fa-angle-right"></i>
          </button>
        `;
          parentBox.appendChild(childBoxcontent)
          genreMap[genre] = childBoxcontent.querySelector('.child-boxes')
        }
        const box = document.createElement('div');
        box.classList.add('box');
        box.dataset.title = boxData.title;
        box.innerHTML = `<img src="${boxImg}" alt="${boxData.title}" srcset="" />`
        genreMap[genre].appendChild(box)
      })
    } catch (err) {
      console.log(err)
    }
    hideLoader()
    card_right_slide()
  },
}
function searchbarClick() {
  const search_btn = document.querySelector('.search-btn input')
  const sections = document.querySelectorAll('.child-box-content')
  const foot = document.querySelector('.foot')
  search_btn.addEventListener('input', () => {
    const search_value = search_btn.value.toLowerCase().trim()
    if (search_value === "") {
      sections.forEach(section => {
        section.style.display = 'block'
        const boxes = section.querySelectorAll('.box')
        const box_left_btn = section.querySelector('.swipe-left-btn')
        const box_right_btn = section.querySelector('.swipe-right-btn')
        boxes.forEach(box => {
          box.style.display = 'block'
        })

        box_left_btn.style.display = ''
        box_right_btn.style.display = ''
      })
      foot.style.position = 'static'
      return
    }
    sections.forEach(section => {
      const allboxes = section.querySelectorAll('.box')
      const cardleftBtn = section.querySelector('.swipe-left-btn')
      const cardrightBtn = section.querySelector('.swipe-right-btn')
      let hasVisiblebox = false

      allboxes.forEach(box => {
        const boxText = box.dataset.title.toLowerCase();
        if (boxText.includes(search_value)) {
          box.style.display = 'block'
          hasVisiblebox = true
        } else {
          box.style.display = 'none'
        }
      })
      section.style.display = hasVisiblebox ? 'block' : 'none';
      cardleftBtn.style.display = 'none'
      cardrightBtn.style.display = 'none'
    });
    foot.style.position = 'relative'

  })
}
function sidebarSearchclick() {
  const search_btn = document.querySelector('.search-bar input')
  const sections = document.querySelectorAll('.child-box-content')
  const foot = document.querySelector('.foot')
  search_btn.addEventListener('input', () => {
    const search_value = search_btn.value.toLowerCase().trim()
    if (search_value === "") {
      sections.forEach(section => {
        section.style.display = 'block'
        const boxes = section.querySelectorAll('.box')
        const box_left_btn = section.querySelector('.swipe-left-btn')
        const box_right_btn = section.querySelector('.swipe-right-btn')
        boxes.forEach(box => {
          box.style.display = 'block'
        })

        box_left_btn.style.display = ''
        box_right_btn.style.display = ''
      })
      foot.style.position = 'static'
      return
    }
    sections.forEach(section => {
      const allboxes = section.querySelectorAll('.box')
      const cardleftBtn = section.querySelector('.swipe-left-btn')
      const cardrightBtn = section.querySelector('.swipe-right-btn')
      let hasVisiblebox = false

      allboxes.forEach(box => {
        const boxText = box.dataset.title.toLowerCase();
        if (boxText.includes(search_value)) {
          box.style.display = 'block'
          hasVisiblebox = true
        } else {
          box.style.display = 'none'
        }
      })
      section.style.display = hasVisiblebox ? 'block' : 'none';
      cardleftBtn.style.display = 'none'
      cardrightBtn.style.display = 'none'
    });

  })
}
function profilePopup() {
  const userProfilebtn = document.querySelector('.language')
  const User_profilename = document.getElementById('User_profilename')
  const showProfile = document.querySelector('.profile_popup')
  userProfilebtn.addEventListener('click', () => {
    showProfile.classList.toggle('active');
    User_profilename.classList.toggle('active');
  })
}

async function profileData() {
  const profileImage = document.querySelectorAll('#profileImage');
  const userprofileName = document.querySelectorAll('#user_profileName');
  const profile_initial = document.querySelectorAll('.profile_initial');
  const userProfileimg = document.querySelector('.User_img');
  const token = localStorage.getItem("token")
  if (!token) {
    return
  }
  try {
    const res = await fetch("https://entertainmentstudio-backend.onrender.com/api/auth/profile", {
      headers: {
        "authorization": token
      }
    })
    const data = await res.json()
    if (data.success) {
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

      profileImageUrl = `https://entertainmentstudio-backend.onrender.com/uploads/${data.user.profileImg}`;

      if (data.user.profileImg) {
        profileImage.forEach(img => {
          img.src = profileImageUrl
        })
        profile_initial.forEach(userLetter => {
          userLetter.style.display = 'none'
        })
        userProfileimg.style.display = 'flex';

      } else {
        const usernameFirstletter = userfullName.charAt(0).toUpperCase()
        profileImage.forEach(img => {
          img.style.display = "none"
        })

        profile_initial.forEach(userLetter => {
          userLetter.style.display = 'flex'
          userLetter.textContent = usernameFirstletter
        })
        userProfileimg.style.display = 'none';
      }
    }
  } catch (err) {
    console.log(err)
    showToast("Something went wrong.", "danger")
  }
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
          window.location.href = "./Home.html"
        }, 2000)
      }
      modalPopup.classList.toggle('active')

      logoutBtn.addEventListener('click', () => {
        showLoader()
        localStorage.removeItem("token")
        showToast("Logged out successfully.", "success")
        setTimeout(() => {
          window.location.href = "./Home.html"
        }, 2000)
      })

      cancleModal.addEventListener('click', () => {
        modalPopup.classList.remove('active')
      })
      hideLoader()
    })
  })
}

function upButton() {
  const btn_up = document.querySelector('#btn-up')
  btn_up.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  })

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY
    if (scrollY == 0) {
      btn_up.style.opacity = '0'
      btn_up.style.pointerEvents = 'none'
    } else {
      btn_up.style.opacity = '1'
      btn_up.style.pointerEvents = 'auto'
    }
  })
}
// Card slider
function card_right_slide() {
  // swipeLeftbtn.style.visibility = 'hidden';
  const sliders = document.querySelectorAll('.child-box-content');

  const scrollStep = 600;
  sliders.forEach(section => {
    const slider = section.querySelector('.child-boxes');
    const swipeRightbtn = section.querySelector('.swipe-right-btn');
    const swipeLeftbtn = section.querySelector('.swipe-left-btn');

    swipeRightbtn.addEventListener('click', () => {
      slider.scrollBy({
        left: scrollStep,
        behavior: 'smooth'
      });
    });
    swipeLeftbtn.addEventListener('click', () => {
      slider.scrollBy({
        left: -scrollStep,
        behavior: 'smooth'
      });
    });

    slider.addEventListener('scroll', () => {
      if (slider.scrollLeft > 0) {
        swipeLeftbtn.classList.remove('hide-btn')
      } else {
        swipeLeftbtn.classList.add('hide-btn')
      }

      if (slider.scrollLeft + slider.clientWidth > slider.scrollWidth - 5) {
        swipeRightbtn.classList.add('hide-btn')
      } else {
        swipeRightbtn.classList.remove('hide-btn')
      };
    })
  });
}
