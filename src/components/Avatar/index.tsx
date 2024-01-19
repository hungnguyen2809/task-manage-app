import { scale } from '@/utils';
import React, { useMemo } from 'react';
import { ColorValue, Image, ImageSourcePropType, ImageStyle, StyleProp, TextStyle, ViewStyle } from 'react-native';
import { Box, Each, TextComp } from '..';

type AvatarProps = {
  size?: number;
  source: ImageSourcePropType;
  style?: StyleProp<ImageStyle>;
  borderWidth?: number;
  borderColor?: ColorValue;
};

export const Avatar: React.FC<AvatarProps> = ({ source, size = 50, style, borderWidth = 1, borderColor = 'white' }) => {
  const _size = useMemo(() => scale(size), [size]);

  return (
    <Image
      source={source}
      resizeMode="cover"
      style={[{ width: _size, height: _size, borderRadius: _size, borderWidth, borderColor }, style]}
    />
  );
};

type AvatarGroupProps = {
  of: ImageSourcePropType[];
  size?: number;
  maxLength?: number;
  showMask?: boolean;
  style?: StyleProp<ViewStyle>;
  styleTextMask?: StyleProp<TextStyle>;
};

export const AvatarGroup: React.FC<AvatarGroupProps> = ({
  of,
  size = 50,
  maxLength = 5,
  showMask = true,
  style,
  styleTextMask,
}) => {
  const _size = useMemo(() => scale(size), [size]);

  const chuckOf = useMemo(() => {
    if (of.length <= maxLength) return of;
    return of.slice(0, maxLength);
  }, [maxLength, of]);

  return (
    <Box hStack height={_size} style={style}>
      <Each
        of={chuckOf}
        render={(source, idx) => (
          <Avatar
            key={idx}
            size={size}
            source={source}
            style={{ position: 'absolute', top: 0, left: idx * (size / 1.5) }}
          />
        )}
      />

      {showMask && chuckOf.length < of.length ? (
        <Box
          top={0}
          width={_size}
          height={_size}
          borderRadius={_size}
          position="absolute"
          alignItems="center"
          justifyContent="center"
          backgroundColor="#fff"
          left={chuckOf.length * (size / 1.5)}>
          <TextComp font="semi" style={[{ color: '#000', fontSize: Math.min(_size / 2, 15) }, styleTextMask]}>
            {of.length - chuckOf.length}+
          </TextComp>
        </Box>
      ) : null}
    </Box>
  );
};
