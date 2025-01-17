import {
  AppBar,
  Drawer,
  IconButton,
  MenuItem,
  MenuList,
  TextField,
  Toolbar,
} from '@mui/material';
import { Box } from '@mui/system';
import { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import Logo from '../../assets/images/Logo/SUGAR_Cosmetics_Logo.avif';

function NavBar() {
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);
  const drawerWidth = 200;
  const container = window.document.body;

  const handleToggle = () => {
    setIsDrawerOpen((prevState) => !prevState);
  };
  const categories = [
    'NEW',
    'LIPS',
    'EYE',
    'FACE',
    'SKIN',
    'OFFERS',
    'GIFTING',
    'SUGAR POP',
    'SUGAR PLAY',
  ];
  const categoryList = (
    <MenuList>
      {categories.map((category) => (
        <MenuItem key={category}>{category}</MenuItem>
      ))}
    </MenuList>
  );

  return (
    <>
      <AppBar component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            edge="start"
            onClick={handleToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              width: '100%',
              alignItems: 'center',
            }}
          >
            <Box
              sx={{
                flexGrow: 1,
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <Box
                component="img"
                src={Logo}
                sx={{
                  width: { xs: '90px', sm: '90px', md: '140px', lg: '140px' },
                  marginRight: { xs: '5px' },
                }}
              />
            </Box>

            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 2,
              }}
            >
              <TextField
                variant="outlined"
                placeholder="SEARCH PRODUCT BY NAME"
                sx={{ width: 200 }}
              />
              <IconButton>
                <Person2OutlinedIcon fontSize="medium" />
              </IconButton>
              <IconButton>
                <ShoppingBagOutlinedIcon fontSize="medium" />
              </IconButton>
            </Box>
          </Box>
        </Toolbar>
        <Box sx={{ width: '100%', textAlign: 'center' }}>
          <MenuList
            sx={{
              width: '65%',
              display: 'flex',
              margin: 'auto',
            }}
          >
            {categories.map((category) => (
              <MenuItem key={category}>{category}</MenuItem>
            ))}
          </MenuList>
        </Box>
      </AppBar>

      {/* Drawer Component */}
      <Drawer
        container={container}
        variant="temporary"
        open={isDrawerOpen}
        onClose={handleToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: 'block', sm: 'none' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: drawerWidth,
          },
        }}
      >
        {categoryList}
      </Drawer>
    </>
  );
}

export default NavBar;
