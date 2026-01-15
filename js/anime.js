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
        Genre: "Exciting Animes"
      },
      {
        title: "Tawawa_on_monday",
        img: "../img/Tawawa_on_monday.jpg",
        Genre: "Exciting Animes"
      },
      {
        title: "haikyuu",
        img: "../img/haikyuu.jpg",
        Genre: "Exciting Animes"
      },
      {
        title: "the_detective_is_already_dead",
        img: "../img/the_detective_is_already_dead.jpg",
        Genre: "Exciting Animes"
      },
      {
        title: "Apothecary_diaries",
        img: "../img/Apothecary_diaries.jpg",
        Genre: "Exciting Animes"
      },
      {
        title: "Gachiakuta",
        img: "../img/Gachiakuta.jpg",
        Genre: "Exciting Animes"
      },
      {
        title: "Dr_stone",
        img: "../img/Dr_stone.jpg",
        Genre: "Exciting Animes"
      },
      {
        title: "Kaiju_no_8",
        img: "../img/Kaiju_no_8.jpg",
        Genre: "Exciting Animes"
      },
      {
        title: "sakamoto_days",
        img: "../img/sakamoto_days.jpg",
        Genre: "Exciting Animes"
      },
      {
        title: "Solo_levelling",
        img: "../img/Solo_levelling.jpg",
        Genre: "Exciting Animes"
      },
      {
        title: "Dandadan",
        img: "../img/Dandadan.jpg",
        Genre: "Exciting Animes"
      },
      {
        title: "Wind_breaker",
        img: "../img/Wind_breaker.jpg",
        Genre: "Exciting Animes"
      },
      {
        title: "Wicked",
        img: "../img/Wicked.jpg",
        Genre: "Exciting Animes"
      },
      {
        title: "My_dressup_darling",
        img: "../img/My_dressup_darling.jpg",
        Genre: "Exciting Animes"
      },

      // 2nd box
      {
        title: "Fire_force",
        img: "../img/Fire_force.jpg",
        Genre: "Action and Adventure"
      },
      {
        title: "Lord_of_mystery",
        img: "../img/Lord_of_mystery.jpg",
        Genre: "Action and Adventure"
      },
      {
        title: "Takopis_original_sin",
        img: "../img/Takopis_original_sin.jpg",
        Genre: "Action and Adventure"
      },
      {
        title: "To_be_hero_x",
        img: "../img/To_be_hero_x.jpg",
        Genre: "Action and Adventure"
      },
      {
        title: "Blackbuttler",
        img: "../img/blackButtler.jpg",
        Genre: "Action and Adventure"
      },
      {
        title: "MyheroAcademia",
        img: "../img/myheroAcademia.jpg",
        Genre: "Action and Adventure"
      },
      {
        title: "Medalist",
        img: "../img/Medalist.jpg",
        Genre: "Action and Adventure"
      },
      {
        title: "The Fragrant Flower",
        img: "../img/The_fragrant_flower.jpg",
        Genre: "Action and Adventure"
      },
      {
        title: "Onepiece Anime",
        img: "../img/onepiece-anime.jpg",
        Genre: "Action and Adventure"
      },
      {
        title: "Chainsaw_Man",
        img: "../img/Chainsaw_Man.jpg",
        Genre: "Action and Adventure"
      },
      {
        title: "Tokyo Ghoul",
        img: "../img/Tokyo_ghoul.jpg",
        Genre: "Action and Adventure"
      },
      {
        title: "Black Cover",
        img: "../img/Black_Cover.jpg",
        Genre: "Action and Adventure"
      },
      {
        title: "FairyTail",
        img: "../img/FairyTail.jpg",
        Genre: "Action and Adventure"
      },
      {
        title: "Kill_Anime",
        img: "../img/Kill_Anime.jpg",
        Genre: "Action and Adventure"
      },
      // 3rd Box
      {
        title: "Sword Art Online",
        img: "../img/Sword_art_online.jpg",
        Genre: "Popular Animes"
      },
      {
        title: "Slime",
        img: "../img/Slime.jpg",
        Genre: "Popular Animes"
      },
      {
        title: "The rising of slime hero",
        img: "../img/The_rising_of_slime_hero.jpg",
        Genre: "Popular Animes"
      },
      {
        title: "Silent_voice",
        img: "../img/Silent_voice.jpg",
        Genre: "Popular Animes",
      },
      {
        title: "The_promised_neverland",
        img: "../img/The_promised_neverland.jpg",
        Genre: "Popular Animes"
      },
      {
        title: "Your_name",
        img: "../img/Your_name.jpg",

        Genre: "Popular Animes"
      },
      {
        title: "frieren",
        img: "../img/frieren.jpg",
        Genre: "Popular Animes"
      },
      {
        title: "Hell Paradise",
        img: "../img/Hell_paradise.jpg",
        Genre: "Popular Animes"
      },
      {
        title: "Tokyo Revengers",
        img: "../img/tokyoRevengers.jpg",
        Genre: "Popular Animes"
      },
      {
        title: "Blue Lock",
        img: "../img/Blue_lock.jpg",
        Genre: "Popular Animes"
      },
      {
        title: "Winland Saga",
        img: "../img/Winland_saga.jpg",
        Genre: "Popular Animes",
      },
      {
        title: "Bungo_straydogs",
        img: "../img/Bungo_straydogs.jpg",
        Genre: "Popular Animes"
      },
      {
        title: "Mashle",
        img: "../img/Mashle.jpg",
        Genre: "Popular Animes"
      },
      {
        title: "Horimiya",
        img: "../img/Horimiya.jpg",
        Genre: "Popular Animes"
      },
      // "womenCricket" box
      {
        title: "Demon Slayer",
        img: "../img/demon-slayer.jpg",
        Genre: "Amazing Movies"
      },
      {
        title: "Detective Cannon Movie",
        img: "../img/Detective_cannon_movie.jpg",
        Genre: "Amazing Movies"
      },
      {
        title: "Chainsaw Man Movie",
        img: "../img/Chainsaw_Man_Movie.jpg",
        Genre: "Amazing Movies"
      },
      {
        title: "Jujutsu Kaisen Movie",
        img: "../img/Jujutsu_kaisen_Movie.jpg",
        Genre: "Amazing Movies"
      },
      {
        title: "The Rose Movie",
        img: "../img/The_rose_movie.jpg",
        Genre: "Amazing Movies"
      },
      {
        title: "Doraemon_movie",
        img: "../img/Doraemon_movie.jpg",
        Genre: "Amazing Movies"
      },
      {
        title: "100_meters",
        img: "../img/100_meters.jpg",
        Genre: "Amazing Movies"
      },
      {
        title: "Mononuku",
        img: "../img/Mononuku.jpg",
        Genre: "Amazing Movies"
      },
      {
        title: "Lost_in_starlight",
        img: "../img/Lost_in_starlight.jpg",
        Genre: "Amazing Movies"
      },
      {
        title: "indiavsSouthafrica",
        img: "../img/indiaVssouthafricatest.jpg",
        Genre: "Amazing Movies"
      },
      {
        title: "IPL",
        img: "../img/IPL2025.jpg",
        Genre: "Amazing Movies"
      },
      {
        title: "rcbCelebration",
        img: "../img/rcbCelebration.png",
        Genre: "Amazing Movies"
      },
      {
        title: "topSports",
        img: "../img/topSports.jpg",
        Genre: "Amazing Movies"
      },
      {
        title: "NationalSports",
        img: "../img/Nationalsports.jpg",
        Genre: "Amazing Movies"
      },
      // 5th Box
      {
        title: "jujutsuKiasen",
        img: "../img/jujutsu-anime.jpg",
        Genre: "Rejoice Anime Fans!"
      },
      {
        title: "onepiece",
        img: "../img/onepiece-anime.jpg",
        Genre: "Rejoice Anime Fans!"
      },
      {
        title: "demonSlayer",
        img: "../img/demon-slayer.jpg",
        Genre: "Rejoice Anime Fans!"
      },
      {
        title: "Naruto",
        img: "../img/naruto.jpg",
        Genre: "Rejoice Anime Fans!"
      },
      {
        title: "AttackonTitan",
        img: "../img/Aot.jpg",
        Genre: "Rejoice Anime Fans!"
      },
      {
        title: "Bleach",
        img: "../img/bleach.jpg",
        Genre: "Rejoice Anime Fans!"
      },
      {
        title: "deathNote",
        img: "../img/death-note.jpg",
        Genre: "Rejoice Anime Fans!"
      },
      {
        title: "Haikyuu",
        img: "../img/Haikyuu.jpg",
        Genre: "Rejoice Anime Fans!"
      },
      {
        title: "spyFamily",
        img: "../img/spyFamily.jpg",
        Genre: "Rejoice Anime Fans!"
      },
      {
        title: "assasinationClasroom",
        img: "../img/assasinationClassroom.jpg",
        Genre: "Rejoice Anime Fans!"
      },
      {
        title: "mushukoTensei",
        img: "../img/mushukoTensei.jpg",
        Genre: "Rejoice Anime Fans!"
      },
      {
        title: "jhunjiltoCollection",
        img: "../img/jhunjiltoCollection.jpg",
        Genre: "Rejoice Anime Fans!"
      },
      {
        title: "myheroAcademia",
        img: "../img/myheroAcademia.jpg",
        Genre: "Rejoice Anime Fans!"
      },
      {
        title: "blackButtler",
        img: "../img/blackButtler.jpg",
        Genre: "Rejoice Anime Fans!"
      },
      // 6th Box
      {
        title: "Doraemon",
        img: "../img/doraemon.jpg",
        Genre: "Kids Animes"
      },
      {
        title: "Shinchan",
        img: "../img/shinchan.jpg",
        Genre: "Kids Animes"
      },
      {
        title: "TomandJerry",
        img: "../img/tom-and-cherry.jpg",
        Genre: "Kids Animes"
      },
      {
        title: "Ben10",
        img: "../img/ben10.jpg",
        Genre: "Kids Animes"
      },
      {
        title: "motuPatlu",
        img: "../img/motu-patlu.jpg",
        Genre: "Kids Animes"
      },
      {
        title: "Woody",
        img: "../img/woody.jpg",
        Genre: "Kids Animes"
      },
      {
        title: "mickyMouse",
        img: "../img/micky-mouse.jpg",
        Genre: "Kids Animes"
      },
      {
        title: "ninjaHattori",
        img: "../img/ninjaHattori.png",
        Genre: "Kids Animes"
      },
      {
        title: "munkiTrunk",
        img: "../img/munkiTrunk.jpg",
        Genre: "Kids Animes"
      },
      {
        title: "Ainbo",
        img: "../img/Ainbo.jpg",
        Genre: "Kids Animes"
      },
      {
        title: "chikooAurbunty",
        img: "../img/chikooAurbunty.jpg",
        Genre: "Kids Animes"
      },
      {
        title: "peppaPig",
        img: "../img/peppaPig.jpg",
        Genre: "Kids Animes"
      },
      {
        title: "Bajrangi",
        img: "../img/Bajrangi.jpg",
        Genre: "Kids Animes"
      },
      {
        title: "mashaAndbeer",
        img: "../img/mashaAndbeer.jpg",
        Genre: "Kids Animes"
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
