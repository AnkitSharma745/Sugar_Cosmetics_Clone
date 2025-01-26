import React, { useState } from 'react';
import { Box, Card, CardContent, Typography, Tooltip } from '@mui/material';

import { keyframes } from '@emotion/react';
import { Product } from '@/interfaces/modal';

function ProductCard({ product }: { product: Product }) {
  const shadeHover = keyframes`
  0% { transform: scale(1); }
  100% { transform: scale(1.1); }
`;

  const [hovered, setHovered] = useState<boolean>(false);
  const [imageIndex, setImageIndex] = useState<number>(0);
  const handleMouseEnter = () => {
    setHovered(true);
    setImageIndex((prevIndex) => (prevIndex + 1) % product.images.length); // Change to next image
  };

  const handleMouseLeave = () => {
    setHovered(false);
    setImageIndex(0); // Revert to first image
  };
  return (
    <Card
      sx={{
        width: '600px',
        borderRadius: 2,
        boxShadow: 3,
        transition: 'transform 0.3s ease-in-out',
      }}
    >
      <Box
        sx={{
          position: 'relative',
          overflow: 'hidden',
          '&:hover': {
            transform: 'scale(1.05)', // Slight zoom effect on hover
          },
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <img
          src={product.images[imageIndex]}
          alt={product.productName}
          style={{
            width: '100%',
            height: 'auto',
            transition: 'opacity 0.3s ease-in-out',
            opacity: hovered ? 0 : 1,
          }}
        />
        <img
          src={product.images[(imageIndex + 1) % product.images.length]} // Next image on hover
          alt={product.productName}
          style={{
            width: '100%',
            height: 'auto',
            position: 'absolute',
            top: 0,
            left: 0,
            transition: 'opacity 0.3s ease-in-out',
            opacity: hovered ? 1 : 0,
          }}
        />
      </Box>

      <CardContent>
        <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
          {product.productName}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ my: 1 }}>
          ${product.price.toFixed(2)}
        </Typography>
        <Box sx={{ display: 'flex', gap: 1 }}>
          {product.shades.map((shade, index) => (
            <Tooltip key={shade} title={`Shade ${index + 1}`} placement="top">
              <Box
                sx={{
                  width: 16,
                  height: 16,
                  borderRadius: '50%',
                  backgroundColor: shade,
                  cursor: 'pointer',
                  transition: 'transform 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'scale(1.2)',
                    animation: `${shadeHover} 0.5s ease-in-out`,
                  },
                }}
              />
            </Tooltip>
          ))}
        </Box>
      </CardContent>
    </Card>
  );
}
export default ProductCard;
