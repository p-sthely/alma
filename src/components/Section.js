export default function Section ( components ) {

  let layout = ''
  
  for ( const item of components ) {
    layout += `
        ${ item }
    `
  }
  
  return (`
    <section class="section">
      ${ layout }
    </section>
  `)
}

