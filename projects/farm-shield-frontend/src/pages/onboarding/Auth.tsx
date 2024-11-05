import { AuthInput } from "../../components/AuthInput";
import image from '../../assets/auth-img.png';
import { DrainageIcon,  PlantingIcon } from "../../components/Icon";
import { Link } from "react-router-dom";
export const AuthPage = () => {
  return (
    <main className="min-h-screen w-full pl-[99px] pt-[140px] grid grid-cols-[55%,_40%] gap-[5%]">
      <form className="w-full flex flex-col gap-20 relative pb-40">
        <div className="absolute z-0 -right-2 -top-16 opacity-20"><DrainageIcon/></div>
        <div className="absolute z-0 opacity-20 -left-16 top-0 " ><PlantingIcon/></div>
        <div className="absolute z-0 right-1/2 opacity-20 top-32 " ><DrainageIcon/></div>
        <div className="absolute z-0 top-[45%] left-[15%] opacity-20 " ><PlantingIcon/></div>
        <div className="absolute z-0 opacity-20 left-1/3 bottom-[20%]" ><PlantingIcon/></div>
        <div className="">
          <h1 className="text-[42px] text-primary font-bold ">FarmShield</h1>
          <h3 className="text-[42px] font-bold text-secondary dark:text-white ">Get Started</h3>
          <h6 className="text-2xl font-normal font-poppins text-[rgba(44,_44,_44,_0.60)] dark:text-[#ACACAC] ">
            Connect your Algorand Wallet or proceed
          </h6>
        </div>
        <div className="flex flex-col gap-4">
          <AuthInput id="form-shield-name" placeholder="Name" type="text" hasIcon={true}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <mask
                id="mask0_20_690"
                style={{ maskType: "alpha" } as React.CSSProperties}
                maskUnits="userSpaceOnUse"
                x="0"
                y="0"
                width="24"
                height="24"
              >
                <rect width="24" height="24" fill="#D9D9D9" />
              </mask>
              <g mask="url(#mask0_20_690)">
                <path
                  d="M12 12C10.9 12 9.95833 11.6083 9.175 10.825C8.39167 10.0417 8 9.1 8 8C8 6.9 8.39167 5.95833 9.175 5.175C9.95833 4.39167 10.9 4 12 4C13.1 4 14.0417 4.39167 14.825 5.175C15.6083 5.95833 16 6.9 16 8C16 9.1 15.6083 10.0417 14.825 10.825C14.0417 11.6083 13.1 12 12 12ZM4 20V17.2C4 16.6333 4.14583 16.1125 4.4375 15.6375C4.72917 15.1625 5.11667 14.8 5.6 14.55C6.63333 14.0333 7.68333 13.6458 8.75 13.3875C9.81667 13.1292 10.9 13 12 13C13.1 13 14.1833 13.1292 15.25 13.3875C16.3167 13.6458 17.3667 14.0333 18.4 14.55C18.8833 14.8 19.2708 15.1625 19.5625 15.6375C19.8542 16.1125 20 16.6333 20 17.2V20H4ZM6 18H18V17.2C18 17.0167 17.9542 16.85 17.8625 16.7C17.7708 16.55 17.65 16.4333 17.5 16.35C16.6 15.9 15.6917 15.5625 14.775 15.3375C13.8583 15.1125 12.9333 15 12 15C11.0667 15 10.1417 15.1125 9.225 15.3375C8.30833 15.5625 7.4 15.9 6.5 16.35C6.35 16.4333 6.22917 16.55 6.1375 16.7C6.04583 16.85 6 17.0167 6 17.2V18ZM12 10C12.55 10 13.0208 9.80417 13.4125 9.4125C13.8042 9.02083 14 8.55 14 8C14 7.45 13.8042 6.97917 13.4125 6.5875C13.0208 6.19583 12.55 6 12 6C11.45 6 10.9792 6.19583 10.5875 6.5875C10.1958 6.97917 10 7.45 10 8C10 8.55 10.1958 9.02083 10.5875 9.4125C10.9792 9.80417 11.45 10 12 10Z"
                  fill="#6A6A6A"
                />
              </g>
            </svg>
          </AuthInput>
          <AuthInput id="form-shield-password" placeholder="Password" type="password" hasIcon={true}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <mask id="mask0_20_1059" style={{ maskType: "alpha" }} maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
                <rect width="24" height="24" fill="#D9D9D9" />
              </mask>
              <g mask="url(#mask0_20_1059)">
                <path
                  d="M6 22C5.45 22 4.97917 21.8042 4.5875 21.4125C4.19583 21.0208 4 20.55 4 20V10C4 9.45 4.19583 8.97917 4.5875 8.5875C4.97917 8.19583 5.45 8 6 8H7V6C7 4.61667 7.4875 3.4375 8.4625 2.4625C9.4375 1.4875 10.6167 1 12 1C13.3833 1 14.5625 1.4875 15.5375 2.4625C16.5125 3.4375 17 4.61667 17 6V8H18C18.55 8 19.0208 8.19583 19.4125 8.5875C19.8042 8.97917 20 9.45 20 10V20C20 20.55 19.8042 21.0208 19.4125 21.4125C19.0208 21.8042 18.55 22 18 22H6ZM6 20H18V10H6V20ZM12 17C12.55 17 13.0208 16.8042 13.4125 16.4125C13.8042 16.0208 14 15.55 14 15C14 14.45 13.8042 13.9792 13.4125 13.5875C13.0208 13.1958 12.55 13 12 13C11.45 13 10.9792 13.1958 10.5875 13.5875C10.1958 13.9792 10 14.45 10 15C10 15.55 10.1958 16.0208 10.5875 16.4125C10.9792 16.8042 11.45 17 12 17ZM9 8H15V6C15 5.16667 14.7083 4.45833 14.125 3.875C13.5417 3.29167 12.8333 3 12 3C11.1667 3 10.4583 3.29167 9.875 3.875C9.29167 4.45833 9 5.16667 9 6V8Z"
                  fill="#6A6A6A"
                />
              </g>
            </svg>
          </AuthInput>
        </div>
        <div>
          <Link to={'/dashboard/home'}

            className="px-6 py-6 w-fit rounded-[40px] bg-primary text-white flex items-center justify-center font-poppins text-2xl font-normal gap-[10px]"
          >
            Continue
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <mask id="mask0_20_753" style={{ maskType: "alpha" }} maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
                <rect width="24" height="24" fill="#D9D9D9" />
              </mask>
              <g mask="url(#mask0_20_753)">
                <path d="M16.175 13H4V11H16.175L10.575 5.4L12 4L20 12L12 20L10.575 18.6L16.175 13Z" fill="white" />
              </g>
            </svg>
          </Link>
        </div>
      </form>
      <div className="w-full ">
        <img src={image} alt="" className="w-full h-full object-cover" />
      </div>
    </main>
  );
};
