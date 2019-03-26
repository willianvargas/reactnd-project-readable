import { grey, green, red } from '@material-ui/core/colors'


const styles = theme => ({
  root: {
    flexGrow: 1,
    margin: [[theme.spacing.unit * 4, 0]],
    padding: theme.spacing.unit * 3,
    border: [[1, 'solid', theme.palette.grey['A100']]],
    '&:first-child': {
      marginTop: theme.spacing.unit
    }
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
  scoreBtn: {
    padding: theme.spacing.unit * 0.5,
    color: grey[400],
    '&:hover $scoreBtnAdd, &:focus $scoreBtnAdd': {
      color: green[600]
    },
    '&:hover $scoreBtnRemove, &:focus $scoreBtnRemove': {
      color: red[600]
    }
  },
  scoreBtnAdd: {
  },
  scoreBtnRemove: {
  },
  scoreContent: {
    padding: theme.spacing.unit * 0.5
  },
  scoreText: {
    fontSize: '2rem'
  },
  scoreTextGreen: {
    color: green[700]
  },
  scoreTextRed: {
    color: red[700]
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
