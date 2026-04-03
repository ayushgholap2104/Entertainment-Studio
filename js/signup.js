window.addEventListener("load", () => {
  signupData()
})

function signupData(){
  const form = document.addEventListener('form')
  form.addEventListener('submit',async(e) =>{
    e.preventDefault()

    const name = document.querySelector('#name').value
    const email = document.querySelector('#email').value
    const password = document.querySelector('#password').value

    const res = await fetch("http://localhost:5000/api/auth/signup", {
      method:"POST",
      headers:{
        'content-type':'application/json'
      },
      body: JSON.stringify({name,email,password})
    })
    const data = await res.json()
    alert(data)
  })
}