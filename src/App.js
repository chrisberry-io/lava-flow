import React from "react"
import "./styles.css"
import { useTrail, animated } from "react-spring"

//NOTE: use useMeasure here to find parent height
export default function App() {
  const trail = useTrail(3, {
    loop: { reverse: true },
    from: { x: "50vw", y: 300 },
    to: { x: "50vw", y: 0 },
    config: {
      mass: 1,
      tension: 20,
      friction: 320
    }
  })
  return (
    <div className="App">
      <div className="blobs">
        {trail.map((props, index) => (
          <animated.div
            key={index}
            className={`blob blob${index + 1}`}
            style={props}
          />
        ))}
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
        <filter id="goo">
          <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
          <feColorMatrix
            in="blur"
            mode="matrix"
            values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
            result="goo"
          />
          <feDropShadow dx="0" dy="0" stdDeviation="10" flood-color="" />
          <feBlend in="StrokePaint" in2="goo" />
        </filter>
      </svg>
    </div>
  )
}
