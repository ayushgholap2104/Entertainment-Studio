window.addEventListener("load", () => {
  
})

function toggleTheme() {
  const body = document.body
  const Icon = document.querySelector('#icons')
  body.classList.toggle("dark_theme")

  if (body.classList.contains("dark_theme")) {
    Icon.classList.replace('fa-sun', 'fa-moon');
    document.documentElement.classList.add('dark_theme')
    localStorage.setItem('theme','dark_theme')

  } else {
    Icon.classList.replace('fa-moon', 'fa-sun')
    document.documentElement.classList.remove('dark_theme')
    localStorage.setItem('theme','light_theme')
  }
}
function savedTheme(){
  currTheme = localStorage.getItem('theme')
  const Icon = document.querySelector('#icons')
  if (currTheme == 'dark_theme'){
    Icon.classList.replace('fa-sun', 'fa-moon');
    document.body.classList.add('dark_theme')
    document.documentElement.classList.add('dark_theme')
  }
}
