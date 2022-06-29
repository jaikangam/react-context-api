import React from 'react'

const What = () => {
  return (
    <>
    <h3> What is Context?</h3>
    <p> Context provides a way to pass data through the component tree without having to pass props down manually at every level. </p>

    <h3> When did Context API Release?</h3>
    <p> Context API Release on Ver 16.3, 2018. </p>

    <h3> When to use context?</h3>
    <p> Context is design to share data that can be consider "global" for a tree of React component. </p>
    <p> Context is primarly used when some data need to be accessible by many components at different nesting level. If you want only to avoid passing some props through many level. Context API is the solution.</p>
    </>
  )
}

export default What