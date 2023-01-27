import Navbar from '../components/Navbar.js'
import Section from '../components/Section.js'
import Title from '../components/Title.js'
import Paragraph from '../components/Paragraph.js'
import Button from '../components/Button.js'
import Image from '../components/Image.js'
import { NAVBAR } from '../js/props.js'
import { SECTION } from '../js/props.home.js'

export default (`
  <div>
    ${ Navbar ( NAVBAR ) }
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
        Image ( SECTION.second.image ),
        Title ( SECTION.second.title )
      ])
    }
    ${ Section ([
        Image ( SECTION.second.image ),
        Title ( SECTION.second.title )
      ])
    }
    ${ Section ([
        Image ( SECTION.second.image ),
        Title ( SECTION.second.title )
      ])
    }
  </div>
`)

