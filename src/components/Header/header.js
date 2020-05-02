import React from "react";
import TopMenu from "./navbar";
import Counter from "./counter";

class Header extends React.Component {
  render() {
    return (
      <React.Fragment>
        <TopMenu />
        <Counter />
      </React.Fragment>
    );
  }
}
export default Header;
