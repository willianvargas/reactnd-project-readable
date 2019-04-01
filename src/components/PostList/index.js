import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import compose from 'recompose/compose'

import { withStyles } from '@material-ui/core/styles'
import { Grid, Typography } from '@material-ui/core'

import ReactLogo from '../../images/logo.svg'
import Post from '../Post'
import SortingBtn from './components/SortingBtn'
import styles from './styles'
import getPostsWithSorting from './selectors'
import { updateSorting } from './actions'

class PostList extends Component {

  handleChangeSorting = (type) => {
    const { updateSorting } = this.props
    updateSorting(type)
  }
  
  render() {
    const { classes, posts } = this.props
    return (
      posts.length === 0 ? (
        <Grid className={classes.placeholder} direction="column" alignItems="center" container>
          <img className={classes.placeholderImg} src={ReactLogo} alt="react" />
          <Typography variant="body1" align="center">
            No posts here
          </Typography>
        </Grid>
      ) : (
        <Fragment>
          <Grid className={classes.actions} justify="flex-end" container>
            <SortingBtn onChange={this.handleChangeSorting} />
          </Grid>
          {posts.map(post => (
            <Post key={post} id={post} />
          ))}
        </Fragment>
      )
    )
  }

}

PostList.propTypes = {
  classes: PropTypes.object.isRequired,
  posts: PropTypes.arrayOf(PropTypes.string).isRequired,
  updateSorting: PropTypes.func.isRequired
}

const mapStateToProps = ({ posts, sorting }, props) => {
  const { category } = props.match.params
  return {
    posts: getPostsWithSorting(posts)(category)(sorting)
  }
}

const mapDispatchToProps = (dispatch) => ({
  updateSorting: (type) => dispatch(updateSorting(type))
})

export default compose(
  withStyles(styles, { withTheme: true }),
  connect(mapStateToProps, mapDispatchToProps)
)(PostList)
