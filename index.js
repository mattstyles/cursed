
const blessed = require('blessed')
const osenv = require('osenv')

const screen = blessed.screen({
  smartCSR: true,
  dockBorders: true,
  ignoreDockContrast: true,
  title: 'Cursed',
  debug: true,
  dump: osenv.home() + '/.log/cursed.log'
})

screen.on('keypress', (ch, key) => {
  screen.log(ch, key)
})

screen.key('q', () => {
  return screen.destroy()
})
