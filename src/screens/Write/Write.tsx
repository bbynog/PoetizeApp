import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import { styles } from './Write.styles';
import { WriteBox } from 'components';

import { useNavigation } from '@react-navigation/native';

export const WriteScreen = () => {
  const navigation = useNavigation();

  // Flow States
  const [timeCount, setTimeCount] = useState(5);
  const [isTicking, setIsTicking] = useState(false);
  const [timeIsUp, setTimeIsUp] = useState(false);
  //

  const [bodyText, setBodyText] = useState('');

  const onTimeEnd = (count: number) => {
    setIsTicking(false);
    setTimeIsUp(true);

    return count;
  };

  useEffect(() => {
    if (!isTicking) return;
    const id = setInterval(() => {
      setTimeCount(count => {
        if (count !== 0) {
          return count - 1;
        } else {
          return onTimeEnd(count);
        }
      });
    }, 1000);

    return () => clearInterval(id);
  }, []);

  const testButtonHandler = () => {
    console.log('teste');
  };

  return (
    <View style={styles.container}>
      <WriteBox setTextState={setBodyText} />
    </View>
  );
};
