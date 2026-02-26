import React, { useState } from 'react';
import { configureChains, createClient, WagmiConfig } from 'wagmi';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';
import { RainbowKitProvider, connectorsForWallets, wallet } from '@rainbow-me/rainbowkit';
import '@rainbow-me/rainbowkit/styles.css';
import { CHAINS, ALCHEMY_API_KEY } from './config';

// Configure chains
const { chains, provider } = configureChains(
  CHAINS,
  [alchemyProvider({ apiKey: ALCHEMY_API_KEY }), publicProvider()]
);

// Setup wallets
const connectors = connectorsForWallets([
  {
    groupName: 'Supported Wallets',
    wallets: [
      wallet.metaMask({ chains }),
      wallet.walletConnect({ chains }),
      wallet.coinbase({ appName: 'Multi-Wallet DApp', chains })
    ]
  }
]);

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider
});

function App() {
  const [connectedAddress, setConnectedAddress] = useState('');

  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider chains={chains} modalSize="compact">
        <div style={{ textAlign: 'center', marginTop: '100px' }}>
          <h1>Multi-Wallet Web3 DApp</h1>
          <p>Connect your wallet to interact with Ethereum & Polygon</p>
          <div style={{ marginTop: '20px' }}>
            <RainbowKitProvider>
              <ConnectButton />
            </RainbowKitProvider>
          </div>
        </div>
      </RainbowKitProvider>
    </WagmiConfig>
  );
}

// Button Component
import { ConnectButton } from '@rainbow-me/rainbowkit';

export default App;
