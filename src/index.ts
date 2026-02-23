import type { CheckOptions, CheckResult } from './types.js'
import { locateOntology } from './ontology/locator.js'
import { mapToTopology } from './topology/mapper.js'
import { decideVerificationMode } from './verifier/decider.js'
import { verifyZFC } from './verifier/zfc.js'
import { verifyHomotopy } from './verifier/homotopy.js'

export async function check(options: CheckOptions): Promise<CheckResult> {
  const { statement } = options
  const ontologyPosition = locateOntology(statement)
  const topologicalStatement = mapToTopology(statement)
  const mode = decideVerificationMode(statement, topologicalStatement)

  const verification =
    mode === 'ZFC' ? await verifyZFC(statement) : await verifyHomotopy(statement)

  return {
    statement,
    ontologyPosition,
    topologicalStatement,
    verification,
    timestamp: new Date().toISOString(),
  }
}

export { locateOntology } from './ontology/locator.js'
export { mapToTopology } from './topology/mapper.js'
export { decideVerificationMode } from './verifier/decider.js'
export type { CheckOptions, CheckResult, OntologyPosition, TopologicalStatement, VerificationResult } from './types.js'
