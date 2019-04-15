const styles = theme => ({
  link: {
    textDecoration: 'none'
  },
  root: {
    flexGrow: 1,
    margin: [[theme.spacing.unit * 2, 0, theme.spacing.unit * 5]],
    padding: theme.spacing.unit * 3,
    borderTop: [[1, 'solid', theme.palette.grey['A100']]]
  },
  category: {
    fontSize: '1rem',
    textTransform: 'uppercase',
    color: theme.palette.grey['A200']
  },
  author: {
    color: theme.palette.grey['700'],
    fontSize: '1rem'
  },
  divider: {
    marginLeft: theme.spacing.unit,
    paddingLeft: theme.spacing.unit,
    borderLeft: [[1, 'solid', theme.palette.grey['400']]],
    height: 14
  },
  date: {
    color: theme.palette.grey['700'],
    fontSize: '1rem'
  },
  body: {
    padding: [[theme.spacing.unit * 4, 0, theme.spacing.unit * 2]],
    paddingRight: 72
  },
  bodyText: {
    fontSize: '1.2rem'
  },
  readMoreBtn: {
    textTransform: 'none',
    fontSize: '1.1rem',
    color: theme.palette.primary.light
  }
})

export default styles
