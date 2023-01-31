export default function Footer ( props ) {
  return (`
    <footer class="footer">
      <div class="container-fluid">
        <p>${ props.copyright }</p>
      </div>
    </footer>
  `)
}

