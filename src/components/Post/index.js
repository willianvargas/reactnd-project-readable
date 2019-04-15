import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import compose from 'recompose/compose'

import { withStyles } from '@material-ui/core/styles'
import { Paper, Grid, Typography, Button } from '@material-ui/core'

import { formatDate } from '../../utils/helpers'
import VoteScore from '../VoteScore'
import OptionsMenu from '../OptionsMenu'
import CommentBtn from './components/CommentBtn'
import { handleAddVote, handleDelete } from './actions'
import styles from './styles'

const trucanteLength = 140

class Post extends Component {

  handleAddScore = (type) => {
    const { post, handleAddVote } = this.props
    handleAddVote(post.id, type)
  }

  handleEdit = () => {
    const { post, history } = this.props
    history.push(`/${post.category}/${post.id}/edit`)
  }

  handleDelete = () => {
    const { post, handleDelete, history } = this.props
    handleDelete(post.id)
    history.push('/')
  }

  render() {
    const { classes, post, isPage } = this.props
    if (post === null) {
      return (
        <Typography variant="body1" align="center">
          {`404. This post doesn't exists`}
        </Typography>
      )
    }
    const truncate = post.body.length > trucanteLength
    const PostContent = (
      <Paper className={classes.root} elevation={1}>
        <Grid
          direction="row"
          alignItems="flex-start"
          justify="space-between"
          wrap="nowrap"
          container
        >
          <VoteScore score={post.voteScore} onAddVote={this.handleAddScore} />
          <Grid direction="column" container item>
            <Typography className={classes.category} variant="body1" gutterBottom>
              {post.category}
            </Typography>
            <Typography variant="h2" gutterBottom>
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
            <Grid className={classes.body}>
              <Typography className={classes.bodyText} variant="body1">
                {!isPage && truncate ? (
                  post.body.substring(0, trucanteLength).concat('...') 
                ) : (
                  post.body
                )}
              </Typography>
            </Grid>
          </Grid>
          {isPage && (
            <OptionsMenu onEdit={this.handleEdit} onDelete={this.handleDelete} />
          )}
        </Grid>
        <Grid direction="row-reverse" justify="space-between" container>
          <CommentBtn count={post.commentCount} />
          {!isPage && truncate && (
            <Button className={classes.readMoreBtn}>Continue reading...</Button>
          )}
        </Grid>
      </Paper>
    )
    return isPage ? PostContent : (
      <Link className={classes.link} to={`/${post.category}/${post.id}`}>
        {PostContent}
      </Link>
    )
  }

}

Post.propTypes = {
  classes: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  handleAddVote: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
  post: PropTypes.object,
  isPage: PropTypes.bool
}

Post.defaultProps = {
  post: null,
  isPage: false
}

const mapStateToProps = ({ posts }, { id }) => {
  return {
    post: posts[id]
  }
}

const mapDispatchToProps = (dispatch) => ({
  handleAddVote: (id, type) => dispatch(handleAddVote(id, type)),
  handleDelete: (id) => dispatch(handleDelete(id))
})

export default withRouter(
  compose(
    withStyles(styles, { withTheme: true }),
    connect(mapStateToProps, mapDispatchToProps)
  )(Post)
)
