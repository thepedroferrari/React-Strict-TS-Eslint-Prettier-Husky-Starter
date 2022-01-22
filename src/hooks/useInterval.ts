import { useEffect, useLayoutEffect, useRef } from "react"

/**
 * @param callback function
 * @param delay number
 * @fires callback
 * @fires setInterval
 * @fires useLayoutEffect
 * @fires useRef
 * @emits O(O(callback)||1)
 */
function useInterval(callback: () => void, delay: number) {
  const savedCallback = useRef(callback)

  // We want to run this as soon as the component mounts
  useLayoutEffect(() => {
    savedCallback.current = callback
  }, [callback])

  useEffect(() => {
    // 0 is a valid delay, but we do not want that.
    if (delay === 0) return () => {}
    const timer = setInterval(() => savedCallback.current(), delay)

    return () => clearInterval(timer)
  }, [delay])
}

export default useInterval
