import React, { Component } from "react";
import Box from "Box";
import Header from "Header";
import Main from "Main";
import Row from "Row";

class GreetingWithoutHooks extends Component {
  constructor(props) {
    super(props);

    this.state = {
      val: "",
      width: window.innerWidth
    };
  }

  componentDidMount() {
    document.title = this.state.val;
    window.addEventListener("resize", this.handleResize);
  }

  componentDidUpdate() {
    document.title = this.state.val;
  }

  componentWillUnmount() {
    // unsubscribe to avoid any memory leaks
    window.removeEventListener("resize", this.handleResize);
  }

  handleResize = e => {
    this.setState({
      width: window.innerWidth
    });
  };

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

          <Row>The window width is: {this.state.width}</Row>
        </Main>
      </Box>
    );
  }
}

export default GreetingWithoutHooks;
