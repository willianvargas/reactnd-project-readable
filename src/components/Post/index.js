import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { connect } from 'react-redux'
import compose from 'recompose/compose'

import { withStyles } from '@material-ui/core/styles'
import { Paper, Grid, Typography, IconButton, Button } from '@material-ui/core'
import {
  Add as AddIcon,
  Remove as RemoveIcon
} from '@material-ui/icons'

import CommentBtn from './components/CommentBtn'
import styles from './styles'

const trucanteLength = 140

const Post = ({ classes, post }) => {
  if (post === null) {
    return (
      <p>
        {`This post doesn't exists`}
      </p>
    )
  }
  return (
    <Paper className={classes.root} elevation={0}>
      <Grid
        className={classes.header}
        direction="row"
        alignItems="center"
        justify="space-between"
        wrap="nowrap"
        container
      >
        <Grid direction="column" container item>
          <Typography className={classes.category} variant="body1" gutterBottom>
            {post.category}
          </Typography>
          <Typography className={classes.title} variant="h3" gutterBottom>
            {post.title}
          </Typography>
          <Typography className={classes.author} variant="body1">
            {'by '}
            {post.author}
          </Typography>
        </Grid>
        <Grid direction="column" alignItems="center" xs container item>
          <Grid>
            <IconButton className={classes.scoreBtn}>
              <AddIcon className={classes.scoreBtnAdd} />
            </IconButton>
          </Grid>
          <Grid className={classes.scoreContent}>
            <Typography
              className={classNames(
                classes.scoreText,
                post.voteScore > 0 ?
                  classes.scoreTextGreen :
                  classes.scoreTextRed
              )}
              variant="h3"
            >
              {post.voteScore}
            </Typography>
          </Grid>
          <Grid>
            <IconButton className={classes.scoreBtn}>
              <RemoveIcon className={classes.scoreBtnRemove} />
            </IconButton>
          </Grid>
        </Grid>
      </Grid>
      <Grid className={classes.body}>
        <Typography className={classes.bodyText} variant="body1">
          {post.body.length > trucanteLength ? (
            post.body.substring(0, trucanteLength).concat('...') 
          ) : (
            post.body
          )}
        </Typography>
      </Grid>
      <Grid className={classes.footer} direction="row-reverse" justify="space-between" container>
        <CommentBtn commentCount={post.commentCount} />
        {post.body.length > trucanteLength && (
          <Button className={classes.readMoreBtn}>Continue reading...</Button>
        )}
      </Grid>
    </Paper>
  )
}

Post.propTypes = {
  classes: PropTypes.object.isRequired,
  post: PropTypes.object
}

Post.defaultProps = {
  post: null
}

const mapStateToProps = ({ posts: { data } }, { id }) => {
  const post = data[id]
  return {
    post
  }
}

export default compose(
  withStyles(styles, { withTheme: true }),
  connect(mapStateToProps, null)
)(Post)
