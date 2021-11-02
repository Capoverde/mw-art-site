console.log('%c Hello from GSAP.js', 'color: #bada55; background: #000; padding: 5px 10px; margin: 5px 25px; font-size:2em;')


gsap.from(".hidetext", {duration:1, 
    delay: 1.2,
    y: "100%",
    ease: "elastic(1, 0.5)"
  });