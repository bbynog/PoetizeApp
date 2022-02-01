import React, { useState, useEffect, useRef } from 'react';
import { View } from 'react-native';

import { WriteBox } from 'components';

import { styles } from './styles';

export const FlowWriteScreen = () => {
  const [timeCount, setTimeCount] = useState(5);
  console.log('timeCount', timeCount);

  const [bodyText, setBodyText] = useState('');
  const [titleText, setTitleText] = useState('');

  const [isTicking, setIsTicking] = useState(true);

  const [timeIsUp, setTimeIsUp] = useState(false);

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

  return (
    <View style={styles.container}>
      <WriteBox setBodyState={setBodyText} setTitleState={setTitleText} />
    </View>
  );
};
