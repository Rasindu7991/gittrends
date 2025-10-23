import React from 'react';
import { Paper, Typography, Box, Link, Avatar } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import moment from 'moment';

const RepoCard = ({ repo }) => {
  return (
    <Paper 
      sx={{ 
        p: { xs: 1.5, sm: 2 },
        mb: 1,
        '&:hover': { 
          bgcolor: 'action.hover'
        },
        display: 'flex',
        alignItems: 'flex-start',
        gap: { xs: 1.5, sm: 2 },
        transition: 'background-color 0.2s ease'
      }}
      elevation={0}
    >
      <Avatar 
        src={repo.owner.avatar_url}
        sx={{ width: 32, height: 32 }}
        alt={repo.owner.login}
      />
      
      <Box sx={{ flex: 1 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 0.5 }}>
          <Box>
            <Link
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              underline="none"
              sx={{ 
                color: 'text.primary',
                fontWeight: 500,
                '&:hover': { color: 'primary.main' }
              }}
            >
              {repo.name}
            </Link>
            <Typography 
              component="span" 
              sx={{ 
                ml: 1,
                color: 'text.secondary',
                fontSize: '0.875rem'
              }}
            >
              {repo.owner.login}
            </Typography>
          </Box>
          
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <StarIcon sx={{ color: 'text.secondary', fontSize: 18, mr: 0.5 }} />
            <Typography sx={{ fontSize: '0.875rem', fontWeight: 500 }}>
              {repo.stargazers_count.toLocaleString()}
            </Typography>
          </Box>
        </Box>

        <Typography 
          color="text.secondary"
          sx={{ 
            fontSize: '0.875rem',
            mb: 1,
            lineHeight: 1.5
          }}
        >
          {repo.description || 'No description provided'}
        </Typography>

        <Box sx={{ display: 'flex', gap: 2, alignItems: 'center', fontSize: '0.75rem', color: 'text.secondary' }}>
          {repo.language && (
            <Typography component="span" sx={{ fontSize: 'inherit' }}>
              {repo.language}
            </Typography>
          )}
          <Typography component="span" sx={{ fontSize: 'inherit' }}>
            Created {moment(repo.created_at).fromNow()}
          </Typography>
        </Box>
      </Box>
    </Paper>
  );
};

export default RepoCard;