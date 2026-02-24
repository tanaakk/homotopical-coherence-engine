import type { TheoreticalProvenance, TopologicalStatement } from '../types.js'
import { TOPOLOGY_PATTERNS } from './statements.js'

function dedupeProvenance(provenances: TheoreticalProvenance[]): TheoreticalProvenance[] {
  const seen = new Set<string>()
  return provenances.filter((p) => {
    const key = `${p.mathematician}:${p.venue}:${p.model ?? ''}`
    if (seen.has(key)) return false
    seen.add(key)
    return true
  })
}

export function mapToTopology(statement: string): TopologicalStatement {
  const normalized = statement.trim()
  const matches: Array<(typeof TOPOLOGY_PATTERNS)[number]> = []

  for (const entry of TOPOLOGY_PATTERNS) {
    if (entry.pattern.test(normalized)) {
      matches.push(entry)
    }
  }

  if (matches.length > 0) {
    const formal = matches.map((m) => m.formal).join('; ')
    const interpretation = matches.map((m) => m.interpretation).join('; ')
    const homotopyType = matches
      .map((m) => m.homotopyType)
      .filter(Boolean)
      .join(', ')
    const provenance = dedupeProvenance(
      matches.flatMap((m) => m.provenance ?? [])
    )
    return {
      formal,
      interpretation,
      homotopyType: homotopyType || undefined,
      provenance: provenance.length > 0 ? provenance : undefined,
    }
  }

  return {
    formal: '⊤',
    interpretation: 'Unit type (trivial statement, no topological structure detected)',
  }
}
