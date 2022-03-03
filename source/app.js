const aside = document.querySelector('#navbar')
const toggle = document.querySelectorAll('aside .toggles')

for (const element of toggle) {
  element.addEventListener('click', function () {
    aside.classList.toggle('show')
  })
}
