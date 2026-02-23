import type { OntologyPosition } from '../types.js'
import { UNIVERSAL_HIERARCHY } from './hierarchy.js'

export function locateOntology(statement: string): OntologyPosition {
  const normalized = statement.toLowerCase().trim()
  let bestMatch: (typeof UNIVERSAL_HIERARCHY)[number] | null = null
  let maxScore = 0

  for (const node of UNIVERSAL_HIERARCHY) {
    let score = 0
    for (const kw of node.keywords) {
      if (normalized.includes(kw.toLowerCase())) {
        score += 1
      }
    }
    if (score > maxScore) {
      maxScore = score
      bestMatch = node
    }
  }

  if (bestMatch) {
    return {
      level: bestMatch.level,
      domain: bestMatch.id !== 'universal-schema' ? bestMatch.id : undefined,
      description: bestMatch.name,
      source: 'universal-guideline/HIERARCHY.md',
    }
  }

  return {
    level: 'L0',
    description: '基盤 (Foundation) - 未分類、デフォルトで L0 に配置',
    source: 'universal-guideline/HIERARCHY.md',
  }
}
