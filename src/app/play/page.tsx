'use client'
import { useState } from 'react'
import Link from 'next/link'

const C = {
  bg:'#03040a',s1:'#090d1a',s2:'#0d1224',
  cy:'#00ffc8',pu:'#a855f7',go:'#f5c842',
  re:'#ff2d55',or:'#ff6b35',te:'#e8eeff',
  ts:'rgba(232,238,255,0.6)',tm:'rgba(232,238,255,0.32)',
  bdr:'rgba(168,85,247,0.12)'
}
const FM="'Share Tech Mono',monospace"
const FO="'Orbitron',sans-serif"

const MKTS = [
  {id:1,q:"Bitcoin > $100k avant juin 2026 ?",cat:"CRYPTO",p:71,dl:18,ai:82,hot:true,maj:true,mjp:71,diff:1.4},
  {id:2,q:"Tesla > $300 ce trimestre ?",cat:"FINANCE",p:62,dl:2,ai:71,hot:true,maj:true,mjp:78,diff:1.8},
  {id:3,q:"PSG remporte Champions League ?",cat:"SPORT",p:34,dl:72,ai:44,hot:true,maj:false,mjp:66,diff:2.1},
  {id:4,q:"GPT-6 lancé avant déc 2026 ?",cat:"TECH",p:67,dl:300,ai:78,hot:false,maj:true,mjp:67,diff:1.6},
  {id:5,q:"Mbappé Ballon d'Or 2026 ?",cat:"SPORT",p:58,dl:200,ai:61,hot:false,maj:true,mjp:58,diff:1.3},
]

const CATC:Record<string,string> = {CRYPTO:C.go,FINANCE:C.go,SPORT:C.cy,TECH:'#00d4ff'}

export default function PlayPage() {
  const [voted, setVoted] = useState<Record<number,string>>({})
  const [cat, setCat] = useState('TOUT')

  const cats = ['TOUT','CRYPTO','SPORT','FINANCE','TECH']
  const filtered = cat === 'TOUT' ? MKTS : MKTS.filter(m => m.cat === cat)

  function handleVote(id:number, choice:boolean) {
    if (voted[id]) return
    setVoted(v => ({...v, [id]: choice ? 'yes' : 'no'}))
  }

  return (
    <div style={{background:C.bg,minHeight:'100vh',fontFamily:"'Rajdhani',sans-serif",color:C.te}}>
      <div style={{position:'sticky',top:0,zIndex:100,background:'rgba(3,4,10,0.95)',backdropFilter:'blur(24px)',borderBottom:`1px solid ${C.bdr}`,padding:'0 14px',height:52,display:'flex',alignItems:'center',justifyContent:'space-between'}}>
        <div style={{fontFamily:FO,fontSize:13,fontWeight:900,letterSpacing:'0.16em',background:`linear-gradient(90deg,${C.cy},${C.pu},${C.go})`,WebkitBackgroundClip:'text',WebkitTextFillColor:'transparent'}}>DRACHEME</div>
        <div style={{fontFamily:FM,fontSize:9,color:C.pu}}>◈ MARCHÉS ACTIFS {filtered.length}</div>
      </div>

      <div style={{padding:'12px 14px 90px'}}>
        <div style={{display:'flex',gap:6,overflowX:'auto',marginBottom:14,scrollbarWidth:'none'}}>
          {cats.map(c => (
            <button key={c} onClick={() => setCat(c)} style={{flexShrink:0,padding:'5px 12px',borderRadius:100,cursor:'pointer',fontFamily:FM,fontSize:9,fontWeight:700,color:cat===c?C.cy:C.tm,background:cat===c?'rgba(0,255,200,0.08)':'transparent',border:cat===c?'1px solid rgba(0,255,200,0.3)':`1px solid ${C.bdr}`}}>
              {c}
            </button>
          ))}
        </div>

        {filtered.map((m,i) => {
          const cc = CATC[m.cat] || C.pu
          const isVoted = !!voted[m.id]
          const gY = Math.max(1,Math.floor(m.p*0.6))
          const gN = Math.max(1,Math.floor((100-m.p)*0.6))
          const aic = m.ai>=70?C.pu:m.ai>=50?C.go:C.re

          return (
            <div key={m.id} style={{background:S1,border:`1px solid ${m.hot?'rgba(255,107,53,0.22)':C.bdr}`,borderRadius:14,marginBottom:10,overflow:'hidden',opacity:isVoted?0.85:1}}>
              <div style={{height:2,background:m.hot?`linear-gradient(90deg,transparent,#ff6b35,transparent)`:`linear-gradient(90deg,transparent,${cc},transparent)`}}/>
              <div style={{padding:'10px 14px 14px'}}>
                <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:8}}>
                  <div style={{fontFamily:FM,fontSize:9,fontWeight:700,color:cc,padding:'2px 8px',borderRadius:100,background:`${cc}14`,border:`1px solid ${cc}33`}}>{m.cat}{m.hot?' 🔥':''}</div>
                  <div style={{fontFamily:FM,fontSize:10,color:C.tm}}>⏱ {m.dl}h</div>
                </div>
                <div style={{fontSize:14,fontWeight:700,color:'#f0f4ff',lineHeight:1.35,marginBottom:8}}>{m.q}</div>
                <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:8}}>
                  <div style={{fontFamily:FM,fontSize:9,color:C.tm}}><span style={{color:C.te}}>{m.mjp}% top players</span> → {m.maj?'OUI':'NON'}</div>
                  <div style={{fontFamily:FM,fontSize:8,fontWeight:700,padding:'2px 7px',borderRadius:100,color:m.maj?C.cy:C.go,background:m.maj?'rgba(0,255,200,0.08)':'rgba(245,200,66,0.08)',border:`1px solid ${m.maj?'rgba(0,255,200,0.25)':'rgba(245,200,66,0.25)'}`}}>{m.maj?'CONSENSUS':'CONTRARIAN'}</div>
                </div>
                <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:8,marginBottom:8}}>
                  <div style={{padding:'9px 10px',background:`${C.cy}09`,border:`1px solid ${C.cy}28`,borderRadius:10}}>
                    <div style={{fontFamily:FM,fontSize:8,color:C.tm,marginBottom:3}}>OUI · {m.p}%</div>
                    <div style={{fontFamily:FO,fontSize:14,fontWeight:900,color:C.cy}}>+{gY} <span style={{fontSize:9}}>DRCH</span></div>
                  </div>
                  <div style={{padding:'9px 10px',background:`${C.re}09`,border:`1px solid ${C.re}28`,borderRadius:10}}>
                    <div style={{fontFamily:FM,fontSize:8,color:C.tm,marginBottom:3}}>NON · {100-m.p}%</div>
                    <div style={{fontFamily:FO,fontSize:14,fontWeight:900,color:C.re}}>+{gN} <span style={{fontSize:9}}>DRCH</span></div>
                  </div>
                </div>
                <div style={{height:4,background:'rgba(255,255,255,0.07)',borderRadius:2,overflow:'hidden',marginBottom:8}}>
                  <div style={{height:'100%',width:`${m.p}%`,background:`linear-gradient(90deg,${C.cy},${C.pu})`,borderRadius:2}}/>
                </div>
                <div style={{display:'flex',alignItems:'center',gap:9,padding:'7px 10px',marginBottom:8,background:'rgba(168,85,247,0.05)',border:'1px solid rgba(168,85,247,0.12)',borderRadius:8}}>
                  <div style={{width:26,height:26,borderRadius:7,background:'rgba(168,85,247,0.1)',display:'flex',alignItems:'center',justifyContent:'center',fontSize:12,flexShrink:0}}>🤖</div>
                  <div style={{flex:1}}>
                    <div style={{fontFamily:FM,fontSize:7,color:C.pu,letterSpacing:'0.09em',marginBottom:3}}>AI ORACLE SCORE</div>
                    <div style={{display:'flex',alignItems:'center',gap:7}}>
                      <div style={{flex:1,height:3,background:'rgba(255,255,255,0.07)',borderRadius:2,overflow:'hidden'}}>
                        <div style={{height:'100%',width:`${m.ai}%`,background:`linear-gradient(90deg,${aic},${C.cy})`,borderRadius:2}}/>
                      </div>
                      <div style={{fontFamily:FO,fontSize:12,fontWeight:900,color:aic}}>{m.ai}</div>
                    </div>
                  </div>
                </div>
                {!isVoted ? (
                  <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:8}}>
                    <button onClick={() => handleVote(m.id,true)} style={{padding:'11px 8px',borderRadius:10,cursor:'pointer',background:'rgba(0,255,200,0.08)',border:'1px solid rgba(0,255,200,0.28)',fontFamily:FM,fontSize:11,fontWeight:700,color:C.cy}}>▲ OUI · JE PRENDS</button>
                    <button onClick={() => handleVote(m.id,false)} style={{padding:'11px 8px',borderRadius:10,cursor:'pointer',background:'rgba(255,45,85,0.08)',border:'1px solid rgba(255,45,85,0.28)',fontFamily:FM,fontSize:11,fontWeight:700,color:C.re}}>▼ NON · JE CONTRE</button>
                  </div>
                ) : (
                  <div style={{padding:11,borderRadius:10,textAlign:'center',background:'rgba(168,85,247,0.06)',border:'1px solid rgba(168,85,247,0.2)',fontFamily:FM,fontSize:11,color:C.pu}}>✓ Prédiction soumise</div>
                )}
              </div>
            </div>
          )
        })}
      </div>

      <div style={{position:'fixed',bottom:0,left:0,right:0,zIndex:100,background:'rgba(3,4,10,0.97)',backdropFilter:'blur(24px)',borderTop:`1px solid ${C.bdr}`,display:'grid',gridTemplateColumns:'repeat(5,1fr)'}}>
        {[{href:'/home',ic:'⌂',lb:'HOME'},{href:'/play',ic:'◈',lb:'PLAY'},{href:'/saison',ic:'🏆',lb:'SAISON'},{href:'/actus',ic:'📡',lb:'ACTUS'},{href:'/profil',ic:'◉',lb:'PROFIL'}].map(tb => (
          <Link key={tb.href} href={tb.href} style={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',gap:2,padding:'8px 0',textDecoration:'none',opacity:tb.href==='/play'?1:0.3}}>
            <div style={{fontSize:14}}>{tb.ic}</div>
            <div style={{fontFamily:FM,fontSize:6,fontWeight:700,color:tb.href==='/play'?C.pu:C.tm}}>{tb.lb}</div>
          </Link>
        ))}
      </div>
    </div>
  )
}
