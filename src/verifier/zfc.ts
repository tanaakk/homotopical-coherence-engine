import type { VerificationResult } from '../types.js'

export async function verifyZFC(_statement: string): Promise<VerificationResult> {
  return {
    mode: 'ZFC',
    status: 'unverified',
    message: 'ZFC verification requires proof assistant (e.g. Lean, Isabelle). Not configured.',
    proofAssistant: 'Lean',
  }
}
