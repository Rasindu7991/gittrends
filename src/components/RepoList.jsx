import React, { useRef, useCallback } from 'react';
import { Container, CircularProgress, Box } from '@mui/material';
import RepoCard from './RepoCard';

const RepoList = ({ repos, loading, hasMore, onLoadMore }) => {
  const observer = useRef();
  const lastRepoElementRef = useCallback(
    node => {
      if (loading) return;

      if (observer.current) observer.current.disconnect();

      observer.current = new IntersectionObserver(
        entries => {
          if (entries[0].isIntersecting && hasMore) {
            onLoadMore();
          }
        },
        {
          root: null,
          rootMargin: '100px',
          threshold: 0.1,
        }
      );

      if (node) observer.current.observe(node);
    },
    [loading, hasMore, onLoadMore]
  );

  return (
    <Container maxWidth="md">
      <Box sx={{ py: 2 }}>
        {repos.map((repo, index) => (
          <div key={repo.id} ref={index === repos.length - 1 ? lastRepoElementRef : null}>
            <RepoCard repo={repo} />
          </div>
        ))}
        {loading && (
          <Box sx={{ display: 'flex', justifyContent: 'center', my: 4 }}>
            <CircularProgress />
          </Box>
        )}
      </Box>
    </Container>
  );
};

export default RepoList;
