export const fetchPhotos = async (): Promise<any[]> => {
  const response = await fetch(
    'https://api.unsplash.com/photos?per_page=30&page=1',
    {
      headers: {
        Authorization: `Client-ID ${process.env.REACT_APP_API_KEY}`,
      },
    },
  );
  const data = await response.json();
  return data;
};
