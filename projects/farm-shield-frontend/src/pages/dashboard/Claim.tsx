import { ClaimTable } from "../../components/ClaimTable"
export const Claim = () => {
  return (
    <div className="flex flex-col gap-2 w-full ">
      <section className="p-8 pb-[55px]  rounded-[32px] bg-white dark:bg-[#111313] flex flex-col gap-2">
        <h4 className="font-inter text-xl font-medium text-secondary dark:text-[#D9D9D9] mb-4 ">Claim Overview</h4>
        <ClaimTable />
      </section>
    </div>
  );
}
