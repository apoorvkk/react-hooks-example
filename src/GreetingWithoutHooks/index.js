import React, { Component } from "react";
import Box from "Box";
import Header from "Header";
import Main from "Main";
import Row from "Row";

class GreetingWithoutHooks extends Component {
  constructor(props) {
    super(props);

    this.state = {
      val: ""
    };
  }

  handleOnChange = e => {
    this.setState({
      val: e.target.value
    });
  };

  render() {
    return (
      <Box>
        <Header>Greeting without Hooks</Header>
        <Main>
          <Row>
            <input
              type="text"
              val={this.state.val}
              onChange={this.handleOnChange}
            />
          </Row>
          {this.state.val ? <Row>The value: {this.state.val} </Row> : null}
        </Main>
      </Box>
    );
  }
}

export default GreetingWithoutHooks;
