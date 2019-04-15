
const styles = theme => ({
  titleContainer: {
    height: 72,
    padding: [[
      theme.spacing.unit * 3,
      theme.spacing.unit * 3,
      theme.spacing.unit
    ]]
  },
  title: {
    color: '#0d67b0'
  },
  navContainer: {
    padding: theme.spacing.unit * 2,
    boxShadow: [
      '0px 3px 3px 0px rgba(0,0,0,0.08)',
      '0px 2px 1px 0px rgba(0,0,0,0.14)',
      '0px 2px 1px -1px rgba(0,0,0,0.12)'
    ],
    position: 'sticky',
    zIndex: 1,
    top: 0,
    background: theme.palette.common.white,
    transition: theme.transitions.create(['padding', 'box-shadow'], {
      duration: theme.transitions.duration.shorter
    }),
  },
  navContainerSticky: {
    zIndex: 9
  },
  navContent: {
    flexGrow: 1,
    maxWidth: 1080,
    margin: [[0, 'auto']],
    padding: [[0, theme.spacing.unit * 2]]
  },
  homeBtn: {
    color: theme.palette.grey['900'],
    fontWeight: 500,
    fontSize: '1rem'
  },
  homeBtnIcon: {
    marginRight: theme.spacing.unit * 0.5,
    fontSize: '1.4rem'
  },
  homeBtnActive: {
    color: theme.palette.primary.main,
    fontWeight: 600
  }
})

export default styles
