import { useEffect, useRef } from 'react'

type HTMLElementEventKey = keyof HTMLElementEventMap

export function useEventListener<T extends HTMLElement>(
  t: HTMLElementEventKey[] | HTMLElementEventKey,
  l:
    | { [key: string]: (ev: HTMLElementEventMap[HTMLElementEventKey]) => any }
    | ((ev: HTMLElementEventMap[HTMLElementEventKey]) => any)[]
    | ((ev: HTMLElementEventMap[HTMLElementEventKey]) => any)
) {
  const ref = useRef<T>(null)

  useEffect(() => {
    if (!ref.current) return

    const ets = Array.isArray(t) ? t : [t]
    const els = typeof l === 'function' ? [l] : l

    ets.forEach((et: string, index) =>
      ref.current?.addEventListener(et, els?.[et] || els[index])
    )

    return () => {
      ets.forEach((et: string, index) =>
        ref.current?.removeEventListener(et, els?.[et] || els[index])
      )
    }
  }, [])

  return ref
}

export default useEventListener
