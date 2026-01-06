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
        title: "Boss baby",
        img: "../img/Boss_baby.jpg"
      },
      {
        title: "disney cars",
        img: "../img/disney_cars.jpg"
      },
      {
        title: "incredibles 2",
        img: "../img/incredibles_2.jpg"
      },
      {
        title: "The_wildrobot",
        img: "../img/The_wildrobot.jpg"
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
        title: "Luca",
        img: "../img/Luca.jpg",
        Genre: "Popular Kids Movies"
      },
      {
        title: "Finding Nemo",
        img: "../img/Finding_nemo.jpg",
        Genre: "Popular Kids Movies"
      },
      {
        title: "Good dinosaur",
        img: "../img/Good_dinosaur.jpg",
        Genre: "Popular Kids Movies"
      },
      {
        title: "thelandBeforetime",
        img: "../img/landb.jpg",
        Genre: "Popular Kids Movies"
      },
      {
        title: "tangled",
        img: "../img/tangled.jpg",
        Genre: "Popular Kids Movies"
      },
      {
        title: "Zotopia",
        img: "../img/Zotopia.jpg",
        Genre: "Popular Kids Movies"
      },
      {
        title: "Elemental",
        img: "../img/Elemental.png",
        Genre: "Popular Kids Movies"
      },
      {
        title: "LiloStitch",
        img: "../img/LiloStitch.jpg",
        Genre: "Popular Kids Movies"
      },
      {
        title: "Mufasa",
        img: "../img/Mufasa.jpg",
        Genre: "Popular Kids Movies"
      },
      {
        title: "frozen",
        img: "../img/frozen.jpg",
        Genre: "Popular Kids Movies"
      },
      {
        title: "The Jungle Book",
        img: "../img/The_junglebook.jpg",
        Genre: "Popular Kids Movies"
      },
      {
        title: "Narnia",
        img: "../img/Narnia.jpg",
        Genre: "Popular Kids Movies"
      },
      {
        title: "Wicked",
        img: "../img/Wicked.jpg",
        Genre: "Popular Kids Movies"
      },
      {
        title: "Coco",
        img: "../img/Coco.jpg",
        Genre: "Popular Kids Movies"
      },

      // 2nd box
      {
        title: "Sonic2",
        img: "../img/Sonic2.jpg",
        Genre: "Fantasy Movies"
      },
      {
        title: "Alladin",
        img: "../img/Alladin.jpg",
        Genre: "Fantasy Movies"
      },
      {
        title: "Maleficient",
        img: "../img/Maleficient.jpg",
        Genre: "Fantasy Movies"
      },
      {
        title: "justiceLeague",
        img: "../img/Justice-league.jpg",
        Genre: "Fantasy Movies"
      },
      {
        title: "Princes Diaries",
        img: "../img/PrincesDiaries.jpg",
        Genre: "Fantasy Movies"
      },
      {
        title: "madagaskar",
        img: "../img/madagaskar.jpg",
        Genre: "Fantasy Movies"
      },
      {
        title: "Snow white",
        img: "../img/Snow_white.jpg",
        Genre: "Fantasy Movies"
      },
      {
        title: "Ratatouille",
        img: "../img/Ratatouille.jpg",
        Genre: "Fantasy Movies"
      },
      {
        title: "Minecraft",
        img: "../img/Minecraft.jpg",
        Genre: "Fantasy Movies"
      },
      {
        title: "Boss Baby",
        img: "../img/Boss_baby.jpg",
        Genre: "Fantasy Movies"
      },
      {
        title: "Home Alone",
        img: "../img/Home_alone.jpg",
        Genre: "Fantasy Movies"
      },
      {
        title: "Elemental",
        img: "../img/Elemental.png",
        Genre: "Fantasy Movies"
      },
      {
        title: "Turning Red",
        img: "../img/Turning_red.jpg",
        Genre: "Fantasy Movies"
      },
      {
        title: "Alice_In_Wonderland",
        img: "../img/Alice_In_Wonderland.jpg",
        Genre: "Fantasy Movies"
      },
      // 3rd Box
      {
        title: "bigBoss",
        img: "../img/bigboss.jpg",
        Genre: "Top 10 Movies"
      },
      {
        title: "Anupama",
        img: "../img/anupama-serial.jpg",
        Genre: "Top 10 Movies"
      },
      {
        title: "ristakyakhelatahe",
        img: "../img/yeh-rista-serial.jpg",
        Genre: "Top 10 Movies"
      },
      {
        title: "Tharlamag",
        img: "../img/tharla-mag-serial.jpg",
        Genre: "Top 10 Movies",
      },
      {
        title: "Mannat",
        img: "../img/mannat-serial.jpg",
        Genre: "Top 10 Movies"
      },
      {
        title: "Devmanush",
        img: "../img/devmanush-serial.jpg",

        Genre: "Top 10 Movies"
      },
      {
        title: "Mitwa",
        img: "../img/mitwa-serial.jpg",
        Genre: "Top 10 Movies"
      },
      {
        title: "udneKiaasha",
        img: "../img/UdnekiAasha.jpg",
        Genre: "Top 10 Movies"
      },
      {
        title: "mangalLakshmi",
        img: "../img/mangalLakshmi.jpg",
        Genre: "Top 10 Movies"
      },
      {
        title: "Mahabharat",
        img: "../img/Mahabharat.jpg",
        Genre: "Top 10 Movies"
      },
      {
        title: "Jhanak",
        img: "../img/Jhanak.jpg",
        Genre: "Top 10 Movies",
      },
      {
        title: "Swabhimaan",
        img: "../img/Swabhimaan.jpg",
        Genre: "Top 10 Movies"
      },
      {
        title: "radhaKrishna",
        img: "../img/radhaKrishna.jpg",
        Genre: "Top 10 Movies"
      },
      {
        title: "tulaJapnaar",
        img: "../img/tulaJapnaar.jpg",
        Genre: "Top 10 Movies"
      },
      // "womenCricket" box
      {
        title: "womenCricket",
        img: "../img/women-cricket.jpg",
        Genre: "Must Watch Originals"
      },
      {
        title: "india_vs_aus",
        img: "../img/india-vs-aus.jpg",
        Genre: "Must Watch Originals"
      },
      {
        title: "menT20final",
        img: "../img/men-t20final.jpg",
        Genre: "Must Watch Originals"
      },
      {
        title: "Kabaddi",
        img: "../img/kabaddi.jpg",
        Genre: "Must Watch Originals"
      },
      {
        title: "Ipl",
        img: "../img/ipl.jpg",
        Genre: "Must Watch Originals"
      },
      {
        title: "Badminton",
        img: "../img/badminton.png",
        Genre: "Must Watch Originals"
      },
      {
        title: "Football",
        img: "../img/football.jpg",
        Genre: "Must Watch Originals"
      },
      {
        title: "ranjhiTrophy",
        img: "../img/ranjhiTrophy.jpg",
        Genre: "Must Watch Originals"
      },
      {
        title: "iplAuctions",
        img: "../img/iplAuctions.jpg",
        Genre: "Must Watch Originals"
      },
      {
        title: "indiavsSouthafrica",
        img: "../img/indiaVssouthafricatest.jpg",
        Genre: "Must Watch Originals"
      },
      {
        title: "IPL",
        img: "../img/IPL2025.jpg",
        Genre: "Must Watch Originals"
      },
      {
        title: "rcbCelebration",
        img: "../img/rcbCelebration.png",
        Genre: "Must Watch Originals"
      },
      {
        title: "topSports",
        img: "../img/topSports.jpg",
        Genre: "Must Watch Originals"
      },
      {
        title: "NationalSports",
        img: "../img/Nationalsports.jpg",
        Genre: "Must Watch Originals"
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
        Genre: "Recommended Shows"
      },
      {
        title: "Shinchan",
        img: "../img/shinchan.jpg",
        Genre: "Recommended Shows"
      },
      {
        title: "TomandJerry",
        img: "../img/tom-and-cherry.jpg",
        Genre: "Recommended Shows"
      },
      {
        title: "Ben10",
        img: "../img/ben10.jpg",
        Genre: "Recommended Shows"
      },
      {
        title: "motuPatlu",
        img: "../img/motu-patlu.jpg",
        Genre: "Recommended Shows"
      },
      {
        title: "Woody",
        img: "../img/woody.jpg",
        Genre: "Recommended Shows"
      },
      {
        title: "mickyMouse",
        img: "../img/micky-mouse.jpg",
        Genre: "Recommended Shows"
      },
      {
        title: "ninjaHattori",
        img: "../img/ninjaHattori.png",
        Genre: "Recommended Shows"
      },
      {
        title: "munkiTrunk",
        img: "../img/munkiTrunk.jpg",
        Genre: "Recommended Shows"
      },
      {
        title: "Ainbo",
        img: "../img/Ainbo.jpg",
        Genre: "Recommended Shows"
      },
      {
        title: "chikooAurbunty",
        img: "../img/chikooAurbunty.jpg",
        Genre: "Recommended Shows"
      },
      {
        title: "peppaPig",
        img: "../img/peppaPig.jpg",
        Genre: "Recommended Shows"
      },
      {
        title: "Bajrangi",
        img: "../img/Bajrangi.jpg",
        Genre: "Recommended Shows"
      },
      {
        title: "mashaAndbeer",
        img: "../img/mashaAndbeer.jpg",
        Genre: "Recommended Shows"
      },
      // 7th Box
      {
        title: "Dragons",
        img: "../img/dragons-movie.jpg",
        Genre: "Amazing Extravanza"
      },
      {
        title: "Fastx",
        img: "../img/fastx.jpeg",
        Genre: "Amazing Extravanza"
      },
      {
        title: "Ironman",
        img: "../img/ironman.jpg",
        Genre: "Amazing Extravanza"
      },
      {
        title: "FastandFurious",
        img: "../img/fast-and-furious.jpg",
        Genre: "Amazing Extravanza"
      },
      {
        title: "openHeighmer",
        img: "../img/openheighmer.jpeg",
        Genre: "Amazing Extravanza"
      },
      {
        title: "Dc",
        img: "../img/dc.jpg",
        Genre: "Amazing Extravanza"
      },
      {
        title: "Anora",
        img: "../img/anora.jpg",
        Genre: "Amazing Extravanza"
      },
      {
        title: "deadpoolWolverin",
        img: "../img/deadpoolWolverin.jpg",
        Genre: "Amazing Extravanza"
      },
      {
        title: "disneyTangled",
        img: "../img/disneyTangled.jpg",
        Genre: "Amazing Extravanza"
      },
      {
        title: "disneyCars",
        img: "../img/disneyCars.jpg",
        Genre: "Amazing Extravanza"
      },
      {
        title: "planetOfapes",
        img: "../img/planetOfapes.jpg",
        Genre: "Amazing Extravanza"
      },
      {
        title: "alienCovinant",
        img: "../img/alienCovinant.jpg",
        Genre: "Amazing Extravanza"
      },
      {
        title: "insideOut2",
        img: "../img/insideOut2.jpg",
        Genre: "Amazing Extravanza"
      },
      {
        title: "avengerInfinitywar",
        img: "../img/avengerInfinitywar.jpg",
        Genre: "Amazing Extravanza"
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
