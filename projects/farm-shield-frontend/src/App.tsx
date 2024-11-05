import { DeflyWalletConnect } from "@blockshake/defly-connect";
import { DaffiWalletConnect } from "@daffiwallet/connect";
import { PeraWalletConnect } from "@perawallet/connect";
import { PROVIDER_ID, ProvidersArray, WalletProvider, useInitializeProviders } from "@txnlab/use-wallet";
import algosdk from "algosdk";
import { SnackbarProvider } from "notistack";
import Home from "./Home";

import { getAlgodConfigFromViteEnvironment, getKmdConfigFromViteEnvironment } from "./utils/network/getAlgoClientConfigs";
/*
Pages
*/
import { HomeLayout } from "./pages/Layout";
import { HomePage } from "./pages/Home";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { AuthPage } from "./pages/onboarding/Auth";
import { DashboardLayout } from "./pages/dashboard/DashboardLayout";
import { Dashboard } from "./pages/dashboard/Dashboard";
import { Claim } from "./pages/dashboard/Claim";
import { Policies } from "./pages/dashboard/Policies";
import { Payments } from "./pages/dashboard/Payments";
let providersArray: ProvidersArray;
import { useEffect } from "react";
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
        }
      ],
    },
  ]);
  return (
    <RouterProvider router={routes}></RouterProvider>
    // <h1 className="text-primary">Hello world from FarmShield</h1>
    // <SnackbarProvider maxSnack={3}>
    //   <WalletProvider value={walletProviders}>
    //     <Home />
    //   </WalletProvider>
    // </SnackbarProvider>
  );
}
