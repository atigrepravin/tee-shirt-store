export const getAllProducts = async () => {
  try {
    const response = await fetch(
      "https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json"
    );
    const results = response.json();
    return results;
  } catch (error) {
    console.error("There was a problem with the Fetch operation:", error);
  }
};
