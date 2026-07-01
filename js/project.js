// let events = [
//   {
//     id: 1,
//     eventTitle: "Campaign",
//     eventDesc: "This is the event description",
//     eventMedia: [
//       "path1/path2/path2",
//       "path1/path2/path3",
//       "vidpath/vidpath/vidpath"
//     ]
//   },
// ] 

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
        title: "Bajirao Mastani",
        img: "../img/bajirao-mastani.jpg"
      },
      {
        title: "Pushpa 2",
        img: "../img/Pushpa.jpg"
      },
      {
        title: "Luckybhaskar",
        img: "../img/Luckybhaskar.jpg"
      },
      {
        title: "Master",
        img: "../img/Master.jpg"
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
        title: "Shaitaan",
        img: "../img/Shaitaan.jpg",
        genre: "Latest Releases"
      },
      {
        title: "Avengers",
        img: "../img/Avengers.jpg",
        genre: "Latest Releases"
      },
      {
        title: "Hanuman",
        img: "../img/hanuman.jpg",
        genre: "Latest Releases"
      },
      {
        title: "thelandBeforetime",
        img: "../img/landb.jpg",
        genre: "Latest Releases"
      },
      {
        title: "jurassicWorld",
        img: "../img/jurassic-world.jpg",
        genre: "Latest Releases"
      },
      {
        title: "Kantara",
        img: "../img/kantara.jpg",
        genre: "Latest Releases"
      },
      {
        title: "Thama",
        img: "../img/thama.jpg",
        genre: "Latest Releases"
      },
      {
        title: "rathnan-prapancha",
        img: "../img/rathnan-prapancha.jpg",
        genre: "Latest Releases"
      },
      {
        title: "Zebra",
        img: "../img/Zebra.jpg",
        genre: "Latest Releases"
      },
      {
        title: "Lokha",
        img: "../img/lokah.jpg",
        genre: "Latest Releases"
      },
      {
        title: "radheSham",
        img: "../img/Radhe-sham.jpg",
        genre: "Latest Releases"
      },
      {
        title: "bubbleGum",
        img: "../img/Bubblegum.jpg",
        genre: "Latest Releases"
      },
      {
        title: "Wicked",
        img: "../img/Wicked.jpg",
        genre: "Latest Releases"
      },
      {
        title: "paramSundari",
        img: "../img/paramSundari.jpg",
        genre: "Latest Releases"
      },

      // 2nd box
      {
        title: "Jawan",
        img: "../img/Jawan.jpg",
        genre: "Action Extavaganza"
      },
      {
        title: "Terminator",
        img: "../img/Terminator.jpg",
        genre: "Action Extavaganza"
      },
      {
        title: "Leo",
        img: "../img/Leo.jpg",
        genre: "Action Extavaganza"
      },
      {
        title: "justiceLeague",
        img: "../img/Justice-league.jpg",
        genre: "Action Extavaganza"
      },
      {
        title: "bhootPolice",
        img: "../img/Bhoot-police.jpg",
        genre: "Action Extavaganza"
      },
      {
        title: "blackPanther",
        img: "../img/Black-panther.png",
        genre: "Action Extavaganza"
      },
      {
        title: "masterMovie",
        img: "../img/Master-movie.jpg",
        genre: "Action Extavaganza"
      },
      {
        title: "Jumanji",
        img: "../img/Jumanji.jpg",
        genre: "Action Extavaganza"
      },
      {
        title: "VR",
        img: "../img/VR.jpg",
        genre: "Action Extavaganza"
      },
      {
        title: "Salaar",
        img: "../img/Salaar.jpg",
        genre: "Action Extavaganza"
      },
      {
        title: "King-of-Kotha",
        img: "../img/King-Of-Kotha.jpg",
        genre: "Action Extavaganza"
      },
      {
        title: "Mirai",
        img: "../img/Mirai.jpg",
        genre: "Action Extavaganza"
      },
      {
        title: "Kabali",
        img: "../img/Kabali.jpg",
        genre: "Action Extavaganza"
      },
      {
        title: "vikramVedha",
        img: "../img/Vikramvedha.jpg",
        genre: "Action Extavaganza"
      },
      // 3rd Box
      {
        title: "bigBoss",
        img: "../img/bigboss.jpg",
        genre: "Popular Tvshows"
      },
      {
        title: "Anupama",
        img: "../img/anupama-serial.jpg",
        genre: "Popular Tvshows"
      },
      {
        title: "ristakyakhelatahe",
        img: "../img/yeh-rista-serial.jpg",
        genre: "Popular Tvshows"
      },
      {
        title: "Tharlamag",
        img: "../img/tharla-mag-serial.jpg",
        genre: "Popular Tvshows",
      },
      {
        title: "Mannat",
        img: "../img/mannat-serial.jpg",
        genre: "Popular Tvshows"
      },
      {
        title: "Devmanush",
        img: "../img/devmanush-serial.jpg",

        genre: "Popular Tvshows"
      },
      {
        title: "Mitwa",
        img: "../img/mitwa-serial.jpg",
        genre: "Popular Tvshows"
      },
      {
        title: "udneKiaasha",
        img: "../img/UdnekiAasha.jpg",
        genre: "Popular Tvshows"
      },
      {
        title: "mangalLakshmi",
        img: "../img/mangalLakshmi.jpg",
        genre: "Popular Tvshows"
      },
      {
        title: "Mahabharat",
        img: "../img/Mahabharat.jpg",
        genre: "Popular Tvshows"
      },
      {
        title: "Jhanak",
        img: "../img/Jhanak.jpg",
        genre: "Popular Tvshows",
      },
      {
        title: "Swabhimaan",
        img: "../img/Swabhimaan.jpg",
        genre: "Popular Tvshows"
      },
      {
        title: "radhaKrishna",
        img: "../img/radhaKrishna.jpg",
        genre: "Popular Tvshows"
      },
      {
        title: "tulaJapnaar",
        img: "../img/tulaJapnaar.jpg",
        genre: "Popular Tvshows"
      },
      // "womenCricket" box
      {
        title: "womenCricket",
        img: "../img/women-cricket.jpg",
        genre: "Non-stop Sports"
      },
      {
        title: "india_vs_aus",
        img: "../img/india-vs-aus.jpg",
        genre: "Non-stop Sports"
      },
      {
        title: "menT20final",
        img: "../img/men-t20final.jpg",
        genre: "Non-stop Sports"
      },
      {
        title: "Kabaddi",
        img: "../img/kabaddi.jpg",
        genre: "Non-stop Sports"
      },
      {
        title: "Ipl",
        img: "../img/ipl.jpg",
        genre: "Non-stop Sports"
      },
      {
        title: "Badminton",
        img: "../img/badminton.png",
        genre: "Non-stop Sports"
      },
      {
        title: "Football",
        img: "../img/football.jpg",
        genre: "Non-stop Sports"
      },
      {
        title: "ranjhiTrophy",
        img: "../img/ranjhiTrophy.jpg",
        genre: "Non-stop Sports"
      },
      {
        title: "iplAuctions",
        img: "../img/iplAuctions.jpg",
        genre: "Non-stop Sports"
      },
      {
        title: "indiavsSouthafrica",
        img: "../img/indiaVssouthafricatest.jpg",
        genre: "Non-stop Sports"
      },
      {
        title: "IPL",
        img: "../img/IPL2025.jpg",
        genre: "Non-stop Sports"
      },
      {
        title: "rcbCelebration",
        img: "../img/rcbCelebration.png",
        genre: "Non-stop Sports"
      },
      {
        title: "topSports",
        img: "../img/topSports.jpg",
        genre: "Non-stop Sports"
      },
      {
        title: "NationalSports",
        img: "../img/Nationalsports.jpg",
        genre: "Non-stop Sports"
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
        genre: "Kids Corner"
      },
      {
        title: "Shinchan",
        img: "../img/shinchan.jpg",
        genre: "Kids Corner"
      },
      {
        title: "TomandJerry",
        img: "../img/tom-and-cherry.jpg",
        genre: "Kids Corner"
      },
      {
        title: "Ben10",
        img: "../img/ben10.jpg",
        genre: "Kids Corner"
      },
      {
        title: "motuPatlu",
        img: "../img/motu-patlu.jpg",
        genre: "Kids Corner"
      },
      {
        title: "Woody",
        img: "../img/woody.jpg",
        genre: "Kids Corner"
      },
      {
        title: "mickyMouse",
        img: "../img/micky-mouse.jpg",
        genre: "Kids Corner"
      },
      {
        title: "ninjaHattori",
        img: "../img/ninjaHattori.png",
        genre: "Kids Corner"
      },
      {
        title: "munkiTrunk",
        img: "../img/munkiTrunk.jpg",
        genre: "Kids Corner"
      },
      {
        title: "Ainbo",
        img: "../img/Ainbo.jpg",
        genre: "Kids Corner"
      },
      {
        title: "chikooAurbunty",
        img: "../img/chikooAurbunty.jpg",
        genre: "Kids Corner"
      },
      {
        title: "peppaPig",
        img: "../img/peppaPig.jpg",
        genre: "Kids Corner"
      },
      {
        title: "Bajrangi",
        img: "../img/Bajrangi.jpg",
        genre: "Kids Corner"
      },
      {
        title: "mashaAndbeer",
        img: "../img/mashaAndbeer.jpg",
        genre: "Kids Corner"
      },
      // 7th Box
      {
        title: "Dragons",
        img: "../img/dragons-movie.jpg",
        genre: "Hollywood Superhits"
      },
      {
        title: "Fastx",
        img: "../img/fastx.jpeg",
        genre: "Hollywood Superhits"
      },
      {
        title: "Ironman",
        img: "../img/ironman.jpg",
        genre: "Hollywood Superhits"
      },
      {
        title: "FastandFurious",
        img: "../img/fast-and-furious.jpg",
        genre: "Hollywood Superhits"
      },
      {
        title: "openHeighmer",
        img: "../img/openheighmer.jpeg",
        genre: "Hollywood Superhits"
      },
      {
        title: "Dc",
        img: "../img/dc.jpg",
        genre: "Hollywood Superhits"
      },
      {
        title: "Anora",
        img: "../img/anora.jpg",
        genre: "Hollywood Superhits"
      },
      {
        title: "deadpoolWolverin",
        img: "../img/deadpoolWolverin.jpg",
        genre: "Hollywood Superhits"
      },
      {
        title: "disneyTangled",
        img: "../img/disneyTangled.jpg",
        genre: "Hollywood Superhits"
      },
      {
        title: "disneyCars",
        img: "../img/disneyCars.jpg",
        genre: "Hollywood Superhits"
      },
      {
        title: "planetOfapes",
        img: "../img/planetOfapes.jpg",
        genre: "Hollywood Superhits"
      },
      {
        title: "alienCovinant",
        img: "../img/alienCovinant.jpg",
        genre: "Hollywood Superhits"
      },
      {
        title: "insideOut2",
        img: "../img/insideOut2.jpg",
        genre: "Hollywood Superhits"
      },
      {
        title: "avengerInfinitywar",
        img: "../img/avengerInfinitywar.jpg",
        genre: "Hollywood Superhits"
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










