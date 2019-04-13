const styles = theme => ({
  root: {
    flexGrow: 1,
    padding: [[theme.spacing.unit * 4, theme.spacing.unit * 3]],
    borderTop: [[1, 'solid', theme.palette.grey['A100']]]
  },
  date: {
    color: theme.palette.grey['700']
  },
  bodyText: {
    padding: [[theme.spacing.unit * 2, theme.spacing.unit * 2, 0]],
    fontSize: '1.2rem'
  }
})

export default styles
