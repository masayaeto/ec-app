import fetchJsonp from 'fetch-jsonp';

const baseURL = "https://shopping.yahooapis.jp/ShoppingWebService/V1/json"


const appid = "?appid=dj00aiZpPUxIQUtCM3pmbGgzWiZzPWNvbnN1bWVyc2VjcmV0Jng9YmY-"

export const fetchPopularData = async () => {
  const response = await fetchJsonp(baseURL + "/categoryRanking" + appid)
  const json = await response.json();
  const data = json.ResultSet["0"].Result
  return data
}