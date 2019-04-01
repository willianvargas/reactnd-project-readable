const styles = theme => ({
  root: {
    marginTop: theme.spacing.unit * 2
  },
  comments: {
    flexGrow: 1,
    margin: [[theme.spacing.unit * 2, 0, theme.spacing.unit * 4]],
    border: [[1, 'solid', theme.palette.grey['A100']]]
  },
  title: {
    fontSize: '1.6rem'
  }
})

export default styles
