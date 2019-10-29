import React from 'react';
import { StyleSheet } from 'react-native';
import { ApplicationProvider, Button, Icon, IconRegistry, Layout, Text } from 'react-native-ui-kitten';
import { mapping, dark as theme } from '@eva-design/eva';
import { EvaIconsPack } from '@ui-kitten/eva-icons';

const HeartIcon = (style) => (
  <Icon {...style} name='heart' />
);

const App = () => (
  <React.Fragment>
    <IconRegistry icons={EvaIconsPack} />
    <ApplicationProvider mapping={mapping} theme={theme}>
      <Layout style={styles.container}>
        <Text style={styles.text} category='h1'>
          Welcome to UI Kitten 😻
        </Text>
        <Text style={styles.text} category='s1'>
          Start with editing App.js to configure your App
        </Text>
        <Text style={styles.text} appearance='hint'>
          For example, try changing theme to Dark by simply changing an import
        </Text>
        <Button style={styles.likeButton} icon={HeartIcon}>
          LIKE
        </Button>
      </Layout>
    </ApplicationProvider>
  </React.Fragment>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    textAlign: 'center',
  },
  likeButton: {
    marginVertical: 16,
  },
});

export default App;