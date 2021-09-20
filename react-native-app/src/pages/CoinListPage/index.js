import React, {useEffect, useState} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {
  Card,
  Title,
  Paragraph,
  FAB,
  Portal,
  Provider,
} from 'react-native-paper';
import {PAGE_NAME as NewsListPageName} from '@audy/news-portal';

import {fetchCoinPriceList} from '@audy/coin-prices';

const App = ({navigation}) => {
  const [coinPriceList, setCoinPriceList] = useState([]);
  const [isFABOpened, setFABOpenState] = useState(false);

  const onFABStateChange = ({open}) => setFABOpenState(open);

  useEffect(() => {
    const getCointPriceData = async () => {
      const apiReponse = await fetchCoinPriceList();
      if (apiReponse.data) {
        setCoinPriceList(apiReponse.data);
      }
    };

    getCointPriceData();
  }, []);

  return (
    <View style={styles.root}>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        {coinPriceList.map(coinPrice => {
          return (
            <Card key={coinPrice.name} style={styles.item}>
              <Card.Content>
                <Title>{coinPrice.name}</Title>
                <Paragraph>USD ${coinPrice.priceUsd}</Paragraph>
              </Card.Content>
            </Card>
          );
        })}
      </ScrollView>
      <Provider>
        <Portal>
          <FAB.Group
            open={isFABOpened}
            icon={isFABOpened ? 'close' : 'plus'}
            actions={[
              {
                icon: 'newspaper',
                label: 'News',
                onPress: () => navigation.navigate(NewsListPageName),
              },
            ]}
            onStateChange={onFABStateChange}
          />
        </Portal>
      </Provider>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    marginBottom: 10,
  },
});

export default App;
