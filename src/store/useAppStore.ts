import { create } from 'zustand'
import { ScoreOutput } from '@/lib/scoringEngine'

interface AppStore {
  lang: 'fr' | 'en'
  setLang: (l: 'fr' | 'en') => void
  
  drch: number
  xp: number
  streak: number
  seasonRank: number
  seasonScore: number
  totalPredictions: number
  winRate: number
  dcCount: number
  
  voted: Record<string, 'yes' | 'no'>
  
  poolSol: number
  poolDrch: number
  
  applyResult: (score: ScoreOutput, marketId: string, choice: boolean) => void
  reinforcePool: (solAmount: number, drchAmount: number) => void
  setDcCount: (n: number) => void
}

export const useAppStore = create<AppStore>((set) => ({
  lang: 'fr',
  setLang: (lang) => set({ lang }),
  
  drch: 1200,
  xp: 78,
  streak: 3,
  seasonRank: 247,
  seasonScore: 340,
  totalPredictions: 12,
  winRate: 0.74,
  dcCount: 1,
  
  voted: {},
  
  poolSol: 150,
  poolDrch: 5_000_000,
  
  applyResult: (score, marketId, choice) => set((state) => {
    const newStreak = score.isCorrect ? state.streak + 1 : 0
    const newWins = score.isCorrect ? Math.round(state.winRate * state.totalPredictions) + 1 : Math.round(state.winRate * state.totalPredictions)
    const newTotal = state.totalPredictions + 1
    
    return {
      drch: Math.max(0, state.drch + score.reward),
      xp: Math.max(0, state.xp + score.xp),
      streak: newStreak,
      seasonRank: score.isCorrect ? Math.max(1, state.seasonRank - 2) : state.seasonRank,
      seasonScore: state.seasonScore + Math.max(0, score.seasonScore),
      totalPredictions: newTotal,
      winRate: newWins / newTotal,
      dcCount: Math.min(3, state.dcCount + 1),
      voted: { ...state.voted, [marketId]: choice ? 'yes' : 'no' }
    }
  }),
  
  reinforcePool: (solAmount, drchAmount) => set((state) => ({
    poolSol: state.poolSol + solAmount,
    poolDrch: state.poolDrch + drchAmount
  })),
  
  setDcCount: (n) => set({ dcCount: n })
}))
