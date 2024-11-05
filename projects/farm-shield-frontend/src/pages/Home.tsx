import { Link } from "react-router-dom";
import { DrainageIcon, PlantingIcon, FarmingIcon } from "../components/Icon";
import manFarmer from "../assets/imag-49.png";
import womanFarmer from '../assets/image-50.png';
import drainageImg from '../assets/image-51.png';

export const HomePage = () => {
  return (
    <main>
      <div className="mt-20 flex flex-col *:text-7xl *:font-bold mx-auto sm:w-[716px]  items-center relative">
        <div className="absolute top-0 left-0">
          <DrainageIcon />
        </div>
        <h1 className="text-primary">Agricultural</h1>
        <h1 className="text-secondary dark:text-white">Insurance App</h1>
        <div className="absolute top-4 right-0 ">
          <PlantingIcon />
        </div>
      </div>
      <div className="mt-4 text-center text-[32px] font-normal text-secondary dark:text-white  w-[calc(100%_-_40%)] mx-auto relative">
        <div className="-bottom-10 -left-8 absolute" >
          <FarmingIcon/>
        </div>
        Smart Contracts for Insurance: Farmers enter into insurance contracts with{" "}
      </div>
      <Link
        to={"/onboarding"}
        className="capitalize w-fit mx-auto mt-16 text-white bg-primary px-4 py-3 flex justify-center items-center gap-[10px] rounded-[40px] text-xl font-normal"
      >
        Get Started
      </Link>
      <div className="flex justify-center relative py-20 pb-40">
        <div className="rounded-[26.321px] border-[3.948px] bg-white shadow-[ 0px_4px_40px_0px_rgba(44,_44,_44,_0.20)] w-[292px] flex flex-col items-center justify-center h-[394px] shrink-0 rotate-[-20deg] relative left-20">
          <img src={manFarmer} alt="" className="w-full h-full rounded-[26.321px]" />
        </div>
        <div className="rounded-[26.321px] border-[3.948px] bg-white shadow-[ 0px_4px_40px_0px_rgba(44,_44,_44,_0.20)] w-[292px] flex flex-col items-center justify-end relative z-10 ">
          <img src={womanFarmer} alt="" className="w-full h-full rounded-[26.321px]" />
        </div>
        <div className="rounded-[26.321px] border-[3.948px] bg-white shadow-[ 0px_4px_40px_0px_rgba(44,_44,_44,_0.20)] w-[292px] flex flex-col items-center justify-center rotate-[20deg] relative z-0 right-20">
          <img src={drainageImg} alt="" className="w-full h-full rounded-[26.321px]" />
        </div>
      </div>
    </main>
  );
};
