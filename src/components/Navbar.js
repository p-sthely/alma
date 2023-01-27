export default function Navbar ( props ) {

  return (`
    <nav class="navbar sticky-top navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          ${ props.toggler.icon }
        </button>
        <div class="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
          <ul class="navbar-nav mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="${ props.nav[0].href }">${ props.nav[0].value }</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="${ props.nav[1].href }">${ props.nav[1].value }</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="${ props.nav[2].href }">${ props.nav[2].value }</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  `)
}

