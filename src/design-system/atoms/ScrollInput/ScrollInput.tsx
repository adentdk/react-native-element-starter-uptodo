import { Text, useTheme } from '@rneui/themed';
import React, { FC, useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react';
import { FlatList, NativeScrollEvent, NativeSyntheticEvent, TouchableOpacity, View } from 'react-native';
import { useStyles } from './styles';
import { iScrollInput } from './types';

const ScrollInput: FC<iScrollInput.Props> = ({
  selectedValue,
  onSelect = () => {},
  items,
  containerStyle,
  itemStyle,
  itemHeight = 24,
  infinite = false,
}) => {
  const {theme} = useTheme();
  const styles = useStyles();

  const [dataArray, setDataArray] = useState<ValueLabel[]>(items);

  const flatlistRef = useRef<FlatList>(null);

  const currentYOffset = useRef((items.length - 0.5) * itemHeight)
  const numberOfValue = useRef(items.length)
  const initialOffset = useRef((items.length - 0.5) * itemHeight)

  const onViewableItemsChanged = useRef<any>(({viewableItems}: iScrollInput.OnViewableItemsChangedParams) => {
    const [activeItem1, activeItem2] = viewableItems;    
    if (activeItem2?.item?.value) {
      onSelect(activeItem2.item.value);
    } else if (activeItem1?.item?.value) {
      onSelect(activeItem1.item.value);
    }
  });

  const viewabilityConfig = useRef<any>({
    itemVisiblePercentThreshold: 50,
    waitForInteraction: true,
  });

  const scrollToInitialValue = useCallback(() => {
    const activeIndex = items.findIndex(item => item.value === selectedValue);

    if (activeIndex === -1) {
      return;
    }

    flatlistRef.current?.scrollToIndex({
      index: activeIndex,
      animated: true,
      viewOffset: itemHeight,
    });
  }, [selectedValue, items]);

  const onScroll = useCallback(({ nativeEvent }: NativeSyntheticEvent<NativeScrollEvent>) => {

    if (!infinite) return;

    const offsetY = nativeEvent.contentOffset.y
  
    if (offsetY < currentYOffset.current) {
      if (offsetY <= initialOffset.current - itemHeight) {
        flatlistRef.current?.scrollToOffset({
          offset: offsetY + itemHeight * numberOfValue.current,
          animated: false,
        })
        currentYOffset.current = offsetY + itemHeight * numberOfValue.current
        return
      }
    }

    if (offsetY > currentYOffset.current) {
      if (offsetY > initialOffset.current + itemHeight) {
        flatlistRef.current?.scrollToOffset({
          offset: offsetY - itemHeight * numberOfValue.current,
          animated: false,
        })
        currentYOffset.current = offsetY - itemHeight * numberOfValue.current
        return
      }
    }

    currentYOffset.current = offsetY
  }, [itemHeight])

  useLayoutEffect(() => {
    scrollToInitialValue();
  }, []);

  useEffect(() => {
    (() => {
      if (infinite) {
        setDataArray([...items, ...items, ...items])
      } else {
        setDataArray([{value: '', label: ''}, ...items, {value: '', label: ''}]);
      }
    })()
  }, [])

  return (
    <View style={[styles.container, {height: itemHeight * 3}, containerStyle]}>
      <FlatList
        ref={flatlistRef}
        data={dataArray}
        showsVerticalScrollIndicator={false}
        onScroll={onScroll}
        onLayout={({ nativeEvent }) => {
          const { height } = nativeEvent.layout;
          viewabilityConfig.current.minimumViewTime = height / 2;
        }}
        pagingEnabled
        snapToAlignment="center"
        scrollEventThrottle={16}
        decelerationRate="fast"
        viewabilityConfig={viewabilityConfig.current}
        onViewableItemsChanged={onViewableItemsChanged.current}
        renderItem={({ item, index }) => (
          <TouchableOpacity
            onPress={() => {
              if (item.value) {
                onSelect(item.value)
                flatlistRef.current?.scrollToIndex({
                  index,
                  animated: true,
                  viewOffset: itemHeight,
                });
              }
            }}
            style={[
              styles.item,
              { height: itemHeight },
              item.value === selectedValue && styles.itemActive,
              infinite && index === 0 && {marginTop: itemHeight},
              infinite && index === dataArray.length - 1 && {marginBottom: itemHeight},
              itemStyle,
            ]}
          >
            <Text
              center
              fontFamily="bold"
              lg={item.value !== selectedValue}
              xxl={item.value === selectedValue}
              color={item.value === selectedValue ? theme.colors.black : theme.colors.grey3}
            >
              {item.label}
            </Text>
          </TouchableOpacity>
        )}
        keyExtractor={(item, index) => index.toString()}
        onScrollToIndexFailed={() => {}}
      />
    </View>
  )
}

export default ScrollInput;
