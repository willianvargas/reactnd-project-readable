import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { Dialog, DialogActions, DialogTitle, 
  DialogContent, TextField, Button
} from '@material-ui/core'

class EditComment extends Component {

  state = {
    body: ''
  }

  componentDidMount() {
    const { body } = this.props
    this.setState({ body })
  }

  componentDidUpdate(prevProps) {
    const { body } = this.props
    if (prevProps.body !== body) {
      this.setState({ body })
    }
  }

  handleChangeText = (e) => {
    this.setState({ body: e.target.value })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const { body } = this.state
    const { onSave } = this.props
    onSave(body)
  }
  
  render() {
    const { open, onClose } = this.props
    const { body } = this.state
    const disabled = !body.length
    return (
      <Dialog
        open={open}
        onClose={onClose}
        aria-labelledby="edit-comment-dialog-title"
        maxWidth="md"
        fullWidth
      >
        <form onSubmit={this.handleSubmit}>
          <DialogTitle id="edit-comment-dialog-title">
            Edit comment
          </DialogTitle>
          <DialogContent>
            <TextField
              id="editCommentBody"
              value={body}
              onChange={this.handleChangeText}
              label="Your comment"
              rows="4"
              margin="normal"
              variant="outlined"
              multiline
              fullWidth
              autoFocus
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={onClose} color="primary">
              Cancel
            </Button>
            <Button disabled={disabled} color="primary" type="submit">
              Save
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    )
  }

}

EditComment.propTypes = {
  open: PropTypes.bool.isRequired,
  body: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired
}

export default EditComment
