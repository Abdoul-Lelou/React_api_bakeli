import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import EditIcon from '@mui/icons-material/Edit';
import Divider from '@mui/material/Divider';
import ArchiveIcon from '@mui/icons-material/Archive';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { IconButton } from '@mui/material';
import MenuOpenSharpIcon from '@mui/icons-material/MenuOpenSharp';
import DetailPanelCour from '../dialog/detailPanel';

const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'right',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    {...props}
  />
))(({ theme }) => ({
  '& .MuiPaper-root': {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color:
      theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
    boxShadow:
      'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
    '& .MuiMenu-list': {
      padding: '4px 0',
    },
    '& .MuiMenuItem-root': {
      '& .MuiSvgIcon-root': {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.8),
      },
      '&:active': {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity,
        ),
      },
    },
  },
}));

export default function CustomizedMenusCour({user, openModalEdit, courArchive, rowSelected, update_user, role}) {

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [isActive, setisActive] = React.useState(false)
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  


  return (
    <div>
      <IconButton
        id="demo-customized-button"
        aria-controls={open ? 'demo-customized-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        variant="contained"
        disableElevation
        onClick={handleClick}
        endIcon={<KeyboardArrowDownIcon />}
        startIcon={<KeyboardArrowDownIcon />}
        sx={{boxShadow:2}}
      >
        <MenuOpenSharpIcon />
      </IconButton>
      <StyledMenu
        id="demo-customized-menu"
        MenuListProps={{
          'aria-labelledby': 'demo-customized-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        {
          role === 'admin' &&
          <>
            <MenuItem onClick={()=>{update_user() ; openModalEdit(); handleClose()}} disableRipple>
              <EditIcon />
              Edit
            </MenuItem>
            
            <Divider sx={{ my: 0.5 }} />
            <MenuItem onClick={()=>{ courArchive(); handleClose()}} disableRipple>
              <ArchiveIcon />
              Archive
            </MenuItem>
            <Divider sx={{ my: 0.5 }} />
          </>
        }
        {
          role === 'proffesseur' &&
            <MenuItem onClick={()=>{update_user() ; openModalEdit(); handleClose()}} disableRipple>
              <EditIcon />
              Edit
            </MenuItem>
        }
        <MenuItem  disableRipple>
          {/* <MoreHorizIcon /> */}
          <DetailPanelCour detail={rowSelected} user={user}/>
          
        </MenuItem>
      </StyledMenu>
    </div>
  );
}
