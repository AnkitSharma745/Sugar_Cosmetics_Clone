import React from 'react';
import { Box, Grid, Typography, Link, Container } from '@mui/material';

function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: '#333',
        color: '#fff',
        py: 4,
        mt: 4,
        textAlign: 'center',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Section 1: Logo and Short Description */}
          <Grid item xs={12} md={3}>
            <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
              Sugar Cosmetics
            </Typography>
            <Typography variant="body2">
              Discover the best in cosmetics, from vibrant lipstick shades to
              high-quality foundations, for every skin tone and type.
            </Typography>
          </Grid>

          {/* Section 2: Quick Links */}
          <Grid item xs={12} md={3}>
            <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
              Quick Links
            </Typography>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li>
                <Link href="/" color="inherit" variant="body2">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/shop" color="inherit" variant="body2">
                  Shop
                </Link>
              </li>
              <li>
                <Link href="/about" color="inherit" variant="body2">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" color="inherit" variant="body2">
                  Contact
                </Link>
              </li>
            </ul>
          </Grid>

          {/* Section 3: Customer Service */}
          <Grid item xs={12} md={3}>
            <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
              Customer Service
            </Typography>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li>
                <Link href="/faq" color="inherit" variant="body2">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/returns" color="inherit" variant="body2">
                  Returns & Exchanges
                </Link>
              </li>
              <li>
                <Link href="/shipping" color="inherit" variant="body2">
                  Shipping Info
                </Link>
              </li>
              <li>
                <Link href="/privacy" color="inherit" variant="body2">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </Grid>

          {/* Section 4: Social Media */}
          <Grid item xs={12} md={3}>
            <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
              Follow Us
            </Typography>
            <ul
              style={{
                listStyle: 'none',
                padding: 0,
                display: 'flex',
                gap: '15px',
              }}
            >
              <li>
                <Link
                  href="https://www.instagram.com/sugarcosmetics"
                  color="inherit"
                  target="_blank"
                >
                  <Typography variant="body2">Instagram</Typography>
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.facebook.com/SugarCosmetics"
                  color="inherit"
                  target="_blank"
                >
                  <Typography variant="body2">Facebook</Typography>
                </Link>
              </li>
              <li>
                <Link
                  href="https://twitter.com/sugarcosmetics"
                  color="inherit"
                  target="_blank"
                >
                  <Typography variant="body2">Twitter</Typography>
                </Link>
              </li>
            </ul>
          </Grid>
        </Grid>

        <Box
          sx={{
            mt: 4,
            textAlign: 'center',
            borderTop: '1px solid #444',
            pt: 2,
          }}
        >
          <Typography variant="body2" color="inherit">
            &copy; {new Date().getFullYear()} Sugar Cosmetics. All rights
            reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

export default Footer;
