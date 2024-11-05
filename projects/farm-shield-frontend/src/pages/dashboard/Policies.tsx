import { Link } from 'react-router-dom'
import cropInsuranceImage from '../../assets/crop-insurance.png'
import livestockInsuranceImage from '../../assets/livestock-insurance.png'
export const Policies = () => {
  return (
    <div className="flex flex-col gap-2 w-full ">
      <section className="py-[37px] px-[32px] rounded-[32px] bg-white dark:bg-[#111313] flex flex-col gap-2 ">
        <div className="flex gap-8 h-fit">
          <article className="w-[260px] flex flex-col justify-between gap-8 items-center rounded-[20px] bg-[rgba(255,_255,_255,_0.1)] px-[53px] border border-[rgba(46,_161,_92,_0.40);]   py-6">
            <img src={cropInsuranceImage} alt="Crop Insurance Icon" />
            <p className="!text-xl font-inter font-medium text-[#ACACAC] text-center">Purchase crop farming insurance</p>
            <Link to={'/dashboard/crop'} className="w-fit py-2 px-4 bg-primary text-white rounded-2xl font-inter font-medium text-sm">
              Crop Insurance
            </Link>
          </article>
          <article className="flex flex-col justify-between gap-8 items-center rounded-[20px] bg-[rgba(255,_255,_255,_0.1)] px-[53px] border border-[rgba(46,_161,_92,_0.40);]  py-6 w-[290px]">
            <img src={livestockInsuranceImage} alt="Crop Insurance Icon" />
            <p className="!text-xl font-inter font-medium text-[#ACACAC] text-center">Purchase for live stock farming</p>
            <Link to={'/dashboard/livestock'} className="w-fit py-2 px-4 bg-primary text-white rounded-2xl font-inter font-medium text-sm">
              Livestock Insurance
            </Link>
          </article>
        </div>
      </section>
    </div>
  )
}
