import React, {useEffect, useState, useRef} from 'react';
import {View, Text, Button, Pressable, Image} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import {
  useCameraDevices,
  Camera as CameraComponent,
} from 'react-native-vision-camera';

import {PhotoType} from '../../types/types';
import {useIsForeground} from '../../Hooks/hooks';

//types
import {
  TakePhotoOptions,
  TakeSnapshotOptions,
} from 'react-native-vision-camera';

export default function Camera() {
  const [opacity, setOpacity] = useState(1);
  const [camView, setCamView] = (useState < 'back') | ('front' > 'back');
  const [loading, setLoading] = useState(false);
  //photo
  const [image, setImage] = useState(null);

  const getCameraPermission = async () => {
    await CameraComponent.getCameraPermissionStatus();
    await CameraComponent.requestCameraPermission();
  };

  useEffect(() => {
    getCameraPermission();
  }, []);

  const devices = useCameraDevices();
  const device = camView === 'back' ? devices.back : devices.front;

  const cameraRef = useRef < CameraComponent > null;

  //Camera functions

  const takePhotoOptions = {
    photoCodec: 'jpeg',
    qualityPrioritization: 'speed',
    quality: 70,
    skipMetadata: true,
  };

  const takePhoto = async () => {
    setLoading(true);
    try {
      //Error Handle better
      if (cameraRef.current == null) throw new Error('Camera Ref is Null');

      console.log('Photo taking ....');
      const photo = await cameraRef.current.takePhoto(takePhotoOptions);
      console.log(photo);
      setImage(photo.path);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  if (device == null || loading)
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  if (image != null)
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );

  return (
    <CameraComponent
      style={[styles.container]}
      device={device}
      ref={cameraRef}
      photo={true}>
      <View style={[styles.top]}></View>

      <View style={styles.middle}></View>
      <View style={[styles.bottom]}>
        <View style={styles.innerView}>
          <Pressable
            disabled={!isActive}
            style={({pressed}) => [
              {
                opacity: pressed ? 0.5 : 1,
              },
              styles.camBtnOutline,
            ]}
            onPress={() => takePhoto()}>
            <View style={styles.camBtn} />
          </Pressable>
        </View>

        <View style={[styles.innerViewRight]}>
          <Pressable
            style={[styles.switchBtn]}
            disabled={!isActive}
            onPress={() => {
              camView == 'back' ? setCamView('front') : setCamView('back');
            }}>
            <View style={{}}>
              <Icon name="sync-outline" size={40} color={colors.white} />
            </View>
          </Pressable>
        </View>
      </View>
    </CameraComponent>
  );
}
