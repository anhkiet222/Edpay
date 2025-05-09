import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image, SafeAreaView } from 'react-native';

// Placeholder for icons - consider using a library like react-native-vector-icons
const IconPlaceholder = ({ name, size = 24, color = '#007bff' }) => (
  <View style={{ width: size, height: size, backgroundColor: color, borderRadius: size / 2, justifyContent: 'center', alignItems: 'center', marginVertical: 5 }}>
    <Text style={{ color: 'white', fontSize: size * 0.5 }}>{name.substring(0,1)}</Text>
  </View>
);

const HomeScreen = () => {
  const userName = 'Nguyen Duc Huy'; // Example user name
  const userClass = '3A7'; // Example user class

  const features = [
    { name: 'Fee', icon: 'F' },
    { name: 'Reward', icon: 'R' },
    { name: 'Scores', icon: 'S' },
    { name: 'Comment', icon: 'C' },
    { name: 'Event', icon: 'E' },
    { name: 'Contact', icon: 'C' },
    { name: 'Index', icon: 'I' },
    { name: 'Gifted', icon: 'G' },
  ];

  const bottomNavItems = [
    { name: 'Home', icon: 'H', active: true },
    { name: 'Notification', icon: 'N' },
    { name: 'Chat', icon: 'C' },
    { name: 'Profile', icon: 'P' },
  ];

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.container} contentContainerStyle={styles.scrollContentContainer}>
        {/* Header */}
        <View style={styles.headerContainer}>
          <Text style={styles.welcomeText}>Welcome back to Edpay</Text>
          <Text style={styles.greetingText}>👋 How about you today?</Text>
          <View style={styles.userInfoContainer}>
            <Image
              source={{ uri: 'https://via.placeholder.com/40' }} // Placeholder image
              style={styles.avatar}
            />
            <Text style={styles.userName}>{userName} • {userClass}</Text>
            <TouchableOpacity style={styles.dropdownIconContainer}>
              <Text style={styles.dropdownIcon}>▼</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Tuition Card */}
        <View style={styles.tuitionCard}>
          <View style={styles.tuitionCardHeader}>
            <Image
                source={require('../../assets/logo_placeholder.png')} // Replace with actual logo if available
                style={styles.tuitionLogo}
            />
            <Text style={styles.importantTag}>Important</Text>
          </View>
          <Text style={styles.tuitionTitle}>Tuition for the 2024</Text>
          <Text style={styles.tuitionAmount}>312.900.000đ</Text>
          <Text style={styles.tuitionSubAmount}>335.000.000 đ</Text>
          <TouchableOpacity style={styles.detailButton}>
            <Text style={styles.detailButtonText}>Detail</Text>
          </TouchableOpacity>
        </View>

        {/* Features Grid */}
        <View style={styles.featuresGrid}>
          {features.map((feature) => (
            <TouchableOpacity key={feature.name} style={styles.featureButton}>
              <IconPlaceholder name={feature.icon} size={30} color={styles.featureIcon.color} />
              <Text style={styles.featureButtonText}>{feature.name}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        {bottomNavItems.map((item) => (
          <TouchableOpacity key={item.name} style={styles.bottomNavItem}>
            <IconPlaceholder name={item.icon} size={24} color={item.active ? '#007bff' : '#aaa'} />
            <Text style={[styles.bottomNavText, item.active && styles.bottomNavTextActive]}>
              {item.name}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#0052cc', // Dark blue background for the top area
  },
  container: {
    flex: 1,
    backgroundColor: '#f0f4ff', // Light blueish background for content
  },
  scrollContentContainer: {
    paddingBottom: 80, // Space for bottom nav
  },
  headerContainer: {
    backgroundColor: '#0052cc', // Dark blue from image
    paddingHorizontal: 20,
    paddingTop: 20, // Adjust as needed for status bar
    paddingBottom: 80, // Increased padding to push content down and create curve effect space
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  welcomeText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
  },
  greetingText: {
    fontSize: 14,
    color: '#a8caff', // Lighter blue for subtext
    marginBottom: 15,
  },
  userInfoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  userName: {
    flex: 1,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  dropdownIconContainer: {
    padding: 5,
  },
  dropdownIcon: {
    fontSize: 16,
    color: '#333',
  },
  tuitionCard: {
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 20,
    marginHorizontal: 20,
    marginTop: -60, // Negative margin to overlap with header's curve
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 10,
    elevation: 8,
    alignItems: 'center', // Center content like logo and button
  },
  tuitionCardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginBottom: 10,
  },
  tuitionLogo: {
    width: 120, // Adjust size as needed
    height: 60, // Adjust size as needed
    resizeMode: 'contain',
  },
  importantTag: {
    backgroundColor: '#e6ffed', // Light green background
    color: '#00b33c',       // Green text
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 15,
    fontSize: 12,
    fontWeight: 'bold',
  },
  tuitionTitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 5,
  },
  tuitionAmount: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#0052cc', // Blue color for amount
    marginBottom: 2,
  },
  tuitionSubAmount: {
    fontSize: 14,
    color: '#aaa',
    textDecorationLine: 'line-through',
    marginBottom: 20,
  },
  detailButton: {
    backgroundColor: '#007bff',
    paddingVertical: 15,
    paddingHorizontal: 80, // Make button wider
    borderRadius: 25,
    alignItems: 'center',
    width: '100%',
  },
  detailButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  featuresGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    paddingHorizontal: 15,
    marginTop: 20,
  },
  featureButton: {
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    width: '22%', // Adjust for 4 items per row with spacing
    aspectRatio: 1, // Make them square
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2,
  },
  featureIcon: {
    // color is set in IconPlaceholder directly for now
    color: '#007bff', // Default icon color, overridden in IconPlaceholder
  },
  featureButtonText: {
    fontSize: 12,
    color: '#333',
    marginTop: 5,
    textAlign: 'center',
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#eee',
    paddingVertical: 10,
    paddingBottom: 20, // Extra padding for iPhone X notch area if needed
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  bottomNavItem: {
    alignItems: 'center',
  },
  bottomNavText: {
    fontSize: 10,
    color: '#aaa',
    marginTop: 2,
  },
  bottomNavTextActive: {
    color: '#007bff',
    fontWeight: 'bold',
  },
});

export default HomeScreen;