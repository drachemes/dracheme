import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

export const metadata: Metadata = {
  title: 'DRACHEME — Web3 Prediction Championship',
  description: 'La plateforme de prédiction compétitive. Prédi les marchés, gagne des DRCH, domine le classement mondial.',
  keywords: 'prediction, web3, solana, DRCH, crypto, championship',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&family=Share+Tech+Mono&family=Rajdhani:wght@400;600;700&display=swap" rel="stylesheet" />
      </head>
      <body style={{
        background: '#03040a',
        color: '#e8eeff',
        fontFamily: "'Rajdhani', sans-serif",
        margin: 0,
        padding: 0,
        minHeight: '100vh',
        overscrollBehavior: 'none',
      }}>
        {children}
      </body>
    </html>
  )
}
