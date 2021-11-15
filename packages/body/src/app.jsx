import React from 'react'
import ReactDOM from 'react-dom'
import singleSpaReact from 'single-spa-react'

const Body = () => {
  return (
    <div
      style={{
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div
        style={{
          width: '300px',
          height: '300px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          background: '#42b983',
        }}
      >
        Body from React
      </div>
    </div>
  )
};

const lifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: Body,
})

export const bootstrap = lifecycles.bootstrap
export const mount = lifecycles.mount
export const unmount = lifecycles.unmount
