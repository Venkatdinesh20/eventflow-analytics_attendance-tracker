import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Container, Box, Typography, Paper, Grid, Card, CardContent } from '@mui/material';
import { Event, People, Analytics, Dashboard } from '@mui/icons-material';

// Placeholder components for different pages
const HomePage = () => (
  <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
    <Typography variant="h2" component="h1" gutterBottom align="center">
      EventFlow Analytics
    </Typography>
    <Typography variant="h5" component="h2" gutterBottom align="center" color="text.secondary">
      Digital Attendance & Participation Tracker for College Events
    </Typography>
    
    <Grid container spacing={3} sx={{ mt: 4 }}>
      <Grid item xs={12} md={6} lg={3}>
        <Card>
          <CardContent sx={{ textAlign: 'center', p: 3 }}>
            <Event sx={{ fontSize: 48, color: 'primary.main', mb: 2 }} />
            <Typography variant="h6" component="h3" gutterBottom>
              Event Management
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Create and manage college events with digital attendance tracking
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      
      <Grid item xs={12} md={6} lg={3}>
        <Card>
          <CardContent sx={{ textAlign: 'center', p: 3 }}>
            <People sx={{ fontSize: 48, color: 'primary.main', mb: 2 }} />
            <Typography variant="h6" component="h3" gutterBottom>
              Attendance Tracking
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Real-time check-in/out system with QR code support
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      
      <Grid item xs={12} md={6} lg={3}>
        <Card>
          <CardContent sx={{ textAlign: 'center', p: 3 }}>
            <Analytics sx={{ fontSize: 48, color: 'primary.main', mb: 2 }} />
            <Typography variant="h6" component="h3" gutterBottom>
              Analytics & Reports
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Comprehensive reporting and insights within 2 days post-event
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      
      <Grid item xs={12} md={6} lg={3}>
        <Card>
          <CardContent sx={{ textAlign: 'center', p: 3 }}>
            <Dashboard sx={{ fontSize: 48, color: 'primary.main', mb: 2 }} />
            <Typography variant="h6" component="h3" gutterBottom>
              Real-time Dashboard
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Live monitoring of event attendance and participant engagement
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>

    <Paper sx={{ p: 4, mt: 4, textAlign: 'center' }}>
      <Typography variant="h4" component="h2" gutterBottom>
        Project Goals
      </Typography>
      <Grid container spacing={3} sx={{ mt: 2 }}>
        <Grid item xs={12} md={4}>
          <Typography variant="h3" color="primary.main" gutterBottom>
            90%
          </Typography>
          <Typography variant="body1">
            Digital attendance capture for all campus events
          </Typography>
        </Grid>
        <Grid item xs={12} md={4}>
          <Typography variant="h3" color="primary.main" gutterBottom>
            2 Days
          </Typography>
          <Typography variant="body1">
            Event insights report generation (vs. current 2 weeks)
          </Typography>
        </Grid>
        <Grid item xs={12} md={4}>
          <Typography variant="h3" color="primary.main" gutterBottom>
            40%
          </Typography>
          <Typography variant="body1">
            Increase in post-event feedback participation
          </Typography>
        </Grid>
      </Grid>
    </Paper>

    <Box sx={{ mt: 4, p: 3, bgcolor: 'background.paper', borderRadius: 2 }}>
      <Typography variant="h6" gutterBottom>
        Development Status
      </Typography>
      <Typography variant="body2" color="text.secondary">
        This is a React.js frontend application for the EventFlow Analytics project. 
        The application will connect to the Node.js backend API to provide a complete 
        digital attendance tracking solution for college events.
      </Typography>
      <Box sx={{ mt: 2 }}>
        <Typography variant="body2" component="div">
          <strong>Team:</strong> EventFlow Analytics
        </Typography>
        <Typography variant="body2" component="div">
          <strong>Members:</strong> Venkat Dinesh Pasupuleti, Shalini Sirdhala, Lokeshwar Reddy Tippani
        </Typography>
        <Typography variant="body2" component="div">
          <strong>Tech Stack:</strong> React.js, Material-UI, Node.js, MongoDB
        </Typography>
      </Box>
    </Box>
  </Container>
);

// Main App Component
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/events" element={
          <Container sx={{ mt: 4 }}>
            <Typography variant="h4">Events Management</Typography>
            <Typography variant="body1" sx={{ mt: 2 }}>
              Events management functionality will be implemented here.
            </Typography>
          </Container>
        } />
        <Route path="/dashboard" element={
          <Container sx={{ mt: 4 }}>
            <Typography variant="h4">Dashboard</Typography>
            <Typography variant="body1" sx={{ mt: 2 }}>
              Real-time dashboard functionality will be implemented here.
            </Typography>
          </Container>
        } />
        <Route path="/reports" element={
          <Container sx={{ mt: 4 }}>
            <Typography variant="h4">Reports & Analytics</Typography>
            <Typography variant="body1" sx={{ mt: 2 }}>
              Reports and analytics functionality will be implemented here.
            </Typography>
          </Container>
        } />
      </Routes>
    </div>
  );
}

export default App;