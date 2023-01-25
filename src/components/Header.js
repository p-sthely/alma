import Navbar from '../components/Navbar.js'

export default function Header ( props ) {
  return (`
    <section class="header container-fluid">
      <div class="filter"></div>
      ${ Navbar ( props.NAVBAR ) }
      <div class="row mt-auto mb-auto">
        <div class="col">
          <div class="card text-bg-dark text-center bg-transparent border-0">
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" class="card-link">Card link</a>
              <a href="#" class="card-link">Another link</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  `)
}

