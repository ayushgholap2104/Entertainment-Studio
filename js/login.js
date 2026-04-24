window.addEventListener("load", () => {
  loginData()
})
function loginData() {
  const form = document.querySelector('form')
  form.addEventListener('submit', async (e) => {
    e.preventDefault()

    const email = document.querySelector('#email').value
    const password = document.querySelector('#password').value

    const res = await fetch("http://127.0.0.1:5000/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ email, password })
    })

    const data = await res.json()
    localStorage.setItem('token', data.token)
    localStorage.setItem('userEmail', data.email)
    if (data.success) {
      showToast(data.message, "success");
      setTimeout(() => {
        window.location.href = "../frontend/verify.html"
      }, 2000)
    } else {
      showToast(data.message, "danger");
    }
  })
}