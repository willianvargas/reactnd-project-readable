const styles = theme => ({
  root: {
    marginTop: theme.spacing.unit * 2
  },
  container: {
    flexGrow: 1,
    margin: [[theme.spacing.unit * 2, 0, theme.spacing.unit * 4]],
    padding: [[theme.spacing.unit * 4, theme.spacing.unit * 3]],
    borderTop: [[1, 'solid', theme.palette.grey['A100']]]
  },
  field: {
    margin: [[theme.spacing.unit * 2, 0]]
  },
  button: {
    marginTop: theme.spacing.unit,
    textTransform: 'none',
    fontSize: '1.2rem',
    padding: [[theme.spacing.unit * 0.5, theme.spacing.unit * 2]]
  },
  buttonIcon: {
    marginLeft: theme.spacing.unit * 1.5,
    fontSize: '1.1rem'
  }
})

export default styles
