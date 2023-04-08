import React, { useState } from 'react';
import { Button } from 'react-native';

const MyButton = ({ press, title, color }) => {
  const [isPressed, setIsPressed] = useState(false);

  const handlePress = () => {
    setIsPressed(true);
    onPress();
  };

  return (
    <Button
      press={handlePress}
      title={title}
      color={isPressed ? 'grey' : color}
    />
  );
};

export default MyButton;










