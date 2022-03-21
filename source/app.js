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

sideBarSelect.addEventListener('click', () => {
  sideBarSelect.querySelector('a:nth-child(1)').classlist.toggle('active')
  sideBarSelect.querySelector('a:nth-child(2)').classlist.toggle('active')
