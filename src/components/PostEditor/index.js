import React, { Component, Fragment } from 'react'
import { findDOMNode } from 'react-dom'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router'
import { connect } from 'react-redux'
import compose from 'recompose/compose'
import UUID from 'uuid'

import { withStyles } from '@material-ui/core/styles'
import { Grid, IconButton, Paper, Typography, TextField, FormControl, 
  InputLabel, Select, OutlinedInput, MenuItem, Button
} from '@material-ui/core'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import SendIcon from '@material-ui/icons/Send'

import { handleAddPost, handleEditPost } from '../Post/actions'
import styles from './styles'


const initialPostState = {
  id: '',
  title: '',
  author: '',
  category: '',
  body: ''
}

class PostEditor extends Component {

  constructor(props) {
    super(props)
    this.state = {
      labelWidth: 0,
      ...initialPostState
    }
  }

  componentDidMount() {
    const { post } = this.props
    if (post) {
      const { id, title, author, category, body } = post
      this.setState({ id, title, author, category, body })
    }
    this.setState({
      // eslint-disable-next-line
      labelWidth: findDOMNode(this.InputLabelRef).offsetWidth
    })
  }

  componentDidUpdate(prevProps) {
    const { post } = this.props
    if (prevProps.post !== post) {
      if (post) {
        const { id, title, author, category, body } = post
        this.setState({ id, title, author, category, body })
      } else {
        this.setState({ ...initialPostState })
      }
    }
  }

  handleReturn = () => {
    const { history } = this.props
    const { category, id } = this.state
    history.push(`/${category}/${id}`)
  }

  handleChange = (field) => (e) => {
    this.setState({ [field]: e.target.value })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const { handleAddPost, handleEditPost, history } = this.props
    const { id, title, author, category, body } = this.state
    if (id) {
      handleEditPost({ id, title, body })
      history.push(`/${category}/${id}`)
    } else {
      const id = UUID.v4()
      const timestamp = new Date().getTime()
      handleAddPost({ id, title, author, category, body, timestamp })
      history.push(`/${category}/${id}`)
    }
  }

  render() {
    const { id, title, author, category, body, labelWidth } = this.state
    const { classes, categories } = this.props
    const disabled = (
      !title.length || !author.length || !category.length || !body.length
    )
    return (
      <Grid className={classes.root}>
        {id ? (
          <Grid direction="row" container>
            <IconButton onClick={this.handleReturn}>
              <ArrowBackIcon />
            </IconButton>
            <Typography className={classes.titleInline} variant="h3">
              Edit Post
            </Typography>
          </Grid>
        ) : (
          <Typography variant="h3">
            Create Post
          </Typography>
        )}
        <Paper className={classes.container} elevation={1}>
          <form onSubmit={this.handleSubmit}>
            <TextField
              className={classes.field}
              id="postTitle"
              value={title}
              onChange={this.handleChange('title')}
              label="Title"
              margin="normal"
              variant="outlined"
              fullWidth
            />
            {!id && (
              <Fragment>
                <TextField
                  className={classes.field}
                  id="postAuthor"
                  value={author}
                  onChange={this.handleChange('author')}
                  label="Author"
                  margin="normal"
                  variant="outlined"
                  fullWidth
                />
                <FormControl
                  className={classes.field}
                  variant="outlined"
                  margin="normal"
                  fullWidth
                >
                  <InputLabel
                    ref={ref => this.InputLabelRef = ref}
                    htmlFor="postCategory"
                  >
                    Category
                  </InputLabel>
                  <Select
                    value={category}
                    onChange={this.handleChange('category')}
                    input={(
                      <OutlinedInput
                        labelWidth={labelWidth}
                        name="category"
                        id="postCategory"
                      />
                    )}
                  >
                    {Object.keys(categories).map(category => (
                      <MenuItem key={category} value={category}>
                        {category}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Fragment>
            )}
            <TextField
              className={classes.field}
              id="postBody"
              value={body}
              onChange={this.handleChange('body')}
              label="What's on your mind?"
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
                {id ? 'Save' : 'Publish'} 
                <SendIcon className={classes.buttonIcon} />
              </Button>
            </Grid>
          </form>
        </Paper>
      </Grid>
    )
  }
}

PostEditor.propTypes = {
  classes: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  categories: PropTypes.object.isRequired,
  handleAddPost: PropTypes.func.isRequired,
  handleEditPost: PropTypes.func.isRequired, 
  post: PropTypes.object
}

PostEditor.defaultProps = {
  post: null
}

const mapStateToProps = ({ posts, categories }, { match }) => {
  const { postId } = match.params
  return {
    post: postId ? posts[postId] : null,
    categories
  }
}

const mapDispatchToProps = (dispatch) => ({
  handleAddPost: (payload) => dispatch(handleAddPost(payload)),
  handleEditPost: (payload) => dispatch(handleEditPost(payload))
})

export default withRouter(
  compose(
    withStyles(styles, { withTheme: true }),
    connect(mapStateToProps, mapDispatchToProps)
  )(PostEditor)
)
