export default function Navbar ( props ) {

  return (`
    <nav class="navbar navbar-expand-lg bg-body-tertiary border">
      <div class="container-fluid">
        <a class="navbar-brand" href="${ props.brand.href }">${ props.brand.value }</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          ${ props.toggler.icon }
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="${ props.nav[0].href }">${ props.nav[0].value }</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="${ props.nav[1].href }">${ props.nav[1].value }</a>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="${ props.nav[2].href }" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                ${ props.nav[2].value }
              </a>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="${ props.nav[2].items[0].href }">${ props.nav[2].items[0].value }</a></li>
                <li><a class="dropdown-item" href="${ props.nav[2].items[1].href }">${ props.nav[2].items[1].value }</a></li>
                <li><hr class="dropdown-divider"></li>
                <li><a class="dropdown-item" href="${ props.nav[2].items[2].href }">${ props.nav[2].items[2].value }</a></li>
              </ul>
            </li>
            <li class="nav-item">
              <a class="nav-link disabled">${ props.nav[3].value }</a>
            </li>
          </ul>
          <form class="d-flex" role="search">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
            <button class="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
  `)
}

