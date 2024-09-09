import * as WebBrowser from 'expo-web-browser';
import React, { useState } from 'react';
import { Button, Text, View, StyleSheet } from 'react-native';

export default function Home() {
  const [result, setResult] = useState(null);

  const _handlePressButtonAsync = async () => {
    const result = await WebBrowser.openBrowserAsync(
      'http://localhost:10702/db/edgedb/ext/auth/ui/signin?challenge=Yd2x9LYCEIx59ZBOV0Gwfnz47g9X6BLA4W5jke93VB0'
    );
    // @ts-ignore
    setResult(result);
  };

  return (
    <>
      <View style={styles.container}>
        <Button title="Open WebBrowser" onPress={_handlePressButtonAsync} />
        <Text>{result && JSON.stringify(result)}</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
  },
});
