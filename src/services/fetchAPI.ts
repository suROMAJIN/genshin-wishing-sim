export const fetchData = async <T>(endPoint: string): Promise<T | null> => {
  try {
    const response = await fetch(endPoint);
    if (!response.ok) {
      throw new Error(
        `Failed to fetch data: ${response.status} ${response.statusText}`
      );
    }
    const data: T = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data. Details:", error);
    return null;
  }
};
