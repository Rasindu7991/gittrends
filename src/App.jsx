import React, { useState, useEffect } from 'react';
import { Typography, Container, Alert, Box, Fab, Zoom } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import RepoList from './components/RepoList';
import { fetchTrendingRepos } from './services/githubApi';
import './styles/main.css';

function App() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Handle scroll event to show/hide back to top button
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      setShowScrollTop(scrollTop > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const loadRepos = async page => {
    try {
      setLoading(true);
      setError(null);
      const data = await fetchTrendingRepos(page);

      if (page === 1) {
        setRepos(data.items);
      } else {
        setRepos(prevRepos => [...prevRepos, ...data.items]);
      }

      setHasMore(data.total_count > page * 10);
    } catch (err) {
      setError('Failed to fetch repositories. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadRepos(1);
  }, []);

  const handlePageChange = newPage => {
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
          boxShadow: 1,
        }}
      >
        <Container maxWidth="md">
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: { xs: 'center', sm: 'flex-start' },
              gap: 2,
              px: { xs: 2, sm: 0 },
            }}
          >
            <GitHubIcon
              sx={{
                fontSize: { xs: 28, sm: 32 },
                color: 'white',
              }}
            />
            <Typography
              variant="h6"
              component="h1"
              sx={{
                fontWeight: 600,
                fontSize: { xs: '1.25rem', sm: '1.5rem' },
                color: 'white',
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
              borderRadius: 2,
            }}
          >
            {error}
          </Alert>
        </Container>
      )}

      <RepoList
        repos={repos}
        loading={loading}
        hasMore={hasMore}
        onLoadMore={() => {
          if (!loading && hasMore) {
            loadRepos(currentPage + 1);
            setCurrentPage(prev => prev + 1);
          }
        }}
      />

      {/* Back to Top Button */}
      <Zoom in={showScrollTop}>
        <Box
          role="presentation"
          sx={{
            position: 'fixed',
            bottom: 32,
            right: { xs: 16, sm: 32 },
            zIndex: 1000,
          }}
        >
          <Fab
            color="primary"
            size="medium"
            aria-label="scroll back to top"
            onClick={scrollToTop}
            sx={{
              bgcolor: '#24292e',
              '&:hover': {
                bgcolor: '#2f363d',
              },
            }}
          >
            <KeyboardArrowUpIcon />
          </Fab>
        </Box>
      </Zoom>
    </Box>
  );
}

export default App;
