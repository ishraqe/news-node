import NewsAPI from "newsapi";
import { API_KEY } from "../utils/config";

const newsapi = new NewsAPI(API_KEY);

export const getNewsByKeyword = async (
  keyword: string = "*",
  currentPage: number = 0
) => {
  const res = await newsapi.v2.everything({
    q: keyword,
    language: "en",
    pageSize: 20,
    page: currentPage
  });

  return res;
};
