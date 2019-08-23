import React, { useState, useEffect } from "react";
import Box from "Box";
import Header from "Header";
import Main from "Main";
import Row from "Row";

const GreetingWithHooks = () => {
  const [val, setVal] = useState("");

  useEffect(() => {
    document.title = val;
  });

  const handleOnChange = e => {
    setVal(e.target.value);
  };

  return (
    <Box>
      <Header> Greeting with Hooks </Header>
      <Main>
        <Row>
          <input type="text" val={val} onChange={handleOnChange} />
        </Row>
        {val ? <Row>The value: {val} </Row> : null}
      </Main>
    </Box>
  );
};

export default GreetingWithHooks;
