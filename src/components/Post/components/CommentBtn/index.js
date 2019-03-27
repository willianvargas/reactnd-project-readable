import React from 'react'
import PropTypes from 'prop-types'

import { withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import CommentIcon from '@material-ui/icons/ModeComment'

import styles from './styles'

const CommentBtn = ({ classes, count }) => (
  <Button className={classes.root}>
    <CommentIcon className={classes.icon} />
    {count === 0 ?
      'Comment' : count === 1 ?
        '1 comment' :
        `${count} comments`
    }
  </Button>
)

CommentBtn.propTypes = {
  classes: PropTypes.object.isRequired,
  count: PropTypes.number.isRequired
}

export default withStyles(styles, { withTheme: true })(CommentBtn)
