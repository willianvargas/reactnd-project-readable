import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import compose from 'recompose/compose'
import UUID from 'uuid'

import { withStyles } from '@material-ui/core/styles'
import { Grid, Typography, TextField, Button } from '@material-ui/core'
import SendIcon from '@material-ui/icons/Send'

import handleAddComment from './actions'
import styles from './styles'

const initialState = {
  author: '',
  body: ''
}

class NewComment extends Component {

  constructor(props) {
    super(props)
    this.state = {
      ...initialState
    }
  }

  handleChange = (field) => (e) => {
    this.setState({ [field]: e.target.value })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const { parentId, handleAddComment } = this.props
    const { author, body } = this.state
    const id = UUID.v4()
    const timestamp = new Date().getTime()
    handleAddComment({ id, parentId, author, body, timestamp })
    this.afterSubmit()
  }

  afterSubmit = () => {
    this.setState({
      ...initialState
    })
  }

  render() {
    const { classes } = this.props
    const { author, body } = this.state
    const disabled = !author.length || !body.length
    return (
      <Grid className={classes.root}>
        <form onSubmit={this.handleSubmit}>
          <Typography variant="h4" gutterBottom>
            Post new comment
          </Typography>
          <TextField
            id="commentAuthor"
            value={author}
            onChange={this.handleChange('author')}
            label="Your name"
            margin="normal"
            variant="outlined"
            fullWidth
          />
          <TextField
            id="commentBody"
            value={body}
            onChange={this.handleChange('body')}
            label="Your comment"
            rows="4"
            margin="normal"
            variant="outlined"
            multiline
            fullWidth
          />
          <Grid justify="flex-end" container>
            <Button
              className={classes.button}
              variant="contained"
              color="primary"
              size="large"
              type="submit"
              disabled={disabled}
            >
              Post
              <SendIcon className={classes.buttonIcon} />
            </Button>
          </Grid>
        </form>
      </Grid>
    )
  }

}

NewComment.propTypes = {
  classes: PropTypes.object.isRequired,
  parentId: PropTypes.string.isRequired,
  handleAddComment: PropTypes.func.isRequired
}

const mapDispatchToProps = (dispatch) => ({
  handleAddComment: (payload) => dispatch(handleAddComment(payload))
})

export default compose(
  withStyles(styles, { withTheme: true }),
  connect(null, mapDispatchToProps)
)(NewComment)
