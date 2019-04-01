import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import { withStyles } from '@material-ui/core/styles'
import { Grid, IconButton, Typography } from '@material-ui/core'
import { Add as AddIcon, Remove as RemoveIcon } from '@material-ui/icons'

import styles from './styles'

class VoteScore extends Component {

  addUpVote = (e) => {
    e.preventDefault()
    const { onAddVote } = this.props
    onAddVote('upVote')
  }

  addDownVote = (e) => {
    e.preventDefault()
    const { onAddVote } = this.props
    onAddVote('downVote')
  }

  render() {
    const { classes, score } = this.props
    return (
      <Grid direction="column" alignItems="center" xs container item>
        <Grid>
          <IconButton className={classes.scoreBtn} onClick={this.addUpVote}>
            <AddIcon className={classes.scoreIconAdd} />
          </IconButton>
        </Grid>
        <Grid className={classes.scoreContent}>
          <Typography
            className={classNames(
              classes.scoreText,
              score > 0 ?
                classes.scoreTextGreen :
                classes.scoreTextRed
            )}
            variant="h3"
          >
            {score}
          </Typography>
        </Grid>
        <Grid>
          <IconButton className={classes.scoreBtn} onClick={this.addDownVote}>
            <RemoveIcon className={classes.scoreIconRemove} />
          </IconButton>
        </Grid>
      </Grid>
    )
  }
}

VoteScore.propTypes = {
  classes: PropTypes.object.isRequired,
  score: PropTypes.number.isRequired,
  onAddVote: PropTypes.func.isRequired
}

export default withStyles(styles, { withTheme: true })(VoteScore)
