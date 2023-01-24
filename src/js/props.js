export const HEADER = {
  NAVBAR: {
    BRAND: {
      value: 'Navbar',
      href: '#'
    },
    NAV: [
      { value: 'Home', href: '#' },
      { value: 'Link', href: '#' },
      {
        value: 'Dropdown',
        href: '#',
        items: [
          { value: 'Action', href: '#'},
          { value: 'Another action', href: '#'},
          { value: 'Something else here', href: '#'}
        ]
      },
      { value: 'Disabled', href: '#' }
    ],
    FORM: {
      placeholder: 'Search',
      button: 'Search'
    }
  }
}

