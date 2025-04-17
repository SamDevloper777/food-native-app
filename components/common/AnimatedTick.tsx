import React, { useEffect } from 'react';
import { Animated, Easing } from 'react-native';
import { Svg, Path, Circle } from 'react-native-svg';

interface AnimatedTickProps {
  size?: number;
  color?: string;
  backgroundColor?: string;
  duration?: number;
}

const AnimatedPath = Animated.createAnimatedComponent(Path);
const AnimatedCircle = Animated.createAnimatedComponent(Circle);

const AnimatedTick: React.FC<AnimatedTickProps> = ({
  size = 100,
  color = '#22c55e',
  backgroundColor = '#f0fdf4',
  duration = 1200,
}) => {
  const circleProgress = new Animated.Value(0);
  const checkmarkProgress = new Animated.Value(0);
  const scale = new Animated.Value(0.8);

  useEffect(() => {
    // Scale animation
    Animated.spring(scale, {
      toValue: 1,
      friction: 8,
      tension: 40,
      useNativeDriver: true,
    }).start();

    // Animate the circle
    Animated.timing(circleProgress, {
      toValue: 1,
      duration: duration * 0.4,
      easing: Easing.out(Easing.ease),
      useNativeDriver: true,
    }).start();

    // Animate the checkmark after a short delay
    setTimeout(() => {
      Animated.timing(checkmarkProgress, {
        toValue: 1,
        duration: duration * 0.6,
        easing: Easing.out(Easing.ease),
        useNativeDriver: true,
      }).start();
    }, duration * 0.3);
  }, []);

  const circleDashArray = 2 * Math.PI * (size / 2);
  const circleDashOffset = circleProgress.interpolate({
    inputRange: [0, 1],
    outputRange: [circleDashArray, 0],
  });

  const checkmarkPath = `M ${size * 0.3} ${size * 0.5} L ${size * 0.45} ${size * 0.65} L ${size * 0.7} ${size * 0.35}`;
  const checkmarkLength = 100;

  const checkmarkDashOffset = checkmarkProgress.interpolate({
    inputRange: [0, 1],
    outputRange: [checkmarkLength, 0],
  });

  return (
    <Animated.View 
      className="justify-center items-center shadow-lg"
      style={[
        { 
          width: size, 
          height: size,
          transform: [{ scale }],
          shadowColor: color,
          shadowOffset: {
            width: 0,
            height: 4,
          },
          shadowOpacity: 0.3,
          shadowRadius: 8,
          elevation: 8,
        }
      ]}
    >
      <Svg width={size} height={size}>
        <Circle
          cx={size / 2}
          cy={size / 2}
          r={size / 2}
          fill={backgroundColor}
        />
        
        <AnimatedCircle
          cx={size / 2}
          cy={size / 2}
          r={size / 2 - 2}
          fill="none"
          stroke={color}
          strokeWidth={4}
          strokeDasharray={circleDashArray}
          strokeDashoffset={circleDashOffset}
        />
        
        <AnimatedPath
          d={checkmarkPath}
          stroke={color}
          strokeWidth={4}
          fill="none"
          strokeDasharray={checkmarkLength}
          strokeDashoffset={checkmarkDashOffset}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </Svg>
    </Animated.View>
  );
};

export default AnimatedTick; 