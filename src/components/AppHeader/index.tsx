import { Colors, Fonts } from '@/constants';
import { navigationService } from '@/navigator';
import { DeviceUtils, fontScale, logger, scale } from '@/utils';
import React from 'react';
import { StatusBar, StatusBarStyle, StyleSheet, TextStyle, TouchableOpacity, View, ViewStyle } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Separator, TextComp } from '..';

type AppHeaderProps = {
  title?: string;
  safeTop?: boolean;
  showBack?: boolean;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  childrenLeft?: React.ReactNode;
  childrenRight?: React.ReactNode;
  onPressLeft?: () => void;
  onPressRight?: () => void;
  onPressBack?: () => void;
  titleHeaderStyle?: ViewStyle;
  titleStyle?: TextStyle;
  barStyle?: StatusBarStyle;
};

export const AppHeader: React.FC<AppHeaderProps> = ({
  title,
  showBack,
  iconLeft,
  iconRight,
  childrenLeft,
  childrenRight,
  onPressLeft,
  onPressRight,
  onPressBack,
  titleStyle,
  titleHeaderStyle,
  safeTop = true,
  barStyle = 'light-content',
}) => {
  const onGoBack = () => {
    if (navigationService.canGoBack()) {
      navigationService.goBack();
    } else {
      logger.log('Can not go back');
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar translucent barStyle={barStyle} backgroundColor="transparent" />
      {safeTop ? <Separator safeTop /> : null}

      <View style={styles.containerTitle}>
        <View style={styles.btnLeftContainer}>
          {childrenLeft ? (
            childrenLeft
          ) : iconLeft ? (
            <TouchableOpacity activeOpacity={0.8} style={styles.buttonLeft} onPress={onPressLeft}>
              {iconLeft}
            </TouchableOpacity>
          ) : showBack ? (
            <TouchableOpacity
              activeOpacity={0.5}
              style={styles.buttonLeft}
              onPress={onPressBack ? onPressBack : onGoBack}>
              <Ionicons name="chevron-back-outline" size={scale(26)} color={Colors.white} />
            </TouchableOpacity>
          ) : null}
        </View>

        <View style={[styles.titleHeader, titleHeaderStyle]}>
          <TextComp style={[styles.titleText, titleStyle]} numberOfLines={1}>
            {title}
          </TextComp>
        </View>

        <View style={styles.btnRightContainer}>
          {childrenRight ? (
            childrenRight
          ) : iconRight ? (
            <TouchableOpacity activeOpacity={0.8} style={styles.buttonRight} onPress={onPressRight}>
              {iconRight}
            </TouchableOpacity>
          ) : null}
        </View>
        <View />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingBottom: scale(10),
    backgroundColor: Colors.background,
    paddingTop: DeviceUtils.hasNotch ? 0 : 10,
  },
  btnLeftContainer: {
    flex: 1,
    alignItems: 'flex-start',
  },
  buttonLeft: {
    marginLeft: scale(10),
    paddingLeft: scale(5),
    paddingRight: scale(10),
  },
  btnRightContainer: {
    flex: 1,
    alignItems: 'flex-end',
  },
  buttonRight: {
    marginRight: scale(10),
  },
  containerTitle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  titleHeader: {
    flex: 5,
    height: scale(27),
    alignItems: 'center',
  },
  titleText: {
    color: Colors.white,
    fontFamily: Fonts.SEMI,
    fontSize: fontScale(18),
    lineHeight: fontScale(18, true),
  },
});
