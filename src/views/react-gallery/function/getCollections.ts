export const getCollections = async (page: number): Promise<any[]> => {
  const response = await fetch(
    `https://api.unsplash.com/collections?per_page=30&page=${page}`,
    {
      headers: {
        Authorization: `Client-ID ${process.env.REACT_APP_API_KEY}`,
      },
    },
  );
  const data = await response.json();
  return data;
};
