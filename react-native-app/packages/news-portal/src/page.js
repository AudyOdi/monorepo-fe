import React, {useEffect, useState} from 'react';
import {Linking, ScrollView} from 'react-native';
import {Card, Title, Paragraph} from 'react-native-paper';
import {fetchNewsList} from './api';

const NewsCard = ({news}) => {
  return (
    <Card
      onPress={() => {
        Linking.openURL(news.news_url);
      }}>
      <Card.Content>
        <Title>{news.title}</Title>
        <Paragraph>{news.text}</Paragraph>
      </Card.Content>
      <Card.Cover source={{uri: news.image_url}} />
    </Card>
  );
};

export const NewsListPage = () => {
  const [newsList, setNewsList] = useState([]);

  useEffect(() => {
    const getNewsData = async () => {
      const apiReponse = await fetchNewsList();
      if (apiReponse.data) {
        setNewsList(apiReponse.data);
      }
    };

    getNewsData();
  }, []);

  return (
    <ScrollView>
      {newsList.map((news, index) => {
        return <NewsCard key={index} news={news} />;
      })}
    </ScrollView>
  );
};
