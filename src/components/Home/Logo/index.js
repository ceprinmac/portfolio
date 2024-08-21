import './index.scss'
import LogoP from '../../../assets/images/logo_pmm.png'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { DrawSVGPlugin } from 'gsap-trial/DrawSVGPlugin'

const Logo = () => {
  const bgRef = useRef()
  const outlineLogoRef1 = useRef()
  const outlineLogoRef2 = useRef()
  const outlineLogoRef3 = useRef()
  const solidLogoRef = useRef()

  useEffect(() => {
    gsap.registerPlugin(DrawSVGPlugin)

    gsap
      .timeline()
      .to(bgRef.current, {
        duration: 1,
        opacity: 1,
      })
      .from(outlineLogoRef2.current, {
        drawSVG: 0,
        duration: 2,
      })
      .from(outlineLogoRef1.current, {
        drawSVG: 0,
        duration: 2,
      })
      .from(outlineLogoRef3.current, {
        drawSVG: 0,
        duration: 2,
      })

    gsap.fromTo(
      solidLogoRef.current,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        delay: 6,
        duration: 6,
      }
    )
  }, [])

  return (
    <div className="logo-container" ref={bgRef}>
      <img ref={solidLogoRef} className="solid-logo" src={LogoP} alt="PMM" />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="500pt"
        height="400pt"
        viewBox="0 0 375 299.999988"
        version="1.0"
      >
        <g
          className="svg-container"
          transform="translate(190.039785, 301.022682)"
          fill="none"
        >
          <path
            ref={outlineLogoRef1}
            d="M -57.015625 -182.6875 L 17.453125 -23.265625 L -28.703125 -23.265625 L -85.71875 -147.390625 L -142.734375 -23.265625 L -188.890625 -23.265625 L -114.421875 -182.6875 Z M -57.015625 -182.6875 "
          />
        </g>
        <g
          className="svg-container"
          transform="translate(81.427461, 201.437455)"
          fill="none"
        >
          <path
            ref={outlineLogoRef2}
            d="M 182.6875 -57.015625 L 23.265625 17.453125 L 23.265625 -28.703125 L 147.390625 -85.71875 L 23.265625 -142.734375 L 23.265625 -188.890625 L 182.6875 -114.421875 Z M 182.6875 -57.015625 "
          />
        </g>
        <g
          className="svg-container-diff"
          transform="translate(350.773935, 301.022682)"
          fill="none"
        >
          <path
            ref={outlineLogoRef3}
            d="M -57.015625 -182.6875 L 17.453125 -23.265625 L -28.703125 -23.265625 L -85.71875 -147.390625 L -142.734375 -23.265625 L -188.890625 -23.265625 L -114.421875 -182.6875 Z M -57.015625 -182.6875 "
          />
        </g>
      </svg>
    </div>
  )
}

export default Logo
