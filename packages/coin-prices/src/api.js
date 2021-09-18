import { coinPriceList } from "./mockData";

export const fetchCoinPriceList = async () => {
  return Promise.resolve({
    data: coinPriceList,
  });
};
