import * as React from "react";
import * as ReactDOM from "react-dom";

function Hello() {
  return <div>hello</div>;
}

class App extends React.Component<any, any> {
  //   constructor(props) {
  //     super(props);
  //   }

  componentDidMount() {
    console.log("ckl");
  }

  render() {
    return (
      <div>
        welcome the best hey now
        <Hello />
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById("root")
  // <Hello compiler="TypeScript" framework="React" />,
  // document.getElementById("root")
);
