import React from 'react'

const Counter = () => {
  const [count, setCount] = React.useState(0)

  return <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
}

export default Counter
