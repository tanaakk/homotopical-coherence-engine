import type { VerificationMode } from '../types.js'
import type { TopologicalStatement } from '../types.js'

const ZFC_INDICATORS = [
  /\bset\b/i,
  /\b∈\b/,
  /\b⊆\b/,
  /\b∪\b|\b∩\b/,
  /\bpower\s*set\b/i,
  /\bordinal\b/i,
  /\bcardinal\b/i,
  /\bchoice\b/i,
  /\bZFC\b/i,
  /\b集合\b/,
  /\b包含\b/,
  /\b選択公理\b/,
]

const HOTT_INDICATORS = [
  /\bidentity\s*type\b/i,
  /\bpath\b/i,
  /\bhomotopy\b/i,
  /\bunivalence\b/i,
  /\bΠ\b|\bΣ\b/,
  /\bEquiv\b/i,
  /\bId_A\b/i,
  /\b型\b.*\b同一\b/i,
  /\b一価\b/i,
  /\bファイバー\b/i,
]

export function decideVerificationMode(
  statement: string,
  topological: TopologicalStatement
): VerificationMode {
  const combined = `${statement} ${topological.formal} ${topological.interpretation || ''} ${topological.homotopyType || ''}`

  let zfcScore = 0
  for (const re of ZFC_INDICATORS) {
    if (re.test(combined)) zfcScore += 1
  }

  let hottScore = 0
  for (const re of HOTT_INDICATORS) {
    if (re.test(combined)) hottScore += 1
  }

  if (hottScore > zfcScore) return 'HoTT'
  return 'ZFC'
}
