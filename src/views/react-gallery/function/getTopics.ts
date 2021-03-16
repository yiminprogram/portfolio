export const getTopics = async (): Promise<any[]> => {
  const response = await fetch(`https://api.unsplash.com/topics?per_page=30`, {
    headers: {
      Authorization: `Client-ID ${process.env.REACT_APP_API_KEY}`,
    },
  });
  const data = await response.json();
  return data;
};
