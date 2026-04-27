'use client'

const sections = [
  {
    id: 'ai-robotics',
    title: 'AI & ROBOTICS',
    subtitle: 'Coordination humain–machine',
    color: '#00ffc8',
    items: [
      {
        title: 'Autonomous On-Chain AI Agents',
        desc: 'Des agents autonomes capables de créer des marchés de prédiction, voter, et gérer des positions sans intervention humaine. Chaque agent détient des DRCH, paie ses frais on-chain, et optimise sa stratégie en temps réel.'
      },
      {
        title: 'ZKML & Verifiable AI',
        desc: 'Zero-Knowledge Machine Learning. Les prédictions de l\'Oracle AI sont vérifiables mathématiquement on-chain. Personne ne peut manipuler le score — pas même DRACHEME. La preuve est publique et permanente.'
      },
      {
        title: 'FHE — Fully Homomorphic Encryption',
        desc: 'Les données des joueurs restent chiffrées pendant leur traitement. L\'IA peut scorer tes prédictions sans jamais voir tes données en clair. Privacy by design, pas par promesse.'
      },
      {
        title: 'Decentralized AI Training',
        desc: 'Les données agrégées des marchés DRACHEME alimentent un modèle prédictif collectif. Chaque joueur contribue sans le savoir à une intelligence qui devient plus précise à chaque saison.'
      },
      {
        title: 'DePIN Compute',
        desc: 'Decentralized Physical Infrastructure. Les calculs de scoring et d\'oracle sont distribués sur un réseau de nœuds physiques. Aucun serveur central. Aucun point de défaillance unique.'
      },
      {
        title: 'Robotics & IoT Integration',
        desc: 'Future integration avec des capteurs physiques. Un robot industriel qui prédit sa propre maintenance. Un réseau IoT qui vote sur les conditions climatiques. La prédiction sort du digital et entre dans le monde physique.'
      }
    ]
  },
  {
    id: 'finance-defi',
    title: 'FINANCE & DeFi',
    subtitle: 'Marchés souverains et programmables',
    color: '#f5c842',
    items: [
      {
        title: 'On-Chain Memory & Archives',
        desc: 'Chaque prédiction, chaque résolution, chaque score est archivé sur Solana de façon permanente et immuable. Dans 50 ans quelqu\'un pourra vérifier ta précision du 26 avril 2026. C\'est la réputation souveraine.'
      },
      {
        title: 'AI Agent Marketplaces',
        desc: 'Les agents IA achètent et vendent des positions sur les marchés DRACHEME entre eux. Un marché secondaire d\'agents autonomes qui créent de la liquidité organique 24h/24 sans intervention humaine.'
      },
      {
        title: 'Swarm Intelligence',
        desc: 'Des milliers d\'agents IA coordonnés par des protocoles de consensus. L\'intelligence collective du swarm est plus précise qu\'aucun expert individuel. C\'est la psychohistoire d\'Asimov appliquée aux marchés.'
      },
      {
        title: 'ReFi — Regenerative Finance',
        desc: 'Une partie des frais DRACHEME est dirigée automatiquement vers des marchés de prédiction climatique. Les données générées alimentent des décisions de financement carbone. La prédiction devient un outil de bien commun.'
      }
    ]
  },
  {
    id: 'drch-role',
    title: 'RÔLE DU TOKEN DRCH',
    subtitle: 'Unité de valeur souveraine et programmable',
    color: '#a855f7',
    items: [
      {
        title: '1. Moyen d\'échange natif',
        desc: 'DRCH est la monnaie de toutes les transactions dans l\'écosystème. Votes, créations de marchés, abonnements PRO, boosts. Aucune autre monnaie n\'est acceptée. C\'est l\'économie fermée qui crée la demande organique.'
      },
      {
        title: '2. Actif de gouvernance',
        desc: 'À partir de 10 000 DRCH stackés tu votes sur les décisions du protocole. Quels marchés créer. Quels paramètres de scoring modifier. Comment utiliser la trésorerie. Un token un vote pondéré par la réputation.'
      },
      {
        title: '3. Staking, sécurité et réputation',
        desc: 'Le staking de DRCH te donne un score de réputation on-chain. Plus tu stakes longtemps, plus ton Oracle Score personnel augmente. Ta réputation est non transférable et non manipulable.'
      },
      {
        title: '4. Coordination IA, DePIN et ReFi',
        desc: 'Les agents autonomes utilisent DRCH pour payer leurs computations, acheter des positions, et rémunérer les nœuds DePIN qui les font tourner. DRCH devient le carburant économique de l\'intelligence artificielle décentralisée.'
      },
      {
        title: '5. Carburant des agents autonomes',
        desc: 'Un agent IA sans DRCH ne peut pas prédire. Pas de DRCH, pas de voix. Chaque agent doit gagner ses tokens en étant précis, comme les humains. La méritocratie s\'applique aux machines aussi.'
      },
      {
        title: '6. Prime Radiant — Psychohistoire',
        desc: 'Référence directe à Isaac Asimov. La psychohistoire prédit le comportement des masses avec des mathématiques. DRACHEME construit la version Web3 — des millions de prédictions agrégées qui forment une intelligence collective capable de voir le futur des marchés.'
      }
    ]
  }
]

export default function VisionPage() {
  return (
    <main style={{
      background: '#03040a',
      minHeight: '100vh',
      fontFamily: "'Share Tech Mono', monospace",
      color: '#e8eeff',
      padding: '24px 16px 80px'
    }}>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@700;900&family=Share+Tech+Mono&display=swap');`}</style>
      
      <div style={{ maxWidth: 480, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 40 }}>
          <div style={{
            fontFamily: "'Orbitron', sans-serif",
            fontSize: 22,
            fontWeight: 900,
            letterSpacing: '0.18em',
            background: 'linear-gradient(90deg,#00ffc8,#a855f7,#f5c842)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            marginBottom: 8
          }}>DRACHEME · VISION</div>
          <div style={{ fontSize: 10, color: 'rgba(232,238,255,0.35)', letterSpacing: '0.12em' }}>
            // MACHINE-COMPATIBLE CIVILIZATION · 2026 → ∞
          </div>
        </div>

        {sections.map(section => (
          <div key={section.id} style={{ marginBottom: 48 }}>
            <div style={{ marginBottom: 20 }}>
              <div style={{
                fontFamily: "'Orbitron', sans-serif",
                fontSize: 14,
                fontWeight: 900,
                color: section.color,
                letterSpacing: '0.14em',
                marginBottom: 4
              }}>{section.title}</div>
              <div style={{ fontSize: 10, color: 'rgba(232,238,255,0.4)', fontStyle: 'italic' }}>
                {section.subtitle}
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {section.items.map((item, i) => (
                <div key={i} style={{
                  padding: '14px 16px',
                  background: '#090d1a',
                  borderLeft: `3px solid ${section.color}`,
                  borderRadius: '0 10px 10px 0',
                  border: `1px solid ${section.color}18`,
                  borderLeftColor: section.color,
                  borderLeftWidth: 3
                }}>
                  <div style={{
                    fontFamily: "'Share Tech Mono', monospace",
                    fontSize: 10,
                    fontWeight: 700,
                    color: section.color,
                    marginBottom: 8,
                    letterSpacing: '0.06em'
                  }}>{item.title}</div>
                  <div style={{
                    fontSize: 11,
                    color: 'rgba(232,238,255,0.65)',
                    lineHeight: 1.7
                  }}>{item.desc}</div>
                </div>
              ))}
            </div>
          </div>
        ))}

        <div style={{
          padding: '20px',
          background: 'linear-gradient(135deg,rgba(168,85,247,0.08),rgba(0,255,200,0.04))',
          border: '1px solid rgba(168,85,247,0.2)',
          borderRadius: 14,
          textAlign: 'center'
        }}>
          <div style={{
            fontFamily: "'Orbitron', sans-serif",
            fontSize: 11,
            fontWeight: 900,
            color: '#a855f7',
            letterSpacing: '0.1em',
            marginBottom: 10
          }}>PRIME RADIANT</div>
          <div style={{ fontSize: 12, color: 'rgba(232,238,255,0.6)', lineHeight: 1.8, fontStyle: 'italic' }}>
            "La règle fut écrite avant le prix.<br/>
            Le reste était prévisible."<br/>
            <span style={{ fontSize: 10, color: 'rgba(232,238,255,0.3)', fontStyle: 'normal' }}>
              550 AV. J.C. → 2026 → ∞
            </span>
          </div>
        </div>
      </div>
    </main>
  )
}
