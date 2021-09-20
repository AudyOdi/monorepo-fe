import {newsMockData} from './mockData';

export const fetchNewsList = async () => {
  return Promise.resolve({
    data: newsMockData,
  });
};
