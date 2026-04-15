window.addEventListener("load", () => {
  signupData()
})

function signupData() {
  const form = document.querySelector('form')
  form.addEventListener('submit', async (e) => {
    e.preventDefault()

    const name = document.querySelector('#name').value
    const email = document.querySelector('#email').value
    const password = document.querySelector('#password').value

    const res = await fetch("http://127.0.0.1:5000/api/auth/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ name, email, password })
    })
    const data = await res.json()
    if (data.success) {
      showToast(data.message, "success");
      setTimeout(() => {
        window.location.href = "../frontend/Home.html"
      }, 2000)
    } else {
      showToast(data.message, "danger");
      setTimeout(() => {
        window.location.href = "/"
      }, 2000)
    }
  })
}