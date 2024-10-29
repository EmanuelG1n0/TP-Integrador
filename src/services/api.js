export async function getData() {
    try {
      const response = await fetch('http://localhost:8001/app/products');
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return await response.json();
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
  