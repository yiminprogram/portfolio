export const fetchSearch = async (
  query: string,
  page: number,
): Promise<any> => {
  const response = await fetch(
    `https://api.unsplash.com/search/photos?query=${query}&per_page=30&page=${page}`,
    {
      headers: {
        Authorization: `Client-ID ${process.env.REACT_APP_API_KEY}`,
      },
    },
  );
  const data = await response.json();
  return data;
};
