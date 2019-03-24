import React from 'react'
import PropTypes from 'prop-types'

import { withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import CommentIcon from '@material-ui/icons/ModeComment'

import styles from './styles'

const CommentBtn = ({ classes, commentCount }) => (
  <Button className={classes.root}>
    <CommentIcon className={classes.icon} />
    {commentCount === 0 ?
      'Comment' : commentCount === 1 ?
        '1 comment' :
        `${commentCount} comments`
    }
  </Button>
)

CommentBtn.propTypes = {
  classes: PropTypes.object.isRequired,
  commentCount: PropTypes.number.isRequired
}

export default withStyles(styles, { withTheme: true })(CommentBtn)
