import { StyleSheet, ScrollView } from 'react-native';

import { Image } from 'expo-image';
import { router, useRouter } from 'expo-router';
import { Pressable } from 'react-native';
import React from 'react';
import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';



export default function TabTwoScreen() {
  return (
   <ScrollView contentContainerStyle={styles.container}>
      <Pressable onPress={() => router.back()}>
        <Image
          source={require('@/assets/images/arrow.png')}
          style={styles.headerImage}
        />
      </Pressable>
      <ThemedView style={styles.titleContainer}>
        <ThemedText
          type="title"
          style={{
            color: "#4F63AC"
          }}>
          Sign Up
        </ThemedText>
        </ThemedView>
      </ScrollView>
  );
}

const styles = StyleSheet.create({
  
  titleContainer: {
    flexDirection: 'row',
    gap: 8,

  },
  container: {
  padding: 16,
  paddingTop: 48,
},
headerImage: {
    width: 40,
    height: 40,
    marginBottom: 16,
  },

});
