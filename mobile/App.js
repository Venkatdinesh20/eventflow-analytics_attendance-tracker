import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

// Feature Card Component
const FeatureCard = ({ icon, title, description, onPress }) => (
  <TouchableOpacity style={styles.card} onPress={onPress}>
    <View style={styles.cardHeader}>
      <Ionicons name={icon} size={32} color="#1976d2" />
      <Text style={styles.cardTitle}>{title}</Text>
    </View>
    <Text style={styles.cardDescription}>{description}</Text>
  </TouchableOpacity>
);

export default function App() {
  const handleFeaturePress = (feature) => {
    console.log(`${feature} pressed - functionality to be implemented`);
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>EventFlow Analytics</Text>
        <Text style={styles.subtitle}>Digital Attendance Tracker</Text>
      </View>

      <ScrollView style={styles.content} contentContainerStyle={styles.scrollContent}>
        {/* Welcome Message */}
        <View style={styles.welcomeSection}>
          <Text style={styles.welcomeText}>
            Welcome to EventFlow Analytics Mobile App
          </Text>
          <Text style={styles.welcomeSubtext}>
            Your digital companion for college event attendance
          </Text>
        </View>

        {/* Feature Cards */}
        <View style={styles.featuresSection}>
          <FeatureCard
            icon="qr-code-outline"
            title="QR Code Check-in"
            description="Scan QR codes to quickly check in to events"
            onPress={() => handleFeaturePress('QR Code Check-in')}
          />
          
          <FeatureCard
            icon="calendar-outline"
            title="My Events"
            description="View upcoming events and your attendance history"
            onPress={() => handleFeaturePress('My Events')}
          />
          
          <FeatureCard
            icon="person-outline"
            title="Profile"
            description="Manage your profile and preferences"
            onPress={() => handleFeaturePress('Profile')}
          />
          
          <FeatureCard
            icon="chatbubble-outline"
            title="Feedback"
            description="Provide feedback for attended events"
            onPress={() => handleFeaturePress('Feedback')}
          />
        </View>

        {/* Project Info */}
        <View style={styles.infoSection}>
          <Text style={styles.infoTitle}>About This Project</Text>
          <Text style={styles.infoText}>
            This mobile app is part of the EventFlow Analytics project developed by:
          </Text>
          <Text style={styles.teamMember}>• Venkat Dinesh Pasupuleti</Text>
          <Text style={styles.teamMember}>• Shalini Sirdhala</Text>
          <Text style={styles.teamMember}>• Lokeshwar Reddy Tippani</Text>
          
          <View style={styles.statsContainer}>
            <View style={styles.statItem}>
              <Text style={styles.statNumber}>90%</Text>
              <Text style={styles.statLabel}>Target Digital Capture</Text>
            </View>
            <View style={styles.statItem}>
              <Text style={styles.statNumber}>2 Days</Text>
              <Text style={styles.statLabel}>Report Generation</Text>
            </View>
            <View style={styles.statItem}>
              <Text style={styles.statNumber}>40%</Text>
              <Text style={styles.statLabel}>Feedback Increase</Text>
            </View>
          </View>
        </View>

        {/* Development Status */}
        <View style={styles.statusSection}>
          <Text style={styles.statusTitle}>Development Status</Text>
          <Text style={styles.statusText}>
            This React Native mobile application is currently in development. 
            It will provide seamless check-in/out functionality, event browsing, 
            and feedback collection for college events.
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    backgroundColor: '#1976d2',
    paddingTop: 50,
    paddingBottom: 20,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#ffffff',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#e3f2fd',
    textAlign: 'center',
    marginTop: 5,
  },
  content: {
    flex: 1,
  },
  scrollContent: {
    padding: 20,
  },
  welcomeSection: {
    backgroundColor: '#ffffff',
    padding: 20,
    borderRadius: 12,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  welcomeText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 10,
  },
  welcomeSubtext: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
  },
  featuresSection: {
    marginBottom: 20,
  },
  card: {
    backgroundColor: '#ffffff',
    padding: 20,
    borderRadius: 12,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginLeft: 15,
  },
  cardDescription: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
  },
  infoSection: {
    backgroundColor: '#ffffff',
    padding: 20,
    borderRadius: 12,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  infoTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  infoText: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
    marginBottom: 10,
  },
  teamMember: {
    fontSize: 14,
    color: '#1976d2',
    marginBottom: 5,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
    paddingTop: 20,
    borderTopWidth: 1,
    borderTopColor: '#eee',
  },
  statItem: {
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1976d2',
  },
  statLabel: {
    fontSize: 12,
    color: '#666',
    textAlign: 'center',
    marginTop: 5,
  },
  statusSection: {
    backgroundColor: '#e3f2fd',
    padding: 20,
    borderRadius: 12,
    marginBottom: 20,
  },
  statusTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1976d2',
    marginBottom: 10,
  },
  statusText: {
    fontSize: 14,
    color: '#1565c0',
    lineHeight: 20,
  },
});