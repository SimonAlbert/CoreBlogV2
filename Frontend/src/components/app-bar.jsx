import React, { useContext } from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import InputBase from '@mui/material/InputBase'
import ListItemIcon from '@mui/material/ListItemIcon'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import MenuIcon from '@mui/icons-material/Menu'
import SearchIcon from '@mui/icons-material/Search'
import HomeIcon from '@mui/icons-material/Home'
import TranslateIcon from '@mui/icons-material/Translate'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import LoginIcon from '@mui/icons-material/Login'
import InfoIcon from '@mui/icons-material/Info'
import AddIcon from '@mui/icons-material/Add'
import { styled, alpha } from '@mui/material/styles'
import { useTranslation } from 'react-i18next'
import { Link, useLocation, useHistory } from 'react-router-dom'

import UserContext from './user-context'

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: theme.spacing(1),
  width: 'auto'
}))

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}))

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '16ch',
    '&:focus': {
      width: '24ch',
      [theme.breakpoints.down('md')]: {
        width: '18ch'
      }
    },
  },
}))

const MainAppBar = () => {
  const { t } = useTranslation()
  const location = useLocation()
  const history = useHistory()
  const userContext = useContext(UserContext)

  const [anchor, setAnchor] = React.useState(null)
  const open = Boolean(anchor)
  const handleClick = event => setAnchor(event.currentTarget)
  const handleClose = () => setAnchor(null)

  return (
    <AppBar position="sticky">
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          sx={{ mr: 2 }}
          onClick={handleClick}>
          <MenuIcon />
        </IconButton>
        <IconButton size="large"
                    edge="start"
                    color="inherit"
                    sx={{ mr: 2 }}
                    onClick={() => history.goBack()}>
          <ArrowBackIcon />
        </IconButton>
        {
          (location.pathname !== '/') && (
            <IconButton size="large"
                        edge="start"
                        color="inherit"
                        sx={{ mr: 2 }}
                        component={Link}
                        to="/">
              <HomeIcon />
            </IconButton>
          )
        }
        {
          (location.pathname === '/' && userContext.user) && (
            <IconButton size="large"
                        edge="start"
                        color="inherit"
                        sx={{ mr: 2 }}
                        component={Link}
                        to="/edit">
              <AddIcon />
            </IconButton>
          )
        }
        <Menu anchorEl={anchor} open={open} onClose={handleClose}>
          <MenuItem onClick={handleClose}
                    component={Link}
                    to={'/language'}>
            <ListItemIcon>
              <TranslateIcon />
            </ListItemIcon>
            { t('UI.MainMenu.SetLanguage') }
          </MenuItem>
          {
            userContext.user ? (
              <MenuItem onClick={handleClose}
                        component={Link}
                        to={'/user'}>
                <ListItemIcon>
                  <AccountCircleIcon />
                </ListItemIcon>
                { t('UI.MainMenu.CurrentUser') }
                { ': ' }
                { userContext.user.userName }
              </MenuItem>
            ) : (
              <MenuItem onClick={handleClose}
                        component={Link}
                        to={'/login'}>
                <ListItemIcon>
                  <LoginIcon />
                </ListItemIcon>
                { t('UI.MainMenu.Login') }
              </MenuItem>
            )
          }
          <MenuItem onClick={handleClose}
                    component={Link}
                    to={'/about'}>
            <ListItemIcon>
              <InfoIcon />
            </ListItemIcon>
            { t('UI.MainMenu.About') }
          </MenuItem>
        </Menu>
        <Typography
          variant="h6"
          noWrap
          component="div"
          sx={{
            flexGrow: 1,
            display: {
              xs: 'none',
              sm: 'unset',
              md: 'unset',
              lg: 'unset',
              xl: 'unset',
            }
          }}
        >
          CoreBlog
        </Typography>
        <div style={{ flexGrow: 1 }} />
        <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder={ t('UI.AppBar.Search') }
            inputProps={{ 'aria-label': 'search' }}
          />
        </Search>
      </Toolbar>
    </AppBar>
  )
}

export default MainAppBar
