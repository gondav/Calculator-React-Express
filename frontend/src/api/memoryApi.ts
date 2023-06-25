import API_BASE_URL from './apiConfig';

interface numberResponse {
  number: string;
}

export const memoryApi = {
  async getNumber(): Promise<numberResponse> {
    const response = await fetch(API_BASE_URL + '/number');
    const data = response.json();
    return data;
  },

  async saveNumber(number: string): Promise<void> {
    const settings = {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ number }),
    };

    await fetch(API_BASE_URL + '/number', settings);
  },
};
