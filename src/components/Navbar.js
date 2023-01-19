import listItems from '../js/navbar.js'
import { TOGGLER_ICON } from '../js/constants.js'

export default function Navbar(message) {
  return (`
    <div class="navbar">
      <ul class="list">
        ${ listItems }
      </ul>
      <div class="toggler">
        <a class="link" href="#">
          ${ TOGGLER_ICON }
        </a>
      </div>
    </div>
  `)
}

