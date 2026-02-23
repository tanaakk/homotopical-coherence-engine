import type { VerificationResult } from '../types.js'

export async function verifyHomotopy(
  _statement: string
): Promise<VerificationResult> {
  return {
    mode: 'HoTT',
    status: 'unverified',
    message:
      'Homotopy verification requires proof assistant (e.g. Agda, Cubical Agda). Not configured.',
    proofAssistant: 'Agda',
  }
}
