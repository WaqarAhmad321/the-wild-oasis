import Select from "./Select";
import { useSearchParams } from "react-router-dom";

function SoryBy({ options }) {
  const [searchParams, setSearchParams] = useSearchParams("");
  const sortBy = searchParams.get("sortBy") || "";

  function handleChange(e) {
    searchParams.set("sortBy", e.target.value);
    setSearchParams(searchParams);
  }

  return (
    <Select
      options={options}
      value={sortBy}
      onChange={handleChange}
      type="white"
    />
  );
}

export default SoryBy;
