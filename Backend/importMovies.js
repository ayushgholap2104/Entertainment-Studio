const db = require("./config/db")
const movies = require("./cardsData")

movies.forEach(movie =>{ 
  db.query(
    "INSERT INTO content (title,img,genre,category) VALUES (?,?,?,?)",
    [movie.title,movie.img,movie.genre,movie.category],
    (err)=>{
      if (err){
        console.log(err)
      }
    }
  )
})