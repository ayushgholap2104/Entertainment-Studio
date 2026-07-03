window.addEventListener("load", () => {
  sidebarClick()
  functions.cardDataBinding()
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
        title: "Demon_slayer",
        img: "../img/Demon_slayer.jpg"
      },
      {
        title: "Money Heist",
        img: "../img/Money_Heist.jpg"
      },
      {
        title: "MoonKnight",
        img: "../img/MoonKnight.jpg"
      },
      {
        title: "Tokyo Revengers",
        img: "../img/tokyoRevengers.jpg"
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
        title: "MoonWalk",
        img: "../img/MoonWalk.jpg",
        genre: "Must Watch Originals"
      },
      {
        title: "KhalbaliRecords",
        img: "../img/KhalbaliRecords.jpg",
        genre: "Must Watch Originals"
      },
      {
        title: "HoneyMoonPhotographer",
        img: "../img/HoneyMoonPhotographer.jpg",
        genre: "Must Watch Originals"
      },
      {
        title: "Cadets",
        img: "../img/Cadets.jpg",
        genre: "Must Watch Originals"
      },
      {
        title: "Taali",
        img: "../img/Taali.jpg",
        genre: "Must Watch Originals"
      },
      {
        title: "Kaalkoot Series",
        img: "../img/Kaalkoot-Series.jpg",
        genre: "Must Watch Originals"
      },
      {
        title: "ShekharHome",
        img: "../img/ShekharHome.jpg",
        genre: "Must Watch Originals"
      },
      {
        title: "Asur2",
        img: "../img/Asur2.jpg",
        genre: "Must Watch Originals"
      },
      {
        title: "CandySeries",
        img: "../img/CandySeries.jpg",
        genre: "Must Watch Originals"
      },
      {
        title: "IllegalSeries",
        img: "../img/IllegalSeries.jpg",
        genre: "Must Watch Originals"
      },
      {
        title: "YaariaanSeries",
        img: "../img/YaariaanSeries.jpg",
        genre: "Must Watch Originals"
      },
      {
        title: "Gaanth",
        img: "../img/Gaanth.jpg",
        genre: "Must Watch Originals"
      },
      {
        title: "Aashikana",
        img: "../img/Aashikana.jpg",
        genre: "Must Watch Originals"
      },
      {
        title: "HanumanSeries",
        img: "../img/HanumanSeries.jpg",
        genre: "Must Watch Originals"
      },

      // 2nd box
      {
        title: "TrialSeries",
        img: "../img/TrialSeries.jpg",
        genre: "House Of Dramas"
      },
      {
        title: "Rambo In Love",
        img: "../img/RamboInLove.jpg",
        genre: "House Of Dramas"
      },
      {
        title: "MangalLakshmi",
        img: "../img/mangalLakshmi.jpg",
        genre: "House Of Dramas"
      },
      {
        title: "Kobali Series",
        img: "../img/KobaliSeries.jpg",
        genre: "House Of Dramas"
      },
      {
        title: "Thukra Ke Pyaar Mera",
        img: "../img/Thukra_ke_Pyaar_Mera.jpg",
        genre: "House Of Dramas"
      },
      {
        title: "Gunaah",
        img: "../img/Gunaah.jpg",
        genre: "House Of Dramas"
      },
      {
        title: "Tharla tar mag",
        img: "../img/tharla-mag-serial.jpg",
        genre: "House Of Dramas"
      },
      {
        title: "Pariniti Serial",
        img: "../img/ParinitiSerial.jpg",
        genre: "House Of Dramas"
      },
      {
        title: "Yeh Ristha Kya Khelata he",
        img: "../img/yeh-rista-serial.jpg",
        genre: "House Of Dramas"
      },
      {
        title: "Illegal",
        img: "../img/IllegalSeries.jpg",
        genre: "House Of Dramas"
      },
      {
        title: "Apolina",
        img: "../img/Apolina.jpg",
        genre: "House Of Dramas"
      },
      {
        title: "Devmanush",
        img: "../img/devmanush-serial.jpg",
        genre: "House Of Dramas"
      },
      {
        title: "Kabali",
        img: "../img/Kabali.jpg",
        genre: "House Of Dramas"
      },
      {
        title: "vikramVedha",
        img: "../img/Vikramvedha.jpg",
        genre: "House Of Dramas"
      },
      // 3rd Box
      {
        title: "bigBoss",
        img: "../img/bigboss.jpg",
        genre: "Popular Serials"
      },
      {
        title: "Anupama",
        img: "../img/anupama-serial.jpg",
        genre: "Popular Serials"
      },
      {
        title: "ristakyakhelatahe",
        img: "../img/yeh-rista-serial.jpg",
        genre: "Popular Serials"
      },
      {
        title: "Tharlamag",
        img: "../img/tharla-mag-serial.jpg",
        genre: "Popular Serials",
      },
      {
        title: "Mannat",
        img: "../img/mannat-serial.jpg",
        genre: "Popular Serials"
      },
      {
        title: "Devmanush",
        img: "../img/devmanush-serial.jpg",
        genre: "Popular Serials"
      },
      {
        title: "Mitwa",
        img: "../img/mitwa-serial.jpg",
        genre: "Popular Serials"
      },
      {
        title: "udneKiaasha",
        img: "../img/UdnekiAasha.jpg",
        genre: "Popular Serials"
      },
      {
        title: "mangalLakshmi",
        img: "../img/mangalLakshmi.jpg",
        genre: "Popular Serials"
      },
      {
        title: "Mahabharat",
        img: "../img/Mahabharat.jpg",
        genre: "Popular Serials"
      },
      {
        title: "Jhanak",
        img: "../img/Jhanak.jpg",
        genre: "Popular Serials",
      },
      {
        title: "Swabhimaan",
        img: "../img/Swabhimaan.jpg",
        genre: "Popular Serials"
      },
      {
        title: "radhaKrishna",
        img: "../img/radhaKrishna.jpg",
        genre: "Popular Serials"
      },
      {
        title: "tulaJapnaar",
        img: "../img/tulaJapnaar.jpg",
        genre: "Popular Serials"
      },
      // 4th box
      {
        title: "Healer",
        img: "../img/Healer.jpg",
        genre: "Shows You Can't Miss"
      },
      {
        title: "Irrational",
        img: "../img/Irrational.jpg",
        genre: "Shows You Can't Miss"
      },
      {
        title: "Ashoka",
        img: "../img/Ashoka.jpg",
        genre: "Shows You Can't Miss"
      },
      {
        title: "BigMouth",
        img: "../img/BigMouth.jpg",
        genre: "Shows You Can't Miss"
      },
      {
        title: "Moon Knight",
        img: "../img/MoonKnight.jpg",
        genre: "Shows You Can't Miss"
      },
      {
        title: "WandaVision",
        img: "../img/WandaVision.jpg",
        genre: "Shows You Can't Miss"
      },
      {
        title: "ThePitt",
        img: "../img/ThePitt.jpg",
        genre: "Shows You Can't Miss"
      },
      {
        title: "Loki",
        img: "../img/Loki.jpg",
        genre: "Shows You Can't Miss"
      },
      {
        title: "The Hunting Party",
        img: "../img/The_Hunting_Party.jpg",
        genre: "Shows You Can't Miss"
      },
      {
        title: "SharkTank",
        img: "../img/SharkTank.jpg",
        genre: "Shows You Can't Miss"
      },
      {
        title: "Succession",
        img: "../img/Succession.jpg",
        genre: "Shows You Can't Miss"
      },
      {
        title: "Tokyo Revengers",
        img: "../img/tokyoRevengers.jpg",
        genre: "Shows You Can't Miss"
      },
      {
        title: "CB Strike",
        img: "../img/CB_Strike.jpg",
        genre: "Shows You Can't Miss"
      },
      {
        title: "Law And Order",
        img: "../img/Law_And_Order.jpg",
        genre: "Shows You Can't Miss"
      },
      // 5th Box
      {
        title: "jujutsuKiasen",
        img: "../img/jujutsu-anime.jpg",
        genre: "Top Rated Animes!"
      },
      {
        title: "onepiece",
        img: "../img/onepiece-anime.jpg",
        genre: "Top Rated Animes!"
      },
      {
        title: "demonSlayer",
        img: "../img/demon-slayer.jpg",
        genre: "Top Rated Animes!"
      },
      {
        title: "Naruto",
        img: "../img/naruto.jpg",
        genre: "Top Rated Animes!"
      },
      {
        title: "AttackonTitan",
        img: "../img/Aot.jpg",
        genre: "Top Rated Animes!"
      },
      {
        title: "Bleach",
        img: "../img/bleach.jpg",
        genre: "Top Rated Animes!"
      },
      {
        title: "deathNote",
        img: "../img/death-note.jpg",
        genre: "Top Rated Animes!"
      },
      {
        title: "Haikyuu",
        img: "../img/haikyuu.jpg",
        genre: "Top Rated Animes!"
      },
      {
        title: "spyFamily",
        img: "../img/spyFamily.jpg",
        genre: "Top Rated Animes!"
      },
      {
        title: "assasinationClasroom",
        img: "../img/assasinationClassroom.jpg",
        genre: "Top Rated Animes!"
      },
      {
        title: "mushukoTensei",
        img: "../img/mushukoTensei.jpg",
        genre: "Top Rated Animes!"
      },
      {
        title: "jhunjiltoCollection",
        img: "../img/jhunjiltoCollection.jpg",
        genre: "Top Rated Animes!"
      },
      {
        title: "myheroAcademia",
        img: "../img/myheroAcademia.jpg",
        genre: "Top Rated Animes!"
      },
      {
        title: "blackButtler",
        img: "../img/blackButtler.jpg",
        genre: "Top Rated Animes!"
      },
      // 6th Box
      {
        title: "Doraemon",
        img: "../img/doraemon.jpg",
        genre: "Popular Kids Shows"
      },
      {
        title: "Shinchan",
        img: "../img/shinchan.jpg",
        genre: "Popular Kids Shows"
      },
      {
        title: "TomandJerry",
        img: "../img/tom-and-cherry.jpg",
        genre: "Popular Kids Shows"
      },
      {
        title: "Ben10",
        img: "../img/ben10.jpg",
        genre: "Popular Kids Shows"
      },
      {
        title: "motuPatlu",
        img: "../img/motu-patlu.jpg",
        genre: "Popular Kids Shows"
      },
      {
        title: "Woody",
        img: "../img/woody.jpg",
        genre: "Popular Kids Shows"
      },
      {
        title: "mickyMouse",
        img: "../img/micky-mouse.jpg",
        genre: "Popular Kids Shows"
      },
      {
        title: "ninjaHattori",
        img: "../img/ninjaHattori.png",
        genre: "Popular Kids Shows"
      },
      {
        title: "munkiTrunk",
        img: "../img/munkiTrunk.jpg",
        genre: "Popular Kids Shows"
      },
      {
        title: "Ainbo",
        img: "../img/Ainbo.jpg",
        genre: "Popular Kids Shows"
      },
      {
        title: "chikooAurbunty",
        img: "../img/chikooAurbunty.jpg",
        genre: "Popular Kids Shows"
      },
      {
        title: "peppaPig",
        img: "../img/peppaPig.jpg",
        genre: "Popular Kids Shows"
      },
      {
        title: "Bajrangi",
        img: "../img/Bajrangi.jpg",
        genre: "Popular Kids Shows"
      },
      {
        title: "mashaAndbeer",
        img: "../img/mashaAndbeer.jpg",
        genre: "Popular Kids Shows"
      },
      // 7th Box
      {
        title: "Money_Heist",
        img: "../img/Money_Heist.jpg",
        genre: "Shows Recommended For You"
      },
      {
        title: "Kerala Files",
        img: "../img/Kerala_Files.jpg",
        genre: "Shows Recommended For You"
      },
      {
        title: "Parampara",
        img: "../img/Parampara.jpg",
        genre: "Shows Recommended For You"
      },
      {
        title: "CriminalJustice",
        img: "../img/CriminalJustice.jpg",
        genre: "Shows Recommended For You"
      },
      {
        title: "Ekaki",
        img: "../img/Ekaki.jpg",
        genre: "Shows Recommended For You"
      },
      {
        title: "Bhay",
        img: "../img/Bhay.jpg",
        genre: "Shows Recommended For You"
      },
      {
        title: "Mahabharat",
        img: "../img/Mahabharat.jpg",
        genre: "Shows Recommended For You"
      },
      {
        title: "The Legend Of Hanuman",
        img: "../img/The_Legend_Of_Hanuman.jpg",
        genre: "Shows Recommended For You"
      },
      {
        title: "Asur2",
        img: "../img/Asur2.jpg",
        genre: "Shows Recommended For You"
      },
      {
        title: "SquidGame",
        img: "../img/SquidGame.jpg",
        genre: "Shows Recommended For You"
      },
      {
        title: "Alice_In_Borderland",
        img: "../img/Alice_In_Borderland.jpg",
        genre: "Shows Recommended For You"
      },
      {
        title: "Ziddi Ishq",
        img: "../img/Ziddi_Ishq.jpg",
        genre: "Shows Recommended For You"
      },
      {
        title: "Stranger Things",
        img: "../img/Stranger_Things.jpg",
        genre: "Shows Recommended For You"
      },
      {
        title: "lagna nanter hoilach prem",
        img: "../img/lagna_nanter_hoilach_prem.jpg",
        genre: "Shows Recommended For You"
      },
    ]
    const parentBox = document.querySelector('.parent-box')
    const genreMap = {}
    boxesData.forEach(boxData => {
      const Genre = boxData.Genre
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
