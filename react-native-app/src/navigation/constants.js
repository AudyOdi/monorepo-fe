import CoinListPage from '../pages/CoinListPage';
import {NewsListPage, PAGE_NAME as NewsListPageName} from '@audy/news-portal';

export const pages = [
  {
    pageName: 'CoinListPage',
    component: CoinListPage,
  },
  {
    pageName: NewsListPageName,
    component: NewsListPage,
  },
];
