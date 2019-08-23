import React, { useState, useEffect } from "react";

const LabelField = () => {
  const [val, setVal] = useState("Enter some text");
  useEffect(() => {
    if (val === "") {
      setVal("Enter some text");
    }
  });
  const [isEditing, setIsEditing] = useState(false);

  const handleOnClick = () => {
    setIsEditing(!isEditing);
  };

  const handleOnKeyDown = e => {
    if (e.key === "Enter") {
      setIsEditing(false);
    }
  };

  const handleOnChange = e => {
    setVal(e.target.value);
  };

  if (!isEditing) {
    return <div onClick={handleOnClick}>{val}</div>;
  } else {
    return (
      <input
        type="text"
        val={val}
        onChange={handleOnChange}
        onKeyDown={handleOnKeyDown}
      />
    );
  }
};

export default LabelField;
