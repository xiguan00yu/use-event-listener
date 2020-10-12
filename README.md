# @link-hooks/use-event-listener

> window add event listener

[![NPM](https://img.shields.io/npm/v/@link-hooks/use-event-listener.svg)](https://www.npmjs.com/package/@link-hooks/use-event-listener) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save @link-hooks/use-event-listener
```

## Usage

```tsx
import React, { Component } from 'react'
import useEventListener from '@link-hooks/use-event-listener'

const Example = () => {
  const [hover, setHover] = useState(false)
  //  example-1
  const ref = useEventListener<HTMLDivElement>(
    ['mouseover', 'mouseleave'],
    [() => setHover(true), () => setHover(false)]
  )

  //  example-2
  // const ref = useEventListener<HTMLDivElement>(['mouseover', 'mouseleave'], {
  //   mouseover: () => setHover(true),
  //   mouseleave: () => setHover(false)
  // })

  //  example-3
  // const ref = useEventListener<HTMLDivElement>('mouseover', ) => setHover(true))

  return <div className={`box ${hover ? 'hover' : ''}`} ref={ref} />
}
```

## License

MIT © [xiguan00yu](https://github.com/xiguan00yu)
