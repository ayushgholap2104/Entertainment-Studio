window.addEventListener("load", () => {
  boxfunctionality()
  verifyOTP()
})

const inputs = document.querySelectorAll('.otp_input')

function boxfunctionality() {
  const inputs = document.querySelectorAll('.otp_input')

  inputs.forEach((input, index) => {
    input.addEventListener("input", (e) => {
      if (e.target.value.length === 1) {
        if (index < inputs.length - 1) {
          inputs[index + 1].focus()
        }
      }
    })

    input.addEventListener("keydown", (e) => {
      if (e.key === "Backspace" && !input.value && index > 0) {
        inputs[index - 1].focus()
      }
    })
  })
}

function getOTP() {
  let otp = "";
  inputs.forEach(input => {
    otp += input.value
  });

  return otp
}

function verifyOTP() {
  const form = document.querySelector('form')
  form.addEventListener('submit', async (e) => {
    e.preventDefault()
    const email = localStorage.getItem('userEmail')
    const otp = getOTP()

    const res = await fetch("http://127.0.0.1:5000/api/auth/verify", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ email, otp })
    })

    const data = await res.json()

    if (data.success) {
      showToast(data.message, "success");
      localStorage.setItem('token',data.token)

      setTimeout(() => {
        window.location.href = "../frontend/Home.html"
      }, 1000)
    } else {
      showToast(data.message, "danger");
    }
  })
}


