
const styles = theme => ({
  titleContainer: {
    height: 72,
    padding: theme.spacing.unit * 2.5,
  },
  title: {
    fontSize: '2rem',
    fontWeight: 600,
    color: '#0d67b0'
  },
  navContainer: {
    padding: theme.spacing.unit * 1.5,
    borderTop: [[1, 'solid', theme.palette.grey['A100']]],
    borderBottom: [[1, 'solid', theme.palette.grey['A100']]],
    position: 'sticky',
    zIndex: 1,
    top: 0,
    background: theme.palette.common.white,
    transition: theme.transitions.create(['padding', 'box-shadow'], {
      duration: theme.transitions.duration.shorter
    }),
  },
  navContainerSticky: {
    padding: [[theme.spacing.unit * 0.5, theme.spacing.unit * 1.5]],
    boxShadow: theme.shadows['2'],
    zIndex: 9
  },
  navContent: {
    flexGrow: 1,
    maxWidth: 1080,
    margin: [[0, 'auto']],
    padding: [[0, theme.spacing.unit * 2]]
  },
  navItem: {
    color: theme.palette.grey['900'],
    fontWeight: 500,
    fontSize: '1rem'
  },
  navItemIcon: {
    marginRight: theme.spacing.unit * 0.5,
    fontSize: '1.4rem'
  },
  navItemActive: {
    color: theme.palette.primary.main,
    fontWeight: 600
  }
})

export default styles
