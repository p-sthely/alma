export default function Navbar ( props ) {

  return (`
    <h2>${ props.brand.value }</h2>
    <p>window.location.pathname = ${ window.location.pathname }</p>
  `)
}

