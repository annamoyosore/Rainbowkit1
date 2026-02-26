// Replace with your own Alchemy project ID
export const ALCHEMY_API_KEY = "YOUR_ALCHEMY_API_KEY";

// Supported chains
export const CHAINS = [
  {
    id: 1,
    name: "Ethereum Mainnet",
    rpcUrl: `https://eth-mainnet.alchemyapi.io/v2/${ALCHEMY_API_KEY}`
  },
  {
    id: 137,
    name: "Polygon",
    rpcUrl: `https://polygon-mainnet.g.alchemy.com/v2/${ALCHEMY_API_KEY}`
  }
  // Add other chains if needed
];
