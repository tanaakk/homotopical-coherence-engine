import type { CheckOptions, CheckResult } from './types.js'
import { locateOntology } from './ontology/locator.js'
import { mapToTopology } from './topology/mapper.js'
import { decideVerificationMode } from './verifier/decider.js'
import { verifyZFC } from './verifier/zfc.js'
import { verifyHomotopy } from './verifier/homotopy.js'

/**
 * 果実回収の確実性ゲート。
 * gateMode === 'strict' かつ fruitRecoverability !== 'certain' のとき true（ゲート閉鎖）。
 */
function isFruitRecoverabilityGateClosed(options: CheckOptions): boolean {
  if (options.gateMode !== 'strict') return false
  return options.fruitRecoverability !== 'certain'
}

export async function check(options: CheckOptions): Promise<CheckResult> {
  const { statement } = options

  const topologicalStatement = mapToTopology(statement)

  if (isFruitRecoverabilityGateClosed(options)) {
    return {
      statement,
      ontologyPosition: locateOntology(statement),
      topologicalStatement,
      theoreticalLineage: 'https://github.com/tanaakk/groundism-ontopologics',
      verification: {
        mode: 'ZFC',
        status: 'gate-closed',
        message:
          'HCE is limited firepower. Use only when fruit recoverability is certain upon invocation.',
        gateReason:
          'fruitRecoverability !== "certain" required when gateMode is "strict". ' +
          'Set fruitRecoverability: "certain" to invoke verification.',
      },
      timestamp: new Date().toISOString(),
    }
  }

  const ontologyPosition = locateOntology(statement)
  const mode = decideVerificationMode(statement, topologicalStatement)
  const verification =
    mode === 'ZFC' ? await verifyZFC(statement) : await verifyHomotopy(statement)

  return {
    statement,
    ontologyPosition,
    topologicalStatement,
    verification,
    timestamp: new Date().toISOString(),
    theoreticalLineage: 'https://github.com/tanaakk/groundism-ontopologics',
  }
}

export { locateOntology } from './ontology/locator.js'
export { mapToTopology } from './topology/mapper.js'
export { decideVerificationMode } from './verifier/decider.js'
export type {
  CheckOptions,
  CheckResult,
  OntologyPosition,
  TheoreticalProvenance,
  TopologicalStatement,
  VerificationResult,
} from './types.js'
