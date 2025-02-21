
// GETTING THE MOBILE MENU ELEMENT
const mobileMenu = document.querySelector('.mobile-menu')

// FUNTION TO OPEN MOBILE MENU
document.getElementById('openMenu').addEventListener('click', () => {
    mobileMenu.classList.remove('hidden')
})

// FUNCTION TO CLOSE MOBILE MENU
document.getElementById('closeMenu').addEventListener('click', () => {
    mobileMenu.classList.add('hidden')
})

// SETTING THE COPYRIGHT YEAR TO THE CURRENT YEAR
document.getElementById('year').innerText = new Date().getFullYear()

// FUNTION TO CLOSE MOBILE MENU AFTER A USER CLICKS A LINK
document.querySelectorAll('.navigation_link').forEach(link => {
    link.addEventListener('click', (e) => {
        mobileMenu.classList.add('hidden')
    })
})
