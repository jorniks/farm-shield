import { getAlgoClient } from "./getAlgoClientConfigs";

export const getAccountBalance = async (address: string) => {
  try {
    const client = getAlgoClient();
    const accountInfo = await client.accountInformation(address).do();

    return accountInfo.amount / 1000000;
  } catch (error) {
    console.error("Error while fetching account balance", error);
    return 0;
  }
};
