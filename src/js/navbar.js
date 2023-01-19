import { NAVBAR_LINKS } from '../js/constants.js'

let listItems = ''

for(const item of NAVBAR_LINKS) {
  listItems += `
    <li class="list__item"><a class="link" href="${ item.href }">${ item.value }</a></li>
  `
}

export default listItems

