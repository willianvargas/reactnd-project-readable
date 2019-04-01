import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import compose from 'recompose/compose'
import { Link } from 'react-router-dom'

import { withStyles } from '@material-ui/core/styles'
import { Paper, Grid, Typography, Button } from '@material-ui/core'

import { formatDate } from '../../utils/helpers'
import VoteScore from '../VoteScore'
import CommentBtn from './components/CommentBtn'
import styles from './styles'
import { handleAddVote } from './actions'

const trucanteLength = 140

class Post extends Component {

  handleAddScore = (type) => {
    const { post, handleAddVote } = this.props
    handleAddVote(post.id, type)
  }

  render() {
    const { classes, post, complete } = this.props
    if (post === null) {
      return (
        <Typography variant="body1" align="center">
          {`This post doesn't exists`}
        </Typography>
      )
    }
    const truncate = post.body.length > trucanteLength
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
              <Typography className={classes.title} variant="h2" gutterBottom>
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
            <VoteScore score={post.voteScore} onAddVote={this.handleAddScore} />
          </Grid>
          <Grid className={classes.body}>
            <Typography className={classes.bodyText} variant="body1">
              {!complete && truncate ? (
                post.body.substring(0, trucanteLength).concat('...') 
              ) : (
                post.body
              )}
            </Typography>
          </Grid>
          <Grid className={classes.footer} direction="row-reverse" justify="space-between" container>
            <CommentBtn count={post.commentCount} />
            {!complete && truncate && (
              <Button className={classes.readMoreBtn}>Continue reading...</Button>
            )}
          </Grid>
        </Paper>
      </Link>
    )
  }

}

Post.propTypes = {
  classes: PropTypes.object.isRequired,
  handleAddVote: PropTypes.func.isRequired,
  post: PropTypes.object,
  complete: PropTypes.bool
}

Post.defaultProps = {
  post: null,
  complete: false
}

const mapStateToProps = ({ posts }, { id }) => {
  return {
    post: posts[id]
  }
}

const mapDispatchToProps = (dispatch) => ({
  handleAddVote: (id, type) => dispatch(handleAddVote(id, type))
})

export default compose(
  withStyles(styles, { withTheme: true }),
  connect(mapStateToProps, mapDispatchToProps)
)(Post)
