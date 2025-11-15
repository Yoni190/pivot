import { StyleSheet, TextInput } from 'react-native';

import { View } from '@/components/Themed';

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder='Search..'
        style={styles.search}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  search: {
    borderWidth: 1,
    borderRadius: 10,
    width: '100%',
    paddingHorizontal: 10
  }
});
