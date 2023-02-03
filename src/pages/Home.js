import Navbar from '../components/Navbar.js'
import Section from '../components/Section.js'
import Title from '../components/Title.js'
import Paragraph from '../components/Paragraph.js'
import Button from '../components/Button.js'
import Image from '../components/Image.js'
import Footer from '../components/Footer.js'
import { NAVBAR, FOOTER } from '../js/props.js'
import { SECTION } from '../js/props.home.js'

function navbarIsOnTop() {
  const navbar = document.querySelector( '.navbar' )
  let navbarIsOnTop = null
  navbar.offsetTop > 0 ? navbarIsOnTop = false : navbarIsOnTop = true
  return navbarIsOnTop
}

window.addEventListener( 'scroll', ( event ) => {
  const navbar = document.querySelector( '.navbar' )
  const navLink = document.querySelectorAll( '.nav-link' )
  const toggler = document.querySelector('.navbar-toggler')
  if( navbarIsOnTop() ) {
    navbar.style.backgroundColor = 'var(--bs-body-bg)'
    navLink.forEach((item) => {
      item.style.color = 'var(--bs-dark)'
    })
    toggler.style.color = 'var(--bs-dark)'
  } else {
    // set the navbar background to dark
    navbar.style.backgroundColor = 'var(--bs-dark)'
    navLink.forEach((item) => {
      item.style.color = 'var(--bs-light)'
    })
    toggler.style.color = 'var(--bs-light)'
  }
})

export default (`
  <div class="wrapper container-fluid gx-0">
    ${ Navbar ( NAVBAR ) }
    <div class="row row-cols-1 gx-0 gy-5">
      <div class="col">
        ${ Section ( 'section-first', [
          Title ( 'display-1', SECTION.first.title ),
          Paragraph ( '', SECTION.first.paragraph ),
          Button ( SECTION.first.button )
        ])}
      </div>
      <div class="col">
        ${ Section ( 'section-second', [
          Title ( 'display-5', SECTION.second.title ),
          Paragraph ( 'fs-5', SECTION.second.paragraph )
        ])}
      </div>
      <div class="col">
        ${ Section ( 'section-third', [
          Title ( 'display-6', SECTION.third.title ),
          Paragraph ( 'fs-5', SECTION.third.paragraph )
        ])}
      </div>
    </div>
    ${ Footer ( FOOTER ) }
  </div>
`)

