import React, { useState, useEffect } from "react";
import Box from "Box";
import Header from "Header";
import Main from "Main";
import Row from "Row";

const GreetingWithHooks = () => {
  const [val, setVal] = useState("");
  const handleOnChange = e => {
    setVal(e.target.value);
  };

  useEffect(() => {
    document.title = val;
  });

  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  return (
    <Box>
      <Header> Greeting with Hooks </Header>
      <Main>
        <Row>
          <input type="text" val={val} onChange={handleOnChange} />
        </Row>
        {val ? <Row>The value: {val} </Row> : null}
        <Row>The window width is: {width}</Row>
      </Main>
    </Box>
  );
};

export default GreetingWithHooks;
