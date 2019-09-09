import React, { useState, useEffect } from "react";

const useTryToCrashHook = () => {
  const [shouldCrash, setShouldCrash] = useState(false);

  const checkForBug = shouldCrash => {
    if (shouldCrash) {
      setShouldCrash(() => {
        throw new Error("Error!");
      });
    }
  };

  useEffect(() => {
    checkForBug(shouldCrash);
  }, [shouldCrash]);

  return setShouldCrash;
}

const Page = () => {
  const hasBug = useTryToCrashHook();
  return (
    <button onClick={() => hasBug(true)}>Crash me!</button>
  );
}

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      error,
      errorInfo
    });
  }

  render() {
    return this.state.error ? <p>Ooops, something happened please try again!</p> : <Page />
  }
}

