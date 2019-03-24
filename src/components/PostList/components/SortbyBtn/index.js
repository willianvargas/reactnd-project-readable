import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'

import { withStyles } from '@material-ui/core/styles'
import {
  Button,
  Popper,
  Grow,
  Paper,
  ClickAwayListener,
  MenuList,
  MenuItem
} from '@material-ui/core'
import SortIcon from '@material-ui/icons/Sort'

import styles from './styles'

class SortbyBtn extends Component {

  state = {
    open: false
  }

  handleToggle = () => {
    this.setState(state => ({ open: !state.open }))
  }

  handleClose = (option) => {
    if (option) {
      console.log(option)
    }
    this.setState({ open: false })
  }

  render() {
    const { classes } = this.props
    const { open } = this.state
    return (
      <Fragment>
        <Button
          className={classes.root}
          buttonRef={node => {
            this.anchorEl = node
          }}
          aria-owns={open ? 'sortby-menu' : undefined}
          aria-haspopup="true"
          onClick={this.handleToggle}
        >
          <SortIcon className={classes.icon} />
          Sort by
        </Button>
        <Popper open={open} anchorEl={this.anchorEl} transition disablePortal>
          {({ TransitionProps }) => (
            <Grow
              id="sortby-menu"
              style={{ transformOrigin: 'center top' }}
              {...TransitionProps}
            >
              <Paper>
                <ClickAwayListener onClickAway={this.handleClose}>
                  <MenuList>
                    <MenuItem
                      onClick={() => this.handleClose('score')}
                    >
                      Most popular
                    </MenuItem>
                    <MenuItem
                      onClick={() => this.handleClose('dateDesc')}
                    >
                      Date added (newest)
                    </MenuItem>
                    <MenuItem
                      onClick={() => this.handleClose('dateAsc')}
                    >
                      Date added (oldest)
                    </MenuItem>
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </Fragment>
    )
  }
}

SortbyBtn.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles, { withTheme: true })(SortbyBtn)
