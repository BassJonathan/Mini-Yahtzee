import React from 'react';
import { SafeAreaView, ScrollView, View } from 'react-native';
import Header from './components/Header';
import Gameboard from './components/Gameboard';
import Footer from './components/Footer';
import styles from './style/style';

export default function App() {
  return (
    <SafeAreaView>
      <ScrollView overScrollMode style={styles.scrollV}>
        <View style={styles.container}>
          <Header />
          <Gameboard />
          <Footer />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}