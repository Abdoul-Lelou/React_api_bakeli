import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { styled, alpha, useStyle } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import brand from '../../images/brand.png';
import './index.css'
import { AiOutlineReload } from '@mui/icons-material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import GroupIcon from '@mui/icons-material/Group';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import ArchiveIcon from '@mui/icons-material/Archive';
import { makeStyles } from '@mui/styles';
import { Avatar } from '@mui/material';
import BadgeAvatars from './avatar';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

const useStyles = makeStyles((theme) => ({
  divider: {
      background: 'background.paper',
      borderRadius:20,
      paddingTop:2,
      width: '90%',
      justifyContent: 'center'
  },
}));

export default function SearchAppBar() {
      const [state, setState] = React.useState({
        // top: false,
        left: false,
        // bottom: false,
        // right: false,
      });
      const classes= useStyles();
      let navigate = useNavigate();
    
      const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
          return;
        }
    
        setState({ ...state, [anchor]: open });
      };
    
      const list = (anchor) => (
        <Box
          sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 190, padding:1}}
          role="presentation"
          onClick={toggleDrawer(anchor, false)}
          onKeyDown={toggleDrawer(anchor, false)}
        >
          {/* <Divider color='#009688'/> */}
          <Divider
              
              variant="middle"
          >   </Divider>
          <List>
            {/* {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => ( */}
              <ListItem button onClick={()=>navigate('home')}>
                <ListItemIcon>
                  {/* {index % 2 === 0 ? <InboxIcon /> :  */}
                  <DashboardIcon />
                </ListItemIcon>
                Dashboard
                <ListItemText  />
              </ListItem>
            {/* ))} */}
          </List>
          <Divider />
          <List>
          <ListItem button onClick={()=>navigate('user')}>
                <ListItemIcon>
               
                  <GroupIcon />
                </ListItemIcon>
                Users
                <ListItemText  />
              </ListItem>
          </List>
          <Divider />
          <List style={{marginBottom:'auto'}}>
              <ListItem button onClick={()=>navigate('cour')}>
                <ListItemIcon>            
                  <AutoStoriesIcon />
                </ListItemIcon>
                Cours
                <ListItemText  />
              </ListItem>
          </List>
          <Divider />
          <List style={{marginBottom:'auto'}}>
              <ListItem button onClick={()=>navigate('archive')}>
                <ListItemIcon>                 
                  <ArchiveIcon />
                </ListItemIcon>
                Archives
                <ListItemText  />
              </ListItem>
          </List>
        </Box>
      )
    
    //   return (
        
    //   );  

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar style={{background:'#009688'}}>
          
          {['left'].map((anchor) => (
            <React.Fragment key={anchor}>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="open drawer"
                sx={{ mr: 2 }}
                onClick={toggleDrawer(anchor, true)}
              >
                <MenuIcon />
              </IconButton>
              <Drawer
                
                anchor={anchor}
                open={state[anchor]}
                onClose={toggleDrawer(anchor, false)}
              >
                <Divider
                className={classes.divider}
                variant="middle"
                >  
                  <img src={brand} alt="Bakeli" className='App-logo'  style={{padding:0, borderRadius:20, boxShadow:2}}/> 
                </Divider>
                
                {list(anchor)}
              </Drawer>
            </React.Fragment>
          ))}
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' }, margin:0.1 }}
          >
           {/* <img src={brand} alt="Bakeli" className='App-logo'  style={{borderRadius:20}}/> */}
          </Typography>
          {/* <Search> */}
            {/* <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            /> */}
            {/* <Avatar onClick={()=>window.location.pathname=''}>H</Avatar> */}
            <BadgeAvatars/>
          {/* </Search> */}
            
        </Toolbar>
      </AppBar>
    </Box>
  );
}

  
