export default function Section ( components ) {

  let layout = ''
  
  for ( const item of components ) {
    layout += `
      <div>
        ${ item }
      </div>
    `
  }
  
  return (`
    <section class="section border">
      ${ layout }
    </section>
  `)
}

