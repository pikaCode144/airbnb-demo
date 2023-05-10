const theme = {
  color: {
    primary: '#ff385c',
    secondary: '#00848a',
    textColor: '#484848',
    textColorSecondary: '#222',
    searchBarColor: '#fff'
  },
  mixin: {
    boxShadow: `
      transform: box-shadow 0.2s ease;
      &:hover {
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.18);
      }
    `
  }
}

export {
  theme
}