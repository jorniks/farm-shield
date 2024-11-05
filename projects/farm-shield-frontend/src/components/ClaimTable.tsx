enum ClaimStatus {
  Pending = "Pending",
  Approved = "Approved",
  Rejected = "Rejected",
}
import { Badge } from "./Badge";
export const ClaimTable = () => {
  const tableData = [
    {
      policyName: "Livestock policy 1",
      disasterType: "Earthquake",
      dateOfSubmission: new Date("2021-09-01"),
      status: "Pending",
    },
    {
      policyName: "Crop Insurance Policy 2",
      disasterType: "Flood",
      dateOfSubmission: new Date("2021-09-02"),
      status: "Approved",
    },
    {
      policyName: "Crop Insurance Policy 3",
      disasterType: "Pests",
      dateOfSubmission: new Date("2021-09-03"),
      status: "Rejected",
    },
  ];
  const formatDate = (date: Date) => {
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  }
  const classBadgeStyle = (status: string) => {
    switch (status) {
      case ClaimStatus.Pending:
        return " !text-[#FFB800]";
      case ClaimStatus.Approved:
        return "!text-[#2EA15C]";
      case ClaimStatus.Rejected:
        return " !text-[#FF4D4F]";
      default:
        return "";
    }
  }
  return (
    <table className="w-full rounded-tl-lg rounded-tr-lg overflow-hidden">
      <thead className="bg-[#6A6A6A1F]">
        <tr className="border-b border-b-[#6A6A6ACC]">
          <th className="text-left text-[#ACACAC] py-4 pl-5 font-inter text-base font-medium rounded-tl-lg">Policy Name</th>
          <th className="text-left text-[#ACACAC] py-4 font-inter text-base font-medium">Disaster Type</th>
          <th className="text-left text-[#ACACAC] py-4 font-inter text-base font-medium">Date of Submission</th>
          <th className="text-left text-[#ACACAC] py-4 font-inter text-base font-medium rounded-tr-lg">Status</th>
        </tr>
      </thead>
      <tbody>
        {tableData.map((data, index) => (
          <tr key={index} className="border-b border-[#6A6A6ACC]">
            <td className="text-left text-white font-medium py-4 pl-5 font-inter text-base ">{data.policyName}</td>
            <td className="text-left text-white font-medium py-4 font-inter text-base ">{data.disasterType}</td>
            <td className="text-left text-white font-medium py-4 font-inter text-base ">{formatDate(data.dateOfSubmission)}</td>
            <td className="text-left text-white font-medium py-4 font-inter text-base "><Badge text={data.status} className={classBadgeStyle(data.status)} /></td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
