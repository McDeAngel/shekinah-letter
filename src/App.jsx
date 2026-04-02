import { useState, useRef } from 'react'
import './App.css'

function App() {
  const [showOverlay, setShowOverlay] = useState(true)
  const audioRef = useRef(null)

  const handleStart = () => {
    if (showOverlay) {
      audioRef.current?.play().catch(() => {})
      setShowOverlay(false)
    }
  }

  return (
    <>
      <audio ref={audioRef} src="/piano.mp3" loop playsInline />

      <div
        className={`overlay ${showOverlay ? 'visible' : 'hidden'}`}
        onClick={handleStart}
      >
        <p className="overlay-text">Click anywhere to start</p>
      </div>

      <main className={`container ${showOverlay ? 'hidden' : 'visible'}`}>
        <div className="falling-leaves">
          {[...Array(15)].map((_, i) => (
            <img
              key={i}
              src={`/leaf${(i % 2) + 1}.png`}
              alt=""
              className={`leaf leaf-${i}`}
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 10}s`,
                animationDuration: `${10 + Math.random() * 10}s`
              }}
            />
          ))}
        </div>

        <div className="header-box">
          <h1 className="title">Letter for you</h1>
        </div>

        <article className="letter">
          <p className="greeting">Dear Shekinah T. Rosete,</p>

          <p>I'm deeply proud of how you handle life. You carry yourself with quiet maturity, still choosing to move forward despite every hardship you face. I know you value respect and peace above all else, and I don't need reciprocation for honoring that.</p>

          <p>We had a season of no contact, and even if it happens again, I have no problem with it. Just figure everything out by yourself, at alam mong su-supportahan kita diyan. There's a reason you act the way you do—it's rooted in what you've survived. Believe it or not, I understand why. Go ahead and be cold. Don't contact me. Block me if you need to. But I will still love you exactly as you are, at walang makakapagbago sa puso't isip ko kahit na anong mangyari.</p>

          <p>I can see through you, even in your silence. After all, you already voiced enough in just two months—that was more than enough to truly know you. You're different. Unique. A soul like yours only exists in one body per lifetime. I wouldn't be able to find you anywhere else, kahit kalikutin ko pa ang buong galaxy.</p>

          <p>I only wish you the best and lasting happiness. Dito lang ako, kahit anong mangyari. Kahit hindi mo ako pansinin, kahit hindi ka mag-reply pabalik, kahit wala kang gawin—basta maging ikaw, bilang ikaw. You might not see it, but parts of you quietly leak through in the simplest ways, and that will never fade. I love that so freaking much.</p>

          <div className="conclusion">
            <h3>Overall I want to say is that...</h3>
            <p>Your avoidant nature doesn't make you hard to love—it makes you deeply human, and it's exactly why you're so easy to understand when you're truly seen. You don't need to change to be worthy of care. I'll respect your space, honor your pace, and hold this quiet space for you, always in all ways.</p>
            <p className="sign">With steady devotion,<br />Marc Ramon Emmanuel C. De Angel</p>
          </div>
        </article>

        <div className="footer-box">
          <p className="hearts">~ ♡ ~</p>
        </div>
      </main>
    </>
  )
}

export default App