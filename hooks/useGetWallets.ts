import { useEffect, useMemo, useState } from "react";
import { walletService } from "@/service/walletService";

export function useGetWallets() {
  const projectId = process.env.NEXT_PUBLIC_PROJECT_ID;
  const [wallets, setWallets] = useState<any>([]);

  const getWallets = async () => {
    const response = await walletService.getWallets({ projectId });
    if (response && response.data) {
        setWallets(response.data.listings);
    }
  };

  useEffect(() => {
    getWallets();
  }, []);

  return useMemo(() => {
    return {
      wallets,
    };
  }, [wallets]);
}
