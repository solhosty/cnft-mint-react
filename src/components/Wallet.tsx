import { FC } from "react";
import {
  WalletModalProvider,
  WalletMultiButton,
} from "@solana/wallet-adapter-react-ui";
import "../index.css";

require("@solana/wallet-adapter-react-ui/styles.css");

export const Wallet: FC = () => {
  return (
    <WalletModalProvider>
      <WalletMultiButton/>
    </WalletModalProvider>
  );
};
