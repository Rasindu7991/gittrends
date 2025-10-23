import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import FirstPageIcon from '@mui/icons-material/FirstPage';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

const Pagination = ({ currentPage, hasMore, onPageChange }) => {
  return (
    <Box sx={{ 
      display: 'flex', 
      flexDirection: { xs: 'column', sm: 'row' },
      alignItems: 'center',
      justifyContent: 'center',
      gap: { xs: 1.5, sm: 2 },
      my: 4,
      px: 2,
      width: '100%'
    }}>
      <Box sx={{ 
        display: 'flex',
        justifyContent: 'center',
        gap: 1,
        order: { xs: 2, sm: 1 },
        width: { xs: '100%', sm: 'auto' }
      }}>
        <Button
          variant="outlined"
          disabled={currentPage === 1}
          onClick={() => onPageChange(1)}
          size="small"
          startIcon={<FirstPageIcon />}
          sx={{
            borderColor: 'grey.300',
            '&:hover': {
              borderColor: 'grey.400',
              bgcolor: 'grey.50'
            }
          }}
        >
          First
        </Button>
        <Button
          variant="outlined"
          disabled={currentPage === 1}
          onClick={() => onPageChange(currentPage - 1)}
          size="small"
          startIcon={<NavigateBeforeIcon />}
          sx={{
            borderColor: 'grey.300',
            '&:hover': {
              borderColor: 'grey.400',
              bgcolor: 'grey.50'
            }
          }}
        >
          Previous
        </Button>
        <Button
          variant="outlined"
          disabled={!hasMore}
          onClick={() => onPageChange(currentPage + 1)}
          size="small"
          endIcon={<NavigateNextIcon />}
          sx={{
            borderColor: 'grey.300',
            '&:hover': {
              borderColor: 'grey.400',
              bgcolor: 'grey.50'
            }
          }}
        >
          Next
        </Button>
      </Box>
      <Typography 
        sx={{ 
          color: 'text.secondary',
          fontSize: '0.875rem',
          order: { xs: 1, sm: 2 }
        }}
      >
        Page {currentPage}
      </Typography>
    </Box>
  );
};

export default Pagination;