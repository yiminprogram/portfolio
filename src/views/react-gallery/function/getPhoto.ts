export const getPhoto = async (id: string): Promise<any[]> => {
  const response = await fetch(`https://api.unsplash.com/photos/${id}`, {
    headers: {
      Authorization: `Client-ID ${process.env.REACT_APP_API_KEY}`,
    },
  });
  const data = await response.json();
  return data;
};
