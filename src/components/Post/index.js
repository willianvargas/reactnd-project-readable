import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import { withStyles } from '@material-ui/core/styles'
import { Paper, Grid, Typography, IconButton, Button } from '@material-ui/core'
import {
  Add as AddIcon,
  Remove as RemoveIcon
} from '@material-ui/icons'

import CommentBtn from './components/CommentBtn'
import styles from './styles'


const post = {
  id: '8xf0y6ziyjabvozdd253nd',
  timestamp: 1467166872634,
  title: 'Udacity is the best place to learn React',
  body: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.',
  author: 'thingtwo',
  category: 'react',
  voteScore: 6,
  deleted: false,
  commentCount: 2
}

const trucanteLength = 280

const Post = ({ classes }) => {
  const truncate = post.body.length > trucanteLength
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
        <Typography variant="body1">
          {post.body.length > trucanteLength ? (
            post.body.substring(0, trucanteLength).concat('...') 
          ) : (
            post.body
          )}
        </Typography>
      </Grid>
      <Grid className={classes.footer} direction="row-reverse" justify="space-between" container>
        <CommentBtn commentCount={post.commentCount} />
        {truncate && (
          <Button className={classes.readMoreBtn}>Continue reading...</Button>
        )}
      </Grid>
    </Paper>
  )
}

Post.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles, { withTheme: true })(Post)
