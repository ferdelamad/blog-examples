import React, { Component } from 'react'
import ErrorBoundary from './ErrorBoundary'

class FailingComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { clicked: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { clicked } = this.state
    this.setState({ clicked: !clicked })
  }

  render() {
    if (this.state.clicked) throw new Error('An error happened!')

    return (
      <>
       <h3>I will cause an error if you click the button</h3>
       <button onClick={this.handleClick}>Crash me!</button>
      </>
    )
  }
}

export default function EBExample01() {
  return (
    <div>
      <p>
        <b>
          Error boundary example 01:
          <br /><br />
          This is a very simple example of how error boundaries work. We are using <i>FailingComponent</i> to throw an error on purpose when clicked.
        </b>
      </p>
      <hr />
      <ErrorBoundary>
        <p>
          In here we have two <i>FailingComponents</i>, since both of them are wrapped
          inside the same EB component, if one fails the entire component tree will be unmounted, including this text.
        </p>
        <FailingComponent />
        <FailingComponent />
      </ErrorBoundary>
      <hr />
      <p>Here we illustrate how when components are wrapped individually they are not affected by each other. If one component throws an error, only that component will be unmounted.</p>
      <ErrorBoundary><FailingComponent /></ErrorBoundary>
      <ErrorBoundary><FailingComponent /></ErrorBoundary>
      <ErrorBoundary><FailingComponent /></ErrorBoundary>
    </div>
  );
}
