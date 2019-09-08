import React, { Component } from 'react'

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false, errorInfo: null }
  }

  static getDerivedStateFromError(error) {
    //return the new state to trigger a re-render with the fallback UI
    return { hasError: true }
  }

  componentDidCatch(error, errorInfo) {
    //log the catched error and save the errorInfo in the state
    this.setState({ errorInfo })
    console.warn(error)
  }

  render() {
    const { state: { hasError, errorInfo }, props: { children } } = this
    if (hasError && errorInfo) {
      return (
        <>
         <p>
           Ooops, something happened please try again
           <br/><br/>
           <details style={{ whiteSpace: 'pre-wrap' }}>{errorInfo.componentStack}</details>
         </p>
        </>
      )
    }
    return children
  }
}
