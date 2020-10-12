import React, { useState } from 'react'

import { useEventListener } from '@link-hooks/use-event-listener'

const Box = () => {
  const [hover, setHover] = useState(false)
  const ref = useEventListener<HTMLDivElement>(
    ['mouseover', 'mouseleave'],
    [() => setHover(true), () => setHover(false)]
  )
  return <div className={`box ${hover ? 'hover' : ''}`} ref={ref} />
}

const App = () => {
  const [mount, setMount] = useState(true)

  return (
    <main className='ct'>
      <title>use-event-listener</title>
      {mount && <Box />}
      <p>try hover box ...</p>
      <button onClick={() => setMount((m) => !m)}>
        {mount ? 'mount' : 'unmount'}
      </button>
    </main>
  )
}

export default App
