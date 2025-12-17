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
        title: "Ashoka",
        img: "../img/Ashoka.jpg",
        Genre: "Shows You Can't Miss"
      },
      {
        title: "BigMouth",
        img: "../img/BigMouth.jpg",
        Genre: "Shows You Can't Miss"
      },
      {
        title: "Moon Knight",
        img: "../img/MoonKnight.jpg",
        Genre: "Shows You Can't Miss"
      },
      {
        title: "WandaVision",
        img: "../img/WandaVision.jpg",
        Genre: "Shows You Can't Miss"
      },
      {
        title: "ThePitt",
        img: "../img/ThePitt.jpg",
        Genre: "Shows You Can't Miss"
      },
      {
        title: "Loki",
        img: "../img/Loki.jpg",
        Genre: "Shows You Can't Miss"
      },
      {
        title: "The Hunting Party",
        img: "../img/The_Hunting_Party.jpg",
        Genre: "Shows You Can't Miss"
      },
      {
        title: "SharkTank",
        img: "../img/SharkTank.jpg",
        Genre: "Shows You Can't Miss"
      },
      {
        title: "Succession",
        img: "../img/Succession.jpg",
        Genre: "Shows You Can't Miss"
      },
      {
        title: "Tokyo Revengers",
        img: "../img/tokyoRevengers.jpg",
        Genre: "Shows You Can't Miss"
      },
      {
        title: "CB Strike",
        img: "../img/CB_Strike.jpg",
        Genre: "Shows You Can't Miss"
      },
      {
        title: "Law And Order",
        img: "../img/Law_And_Order.jpg",
        Genre: "Shows You Can't Miss"
      },
      // 5th Box
      {
        title: "jujutsuKiasen",
        img: "../img/jujutsu-anime.jpg",
        Genre: "Top Rated Animes!"
      },
      {
        title: "onepiece",
        img: "../img/onepiece-anime.jpg",
        Genre: "Top Rated Animes!"
      },
      {
        title: "demonSlayer",
        img: "../img/demon-slayer.jpg",
        Genre: "Top Rated Animes!"
      },
      {
        title: "Naruto",
        img: "../img/naruto.jpg",
        Genre: "Top Rated Animes!"
      },
      {
        title: "AttackonTitan",
        img: "../img/Aot.jpg",
        Genre: "Top Rated Animes!"
      },
      {
        title: "Bleach",
        img: "../img/bleach.jpg",
        Genre: "Top Rated Animes!"
      },
      {
        title: "deathNote",
        img: "../img/death-note.jpg",
        Genre: "Top Rated Animes!"
      },
      {
        title: "Haikyuu",
        img: "../img/Haikyuu.jpg",
        Genre: "Top Rated Animes!"
      },
      {
        title: "spyFamily",
        img: "../img/spyFamily.jpg",
        Genre: "Top Rated Animes!"
      },
      {
        title: "assasinationClasroom",
        img: "../img/assasinationClassroom.jpg",
        Genre: "Top Rated Animes!"
      },
      {
        title: "mushukoTensei",
        img: "../img/mushukoTensei.jpg",
        Genre: "Top Rated Animes!"
      },
      {
        title: "jhunjiltoCollection",
        img: "../img/jhunjiltoCollection.jpg",
        Genre: "Top Rated Animes!"
      },
      {
        title: "myheroAcademia",
        img: "../img/myheroAcademia.jpg",
        Genre: "Top Rated Animes!"
      },
      {
        title: "blackButtler",
        img: "../img/blackButtler.jpg",
        Genre: "Top Rated Animes!"
      },
      // 6th Box
      {
        title: "Doraemon",
        img: "../img/doraemon.jpg",
        Genre: "Popular Kids Shows"
      },
      {
        title: "Shinchan",
        img: "../img/shinchan.jpg",
        Genre: "Popular Kids Shows"
      },
      {
        title: "TomandJerry",
        img: "../img/tom-and-cherry.jpg",
        Genre: "Popular Kids Shows"
      },
      {
        title: "Ben10",
        img: "../img/ben10.jpg",
        Genre: "Popular Kids Shows"
      },
      {
        title: "motuPatlu",
        img: "../img/motu-patlu.jpg",
        Genre: "Popular Kids Shows"
      },
      {
        title: "Woody",
        img: "../img/woody.jpg",
        Genre: "Popular Kids Shows"
      },
      {
        title: "mickyMouse",
        img: "../img/micky-mouse.jpg",
        Genre: "Popular Kids Shows"
      },
      {
        title: "ninjaHattori",
        img: "../img/ninjaHattori.png",
        Genre: "Popular Kids Shows"
      },
      {
        title: "munkiTrunk",
        img: "../img/munkiTrunk.jpg",
        Genre: "Popular Kids Shows"
      },
      {
        title: "Ainbo",
        img: "../img/Ainbo.jpg",
        Genre: "Popular Kids Shows"
      },
      {
        title: "chikooAurbunty",
        img: "../img/chikooAurbunty.jpg",
        Genre: "Popular Kids Shows"
      },
      {
        title: "peppaPig",
        img: "../img/peppaPig.jpg",
        Genre: "Popular Kids Shows"
      },
      {
        title: "Bajrangi",
        img: "../img/Bajrangi.jpg",
        Genre: "Popular Kids Shows"
      },
      {
        title: "mashaAndbeer",
        img: "../img/mashaAndbeer.jpg",
        Genre: "Popular Kids Shows"
      },
      // 7th Box
      {
        title: "Money_Heist",
        img: "../img/Money_Heist.jpg",
        Genre: "Shows Recommended For You"
      },
      {
        title: "Kerala Files",
        img: "../img/Kerala_Files.jpg",
        Genre: "Shows Recommended For You"
      },
      {
        title: "Parampara",
        img: "../img/Parampara.jpg",
        Genre: "Shows Recommended For You"
      },
      {
        title: "CriminalJustice",
        img: "../img/CriminalJustice.jpg",
        Genre: "Shows Recommended For You"
      },
      {
        title: "Ekaki",
        img: "../img/Ekaki.png",
        Genre: "Shows Recommended For You"
      },
      {
        title: "Bhay",
        img: "../img/Bhay.jpg",
        Genre: "Shows Recommended For You"
      },
      {
        title: "Mahabharat",
        img: "../img/Mahabharat.jpg",
        Genre: "Shows Recommended For You"
      },
      {
        title: "The Legend Of Hanuman",
        img: "../img/The_Legend_Of_Hanuman.jpg",
        Genre: "Shows Recommended For You"
      },
      {
        title: "Asur2",
        img: "../img/Asur2.jpg",
        Genre: "Shows Recommended For You"
      },
      {
        title: "SquidGame",
        img: "../img/SquidGame.jpg",
        Genre: "Shows Recommended For You"
      },
      {
        title: "Alice_In_Borderland",
        img: "../img/Alice_In_Borderland.jpg",
        Genre: "Shows Recommended For You"
      },
      {
        title: "Ziddi Ishq",
        img: "../img/Ziddi_Ishq.jpg",
        Genre: "Shows Recommended For You"
      },
      {
        title: "Stranger Things",
        img: "../img/Stranger_Things.jpg",
        Genre: "Shows Recommended For You"
      },
      {
        title: "lagna nanter hoilach prem",
        img: "../img/lagna_nanter_hoilach_prem.jpg",
        Genre: "Shows Recommended For You"
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
