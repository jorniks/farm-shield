import { useWallet } from "@txnlab/use-wallet";
import { FC, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getAccountBalance } from "../../utils/network/getAccountInfo";
export const InsurancePage: FC = () => {
  const { activeAddress } = useWallet();
  const params = useParams<{ insurance: string }>();
  if (params.insurance !== "crop" && params.insurance !== "livestock") {
    return <h1>Invalid insurance type</h1>;
  }
  const [acctBalance, setAcctBalance] = useState<number>(0);
  useEffect(() => {
    if (activeAddress) {
      getAccountBalance(activeAddress).then((balance) => {
        setAcctBalance(balance);
      });
    }
  }, [activeAddress]);

  return (
    <div className="flex flex-col gap-2 w-full ">
      <section className="py-[37px] px-[32px] rounded-[32px] bg-white dark:bg-[#111313] flex flex-col gap-2">
        <h4 className="font-inter text-2xl font-medium text-secondary dark:text-[#D9D9D9] capitalize">
          {params.insurance} Insurance Policy
        </h4>
        <article className="bg-[#1C1C1E] w-full rounded-[20px] border border-black p-8 flex flex-col gap-8 justify-center">
          <div className="bg-[#242427] rounded-2xl border border-[#39393F] p-4 pr-[86px] flex items-center w-fit font-inter font-medium text-2xl text-[#6A6A6A]">
            <span>Farm Type:</span> <span className="text-primary capitalize ml-2">{params.insurance}</span>
          </div>
          <div className="bg-[#242427] rounded-2xl border border-[#39393F] w-full pt-4 pl-4 pb-[62px] flex flex-col gap-5">
            <h6 className="text-2xl text-[#6A6A6A] font-inter font-medium ">Premium selection</h6>
            <div className="bg-[#242427] rounded-2xl border border-[#39393F] p-4 pr-[107px] flex items-center w-fit font-inter font-medium text-2xl text-[#6A6A6A]">
              Premium Option
            </div>
          </div>
          <div className="pt-4 pl-4 pb-7 w-full rounded-2xl bg-[#242427] border border-[#39393F] ">
            <h6 className="text-2xl font-medium text-[#6A6A6A] font-inter ">Coverage amount</h6>
          </div>
        </article>
      </section>
    </div>
  );
};
