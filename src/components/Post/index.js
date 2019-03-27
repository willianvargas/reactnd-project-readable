import React from 'react'
import PropTypes from 'prop-types'

import { connect } from 'react-redux'
import compose from 'recompose/compose'
import { Link } from 'react-router-dom'

import { withStyles } from '@material-ui/core/styles'
import { Paper, Grid, Typography, Button } from '@material-ui/core'

import CommentBtn from './components/CommentBtn'
import VoteScore from './components/VoteScore'
import styles from './styles'
import { formatDate } from '../../utils/helpers'

const trucanteLength = 140

const Post = ({ classes, post }) => {
  if (post === null) {
    return (
      <Typography variant="body1" align="center">
        {`This post doesn't exists.`}
      </Typography>
    )
  }
  return (
    <Link className={classes.link} to={'/post/'.concat(post.id)}>
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
            <Grid alignItems="center" container>
              <Typography className={classes.author} variant="body1">
                {'by '}
                {post.author}
              </Typography>
              <i className={classes.divider} />
              <Typography className={classes.date} variant="body1">
                {formatDate(new Date(post.timestamp))}
              </Typography>
            </Grid>
          </Grid>
          <VoteScore score={post.voteScore} id={post.id} />
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
          <CommentBtn count={post.commentCount} />
          {post.body.length > trucanteLength && (
            <Button className={classes.readMoreBtn}>Continue reading...</Button>
          )}
        </Grid>
      </Paper>
    </Link>
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
  return { post }
}

export default compose(
  withStyles(styles, { withTheme: true }),
  connect(mapStateToProps, null)
)(Post)
