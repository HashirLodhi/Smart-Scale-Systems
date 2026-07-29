const wrapper = document.querySelector(".Horizontal");
const text = document.querySelector(".Horizontal__text");
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

const dependenciesReady =
  typeof window.gsap !== "undefined" &&
  typeof window.ScrollTrigger !== "undefined" &&
  typeof window.SplitText !== "undefined";

if (wrapper && text && dependenciesReady && !reduceMotion.matches) {
  gsap.registerPlugin(ScrollTrigger, SplitText);
  document.documentElement.classList.add("animation-ready");

  const split = SplitText.create(text, {
    type: "chars,words",
    aria: "auto"
  });

  const scrollTween = gsap.to(text, {
    xPercent: -100,
    ease: "none",
    scrollTrigger: {
      trigger: wrapper,
      pin: true,
      scrub: true,
      start: "top top",
      end: () => `+=${text.scrollWidth}`,
      invalidateOnRefresh: true,
      anticipatePin: 1
    }
  });

  split.chars.forEach((char) => {
    gsap.from(char, {
      yPercent: "random(-200, 200)",
      rotation: "random(-20, 20)",
      ease: "back.out(1.2)",
      scrollTrigger: {
        trigger: char,
        containerAnimation: scrollTween,
        start: "left 100%",
        end: "left 30%",
        scrub: 1
      }
    });
  });
}
