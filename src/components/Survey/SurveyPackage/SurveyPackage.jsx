import { useSelector } from "react-redux";
import MBSurveyTable from "./MBSurveyTable/MBSurveyTable";

const SurveyPackage = () => {
  const mode = useSelector((state) => state.mode.light);
  return (
    <>
      <h1 style={{color: mode ? "#000" : "#fff"}} className="mb-3">Package Survey</h1>
      <MBSurveyTable />
    </>
  );
};

export default SurveyPackage;
