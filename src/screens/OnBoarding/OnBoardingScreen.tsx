import React, { FC, useCallback, useLayoutEffect, useRef } from 'react';
import Main from '@components/templates/Main';
import useOnBoarding from './useOnBoarding';
import { FlatList, ScrollView, View } from 'react-native';
import { Button, makeStyles, Text } from '@rneui/themed';
import { screenDimensions } from 'helpers/viewport';
import { addAlpha } from 'helpers/colors';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

interface Props extends NativeStackScreenProps<iNavigator.RootParamList, 'OnBoarding'> { }

const OnBoardingScreen: FC<Props> = ({navigation}) => {
  const { onBoardingData, currentIndex, setCurrentIndex } = useOnBoarding();
  const styles = useStyles();

  const flatlistImage = useRef<FlatList<any>>(null);

  const onBack = useCallback(() => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);

      if (flatlistImage.current) {
        flatlistImage.current.scrollToIndex({
          index: currentIndex - 1,
          animated: true,
        });
      }
    }
  }, [currentIndex, setCurrentIndex]);

  const onNext = useCallback(() => {
    if (currentIndex < onBoardingData.length - 1) {
      setCurrentIndex(currentIndex + 1);

      if (flatlistImage.current) {
        flatlistImage.current.scrollToIndex({
          index: currentIndex + 1,
          animated: true,
        });
      }
    }
  }, [currentIndex, setCurrentIndex, onBoardingData]);

  const onDone = useCallback(() => {
    navigation.navigate("GetStart");
  }, [navigation]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: ({}) => (
        <Text onPress={onDone} lg style={[styles.backTitle, {marginLeft: 10}]}>{'SKIP'}</Text>
      ),
    });
  }, [])

  return (
    <Main>
      <ScrollView style={styles.body}>
        <View style={styles.carouselWrapper}>
          <FlatList
            pagingEnabled
            horizontal
            ref={flatlistImage}
            decelerationRate="fast"
            snapToInterval={screenDimensions.width}
            bounces={false}
            scrollEnabled={false}
            alwaysBounceHorizontal={false}
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item, index) => `${index}`}
            data={onBoardingData}
            renderItem={({ item }) => (
              <View style={styles.carouselItemWrapper}>
                <item.image height={296} />
                <View style={styles.carouselContentWrapper}>
                  <Text h2 center>{item.title}</Text>
                  <Text lg center style={styles.carouselDescription}>{item.description}</Text>
                </View>
              </View>
            )}
          />

          <View style={styles.carouselIndicatorWrapper}>
            <View style={styles.carouselIndicators}>
              {onBoardingData.map((item, index) => (
                <View
                  key={index}
                  style={[
                    styles.carouselIndicator,
                    index === 0 && { marginLeft: 0 },
                    index === currentIndex && styles.carouselIndicatorActive,
                  ]}
                />
              ))}
            </View>
          </View>
        </View>
      </ScrollView>

      <View style={styles.footer}>
        {currentIndex > 0  ? (
          <Text onPress={onBack} lg style={styles.backTitle}>{'BACK'}</Text>
        ) : (
          <View />
        )}


        {currentIndex === onBoardingData.length - 1 ? (
          <Button title={'GET STARTED'} onPress={onDone} />
        ) : (
          <Button title={'NEXT'} onPress={onNext} />
        )}
      </View>
    </Main>
  )
}

const useStyles = makeStyles(({ colors }) => ({
  carouselWrapper: {
    marginTop: 31,
    position: 'relative',
  },
  carouselItemWrapper: {
    width: screenDimensions.width,
    alignItems: 'center'
  },
  carouselContentWrapper: {
    marginTop: 96,
    paddingHorizontal: 38,
  },
  carouselDescription: {
    marginTop: 42,
    lineHeight: 16 * 1.505,
  },
  carouselIndicatorWrapper: {
    position: 'absolute',
    width: screenDimensions.width,
    top: 296 + 42,
  },
  carouselIndicators: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  carouselIndicator: {
    width: 26.28,
    height: 4,
    borderRadius: 56,
    backgroundColor: colors?.grey4,
    marginLeft: 8.09
  },
  carouselIndicatorActive: {
    backgroundColor: colors?.grey0
  },
  body: {
    flex: 1,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 24,
    paddingVertical: 49
  },
  backTitle: {
    color: addAlpha(colors?.grey0, 0.44)
  }
}))

export default OnBoardingScreen;
