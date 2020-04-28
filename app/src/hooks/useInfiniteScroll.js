import { useEffect, useRef, useState } from "react"
import useWindowSize from "./useWindowSize"
import useInterval from "./useInterval"

const WINDOW = "window"
const PARENT = "parent"

// unmaintained: https://github.com/onderonur/react-infinite-scroll-hook/

function useInfiniteScroll({
  loading,
  hasNextPage,
  onLoadMore,
  threshold = 150,
  checkInterval = 200,
  scrollContainer = PARENT,
}) {
    console.log("HERE!")
  const ref = useRef(null)
  const { height: windowHeight, width: windowWidth } = useWindowSize()
  // Normally we could use the "loading" prop, but when you set "checkInterval" to a very small
  // number (like 10 etc.), some request components can't set its loading state
  // immediately (I had this problem with react-apollo's Query component. In some cases, it runs
  // "updateQuery" twice). Thus we set our own "listen" state which immeadiately turns to "false" on
  // calling "onLoadMore".
  const [listen, setListen] = useState(true)

  useEffect(() => {
    if (!loading) {
        console.log('not loading')
      setListen(true)
    }
  }, [loading])

  function getParentSizes() {
    const parentNode = ref.current.parentNode
    const parentRect = parentNode.getBoundingClientRect()
    const { top, bottom, left, right } = parentRect
    console.log(parentRect)
    return { top, bottom, left, right }
  }

  function getBottomOffset() {
    const rect = ref.current.getBoundingClientRect()

    const bottom = rect.bottom
    let bottomOffset = bottom - windowHeight

    if (scrollContainer === PARENT) {
      const { bottom: parentBottom } = getParentSizes()
      // Distance between bottom of list and its parent
      bottomOffset = bottom - parentBottom
    }
    console.log(bottomOffset)
    return bottomOffset
  }

  function isParentInView() {
    const parent = ref.current ? ref.current.parentNode : null
    console.log('sldfkjsdlfkjsd parent in view???')
    console.log(parent)
    if (parent) {
      const { left, right, top, bottom } = getParentSizes()
      if (left > windowWidth) {
        return false
      } else if (right < 0) {
        return false
      } else if (top > windowHeight) {
        return false
      } else if (bottom < 0) {
        return false
      }
    }

    return true
  }

  function listenBottomOffset() {
      console.log("listen", listen)
      console.log("loading", loading)
      console.log("hasNextPage", hasNextPage)
      console.log("listenBottomOffset!")

    if (listen && !loading && hasNextPage) {
      if (ref.current) {
        if (scrollContainer === PARENT) {
          if (!isParentInView()) {
            console.log("NOTHING!")

            // Do nothing if the parent is out of screen
            return
          }
        }

        // Check if the distance between bottom of the container and bottom of the window or parent
        // is less than "threshold"
        const bottomOffset = getBottomOffset()
        const validOffset = bottomOffset < threshold

        if (validOffset) {
          setListen(false)
          onLoadMore()
        }
      }
    }
  }

  useInterval(
    () => {
        console.log("listen!!")

      listenBottomOffset()
      console.log("listen!!")

    },
    // Stop interval when there is no next page.
    hasNextPage ? checkInterval : 0
  )

  console.log(ref)
  return ref
}

export default useInfiniteScroll
