'use client'
import { useState, useEffect } from 'react'

export default function Home() {
  const [count, setCount] = useState(7)
  const [ready, setReady] = useState(false)

  useEffect(() => {
    const start = Date.now()
    const iv = setInterval(() => {
      const rem = 7 - Math.floor((Date.now() - start) / 1000)
      setCount(Math.max(0, rem))
      if (rem <= 0) { setReady(true); clearInterval(iv) }
    }, 300)
    return () => clearInterval(iv)
  }, [])

  return (
    <div style={{
      position: 'fixed', inset: 0,
      background: '#010206',
      display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center',
      overflow: 'hidden'
    }}>
      <div style={{
        position: 'absolute', inset: 0,
        background: 'radial-gradient(ellipse 70% 60% at 50% 30%, rgba(168,85,247,0.12), transparent 65%)'
      }}/>

      <div style={{
        position: 'relative', width: 220, height: 220,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        marginBottom: 28
      }}>
        <div style={{ position: 'absolute', width: 200, height: 200, borderRadius: '50%', border: '1px solid rgba(0,255,200,0.15)' }}/>
        <div style={{ position: 'absolute', width: 160, height: 160, borderRadius: '50%', border: '1px solid rgba(168,85,247,0.18)' }}/>
        <div style={{ position: 'absolute', width: 120, height: 120, borderRadius: '50%', border: '1px solid rgba(0,212,255,0.12)' }}/>
        <div style={{
          width: 90, height: 90, borderRadius: '50%',
          background: 'radial-gradient(circle at 33% 33%, rgba(168,85,247,0.7), rgba(70,15,130,0.9), rgba(10,3,28,1))',
          border: '3px solid rgba(168,85,247,0.55)',
          boxShadow: '0 0 44px rgba(168,85,247,0.55)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: 36
        }}>🪙</div>
      </div>

      <div style={{
        fontFamily: "'Orbitron', sans-serif",
        fontSize: 16, fontWeight: 900,
        letterSpacing: '0.17em', marginBottom: 7,
        background: 'linear-gradient(90deg,#00ffc8,#a855f7,#f5c842)',
        WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
        textAlign: 'center', padding: '0 24px'
      }}>
        DRACHEME · PREDICTION CHAMPIONSHIP
      </div>

      <div style={{
        fontFamily: "'Share Tech Mono', monospace",
        fontSize: 10, color: 'rgba(201,162,39,0.65)',
        letterSpacing: '0.14em', marginBottom: 8
      }}>
        550 BC → DIGITAL ERA · DRCH · SOLANA
      </div>

      <div style={{
        fontFamily: "'Rajdhani', sans-serif",
        fontSize: 13, fontStyle: 'italic',
        color: 'rgba(232,228,216,0.45)',
        marginBottom: 36, textAlign: 'center',
        maxWidth: 300, lineHeight: 1.7, padding: '0 24px'
      }}>
        "La règle fut écrite avant le prix. Le reste était prévisible."
      </div>

      <div style={{
        fontFamily: "'Orbitron', sans-serif",
        fontSize: 64, fontWeight: 900,
        color: count > 0 ? '#00ffc8' : '#ffffff',
        lineHeight: 1, marginBottom: 16,
        transition: 'color 0.3s'
      }}>
        {count}
      </div>

      {!ready && (
        <div style={{
          fontFamily: "'Share Tech Mono', monospace",
          fontSize: 10, color: 'rgba(232,228,216,0.3)',
          letterSpacing: '0.12em'
        }}>
          // INITIALISATION EN COURS
        </div>
      )}

      {ready && (
        <a href="/home" style={{
          padding: '14px 42px',
          cursor: 'pointer',
          background: 'rgba(201,162,39,0.06)',
          border: '1px solid rgba(201,162,39,0.42)',
          fontFamily: "'Orbitron', sans-serif",
          fontSize: 11, fontWeight: 700,
          color: 'rgba(201,162,39,0.9)',
          letterSpacing: '0.14em',
          textDecoration: 'none',
          display: 'inline-block'
        }}>
          ◈ ENTRER LA CARTOGRAPHIE →
        </a>
      )}

      <div style={{
        position: 'absolute', bottom: 16, right: 16,
        fontFamily: "'Share Tech Mono', monospace",
        fontSize: 9, color: 'rgba(232,228,216,0.2)',
        cursor: 'pointer'
      }}>
        <a href="/home" style={{ color: 'inherit', textDecoration: 'none' }}>SKIP ↓</a>
      </div>
    </div>
  )
}
