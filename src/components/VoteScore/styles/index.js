import { grey, green, red } from '@material-ui/core/colors'

const styles = theme => ({
  root: {
    padding: [[0, theme.spacing.unit * 2]]
  },
  scoreBtn: {
    padding: theme.spacing.unit * 0.5,
    color: grey[400],
    '&:hover $scoreIconAdd, &:focus $scoreIconAdd': {
      color: green[600]
    },
    '&:hover $scoreIconRemove, &:focus $scoreIconRemove': {
      color: red[600]
    }
  },
  scoreIconAdd: {
  },
  scoreIconRemove: {
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
})

export default styles
