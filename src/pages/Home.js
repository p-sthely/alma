import Navbar from '../components/Navbar.js'
import Section from '../components/Section.js'
import Title from '../components/Title.js'
import Paragraph from '../components/Paragraph.js'
import Button from '../components/Button.js'
import Image from '../components/Image.js'
import Footer from '../components/Footer.js'
import { NAVBAR, FOOTER } from '../js/props.js'
import { SECTION } from '../js/props.home.js'

export default (`
  <div class="wrapper container-fluid gx-0">
    ${ Navbar ( NAVBAR ) }
    <div class="row row-cols-1 gx-0 gy-5">
      <div class="col">
        ${ Section ( 'section-first', [
          Title ( SECTION.first.title ),
          Paragraph ( SECTION.first.paragraph ),
          Button ( SECTION.first.button )
        ])}
      </div>
      <div class="col">
        ${ Section ( 'section-second', [
          Title ( SECTION.second.title ),
          Paragraph ( SECTION.second.paragraph )
        ])}
      </div>
      <div class="col">
        ${ Section ( 'section-third', [
          Title ( SECTION.third.title ),
          Paragraph ( SECTION.third.paragraph )
        ])}
      </div>
    </div>
    ${ Footer ( FOOTER ) }
  </div>
`)

