window.addEventListener("load", () => {
  loginData()
})
function loginData(){
  const form = document.querySelector('form')
  form.addEventListener('submit',async(e)=>{
    e.preventDefault()

    const email = document.querySelector('#email').value
    const password = document.querySelector('#password').value

    const res = await fetch("http://localhost:5000/api/auth/login",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body: JSON.stringify({email,password})
    })

    const data = await res.json()
    if (data.token){
      localStorage.setItem('token',data.token)
      alert("Login Successful")
      // window.location.href = '../frontend/Home.html'
    }else{
      alert(data)
    }
  })
}