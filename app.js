import { animate, easeIn, scroll, transform, spring, inView } from "motion";
import { animate as animateM } from "motion/mini";



const duration = 2;

// phrases animation
const phrase_first = document.querySelectorAll('.phrase.first')
const phrase_second = document.querySelectorAll('.phrase.second')
const phrase_third = document.querySelectorAll('.phrase.third')
const img = document.querySelectorAll('.img')
const sequence_phrases = [
  [phrase_first, 
    { opacity: [0, 1], y: [50, 0] }, 
    { }],
  [phrase_second, 
    { opacity: [0, 1], y: [50, 0] },
    { delay: 0.1 }],
  [phrase_third, 
    { opacity: [0, 1], y: [50, 0] },
    { delay: 0.1 }],
]
inView(".phrase", (target) =>{
  const animation = animate(sequence_phrases,
    {duration: duration}
  )
  return ()=> {
    animation.stop()
    
    animate(target, animation)
  }
  
})

// number animation
const number = document.querySelector(".number")
inView(".numwrapper", (target) => {
  const animation = animate(0, 8200000000, {
    duration: duration,
    onUpdate: latest => {
      number.textContent = Math.round(latest)
    }
  }
  )
  const animationP = animate(".p", 
    { opacity: [0, 1], y: [-50, 0] },
    { duration: 0.5 }
  )
  return () => {
    animation.stop()
    animationP.stop()
    
    animate(target, animation)
    animate(".p", animationP)
  }
})



// img-phrases animation
const sequence_img = [
  [img,
    { opacity: [0, 1] },
    { delay: 0.3 }
  ],
  [phrase_first, 
    { opacity: [0, 1], y: [50, 0] }, 
    { }],
  [phrase_second, 
    { opacity: [0, 1], y: [50, 0] },
    { delay: 0.1 }],
]

inView("img", (target) => {
  const animation = animate(sequence_img, 
    {duration: duration}
  )
  return () =>{
    animation.stop()
    
    animate(target, animation)
  }
})