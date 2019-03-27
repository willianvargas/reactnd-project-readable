const styles = theme => ({
  link: {
    textDecoration: 'none'
  },
  root: {
    flexGrow: 1,
    margin: [[theme.spacing.unit, 0, theme.spacing.unit * 4]],
    padding: theme.spacing.unit * 3,
    border: [[1, 'solid', theme.palette.grey['A100']]]
  },
  header: {
    paddingBottom: theme.spacing.unit * 2
  },
  category: {
    fontSize: '0.9rem',
    textTransform: 'uppercase',
    color: theme.palette.grey['A200']
  },
  title: {
    fontSize: '1.8rem'
  },
  author: {
    color: theme.palette.grey['700'],
    fontSize: '0.9rem'
  },
  divider: {
    marginLeft: theme.spacing.unit,
    paddingLeft: theme.spacing.unit,
    borderLeft: [[1, 'solid', theme.palette.grey['400']]],
    height: 14
  },
  date: {
    color: theme.palette.grey['700'],
    fontSize: '0.9rem'
  },
  body: {
    paddingBottom: theme.spacing.unit * 2,
    paddingRight: 72
  },
  bodyText: {
    fontSize: '1.2rem'
  },
  footer: {
    padding: [[theme.spacing.unit, 0]]
  },
  readMoreBtn: {
    textTransform: 'none',
    fontSize: '1.1rem',
    color: theme.palette.primary.light
  }
})

export default styles
