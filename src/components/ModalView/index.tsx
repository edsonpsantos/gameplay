import React, { ReactNode } from 'react';
import { Modal, ModalProps, TouchableWithoutFeedback, View } from 'react-native';

import { Background } from '../Background';

import { styles } from './styles';

type Props = ModalProps & {
  children: ReactNode;
  closeModal: () => void;
};

export function ModalView({ children, closeModal, ...rest }: Props) {
  return (
    <Modal animationType='slide' {...rest} transparent statusBarTranslucent>
      <TouchableWithoutFeedback onPress={closeModal}>
        <View style={styles.overlay}>
          <View style={styles.container}>
            <Background>
              <View style={styles.bar} />
              {children}
            </Background>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
}
