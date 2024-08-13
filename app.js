// PUT YOUR CODE HERE

let play = gsap.timeline({ ease: 'linear.out', paused: true, repeat: -1 })

play.from('.red', { x: -200, y: -200, duration: 0.5, delay: 1 })
    .from('.green', { x: 200, y: -200, duration: 0.5 })
    .from('.blue', { x: 200, y: 200, duration: 0.5 })
    .from('.yellow', { x: -200, y: 200, duration: 0.5 })
    .to('.red', { x: '100vw', left: -200, backgroundColor: 'green', borderRadius: "50% 50%", duration: 1 })
    .to('.green', { y: '100vh', top: -200, backgroundColor: 'blue', borderRadius: "50% 50%", duration: 1 }, '<')
    .to('.blue', { left: 0, backgroundColor: 'yellow', borderRadius: "50% 50%", duration: 1 }, '<')
    .to('.yellow', { top: 0, backgroundColor: 'red', borderRadius: "50% 50%", duration: 1 }, '<')
    .to('.red', { x: '100vw', left: 0, duration: 0.5 })
    .to('.green', { x: 200, duration: 0.5 }, '<')
    .to('.blue', { x: -200, duration: 0.5 }, '<')
    .to('.yellow', { x: -200, duration: 0.5 }, '<')

play.play()
