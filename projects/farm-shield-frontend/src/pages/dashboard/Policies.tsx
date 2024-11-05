import cropInsuranceImage from '../../assets/crop-insurance.png';
import livestockInsuranceImage from "../../assets/livestock-insurance.png";
import { Link } from 'react-router-dom';
export const Policies = () => {
  return (
    <div className="flex flex-col gap-2 w-full ">
      <section className="py-[37px] px-[32px] rounded-[32px] bg-white dark:bg-[#111313] flex flex-col gap-2 ">
        <div className="flex gap-8">
          <article className="flex flex-col items-center rounded-[20px] bg-[rgba(255,_255,_255,_0.1)] px-[53px] border border-[rgba(46,_161,_92,_0.40);]  h-[275px] py-6 ">
            <img src={cropInsuranceImage} alt="Crop Insurance Icon" />
            <p className="text-sm font-inter font-medium text-[#ACACAC] text-center">Purchase crop farming insurance</p>
            <Link to={"/"} className="w-fit py-2 px-4 bg-primary text-white rounded-2xl font-inter font-medium text-sm">
              Crop Insurance
            </Link>
          </article>
          <article className="flex flex-col justify-center rounded-[20px] bg-[rgba(255,_255,_255,_0.1)] px-[53px] border border-[rgba(46,_161,_92,_0.40);] w-[240px] h-[275px] py-6 "></article>
        </div>
      </section>
    </div>
  );
};
