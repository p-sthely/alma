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
  <div class="container-fluid d-flex flex-column justify-content-between min-vh-100 p-0">
    ${ Navbar ( NAVBAR ) }
    <section class="section section-first">
      <div class="content text-light">
        ${ Title ( SECTION.first.title ) }
        ${ Paragraph ( SECTION.first.paragraph ) }
        ${ Button ( SECTION.first.button ) }
      </div>
    </section>
    ${ Section ([
        Title ( SECTION.first.title ),
        Paragraph ( SECTION.first.paragraph ),
        Button ( SECTION.first.button )
      ])
    }
    ${ Section ([
        Image ( SECTION.second.image ),
        Title ( SECTION.second.title )
      ])
    }
    ${ Section ([
        Title ( SECTION.first.title ),
        Paragraph ( SECTION.first.paragraph ),
        Button ( SECTION.first.button )
      ])
    }
    ${ Section ([
        Image ( SECTION.second.image ),
        Title ( SECTION.second.title )
      ])
    }
    ${ Footer ( FOOTER ) }
  </div>
`)

