window.addEventListener("load", () => {
  profileData()
})
async function profileData(){
  const token = localStorage.getItem("token")

  const res = await fetch("http://localhost:5000/api/auth/profile",{
    headers:{
      "authorization":"token"
    }
  })
  const data = await res.json()
  console.log(data)
}


