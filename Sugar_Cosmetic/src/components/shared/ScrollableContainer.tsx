import { ChevronLeft, ChevronRight } from '@mui/icons-material';
import { Box, IconButton, useTheme } from '@mui/material';
import React, { useRef, useState, useEffect } from 'react';

function ScrollableContainer({ children }: { children: React.ReactNode }) {
  const theme = useTheme();
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [showLeftIcon, setShowLeftIcon] = useState<boolean>(false);
  const [showRightIcon, setShowRightIcon] = useState<boolean>(false);

  const onItemScroll = (direction: 'left' | 'right') => {
    if (containerRef.current) {
      const scrollAmount = direction === 'left' ? -100 : 100;
      containerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };
  const checkScrollIcons = () => {
    if (containerRef.current) {
      const isAtLeftEnd = containerRef.current.scrollLeft === 0;
      const isAtRightEnd =
        Math.abs(
          containerRef.current.scrollLeft +
            containerRef.current.clientWidth -
            containerRef.current.scrollWidth
        ) < 1;

      setShowLeftIcon(!isAtLeftEnd);
      setShowRightIcon(!isAtRightEnd);
    }
  };
  useEffect(() => {
    const onWindowResize = () => {
      checkScrollIcons();
    };
    window.addEventListener('resize', onWindowResize);
    return () => {
      window.removeEventListener('resize', onWindowResize);
    };
  }, []);

  return (
    <Box sx={{ display: 'flex' }}>
      {showLeftIcon && (
        <IconButton onClick={() => onItemScroll('left')}>
          <ChevronLeft
            sx={{
              fontSize: '2rem',
              color: theme.palette.text.primary,
              backgroundColor: theme.palette.background.default,
            }}
          />
        </IconButton>
      )}
      <Box
        ref={containerRef}
        onScroll={checkScrollIcons}
        sx={{
          overflowX: 'auto',
          scrollbarWidth: 'none',
          padding: '1rem',
          '&::-webkit-scrollbar': {
            display: 'none',
          },
        }}
      >
        {children}
      </Box>
      {showRightIcon && (
        <IconButton onClick={() => onItemScroll('right')}>
          <ChevronRight
            sx={{
              fontSize: '2rem',
              color: theme.palette.text.primary,
              backgroundColor: theme.palette.background.default,
            }}
          />
        </IconButton>
      )}
    </Box>
  );
}
export default ScrollableContainer;
