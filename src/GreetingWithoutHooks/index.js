import React, { Component } from "react";
import Box from "Box";
import Header from "Header";
import Main from "Main";
import Row from "Row";
import LabelField from "LabelField";

class GreetingWithoutHooks extends Component {
  render() {
    return (
      <Box>
        <Header>Greeting without Hooks</Header>
        <Main>
          <Row>My row</Row>
        </Main>
      </Box>
    );
  }
}

export default GreetingWithoutHooks;
