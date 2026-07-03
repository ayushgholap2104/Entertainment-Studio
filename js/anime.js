window.addEventListener("load", () => {
  functions.cardDataBinding()
  sidebarClick()
  startslider()
  slide_left_rightbtn()
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
  cardDataBinding: function () {
    // A variable that contains data in json format
    const cardsData = [
      {
        title: "Attack_on_titan",
        img: "../img/Attack_on_titan.jpg"
      },
      {
        title: "Demon_slayer",
        img: "../img/Demon_slayer.jpg"
      },
      {
        title: "full_metal_alchemist",
        img: "../img/full_metal_alchemist.jpg"
      },
      {
        title: "Mobpsycho",
        img: "../img/Mobpsycho.jpg"
      },

    ]
    const container = document.querySelector('.card-container')

    cardsData.forEach(data => {
      const card = document.createElement('div');
      card.classList.add('card');

      card.innerHTML = `
        <div class="card-bg-img-cont" style="background-image:url('${data.img}');"></div>
        <div class = "card-img-title-cont">
          <img src="${data.img}" alt="${data.title}" srcset="" />
        </div>
      `;
      container.appendChild(card)
    })
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
  childBoxes: function () {
    const boxesData = [
      // 1st box
      {
        title: "Attack_on_titan",
        img: "../img/Attack_on_titan.jpg",
        genre: "Exciting Animes"
      },
      {
        title: "Tawawa_on_monday",
        img: "../img/Tawawa_on_monday.jpg",
        genre: "Exciting Animes"
      },
      {
        title: "haikyuu",
        img: "../img/haikyuu.jpg",
        genre: "Exciting Animes"
      },
      {
        title: "the_detective_is_already_dead",
        img: "../img/the_detective_is_already_dead.jpg",
        genre: "Exciting Animes"
      },
      {
        title: "Apothecary_diaries",
        img: "../img/Apothecary_diaries.jpg",
        genre: "Exciting Animes"
      },
      {
        title: "Gachiakuta",
        img: "../img/Gachiakuta.jpg",
        genre: "Exciting Animes"
      },
      {
        title: "Dr_stone",
        img: "../img/Dr_stone.jpg",
        genre: "Exciting Animes"
      },
      {
        title: "Kaiju_no_8",
        img: "../img/Kaiju_no_8.jpg",
        genre: "Exciting Animes"
      },
      {
        title: "sakamoto_days",
        img: "../img/sakamoto_days.jpg",
        genre: "Exciting Animes"
      },
      {
        title: "Solo_levelling",
        img: "../img/Solo_levelling.jpg",
        genre: "Exciting Animes"
      },
      {
        title: "Dandadan",
        img: "../img/Dandadan.jpg",
        genre: "Exciting Animes"
      },
      {
        title: "Wind_breaker",
        img: "../img/Wind_breaker.jpg",
        genre: "Exciting Animes"
      },
      {
        title: "Wicked",
        img: "../img/Wicked.jpg",
        genre: "Exciting Animes"
      },
      {
        title: "My_dressup_darling",
        img: "../img/My_dressup_darling.jpg",
        genre: "Exciting Animes"
      },

      // 2nd box
      {
        title: "Fire_force",
        img: "../img/Fire_force.jpg",
        genre: "Action and Adventure"
      },
      {
        title: "Lord_of_mystery",
        img: "../img/Lord_of_mystery.jpg",
        genre: "Action and Adventure"
      },
      {
        title: "Takopis_original_sin",
        img: "../img/Takopis_original_sin.jpg",
        genre: "Action and Adventure"
      },
      {
        title: "To_be_hero_x",
        img: "../img/To_be_hero_x.jpg",
        genre: "Action and Adventure"
      },
      {
        title: "Blackbuttler",
        img: "../img/blackButtler.jpg",
        genre: "Action and Adventure"
      },
      {
        title: "MyheroAcademia",
        img: "../img/myheroAcademia.jpg",
        genre: "Action and Adventure"
      },
      {
        title: "Medalist",
        img: "../img/Medalist.jpg",
        genre: "Action and Adventure"
      },
      {
        title: "The Fragrant Flower",
        img: "../img/The_fragrant_flower.jpg",
        genre: "Action and Adventure"
      },
      {
        title: "Onepiece Anime",
        img: "../img/onepiece-anime.jpg",
        genre: "Action and Adventure"
      },
      {
        title: "Chainsaw_Man",
        img: "../img/Chainsaw_Man.jpg",
        genre: "Action and Adventure"
      },
      {
        title: "Tokyo Ghoul",
        img: "../img/Tokyo_ghoul.jpg",
        genre: "Action and Adventure"
      },
      {
        title: "Black Cover",
        img: "../img/Black_Cover.jpg",
        genre: "Action and Adventure"
      },
      {
        title: "FairyTail",
        img: "../img/FairyTail.jpg",
        genre: "Action and Adventure"
      },
      {
        title: "Kill_Anime",
        img: "../img/Kill_Anime.jpg",
        genre: "Action and Adventure"
      },
      // 3rd Box
      {
        title: "Sword Art Online",
        img: "../img/Sword_art_online.jpg",
        genre: "Popular Animes"
      },
      {
        title: "Slime",
        img: "../img/Slime.jpg",
        genre: "Popular Animes"
      },
      {
        title: "The rising of slime hero",
        img: "../img/The_rising_of_slime_hero.jpg",
        genre: "Popular Animes"
      },
      {
        title: "Silent_voice",
        img: "../img/Silent_voice.jpg",
        genre: "Popular Animes",
      },
      {
        title: "The_promised_neverland",
        img: "../img/The_promised_neverland.jpg",
        genre: "Popular Animes"
      },
      {
        title: "Your_name",
        img: "../img/Your_name.jpg",

        genre: "Popular Animes"
      },
      {
        title: "frieren",
        img: "../img/frieren.jpg",
        genre: "Popular Animes"
      },
      {
        title: "Hell Paradise",
        img: "../img/Hell_paradise.jpg",
        genre: "Popular Animes"
      },
      {
        title: "Tokyo Revengers",
        img: "../img/tokyoRevengers.jpg",
        genre: "Popular Animes"
      },
      {
        title: "Blue Lock",
        img: "../img/Blue_lock.jpg",
        genre: "Popular Animes"
      },
      {
        title: "Winland Saga",
        img: "../img/Winland_saga.jpg",
        genre: "Popular Animes",
      },
      {
        title: "Bungo_straydogs",
        img: "../img/Bungo_straydogs.jpg",
        genre: "Popular Animes"
      },
      {
        title: "Mashle",
        img: "../img/Mashle.jpg",
        genre: "Popular Animes"
      },
      {
        title: "Horimiya",
        img: "../img/Horimiya.jpg",
        genre: "Popular Animes"
      },
      // "womenCricket" box
      {
        title: "Demon Slayer",
        img: "../img/demon-slayer.jpg",
        genre: "Amazing Movies"
      },
      {
        title: "Detective Cannon Movie",
        img: "../img/Detective_cannon_movie.jpg",
        genre: "Amazing Movies"
      },
      {
        title: "Chainsaw Man Movie",
        img: "../img/Chainsaw_Man_Movie.jpg",
        genre: "Amazing Movies"
      },
      {
        title: "Jujutsu Kaisen Movie",
        img: "../img/Jujutsu_kaisen_Movie.jpg",
        genre: "Amazing Movies"
      },
      {
        title: "The Rose Movie",
        img: "../img/The_rose_movie.jpg",
        genre: "Amazing Movies"
      },
      {
        title: "Doraemon_movie",
        img: "../img/Doraemon_movie.jpg",
        genre: "Amazing Movies"
      },
      {
        title: "100_meters",
        img: "../img/100_meters.jpg",
        genre: "Amazing Movies"
      },
      {
        title: "Mononuku",
        img: "../img/Mononuku.jpg",
        genre: "Amazing Movies"
      },
      {
        title: "Lost_in_starlight",
        img: "../img/Lost_in_starlight.jpg",
        genre: "Amazing Movies"
      },
      {
        title: "Pancrease_anime",
        img: "../img/Pancrease_anime.jpg",
        genre: "Amazing Movies"
      },
      {
        title: "Slam_dunk",
        img: "../img/Slam_dunk.jpg",
        genre: "Amazing Movies"
      },
      {
        title: "Suzume",
        img: "../img/Suzume.jpg",
        genre: "Amazing Movies"
      },
      {
        title: "Belle",
        img: "../img/Belle.jpg",
        genre: "Amazing Movies"
      },
      {
        title: "The_colors_within",
        img: "../img/The_colors_within.jpg",
        genre: "Amazing Movies"
      },
      // 5th Box
      {
        title: "jujutsuKiasen",
        img: "../img/jujutsu-anime.jpg",
        genre: "Rejoice Anime Fans!"
      },
      {
        title: "onepiece",
        img: "../img/onepiece-anime.jpg",
        genre: "Rejoice Anime Fans!"
      },
      {
        title: "demonSlayer",
        img: "../img/demon-slayer.jpg",
        genre: "Rejoice Anime Fans!"
      },
      {
        title: "Naruto",
        img: "../img/naruto.jpg",
        genre: "Rejoice Anime Fans!"
      },
      {
        title: "AttackonTitan",
        img: "../img/Aot.jpg",
        genre: "Rejoice Anime Fans!"
      },
      {
        title: "Bleach",
        img: "../img/bleach.jpg",
        genre: "Rejoice Anime Fans!"
      },
      {
        title: "deathNote",
        img: "../img/death-note.jpg",
        genre: "Rejoice Anime Fans!"
      },
      {
        title: "Haikyuu",
        img: "../img/haikyuu.jpg",
        genre: "Rejoice Anime Fans!"
      },
      {
        title: "spyFamily",
        img: "../img/spyFamily.jpg",
        genre: "Rejoice Anime Fans!"
      },
      {
        title: "assasinationClasroom",
        img: "../img/assasinationClassroom.jpg",
        genre: "Rejoice Anime Fans!"
      },
      {
        title: "mushukoTensei",
        img: "../img/mushukoTensei.jpg",
        genre: "Rejoice Anime Fans!"
      },
      {
        title: "jhunjiltoCollection",
        img: "../img/jhunjiltoCollection.jpg",
        genre: "Rejoice Anime Fans!"
      },
      {
        title: "myheroAcademia",
        img: "../img/myheroAcademia.jpg",
        genre: "Rejoice Anime Fans!"
      },
      {
        title: "blackButtler",
        img: "../img/blackButtler.jpg",
        genre: "Rejoice Anime Fans!"
      },
      // 6th Box
      {
        title: "Doraemon",
        img: "../img/doraemon.jpg",
        genre: "Kids Animes"
      },
      {
        title: "Shinchan",
        img: "../img/shinchan.jpg",
        genre: "Kids Animes"
      },
      {
        title: "TomandJerry",
        img: "../img/tom-and-cherry.jpg",
        genre: "Kids Animes"
      },
      {
        title: "Ben10",
        img: "../img/ben10.jpg",
        genre: "Kids Animes"
      },
      {
        title: "motuPatlu",
        img: "../img/motu-patlu.jpg",
        genre: "Kids Animes"
      },
      {
        title: "Woody",
        img: "../img/woody.jpg",
        genre: "Kids Animes"
      },
      {
        title: "mickyMouse",
        img: "../img/micky-mouse.jpg",
        genre: "Kids Animes"
      },
      {
        title: "ninjaHattori",
        img: "../img/ninjaHattori.png",
        genre: "Kids Animes"
      },
      {
        title: "munkiTrunk",
        img: "../img/munkiTrunk.jpg",
        genre: "Kids Animes"
      },
      {
        title: "Ainbo",
        img: "../img/Ainbo.jpg",
        genre: "Kids Animes"
      },
      {
        title: "chikooAurbunty",
        img: "../img/chikooAurbunty.jpg",
        genre: "Kids Animes"
      },
      {
        title: "peppaPig",
        img: "../img/peppaPig.jpg",
        genre: "Kids Animes"
      },
      {
        title: "Bajrangi",
        img: "../img/Bajrangi.jpg",
        genre: "Kids Animes"
      },
      {
        title: "mashaAndbeer",
        img: "../img/mashaAndbeer.jpg",
        genre: "Kids Animes"
      },
      // 7th Box
      {
        title: "Gachiakuta",
        img: "../img/Gachiakuta.jpg",
        genre: "Most Watched Animes"
      },
      {
        title: "Fate Stay Night",
        img: "../img/Fate_stay_night.jpg",
        genre: "Most Watched Animes"
      },
      {
        title: "Cyber_punk",
        img: "../img/Cyber_punk.jpg",
        genre: "Most Watched Animes"
      },
      {
        title: "Berserk",
        img: "../img/Berserk.jpg",
        genre: "Most Watched Animes"
      },
      {
        title: "Code_gease",
        img: "../img/Code_gease.jpg",
        genre: "Most Watched Animes"
      },
      {
        title: "Re_zero_anime",
        img: "../img/Re_zero_anime.jpg",
        genre: "Most Watched Animes"
      },
      {
        title: "Record_of_ragnorak",
        img: "../img/Record_of_ragnorak.jpg",
        genre: "Most Watched Animes"
      },
      {
        title: "Steins_gate",
        img: "../img/Steins_gate.jpg",
        genre: "Most Watched Animes"
      },
      {
        title: "Evangelion",
        img: "../img/Evangelion.jpg",
        genre: "Most Watched Animes"
      },
      {
        title: "Dragonballz1",
        img: "../img/Dragonballz1.jpg",
        genre: "Most Watched Animes"
      },
      {
        title: "Gintama",
        img: "../img/Gintama.jpg",
        genre: "Most Watched Animes"
      },
      {
        title: "Fragrant_flower",
        img: "../img/Fragrant_flower.jpg",
        genre: "Most Watched Animes"
      },
      {
        title: "The_bondocks",
        img: "../img/The_bondocks.jpg",
        genre: "Most Watched Animes"
      },
      {
        title: "Kingdom_anime",
        img: "../img/Kingdom_anime.jpg",
        genre: "Most Watched Animes"
      },
    ]
    const parentBox = document.querySelector('.parent-box')
    const genreMap = {}
    boxesData.forEach(boxData => {
      const Genre = boxData.genre
      if (!genreMap[Genre]) {
        const childBoxcontent = document.createElement('div');
        childBoxcontent.classList.add('child-box-content');
        childBoxcontent.setAttribute("data-category", Genre);
        childBoxcontent.innerHTML = `
          <h2 class="category">${Genre}</h2>
          <button class="swipe-left-btn swipe-btn">
            <i class="fa-solid fa-angle-left"></i>
          </button>
          <div class="child-boxes"></div>
          <button class="swipe-right-btn swipe-btn">
            <i class="fa-solid fa-angle-right"></i>
          </button>
        `;
        parentBox.appendChild(childBoxcontent)
        genreMap[Genre] = childBoxcontent.querySelector('.child-boxes')
      }
      const box = document.createElement('div');
      box.classList.add('box');
      box.dataset.title = boxData.title;
      box.innerHTML = `<img src="${boxData.img}" alt="${boxData.title}" srcset="" />`
      genreMap[Genre].appendChild(box)
    })
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
    const res = await fetch("http://127.0.0.1:5000/api/auth/profile", {
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

      profileImageUrl = `http://127.0.0.1:5000/uploads/${data.user.profileImg}`;

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
