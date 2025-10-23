import React, { useState, useEffect } from 'react';
import { Typography, Container, Alert, Box } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import RepoList from './components/RepoList';
import Pagination from './components/Pagination';
import { fetchTrendingRepos } from './services/githubApi';
import './styles/main.css';

function App() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    const loadRepos = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await fetchTrendingRepos(currentPage);
        setRepos(data.items);
        setHasMore(data.total_count > currentPage * 10);
      } catch (err) {
        setError('Failed to fetch repositories. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    loadRepos();
  }, [currentPage]);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Box sx={{ bgcolor: 'background.default', minHeight: '100vh' }}>
      <Box 
        sx={{ 
          bgcolor: '#24292e',
          color: 'white',
          py: { xs: 2, sm: 3 },
          mb: 2,
          boxShadow: 1
        }}
      >
        <Container maxWidth="md">
          <Box sx={{ 
            display: 'flex', 
            alignItems: 'center',
            justifyContent: { xs: 'center', sm: 'flex-start' },
            gap: 2,
            px: { xs: 2, sm: 0 }
          }}>
            <GitHubIcon sx={{ 
              fontSize: { xs: 28, sm: 32 },
              color: 'white' 
            }} />
            <Typography 
              variant="h6" 
              component="h1" 
              sx={{ 
                fontWeight: 600,
                fontSize: { xs: '1.25rem', sm: '1.5rem' },
                color: 'white'
              }}
            >
              Trending Repos
            </Typography>
          </Box>
        </Container>
      </Box>

      {error && (
        <Container maxWidth="lg">
          <Alert 
            severity="error" 
            sx={{ 
              mb: 3,
              borderRadius: 2
            }}
          >
            {error}
          </Alert>
        </Container>
      )}

      <RepoList repos={repos} loading={loading} />
      
      {!loading && !error && (
        <Container maxWidth="md">
          <Pagination
            currentPage={currentPage}
            hasMore={hasMore}
            onPageChange={handlePageChange}
          />
        </Container>
      )}
    </Box>
  );
}

export default App;