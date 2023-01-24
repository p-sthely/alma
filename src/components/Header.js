import Navbar from '../components/Navbar.js'

export default function Header ( props ) {
  return (`
    <section>
      ${ Navbar ( props.NAVBAR ) }
      <h2>Header</h2>
      <p>
        This is the Header section.
      </p>
    </section>
  `)
}

