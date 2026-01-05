window.addEventListener("load", () => {

  const sidebarIcon = document.querySelector('.sidebar')
  const sidebarMenu = document.querySelector('#side-menu')

  sidebarIcon.addEventListener('click', () => {
    sidebarMenu.classList.toggle('active')
  })
  functions.cardDataBinding()

  startslider()
  slide_left_rightbtn()
  boxDetailstore.childBoxes()
  upButton()
  toggleTheme()
  card_right_slide()
})

const functions = {
  cardDataBinding: function () {
    // A variable that contains data in json format
    const cardsData = [
      {
        title: "D_Block",
        img: "../img/D_Block.jpg"
      },
      {
        title: "Vikrant rona",
        img: "../img/VR.jpg"
      },
      {
        title: "Stree2",
        img: "../img/Stree2.jpg"
      },
      {
        title: "Sairat",
        img: "../img/Sairat.jpg"
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
        title: "The Dark Sphere",
        img: "../img/The_dark_sphere.jpg",
        Genre: "New Movies for You"
      },
      {
        title: "parantu po",
        img: "../img/parantu_po.jpg",
        Genre: "New Movies for You"
      },
      {
        title: "Kramp",
        img: "../img/K_ramp.jpg",
        Genre: "New Movies for You"
      },
      {
        title: "40 Acres",
        img: "../img/40_Acres.jpg",
        Genre: "New Movies for You"
      },
      {
        title: "Blind_spot",
        img: "../img/Blind_spot.jpg",
        Genre: "New Movies for You"
      },
      {
        title: "Kantara",
        img: "../img/kantara.jpg",
        Genre: "New Movies for You"
      },
      {
        title: "Bempura",
        img: "../img/Bempura.jpg",
        Genre: "New Movies for You"
      },
      {
        title: "rathnan-prapancha",
        img: "../img/rathnan-prapancha.jpg",
        Genre: "New Movies for You"
      },
      {
        title: "Zebra",
        img: "../img/Aan_pavam.jpg",
        Genre: "New Movies for You"
      },
      {
        title: "Lokha",
        img: "../img/lokah.jpg",
        Genre: "New Movies for You"
      },
      {
        title: "radheSham",
        img: "../img/Radhe-sham.jpg",
        Genre: "New Movies for You"
      },
      {
        title: "Kesari chapter 2",
        img: "../img/Kesari_chapter_2.jpg",
        Genre: "New Movies for You"
      },
      {
        title: "The Attack of 26/11",
        img: "../img/The_attack_of_2611.jpg",
        Genre: "New Movies for You"
      },
      {
        title: "paramSundari",
        img: "../img/paramSundari.jpg",
        Genre: "New Movies for You"
      },

      // 2nd box
      {
        title: "Jawan",
        img: "../img/Jawan.jpg",
        Genre: "Popular Movies"
      },
      {
        title: "Terminator",
        img: "../img/Terminator.jpg",
        Genre: "Popular Movies"
      },
      {
        title: "Leo",
        img: "../img/Leo.jpg",
        Genre: "Popular Movies"
      },
      {
        title: "justiceLeague",
        img: "../img/Justice-league.jpg",
        Genre: "Popular Movies"
      },
      {
        title: "Sister Midnight",
        img: "../img/Sister_midnight.jpg",
        Genre: "Popular Movies"
      },
      {
        title: "blackPanther",
        img: "../img/Black-panther.png",
        Genre: "Popular Movies"
      },
      {
        title: "masterMovie",
        img: "../img/Master-movie.jpg",
        Genre: "Popular Movies"
      },
      {
        title: "Jumanji",
        img: "../img/Jumanji.jpg",
        Genre: "Popular Movies"
      },
      {
        title: "VR",
        img: "../img/VR.jpg",
        Genre: "Popular Movies"
      },
      {
        title: "Tanhaji",
        img: "../img/Tanhaji.jpg",
        Genre: "Popular Movies"
      },
      {
        title: "King-of-Kotha",
        img: "../img/King-Of-Kotha.jpg",
        Genre: "Popular Movies"
      },
      {
        title: "Bloody Daddy",
        img: "../img/Bloody_daddy.jpg",
        Genre: "Popular Movies"
      },
      {
        title: "Kabali",
        img: "../img/Kabali.jpg",
        Genre: "Popular Movies"
      },
      {
        title: "vikramVedha",
        img: "../img/Vikramvedha.jpg",
        Genre: "Popular Movies"
      },
      // 3rd Box
      {
        title: "Munjhya",
        img: "../img/Munjhya.jpg",
        Genre: "Horror Movies"
      },
      {
        title: "Train to busan",
        img: "../img/Train_to_busan.jpg",
        Genre: "Horror Movies"
      },
      {
        title: "Annabella",
        img: "../img/Annabella.jpg",
        Genre: "Horror Movies"
      },
      {
        title: "Terrifier",
        img: "../img/Terrifier.jpg",
        Genre: "Horror Movies",
      },
      {
        title: "Alien Covinant.",
        img: "../img/alienCovinant.jpg",
        Genre: "Horror Movies"
      },
      {
        title: "Aranmanai_4",
        img: "../img/Aranmanai_4.jpg",
        Genre: "Horror Movies"
      },
      {
        title: "Do Not Enter",
        img: "../img/Do_not_enter.jpg",
        Genre: "Horror Movies"
      },
      {
        title: "Lift",
        img: "../img/Lift.jpg",
        Genre: "Horror Movies"
      },
      {
        title: "I Saw the Devil",
        img: "../img/I_saw_the_devil.jpg",
        Genre: "Horror Movies"
      },
      {
        title: "Romamcham",
        img: "../img/Romamcham.jpg",
        Genre: "Horror Movies"
      },
      {
        title: "Maneater",
        img: "../img/Maneater.jpg",
        Genre: "Horror Movies",
      },
      {
        title: "Knock at cabin",
        img: "../img/Knock_at_cabin.jpg",
        Genre: "Horror Movies"
      },
      {
        title: "Bhediya",
        img: "../img/bhediya.jpg",
        Genre: "Horror Movies"
      },
      {
        title: "Sinners",
        img: "../img/Sinners.jpg",
        Genre: "Horror Movies"
      },
      // "womenCricket" box
      {
        title: "sitaramam",
        img: "../img/sitaramam.jpg",
        Genre: "Romance Movies"
      },
      {
        title: "Khuda haafiz",
        img: "../img/Khuda_haafiz.jpg",
        Genre: "Romance Movies"
      },
      {
        title: "Duniyadari",
        img: "../img/Duniyadari.jpg",
        Genre: "Romance Movies"
      },
      {
        title: "Zara hatke",
        img: "../img/Zara_hatke.jpg",
        Genre: "Romance Movies"
      },
      {
        title: "The family star",
        img: "../img/The_family_star.jpg",
        Genre: "Romance Movies"
      },
      {
        title: "Premalu",
        img: "../img/Premalu.jpg",
        Genre: "Romance Movies"
      },
      {
        title: "Sanam re",
        img: "../img/Sanam_re.jpg",
        Genre: "Romance Movies"
      },
      {
        title: "liger",
        img: "../img/liger.jpg",
        Genre: "Romance Movies"
      },
      {
        title: "ved",
        img: "../img/ved.jpg",
        Genre: "Romance Movies"
      },
      {
        title: "Tadap",
        img: "../img/Tadap.jpg",
        Genre: "Romance Movies"
      },
      {
        title: "Badshaho",
        img: "../img/Badshaho.jpg",
        Genre: "Romance Movies"
      },
      {
        title: "Student of year",
        img: "../img/Student_of_year.jpg",
        Genre: "Romance Movies"
      },
      {
        title: "Game of love",
        img: "../img/Game_of_love.jpg",
        Genre: "Romance Movies"
      },
      {
        title: "Titanic",
        img: "../img/Titanic.jpg",
        Genre: "Romance Movies"
      },
      // 5th Box
      {
        title: "Super 30",
        img: "../img/Super_30.jpg",
        Genre: "Inspirational Movies"
      },
      {
        title: "Ms_Dhoni",
        img: "../img/Ms_Dhoni.jpg",
        Genre: "Inspirational Movies"
      },
      {
        title: "Mission mangal",
        img: "../img/Mission_mangal.jpg",
        Genre: "Inspirational Movies"
      },
      {
        title: "Bhuj",
        img: "../img/Bhuj.jpg",
        Genre: "Inspirational Movies"
      },
      {
        title: "Rocketry",
        img: "../img/Rocketry.jpg",
        Genre: "Inspirational Movies"
      },
      {
        title: "12th fail",
        img: "../img/12th_fail.jpg",
        Genre: "Inspirational Movies"
      },
      {
        title: "83 movie",
        img: "../img/83_movie.jpg",
        Genre: "Inspirational Movies"
      },
      {
        title: "Panga",
        img: "../img/Panga.jpg",
        Genre: "Inspirational Movies"
      },
      {
        title: "Baghavant kesari",
        img: "../img/Baghavant_kesari.jpg",
        Genre: "Inspirational Movies"
      },
      {
        title: "Sarfira",
        img: "../img/Sarfira.jpg",
        Genre: "Inspirational Movies"
      },
      {
        title: "Neru",
        img: "../img/Neru.jpg",
        Genre: "Inspirational Movies"
      },
      {
        title: "Captain marvel",
        img: "../img/Captain_marvel.jpg",
        Genre: "Inspirational Movies"
      },
      {
        title: "Raya the last dragon",
        img: "../img/Raya_the_last_dragon.jpg",
        Genre: "Inspirational Movies"
      },
      {
        title: "Brave",
        img: "../img/Brave.jpg",
        Genre: "Inspirational Movies"
      },
      // 6th Box
      {
        title: "The lion king",
        img: "../img/The_lion_king.jpg",
        Genre: "Popular Kids Movies"
      },
      {
        title: "Alladin",
        img: "../img/Alladin.jpg",
        Genre: "Popular Kids Movies"
      },
      {
        title: "Kung_fu_panda",
        img: "../img/Kung_fu_panda.jpg",
        Genre: "Popular Kids Movies"
      },
      {
        title: "Moana2",
        img: "../img/Moana2.jpg",
        Genre: "Popular Kids Movies"
      },
      {
        title: "How to train your dragon 2",
        img: "../img/How_to_train_your_dragon2.jpg",
        Genre: "Popular Kids Movies"
      },
      {
        title: "Motu patlu kungfu king",
        img: "../img/Motu_patlu_kungfu_king.jpg",
        Genre: "Popular Kids Movies"
      },
      {
        title: "The Bad Guys",
        img: "../img/The_bad_guys.jpg",
        Genre: "Popular Kids Movies"
      },
      {
        title: "ninjaHattori",
        img: "../img/ninjaHattori.png",
        Genre: "Popular Kids Movies"
      },
      {
        title: "munkiTrunk",
        img: "../img/munkiTrunk.jpg",
        Genre: "Popular Kids Movies"
      },
      {
        title: "Ainbo",
        img: "../img/Ainbo.jpg",
        Genre: "Popular Kids Movies"
      },
      {
        title: "chikooAurbunty",
        img: "../img/chikooAurbunty.jpg",
        Genre: "Popular Kids Movies"
      },
      {
        title: "peppaPig",
        img: "../img/peppaPig.jpg",
        Genre: "Popular Kids Movies"
      },
      {
        title: "Bajrangi",
        img: "../img/Bajrangi.jpg",
        Genre: "Popular Kids Movies"
      },
      {
        title: "mashaAndbeer",
        img: "../img/mashaAndbeer.jpg",
        Genre: "Popular Kids Movies"
      },
      // 7th Box
      {
        title: "Dragons",
        img: "../img/dragons-movie.jpg",
        Genre: "Hollywood Superhits"
      },
      {
        title: "Fastx",
        img: "../img/fastx.jpeg",
        Genre: "Hollywood Superhits"
      },
      {
        title: "Ironman",
        img: "../img/ironman.jpg",
        Genre: "Hollywood Superhits"
      },
      {
        title: "FastandFurious",
        img: "../img/fast-and-furious.jpg",
        Genre: "Hollywood Superhits"
      },
      {
        title: "openHeighmer",
        img: "../img/openheighmer.jpeg",
        Genre: "Hollywood Superhits"
      },
      {
        title: "Dc",
        img: "../img/dc.jpg",
        Genre: "Hollywood Superhits"
      },
      {
        title: "Anora",
        img: "../img/anora.jpg",
        Genre: "Hollywood Superhits"
      },
      {
        title: "deadpoolWolverin",
        img: "../img/deadpoolWolverin.jpg",
        Genre: "Hollywood Superhits"
      },
      {
        title: "disneyTangled",
        img: "../img/disneyTangled.jpg",
        Genre: "Hollywood Superhits"
      },
      {
        title: "disneyCars",
        img: "../img/disneyCars.jpg",
        Genre: "Hollywood Superhits"
      },
      {
        title: "planetOfapes",
        img: "../img/planetOfapes.jpg",
        Genre: "Hollywood Superhits"
      },
      {
        title: "alienCovinant",
        img: "../img/alienCovinant.jpg",
        Genre: "Hollywood Superhits"
      },
      {
        title: "insideOut2",
        img: "../img/insideOut2.jpg",
        Genre: "Hollywood Superhits"
      },
      {
        title: "avengerInfinitywar",
        img: "../img/avengerInfinitywar.jpg",
        Genre: "Hollywood Superhits"
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
      box.innerHTML = `<img src="${boxData.img}" alt="${boxData.title}" srcset="" />`
      genreMap[Genre].appendChild(box)
    })
  },
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
// Dark-light mode
function toggleTheme() {
  const body = document.body
  const Icon = document.querySelector('#icons')
  body.classList.toggle("dark_theme")

  if (body.classList.contains("dark_theme")) {
    Icon.classList.replace('fa-sun', 'fa-moon');
    document.documentElement.classList.add('dark_theme')

  } else {
    Icon.classList.replace('fa-moon', 'fa-sun')
    document.documentElement.classList.remove('dark_theme')
  }
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
