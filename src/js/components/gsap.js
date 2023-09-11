import {
  gsap
} from "gsap";

import {
  ScrollTrigger
} from "gsap/ScrollTrigger";

import {
  ScrollSmoother
} from "../vendor/ScrollSmoother.min.js";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

if (ScrollTrigger.isTouch !== 1) {
  ScrollSmoother.create({
    wrapper: ".wrapper",
    content: ".content",
    smooth: 1.5,
    effects: true,
  });

  gsap.fromTo(
    ".hero", {
      opacity: 1
    }, {
      opacity: 0,
      scrollTrigger: {
        trigger: ".hero",
        start: "center",
        end: "1200",
        scrub: true,
      },
    }
  );


  let itemsL = gsap.utils.toArray('.portfolio__item .portfolio__img');

  itemsL.forEach(item => {
    gsap.fromTo(item, {
      x: -200,
      opacity: 0
    }, {
      opacity: 1,
      x: 0,
      scrollTrigger: {
        trigger: item,
        scrub: true
      }
    });
  });


  let itemsR = gsap.utils.toArray('.portfolio__item--reverse .portfolio__img');

  itemsR.forEach(item => {
    gsap.fromTo(item, {
      x: 200,
      opacity: 0
    }, {
      opacity: 1,
      x: 0,
      scrollTrigger: {
        trigger: item,
        scrub: true
      }
    });
  });

}
