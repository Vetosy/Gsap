import {
  gsap
} from "gsap";

import {
  ScrollTrigger
} from "gsap/ScrollTrigger";

import {
  ScrollSmoother
}
from "../vendor/ScrollSmoother.min.js";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

ScrollSmoother.create({
  wrapper: '.wrapper',
  content: '.content',
  smooth: 1.5,
  effects: true
})
