import { TextInput, StyleSheet, ScrollView } from 'react-native';

import { Image } from 'expo-image';
import { router, useRouter } from 'expo-router';
import { Pressable } from 'react-native';
import React from 'react';
import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';
import { useState } from 'react';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';



export default function TabTwoScreen() {
  const [text, onChangeText] = React.useState('Useless Text');
  const [number, onChangeNumber] = React.useState('');

  return (
   <ScrollView contentContainerStyle={styles.container}>
      <Pressable onPress={() => router.back()}>
        <Image
          source={require('@/assets/images/arrow.svg')}
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

         <SafeAreaProvider>
      <SafeAreaView>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeNumber}
          value={number}
          placeholder="useless placeholder"
          keyboardType="numeric"
        />
      </SafeAreaView>
    </SafeAreaProvider>
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
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },

});
