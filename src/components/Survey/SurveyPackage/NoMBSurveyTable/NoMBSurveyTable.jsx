import { useSelector } from "react-redux";

const NoMBSurveyTable = () => {
    const mode = useSelector((state) => state.mode.light);
    return (
      <>
        <h2 style={{ color: mode ? "#000" : "#fff", textDecoration: "underline" }} className="mb-3 mt-4">TiO2 Package Survey</h2>
      </>
    );
};

export default NoMBSurveyTable;
