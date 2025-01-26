import {
  AppBar,
  Drawer,
  IconButton,
  MenuItem,
  MenuList,
  TextField,
  Toolbar,
  Box,
} from '@mui/material';
import { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import Logo from '../../assets/images/Logo/SUGAR_Cosmetics_Logo.avif';

function NavBar() {
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const drawerWidth = 200;
  const container = window.document.body;

  const handleToggle = () => {
    setIsDrawerOpen((prevState) => !prevState);
  };

  const categories = [
    { name: 'NEW', subcategories: [] },
    { name: 'LIPS', subcategories: ['Matte', 'Gloss', 'Liquid'] },
    { name: 'EYE', subcategories: ['Mascara', 'Eyeliner', 'Eyeshadow'] },
    { name: 'FACE', subcategories: ['Blush', 'Foundation', 'Highlighter'] },
    { name: 'SKIN', subcategories: ['Moisturizers', 'Serums', 'Face Wash'] },
    { name: 'OFFERS', subcategories: [] },
    { name: 'GIFTING', subcategories: [] },
    { name: 'SUGAR POP', subcategories: [] },
    { name: 'SUGAR PLAY', subcategories: [] },
  ];

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
  };

  const handleSubcategoryClick = (subcategory: string) => {
    setSelectedCategory(subcategory);
  };

  const categoryList = (
    <MenuList>
      {categories.map((category) => (
        <Box key={category.name}>
          <MenuItem
            onClick={() => handleCategoryClick(category.name)}
            sx={{
              backgroundColor:
                selectedCategory === category.name
                  ? 'lightgray'
                  : 'transparent',
            }}
          >
            {category.name}
          </MenuItem>
          {category.subcategories.length > 0 &&
            selectedCategory === category.name && (
              <MenuList sx={{ paddingLeft: 2 }}>
                {category.subcategories.map((subcategory) => (
                  <MenuItem
                    key={subcategory}
                    onClick={() => handleSubcategoryClick(subcategory)}
                    sx={{
                      backgroundColor:
                        selectedCategory === subcategory
                          ? 'lightgray'
                          : 'transparent',
                    }}
                  >
                    {subcategory}
                  </MenuItem>
                ))}
              </MenuList>
            )}
        </Box>
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
            sx={{ mr: 2, display: { sm: 'none' } }} // Hide menu icon on large screens
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
                display: { xs: 'none', sm: 'flex' }, // Hide on small screens
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
        {/* Categories listed horizontally on larger screens */}
        <Box
          sx={{
            display: { xs: 'none', sm: 'block' }, // Hide on small screens
            width: '100%',
            textAlign: 'center',
          }}
        >
          <MenuList
            sx={{
              display: 'flex',
              justifyContent: 'center',
              paddingLeft: 0,
              margin: 0,
            }}
          >
            {categories.map((category) => (
              <MenuItem
                key={category.name}
                onClick={() => handleCategoryClick(category.name)}
                sx={{
                  backgroundColor:
                    selectedCategory === category.name
                      ? 'lightgray'
                      : 'transparent',
                  padding: '8px 16px',
                  '&:hover': {
                    backgroundColor: 'lightgray',
                  },
                }}
              >
                {category.name}
              </MenuItem>
            ))}
          </MenuList>
        </Box>
      </AppBar>

      {/* Drawer Component for mobile screens */}
      <Drawer
        container={container}
        variant="temporary"
        open={isDrawerOpen}
        onClose={handleToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: 'block', sm: 'none' }, // Show drawer on small screens
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
