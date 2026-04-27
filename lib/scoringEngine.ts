export interface ScoreInput {
  prob: number
  choice: number
  result: number
  stake: number
  timeElapsed: number
  totalTime: number
  difficulty: number
  streak: number
}

export interface ScoreOutput {
  xp: number
  reward: number
  seasonScore: number
  edge: number
  timeFactor: number
  raw: number
  isCorrect: boolean
}

export function computeScore(input: ScoreInput): ScoreOutput {
  const { prob, choice, result, stake, timeElapsed, totalTime, difficulty, streak } = input

  const edge = Math.abs(choice === 1 ? 1 - prob : prob)
  const timeFactor = Math.max(0, 1 - (timeElapsed / totalTime))
  const raw = edge * (1 + timeFactor) * difficulty
  const isCorrect = choice === result

  let xp = isCorrect ? raw * 100 : -raw * 60
  const reward = isCorrect
    ? Math.sqrt(stake) * raw * 10
    : -Math.sqrt(stake) * raw * 5

  if (streak >= 5) xp *= 2.0
  else if (streak >= 3) xp *= 1.5

  const seasonScore = xp * 1.2

  return {
    xp: Math.round(xp),
    reward: Math.round(reward),
    seasonScore: Math.round(seasonScore),
    edge: Math.round(edge * 100) / 100,
    timeFactor: Math.round(timeFactor * 100) / 100,
    raw: Math.round(raw * 100) / 100,
    isCorrect
  }
}

export function antiWhaleCap(amount: number, poolSol: number, maxPct: number): number {
  return Math.min(amount, poolSol * maxPct)
}

export function calcBuy(solIn: number, poolSol: number, poolDrch: number, feePct: number) {
  const fee = solIn * feePct
  const solAfterFee = solIn - fee
  const k = poolSol * poolDrch
  const newSol = poolSol + solAfterFee
  const newDrch = k / newSol
  const drchOut = poolDrch - newDrch
  const newPrice = newSol / newDrch
  const initPrice = 150 / 5_000_000
  const impact = ((newPrice - initPrice) / initPrice) * 100
  return { drchOut, newSol, newDrch, newPrice, impact, fee }
}

export function calcSell(drchIn: number, poolSol: number, poolDrch: number, feePct: number) {
  const k = poolSol * poolDrch
  const newDrch = poolDrch + drchIn
  const newSol = k / newDrch
  const solOut = poolSol - newSol
  const fee = solOut * feePct
  const solAfterFee = solOut - fee
  const newPrice = newSol / newDrch
  const initPrice = 150 / 5_000_000
  const impact = ((initPrice - newPrice) / initPrice) * 100
  return { solOut: solAfterFee, newSol, newDrch, newPrice, impact, fee }
}

export function calcWhaleInjection(solBought: number, currentPoolSol: number) {
  const injectionSol = solBought * 0.25
  const injectionDrch = Math.round(injectionSol * 5_000_000 / 150)
  return { injectionSol, injectionDrch }
}

export function getInjectionThreshold(priceMultiple: number): number {
  if (priceMultiple < 5) return 0
  if (priceMultiple < 10) return 0
  if (priceMultiple < 15) return 0.10
  if (priceMultiple < 20) return 0.20
  if (priceMultiple < 25) return 0.25
  return 0.30
}
