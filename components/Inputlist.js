import { useState } from "react";

const Inputlist = () => {
  const [value, setValue] = useState("");

  const handleChangeValue = (event) => {
    setValue(event.target.value);
  };

  return (
    <div className="list-container">
      <label htmlFor="1">Name</label>
      <input id="1" type="text" value={value} onChange={handleChangeValue} />
    </div>
  );
};

export default Inputlist;
