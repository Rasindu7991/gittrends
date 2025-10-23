import React from 'react';
import { Container, CircularProgress, Box } from '@mui/material';
import RepoCard from './RepoCard';

const RepoList = ({ repos, loading }) => {
  if (loading) {
    return (
      <Container sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
        <CircularProgress />
      </Container>
    );
  }

  return (
    <Container maxWidth="md">
      <Box sx={{ py: 2 }}>
        {repos.map(repo => (
          <RepoCard key={repo.id} repo={repo} />
        ))}
      </Box>
    </Container>
  );
};

export default RepoList;
