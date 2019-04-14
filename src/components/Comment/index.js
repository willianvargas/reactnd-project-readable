import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import compose from 'recompose/compose'

import { withStyles } from '@material-ui/core/styles'
import { Grid, Typography } from '@material-ui/core'

import { formatDate } from '../../utils/helpers'
import VoteScore from '../VoteScore'
import Menu from './components/Menu'
import EditComment from './components/EditComment'
import styles from './styles'
import { handleAddVote, handleEdit, handleDelete } from './actions'

class Comment extends Component {

  state = {
    editing: false
  }

  handleAddScore = (type) => {
    const { comment, handleAddVote } = this.props
    handleAddVote(comment.id, type)
  }

  handleEdit = () => {
    this.setState({ editing: true })
  }

  handleDelete = () => {
    const { comment, handleDelete } = this.props
    handleDelete(comment.id)
  }

  handleClose = () => {
    this.setState({ editing: false })
  }

  handleSave = (body) => {
    const { comment, handleEdit } = this.props
    const { id } = comment
    const timestamp = new Date().getTime()
    handleEdit({ id, timestamp, body })
    this.setState({ editing: false })
  }

  render() {
    const { classes, comment } = this.props
    const { editing } = this.state
    return (
      comment === null ? (
        <Typography variant="body1" align="center">
          {`This comment doesn't exists`}
        </Typography>
      ) : (
        <Fragment>
          <Grid
            className={classes.root}
            direction="row"
            alignItems="flex-start"
            justify="space-between"
            wrap="nowrap"
            container
          >
            <Grid direction="column" container item>
              <Typography variant="h4" gutterBottom>
                {comment.author}
              </Typography>
              <Typography className={classes.date} variant="body2">
                {formatDate(new Date(comment.timestamp))}
              </Typography>
              <Typography className={classes.bodyText} variant="body1">
                {comment.body}
              </Typography>
            </Grid>
            <VoteScore score={comment.voteScore} onAddVote={this.handleAddScore} />
            <Menu onEdit={this.handleEdit} onDelete={this.handleDelete} />
          </Grid>
          <EditComment
            open={editing}
            body={comment.body}
            onClose={this.handleClose}
            onSave={this.handleSave} 
          />
        </Fragment>
      )
    )
  }

}

Comment.propTypes = {
  classes: PropTypes.object.isRequired,
  handleAddVote: PropTypes.func.isRequired,
  handleEdit: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
  comment: PropTypes.object
}

Comment.defaultProps = {
  comment: null
}

const mapStateToProps = ({ comments }, { id }) => { 
  return {
    comment: comments[id]
  }
}

const mapDispatchToProps = (dispatch) => ({
  handleAddVote: (id, type) => dispatch(handleAddVote(id, type)),
  handleEdit: (payload) => dispatch(handleEdit(payload)),
  handleDelete: (id) => dispatch(handleDelete(id))
})

export default compose(
  withStyles(styles, { withTheme: true }),
  connect(mapStateToProps, mapDispatchToProps)
)(Comment)
