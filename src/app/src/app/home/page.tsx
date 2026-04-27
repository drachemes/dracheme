'use client'
import { useState } from 'react'
import Link from 'next/link'

const C = {
  bg: '#03040a', s1: '#090d1a', s2: '#0d1224',
  cy: '#00ffc8', pu: '#a855f7', go: '#f5c842',
  re: '#ff2d55', or: '#ff6b35', te: '#e8eeff',
  ts: 'rgba(232,238,255,0.6)', tm: 'rgba(232,238,255,0.32)',
  bdr: 'rgba(168,85,247,0.12)'
}

const FM = "'Share Tech Mono', monospace"
const FO = "'Orbitron', sans-serif"

export default function HomePage() {
  const [voted, setVoted] = useState(false)
  const [drch, setDrch] = useState(1200)
  const [xp, setXp] = useState(78)
  const [streak, setStreak] = useState(3)
  const [tab, setTab] = useState('home')

  function handleVote(isYes: boolean) {
    if (voted) return
    setVoted(true)
    const win = Math.random() > 0.3
    if (win) {
      setDrch(d => d + 42)
      setXp(x => x + 18)
      setStreak(s => s + 1)
    }
  }

  return (
    <div style={{ background: C.bg, minHeight: '100vh', fontFamily: "'Rajdhani', sans-serif", color: C.te }}>

      {/* Header */}
      <div style={{
        position: 'sticky', top: 0, zIndex: 100,
        background: 'rgba(3,4,10,0.95)', backdropFilter: 'blur(24px)',
        borderBottom: `1px solid ${C.bdr}`,
        padding: '0 14px', height: 52,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <div style={{
            width: 32, height: 32, borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(168,85,247,0.6), rgba(70,15,130,0.85))',
            border: '2px solid rgba(168,85,247,0.5)',
            display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 14
          }}>🪙</div>
          <div>
            <div style={{
              fontFamily: FO, fontSize: 13, fontWeight: 900, letterSpacing: '0.16em',
              background: `linear-gradient(90deg,${C.cy},${C.pu},${C.go})`,
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'
            }}>DRACHEME</div>
            <div style={{ fontFamily: FM, fontSize: 7, color: C.tm }}>// PREDICTION CHAMPIONSHIP · V18</div>
          </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <div style={{
            padding: '4px 9px',
            background: 'rgba(245,200,66,0.08)',
            border: '1px solid rgba(245,200,66,0.22)',
            borderRadius: 100, fontFamily: FM,
            fontSize: 11, fontWeight: 700, color: C.go
          }}>💰 {drch}</div>
          <div style={{
            padding: '4px 9px',
            background: 'rgba(168,85,247,0.08)',
            border: '1px solid rgba(168,85,247,0.22)',
            borderRadius: 100, fontFamily: FM,
            fontSize: 11, fontWeight: 700, color: C.pu
          }}>{xp} XP</div>
        </div>
      </div>

      {/* Content */}
      <div style={{ padding: '14px 14px 90px' }}>

        {/* Top Market */}
        <div style={{
          background: 'linear-gradient(135deg,#060c1e,#080d1a)',
          border: '1px solid rgba(0,255,200,0.18)',
          borderRadius: 14, marginBottom: 12, overflow: 'hidden'
        }}>
          <div style={{ height: 2, background: `linear-gradient(90deg,transparent,${C.cy},${C.pu},transparent)` }}/>
          <div style={{ padding: '12px 14px 14px' }}>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: 5,
              padding: '3px 10px', borderRadius: 100,
              background: 'rgba(0,255,200,0.07)',
              border: '1px solid rgba(0,255,200,0.2)', marginBottom: 8
            }}>
              <div style={{ width: 5, height: 5, borderRadius: '50%', background: C.cy }}/>
              <span style={{ fontFamily: FM, fontSize: 9, fontWeight: 700, color: C.cy }}>
                TOP OPPORTUNITÉ MAINTENANT
              </span>
            </div>
            <div style={{ fontSize: 15, fontWeight: 700, color: '#f0f4ff', lineHeight: 1.35, marginBottom: 10 }}>
              Bitcoin franchit les $100k avant juin 2026 ?
            </div>
            <div style={{ display: 'flex', gap: 14, marginBottom: 12, fontFamily: FM, fontSize: 10, color: C.tm }}>
              <span>👥 847</span><span>💰 38.7K DRCH</span><span>⏱ 18h</span>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8, marginBottom: 8 }}>
              <div style={{ padding: '9px 10px', background: 'rgba(0,255,200,0.09)', border: '1px solid rgba(0,255,200,0.28)', borderRadius: 10 }}>
                <div style={{ fontFamily: FM, fontSize: 8, color: C.tm, marginBottom: 3 }}>OUI · 71%</div>
                <div style={{ fontFamily: FO, fontSize: 14, fontWeight: 900, color: C.cy }}>+42 DRCH</div>
                <div style={{ fontFamily: FM, fontSize: 9, color: C.tm }}>−18 si faux</div>
              </div>
              <div style={{ padding: '9px 10px', background: 'rgba(255,45,85,0.09)', border: '1px solid rgba(255,45,85,0.28)', borderRadius: 10 }}>
                <div style={{ fontFamily: FM, fontSize: 8, color: C.tm, marginBottom: 3 }}>NON · 29%</div>
                <div style={{ fontFamily: FO, fontSize: 14, fontWeight: 900, color: C.re }}>+28 DRCH</div>
                <div style={{ fontFamily: FM, fontSize: 9, color: C.tm }}>−12 si faux</div>
              </div>
            </div>
            <div style={{ height: 4, background: 'rgba(255,255,255,0.07)', borderRadius: 2, overflow: 'hidden', marginBottom: 12 }}>
              <div style={{ height: '100%', width: '71%', background: `linear-gradient(90deg,${C.cy},${C.pu})`, borderRadius: 2 }}/>
            </div>
            {!voted ? (
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
                <button onClick={() => handleVote(true)} style={{
                  padding: '11px 8px', borderRadius: 10, cursor: 'pointer',
                  background: 'rgba(0,255,200,0.08)', border: '1px solid rgba(0,255,200,0.28)',
                  fontFamily: FM, fontSize: 11, fontWeight: 700, color: C.cy
                }}>▲ OUI · JE PRENDS</button>
                <button onClick={() => handleVote(false)} style={{
                  padding: '11px 8px', borderRadius: 10, cursor: 'pointer',
                  background: 'rgba(255,45,85,0.08)', border: '1px solid rgba(255,45,85,0.28)',
                  fontFamily: FM, fontSize: 11, fontWeight: 700, color: C.re
                }}>▼ NON · JE CONTRE</button>
              </div>
            ) : (
              <div style={{
                padding: 11, borderRadius: 10, textAlign: 'center',
                background: 'rgba(168,85,247,0.06)', border: '1px solid rgba(168,85,247,0.2)',
                fontFamily: FM, fontSize: 11, color: C.pu
              }}>✓ Prédiction soumise · En attente de résolution</div>
            )}
          </div>
        </div>

        {/* Stats */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 6, marginBottom: 12 }}>
          {[
            { v: '12', k: 'PRÉDS' },
            { v: '#247', k: 'RANG' },
            { v: '74%', k: 'WIN RATE' },
            { v: String(drch), k: 'DRCH' }
          ].map(s => (
            <div key={s.k} style={{
              textAlign: 'center', padding: '8px 4px',
              background: C.s2, borderRadius: 8, border: `1px solid ${C.bdr}`
            }}>
              <div style={{ fontFamily: FO, fontSize: 13, fontWeight: 900, color: C.te }}>{s.v}</div>
              <div style={{ fontFamily: FM, fontSize: 7, color: C.tm, marginTop: 2 }}>{s.k}</div>
            </div>
          ))}
        </div>

        {/* Streak */}
        <div style={{
          padding: '12px 14px', marginBottom: 12,
          background: 'linear-gradient(135deg,rgba(255,107,53,0.06),#090d1a)',
          border: '1px solid rgba(255,107,53,0.18)', borderRadius: 14
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
            <div style={{ fontSize: 26 }}>🔥</div>
            <div>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 6 }}>
                <span style={{ fontFamily: FO, fontSize: 28, fontWeight: 900, color: '#ff6b35' }}>{streak}</span>
                <span style={{ fontFamily: FM, fontSize: 10, color: C.tm }}>victoires d&apos;affilée</span>
              </div>
              <div style={{ fontFamily: FM, fontSize: 11, fontWeight: 700, color: '#ff6b35' }}>
                ×{streak >= 5 ? '2.0' : streak >= 3 ? '1.5' : '1.0'} XP sur prochain win
              </div>
            </div>
          </div>
        </div>

        {/* Season */}
        <div style={{
          padding: '14px', marginBottom: 12,
          background: 'linear-gradient(135deg,#0c1020,#081018)',
          border: '1px solid rgba(245,200,66,0.18)', borderRadius: 14
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
            <div style={{ fontFamily: FO, fontSize: 12, fontWeight: 900, color: C.go }}>MARCH 2026 · S3</div>
            <div style={{ fontFamily: FO, fontSize: 16, fontWeight: 900, color: C.go }}>100K DRCH</div>
          </div>
          <div style={{ fontFamily: FM, fontSize: 11, color: C.or, textAlign: 'center', padding: 7, background: 'rgba(255,107,53,0.06)', border: '1px solid rgba(255,107,53,0.14)', borderRadius: 6 }}>
            ⚠️ FIN DE SAISON = RESET TON RANG #247
          </div>
        </div>

        {/* Links to other pages */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
          {[
            { href: '/play', ic: '◈', label: 'PLAY', sub: '6 marchés actifs', c: C.pu },
            { href: '/saison', ic: '🏆', label: 'SAISON', sub: 'Classement mondial', c: C.go },
            { href: '/actus', ic: '📡', label: 'ACTUS', sub: 'News & Heatmap', c: C.cy },
            { href: '/drch', ic: '🪙', label: 'DRCH', sub: 'Token & Staking', c: C.or },
          ].map(l => (
            <Link key={l.href} href={l.href} style={{
              padding: '14px 12px', background: C.s1,
              border: `1px solid ${l.c}22`, borderRadius: 12,
              textDecoration: 'none', display: 'block'
            }}>
              <div style={{ fontSize: 22, marginBottom: 6 }}>{l.ic}</div>
              <div style={{ fontFamily: FO, fontSize: 11, fontWeight: 900, color: l.c, marginBottom: 3 }}>{l.label}</div>
              <div style={{ fontFamily: FM, fontSize: 9, color: C.tm }}>{l.sub}</div>
            </Link>
          ))}
        </div>
      </div>

      {/* Bottom Nav */}
      <div style={{
        position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: 100,
        background: 'rgba(3,4,10,0.97)', backdropFilter: 'blur(24px)',
        borderTop: `1px solid ${C.bdr}`,
        display: 'grid', gridTemplateColumns: 'repeat(5,1fr)',
        maxWidth: 480, margin: '0 auto'
      }}>
        {[
          { href: '/home', ic: '⌂', lb: 'HOME' },
          { href: '/play', ic: '◈', lb: 'PLAY' },
          { href: '/saison', ic: '🏆', lb: 'SAISON' },
          { href: '/actus', ic: '📡', lb: 'ACTUS' },
          { href: '/profil', ic: '◉', lb: 'PROFIL' },
        ].map(tb => (
          <Link key={tb.href} href={tb.href} style={{
            display: 'flex', flexDirection: 'column',
            alignItems: 'center', justifyContent: 'center',
            gap: 2, padding: '8px 0', textDecoration: 'none',
            opacity: tb.href === '/home' ? 1 : 0.3
          }}>
            <div style={{ fontSize: 14 }}>{tb.ic}</div>
            <div style={{ fontFamily: FM, fontSize: 6, fontWeight: 700, color: tb.href === '/home' ? C.pu : C.tm }}>{tb.lb}</div>
          </Link>
        ))}
      </div>
    </div>
  )
}
