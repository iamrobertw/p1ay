// API service for quotes

export interface Quote {
  id: number;
  quote: string;
  author: string;
}

/**
 * Fetch a random quote from the API
 * @returns {Promise<Quote>} Quote object
 */
export const fetchRandomQuote = async (): Promise<Quote> => {
  try {
    const response = await fetch("https://dummyjson.com/quotes/random");

    if (!response.ok) {
      throw new Error("Failed to fetch quote");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching quote:", error);
    throw error;
  }
};
