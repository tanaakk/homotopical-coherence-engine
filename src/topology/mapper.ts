import type { TopologicalStatement } from '../types.js'
import { TOPOLOGY_PATTERNS } from './statements.js'

export function mapToTopology(statement: string): TopologicalStatement {
  const normalized = statement.trim()
  const matches: Array<(typeof TOPOLOGY_PATTERNS)[number]> = []

  for (const entry of TOPOLOGY_PATTERNS) {
    if (entry.pattern.test(normalized)) {
      matches.push(entry)
    }
  }

  if (matches.length > 0) {
    const primary = matches[0]
    const formal = matches.map((m) => m.formal).join('; ')
    const interpretation = matches.map((m) => m.interpretation).join('; ')
    const homotopyType = matches
      .map((m) => m.homotopyType)
      .filter(Boolean)
      .join(', ')
    return {
      formal,
      interpretation,
      homotopyType: homotopyType || undefined,
    }
  }

  return {
    formal: '⊤',
    interpretation: 'Unit type (trivial statement, no topological structure detected)',
  }
}
