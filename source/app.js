const sideMenu = document.querySelector('aside')
const menuBtn = document.querySelector('#menu-btn')
const closeBtn = document.querySelector('#close-btn')
const themeToggler = document.querySelector('.theme-toggler')
const sideBarSelect = document.querySelectorAll('#sidebar, a')

menuBtn.addEventListener('click', () => {
  sideMenu.style.display = 'block'
})

closeBtn.addEventListener('click', () => {
  sideMenu.style.display = 'none'
})

themeToggler.addEventListener('click', () => {
  document.body.classList.toggle('dark-theme-variables')
})
