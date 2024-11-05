import { DeflyWalletConnect } from "@blockshake/defly-connect";
import { DaffiWalletConnect } from "@daffiwallet/connect";
import { PeraWalletConnect } from "@perawallet/connect";
import { PROVIDER_ID, ProvidersArray, useInitializeProviders, WalletProvider } from "@txnlab/use-wallet";
import algosdk from "algosdk";

import { getAlgodConfigFromViteEnvironment, getKmdConfigFromViteEnvironment } from "./utils/network/getAlgoClientConfigs";
/*
Pages
*/
import { useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Claim } from "./pages/dashboard/Claim";
import { Dashboard } from "./pages/dashboard/Dashboard";
import { DashboardLayout } from "./pages/dashboard/DashboardLayout";
import { InsurancePage } from "./pages/dashboard/Insurance";
import { Payments } from "./pages/dashboard/Payments";
import { Policies } from "./pages/dashboard/Policies";
import { HomePage } from "./pages/Home";
import { HomeLayout } from "./pages/Layout";
import { AuthPage } from "./pages/onboarding/Auth";
let providersArray: ProvidersArray;
if (import.meta.env.VITE_ALGOD_NETWORK === "") {
  const kmdConfig = getKmdConfigFromViteEnvironment();
  providersArray = [
    {
      id: PROVIDER_ID.KMD,
      clientOptions: {
        wallet: kmdConfig.wallet,
        password: kmdConfig.password,
        host: kmdConfig.server,
        token: String(kmdConfig.token),
        port: String(kmdConfig.port),
      },
    },
  ];
} else {
  providersArray = [
    { id: PROVIDER_ID.DEFLY, clientStatic: DeflyWalletConnect },
    { id: PROVIDER_ID.PERA, clientStatic: PeraWalletConnect },
    { id: PROVIDER_ID.DAFFI, clientStatic: DaffiWalletConnect },
    { id: PROVIDER_ID.EXODUS },
    // If you are interested in WalletConnect v2 provider
    // refer to https://github.com/TxnLab/use-wallet for detailed integration instructions
  ];
}

export default function App() {
  const localTheme = localStorage.getItem("theme") as "light" | "dark";
  useEffect(() => {
    if (localTheme) {
      document.documentElement.className = localTheme;
    }
  }, [localTheme]);

  const algodConfig = getAlgodConfigFromViteEnvironment();

  const walletProviders = useInitializeProviders({
    providers: providersArray,
    nodeConfig: {
      network: algodConfig.network,
      nodeServer: algodConfig.server,
      nodePort: String(algodConfig.port),
      nodeToken: String(algodConfig.token),
    },
    algosdkStatic: algosdk,
  });
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <HomeLayout />,
      children: [
        {
          path: "",
          element: <HomePage />,
        },
      ],
    },
    {
      path: "/onboarding",
      element: <AuthPage />,
    },
    {
      path: "/dashboard",
      element: <DashboardLayout />,
      children: [
        {
          path: "home",
          element: <Dashboard />,
        },
        {
          path: "claims",
          element: <Claim />,
        },
        {
          path: "policies",
          element: <Policies />,
        },
        {
          path: "payments",
          element: <Payments />,
        },

        {
          path: ":insurance",
          element: <InsurancePage />,
        },
      ],
    },
  ]);
  return (
    // <h1 className="text-primary">Hello world from FarmShield</h1>
    // <SnackbarProvider maxSnack={3}>
    <WalletProvider value={walletProviders}>
      <RouterProvider router={routes}></RouterProvider>
    </WalletProvider>
    // </SnackbarProvider>
  );
}
