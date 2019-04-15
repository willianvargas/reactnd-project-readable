const styles = theme => ({
  root: {
    marginTop: theme.spacing.unit * 8
  },
  comments: {
    flexGrow: 1,
    margin: [[theme.spacing.unit * 2, 0, theme.spacing.unit * 4]],
    borderTop: [[1, 'solid', theme.palette.grey['A100']]]
  }
})

export default styles
