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
        title: "Ekaki",
        img: "../img/Ekaki.png"
      },
      {
        title: "The Magic Of Shiri",
        img: "../img/TheMagicofShiri.jpg"
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
        Genre: "Must Watch Originals"
      },
      {
        title: "KhalbaliRecords",
        img: "../img/KhalbaliRecords.jpg",
        Genre: "Must Watch Originals"
      },
      {
        title: "HoneyMoonPhotographer",
        img: "../img/HoneyMoonPhotographer.jpg",
        Genre: "Must Watch Originals"
      },
      {
        title: "Cadets",
        img: "../img/Cadets.jpg",
        Genre: "Must Watch Originals"
      },
      {
        title: "Taali",
        img: "../img/Taali.jpg",
        Genre: "Must Watch Originals"
      },
      {
        title: "Kaalkoot Series",
        img: "../img/Kaalkoot-Series.jpg",
        Genre: "Must Watch Originals"
      },
      {
        title: "ShekharHome",
        img: "../img/ShekharHome.jpg",
        Genre: "Must Watch Originals"
      },
      {
        title: "Asur2",
        img: "../img/Asur2.jpg",
        Genre: "Must Watch Originals"
      },
      {
        title: "CandySeries",
        img: "../img/CandySeries.jpg",
        Genre: "Must Watch Originals"
      },
      {
        title: "IllegalSeries",
        img: "../img/IllegalSeries.jpg",
        Genre: "Must Watch Originals"
      },
      {
        title: "YaariaanSeries",
        img: "../img/YaariaanSeries.jpg",
        Genre: "Must Watch Originals"
      },
      {
        title: "Gaanth",
        img: "../img/Gaanth.jpg",
        Genre: "Must Watch Originals"
      },
      {
        title: "Aashikana",
        img: "../img/Aashikana.jpg",
        Genre: "Must Watch Originals"
      },
      {
        title: "HanumanSeries",
        img: "../img/HanumanSeries.jpg",
        Genre: "Must Watch Originals"
      },

      // 2nd box
      {
        title: "TrialSeries",
        img: "../img/TrialSeries.jpg",
        Genre: "House Of Dramas"
      },
      {
        title: "Rambo In Love",
        img: "../img/RamboInLove.jpg",
        Genre: "House Of Dramas"
      },
      {
        title: "MangalLakshmi",
        img: "../img/mangalLakshmi.jpg",
        Genre: "House Of Dramas"
      },
      {
        title: "Kobali Series",
        img: "../img/KobaliSeries.jpg",
        Genre: "House Of Dramas"
      },
      {
        title: "Thukra Ke Pyaar Mera",
        img: "../img/Thukra_ke_Pyaar_Mera.jpg",
        Genre: "House Of Dramas"
      },
      {
        title: "Gunaah",
        img: "../img/Gunaah.jpg",
        Genre: "House Of Dramas"
      },
      {
        title: "Tharla tar mag",
        img: "../img/tharla-mag-serial.jpg",
        Genre: "House Of Dramas"
      },
      {
        title: "Pariniti Serial",
        img: "../img/ParinitiSerial.jpg",
        Genre: "House Of Dramas"
      },
      {
        title: "Yeh Ristha Kya Khelata he",
        img: "../img/yeh-rista-serial.jpg",
        Genre: "House Of Dramas"
      },
      {
        title: "Illegal",
        img: "../img/IllegalSeries.jpg",
        Genre: "House Of Dramas"
      },
      {
        title: "Apolina",
        img: "../img/Apolina.jpg",
        Genre: "House Of Dramas"
      },
      {
        title: "Devmanush",
        img: "../img/devmanush-serial.jpg",
        Genre: "House Of Dramas"
      },
      {
        title: "Kabali",
        img: "../img/Kabali.jpg",
        Genre: "House Of Dramas"
      },
      {
        title: "vikramVedha",
        img: "../img/Vikramvedha.jpg",
        Genre: "House Of Dramas"
      },
      // 3rd Box
      {
        title: "bigBoss",
        img: "../img/bigboss.jpg",
        Genre: "Popular Serials"
      },
      {
        title: "Anupama",
        img: "../img/anupama-serial.jpg",
        Genre: "Popular Serials"
      },
      {
        title: "ristakyakhelatahe",
        img: "../img/yeh-rista-serial.jpg",
        Genre: "Popular Serials"
      },
      {
        title: "Tharlamag",
        img: "../img/tharla-mag-serial.jpg",
        Genre: "Popular Serials",
      },
      {
        title: "Mannat",
        img: "../img/mannat-serial.jpg",
        Genre: "Popular Serials"
      },
      {
        title: "Devmanush",
        img: "../img/devmanush-serial.jpg",
        Genre: "Popular Serials"
      },
      {
        title: "Mitwa",
        img: "../img/mitwa-serial.jpg",
        Genre: "Popular Serials"
      },
      {
        title: "udneKiaasha",
        img: "../img/UdnekiAasha.jpg",
        Genre: "Popular Serials"
      },
      {
        title: "mangalLakshmi",
        img: "../img/mangalLakshmi.jpg",
        Genre: "Popular Serials"
      },
      {
        title: "Mahabharat",
        img: "../img/Mahabharat.jpg",
        Genre: "Popular Serials"
      },
      {
        title: "Jhanak",
        img: "../img/Jhanak.jpg",
        Genre: "Popular Serials",
      },
      {
        title: "Swabhimaan",
        img: "../img/Swabhimaan.jpg",
        Genre: "Popular Serials"
      },
      {
        title: "radhaKrishna",
        img: "../img/radhaKrishna.jpg",
        Genre: "Popular Serials"
      },
      {
        title: "tulaJapnaar",
        img: "../img/tulaJapnaar.jpg",
        Genre: "Popular Serials"
      },
      // 4th box
      {
        title: "Healer",
        img: "../img/Healer.jpg",
        Genre: "Shows You Can't Miss"
      },
      {
        title: "Irrational",
        img: "../img/Irrational.jpg",
        Genre: "Shows You Can't Miss"
      },
      {
        title: "menT20final",
        img: "../img/men-t20final.jpg",
        Genre: "Shows You Can't Miss"
      },
      {
        title: "Kabaddi",
        img: "../img/kabaddi.jpg",
        Genre: "Shows You Can't Miss"
      },
      {
        title: "Ipl",
        img: "../img/ipl.jpg",
        Genre: "Shows You Can't Miss"
      },
      {
        title: "Badminton",
        img: "../img/badminton.png",
        Genre: "Shows You Can't Miss"
      },
      {
        title: "Football",
        img: "../img/football.jpg",
        Genre: "Shows You Can't Miss"
      },
      {
        title: "ranjhiTrophy",
        img: "../img/ranjhiTrophy.jpg",
        Genre: "Shows You Can't Miss"
      },
      {
        title: "iplAuctions",
        img: "../img/iplAuctions.jpg",
        Genre: "Shows You Can't Miss"
      },
      {
        title: "indiavsSouthafrica",
        img: "../img/indiaVssouthafricatest.jpg",
        Genre: "Shows You Can't Miss"
      },
      {
        title: "IPL",
        img: "../img/IPL2025.jpg",
        Genre: "Shows You Can't Miss"
      },
      {
        title: "rcbCelebration",
        img: "../img/rcbCelebration.png",
        Genre: "Shows You Can't Miss"
      },
      {
        title: "topSports",
        img: "../img/topSports.jpg",
        Genre: "Shows You Can't Miss"
      },
      {
        title: "NationalSports",
        img: "../img/Nationalsports.jpg",
        Genre: "Shows You Can't Miss"
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
        Genre: "Kids Corner"
      },
      {
        title: "Shinchan",
        img: "../img/shinchan.jpg",
        Genre: "Kids Corner"
      },
      {
        title: "TomandJerry",
        img: "../img/tom-and-cherry.jpg",
        Genre: "Kids Corner"
      },
      {
        title: "Ben10",
        img: "../img/ben10.jpg",
        Genre: "Kids Corner"
      },
      {
        title: "motuPatlu",
        img: "../img/motu-patlu.jpg",
        Genre: "Kids Corner"
      },
      {
        title: "Woody",
        img: "../img/woody.jpg",
        Genre: "Kids Corner"
      },
      {
        title: "mickyMouse",
        img: "../img/micky-mouse.jpg",
        Genre: "Kids Corner"
      },
      {
        title: "ninjaHattori",
        img: "../img/ninjaHattori.png",
        Genre: "Kids Corner"
      },
      {
        title: "munkiTrunk",
        img: "../img/munkiTrunk.jpg",
        Genre: "Kids Corner"
      },
      {
        title: "Ainbo",
        img: "../img/Ainbo.jpg",
        Genre: "Kids Corner"
      },
      {
        title: "chikooAurbunty",
        img: "../img/chikooAurbunty.jpg",
        Genre: "Kids Corner"
      },
      {
        title: "peppaPig",
        img: "../img/peppaPig.jpg",
        Genre: "Kids Corner"
      },
      {
        title: "Bajrangi",
        img: "../img/Bajrangi.jpg",
        Genre: "Kids Corner"
      },
      {
        title: "mashaAndbeer",
        img: "../img/mashaAndbeer.jpg",
        Genre: "Kids Corner"
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
