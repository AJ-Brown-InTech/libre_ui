import React, { PureComponent } from 'react';
import { AppRegistry, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { RNCamera } from 'react-native-camera';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const PendingView = () => (
  <View
    style={{
      flex: 1,
      backgroundColor: 'lightgreen',
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
    <Text>Waiting</Text>
  </View>
);

export default class ExampleApp extends PureComponent {
  render() {
    return (
        <RNCamera
          style={[styles.preview, StyleSheet.absoluteFill]}
          type={RNCamera.Constants.Type.front}
          flashMode={RNCamera.Constants.FlashMode.auto}
        >
          {({ camera, status, recordAudioPermissionStatus, }) => {
            console.log(status)
            //console.log(camera)
            //if (status !== 'READY') return <PendingView />;
            return (
              <View style={{ flex: 0, flexDirection: 'row', justifyContent: 'center' }}>
                <TouchableOpacity onPress={() => this.takePicture(camera)}  style={styles.capture}>
                  <Text style={{ fontSize: 14 }}> SNAP </Text>
                </TouchableOpacity>
                <TouchableOpacity  style={styles.capture}>
                  <MaterialCommunityIcons name="camera-flip" size={27}></MaterialCommunityIcons>
                </TouchableOpacity>
              </View>
            );
          }}
        </RNCamera>
    );
  }

  takePicture = async function(camera) {
    const options = { quality: 0.5, base64: true };
    const data = await camera.takePictureAsync(options);
    //  eslint-disable-next-line
    console.log(data.uri);
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: 'center',
    margin: 20,
  },
});

//AppRegistry.registerComponent('App', () => ExampleApp);