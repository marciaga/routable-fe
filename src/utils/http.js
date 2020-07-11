export const get = async (endpoint, opts = {}) => {
  try {
    const response = await fetch(endpoint, opts);

    if (!response.ok) {
      throw new Error('Something went wrong. Try again later.');
    }

    return await response.json();
  } catch (error) {
    // Return undefined for now.
    // We'll want to provide appropriate user feedback later.
  }
};