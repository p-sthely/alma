import Navbar from '../components/Navbar.js'
import { NAVBAR } from '../js/props.js'

export default (`
  <section>
    ${ Navbar ( NAVBAR ) }
    <h2>Header</h2>
    <p>
      This is the Header section.
    </p>
  </section>
`)

