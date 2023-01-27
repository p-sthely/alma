export default function Image ( props ) {
  
  return (`
    <img src="${ props.src }" class="img-fluid" alt="${ props.alt }">
  `)
}

