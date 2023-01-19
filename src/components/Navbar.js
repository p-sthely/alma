export default function Navbar ( props ) {
  let listItems = ''

  for ( const item of props.NAVBAR_LINKS ) {
    listItems += `
      <li class="list__item"><a class="link" href="${ item.href }">${ item.value }</a></li>
    `
  }

  return (`
    <div class="navbar">
      <ul class="list">
        ${ listItems }
      </ul>
      <div class="toggler">
        <a class="link" href="#">
          ${ props.TOGGLER_ICON }
        </a>
      </div>
    </div>
  `)
}

