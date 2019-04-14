import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'

import { IconButton, Popover, Paper, ClickAwayListener, MenuList,
  MenuItem, ListItemIcon, ListItemText, Divider
} from '@material-ui/core'
import {
  MoreVert as MoreVertIcon,
  Edit as EditIcon,
  Delete as DeleteIcon
} from '@material-ui/icons'


class CommentMenu extends Component {

  state = {
    open: false,
  }

  handleToggle = () => {
    this.setState(state => ({ open: !state.open }))
  };

  handleClose = (e) => {
    if (this.anchorEl.contains(e.target)) {
      return
    }
    this.setState({ open: false })
  }

  onEditClick = () => {
    const { onEdit } = this.props
    onEdit()
    this.setState({ open: false })
  }

  onDeleteClick = () => {
    const { onDelete } = this.props
    onDelete()
    this.setState({ open: false })
  }

  render() {
    const { open } = this.state 
    return (
      <Fragment>
        <IconButton
          buttonRef={node => { this.anchorEl = node }}
          aria-owns={open ? 'menu-list-grow' : undefined}
          aria-haspopup="true"
          onClick={this.handleToggle}
        >
          <MoreVertIcon />
        </IconButton>
        <Popover
          open={open}
          anchorEl={this.anchorEl}
          transformOrigin={{ vertical: 'top', horizontal: 'right' }}
          anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
          disablePortal
        >
          <Paper>
            <ClickAwayListener onClickAway={this.handleClose}>
              <MenuList>
                <MenuItem onClick={this.onEditClick}>
                  <ListItemIcon>
                    <EditIcon />
                  </ListItemIcon>
                  <ListItemText primary="Edit" />
                </MenuItem>
                <Divider />
                <MenuItem onClick={this.onDeleteClick}>
                  <ListItemIcon>
                    <DeleteIcon />
                  </ListItemIcon>
                  <ListItemText primary="Delete" />
                </MenuItem>
              </MenuList>
            </ClickAwayListener>
          </Paper>
        </Popover>
      </Fragment>
    )
  }

}

CommentMenu.propTypes = {
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired
}

export default CommentMenu
