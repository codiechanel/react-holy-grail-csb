import * as React from 'react'
import * as ReactDOM from 'react-dom'

class App extends React.Component<any, any> {
  constructor(props) {
    super(props)
  }

  componentDidMount() {

  }

  render() {
    return "welcome"

  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
  // <Hello compiler="TypeScript" framework="React" />,
  // document.getElementById("root")
)
