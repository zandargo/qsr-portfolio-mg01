import { gsap } from "gsap"

import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Observer } from "gsap/Observer"
import { ScrollToPlugin } from "gsap/ScrollToPlugin"
import { MotionPathPlugin } from "gsap/MotionPathPlugin"


gsap.registerPlugin(
  ScrollTrigger,
  Observer,
  ScrollToPlugin,
  MotionPathPlugin,
)
