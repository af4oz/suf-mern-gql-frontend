import { useState } from 'react'
import AuthFormModal from './AuthFormModal'

import { Menu, MenuItem, Avatar, EmptyLink, SvgIcon } from './CompStore'
import { MdAccountCircle as AccountCircleIcon } from 'react-icons/md';
import { IoMdPower as PowerIcon } from 'react-icons/io';
import { MdKeyboardArrowDown as ArrowDownIcon } from 'react-icons/md';

import tw from 'twin.macro' // eslint-disable-line no-unused-vars

const UserMenuDesktop = ({ user, logoutUser }) => {
  const [anchorEl, setAnchorEl] = useState(null)

  const handleOpenMenu = event => {
    setAnchorEl(event.currentTarget)
  }

  const handleCloseMenu = () => {
    setAnchorEl(null)
  }

  const handleLogoutClick = () => {
    logoutUser()
    handleCloseMenu()
  }

  return (
    <div>
      {user ? (
        <div style={{ display: 'inline' }}>
          <EmptyLink
            tw="text-sm flex items-center justify-center"
            onClick={handleOpenMenu}
          >
            <Avatar
              alt={user.username}
              src={`https://secure.gravatar.com/avatar/${user.id}?s=164&d=identicon`}
              styles={
                {
                  avatarRoot: tw`width[1.5em] height[1.5em]`
                }
              }
            />
            <span tw="text-purple-900">
              {user.username}
            </span>
            <SvgIcon>
              <ArrowDownIcon />
            </SvgIcon>
          </EmptyLink>
          <Menu
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={Boolean(anchorEl)}
            onClose={handleCloseMenu}
          >
            <MenuItem
              to={`/user/${user.username}`}
              onClick={handleCloseMenu}
            >
              <SvgIcon tw="mr-2">
                <AccountCircleIcon />
              </SvgIcon>
              My Profile
            </MenuItem>
            <MenuItem onClick={handleLogoutClick}>
              <SvgIcon tw="mr-2">
                <PowerIcon />
              </SvgIcon>
              Logout
            </MenuItem>
          </Menu>
        </div>
      ) : (
        <AuthFormModal />
      )}
    </div>
  )
}

export default UserMenuDesktop