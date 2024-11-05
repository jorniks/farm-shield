import { useWallet } from "@txnlab/use-wallet";
import { FC, useEffect } from "react";
export const WalletModal: FC<{ onClose: () => void }> = ({ onClose }) => {
  const { providers: wallets, activeAddress } = useWallet();
  useEffect(() => {
    if (activeAddress) {
      onClose();
    }
  }, [activeAddress]);

  return (
    <div className="w-[320px] max-w-[calc(100vw-32px)] p-8 gap-10 rounded-2xl bg-white flex flex-col gap-5">
      <div className="flex flex-col gap-2">
        <h4 className="text-2xl font-bold leading-8 text-[#171717]">Connect a Wallet</h4>
        <h5 className="text-lg font-medium leading-6 text-[#171717]">Supported wallets</h5>
      </div>
      <div className="flex flex-col gap-4">
        {wallets?.map((wallet) => (
          <div
            className="flex flex-row items-center gap-4 cursor-pointer transition-transform duration-300 ease-in-out hover:scale-105"
            key={wallet.metadata.id}
            onClick={wallet.connect}
          >
            <img src={wallet.metadata.icon} alt={`${wallet.metadata.name} icon`} className="w-10 h-10 rounded-full" />
            <span className="text-[#171717] text-base font-medium leading-5">{wallet.metadata.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
