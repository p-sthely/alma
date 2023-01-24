export default function Navbar ( props ) {

  return (`
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <a class="navbar-brand" href="${ props.BRAND.href }">${ props.BRAND.value }</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="${ props.NAV[0].href }">${ props.NAV[0].value }</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="${ props.NAV[1].href }">${ props.NAV[1].value }</a>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="${ props.NAV[2].href }" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                ${ props.NAV[2].value }
              </a>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="${ props.NAV[2].items[0].href }">${ props.NAV[2].items[0].value }</a></li>
                <li><a class="dropdown-item" href="${ props.NAV[2].items[1].href }">${ props.NAV[2].items[1].value }</a></li>
                <li><hr class="dropdown-divider"></li>
                <li><a class="dropdown-item" href="${ props.NAV[2].items[2].href }">${ props.NAV[2].items[2].value }</a></li>
              </ul>
            </li>
            <li class="nav-item">
              <a class="nav-link disabled">${ props.NAV[3].value }</a>
            </li>
          </ul>
          <form class="d-flex" role="search">
            <input class="form-control me-2" type="search" placeholder="${ props.FORM.placeholder }" aria-label="Search">
            <button class="btn btn-outline-success" type="submit">${ props.FORM.button }</button>
          </form>
        </div>
      </div>
    </nav>
  `)
}

