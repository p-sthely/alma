export default function Section ( classes, components ) {

  let layout = ''
  
  for ( const item of components ) {
    layout += `
        ${ item }
    `
  }
  
  return (`
    <section class="section ${ classes }">
      <div class="container-fluid">
        ${ layout }
      </div>
    </section>
  `)
}

