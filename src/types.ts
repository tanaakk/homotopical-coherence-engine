export type OntologyLevel = 'L0' | 'L1' | 'L2' | 'L3' | 'L4'

export type VerificationMode = 'ZFC' | 'HoTT'

export type VerificationStatus = 'verified' | 'unverified' | 'undecidable' | 'error'

export interface OntologyPosition {
  level: OntologyLevel
  domain?: string
  description: string
  source?: string
}

export interface TopologicalStatement {
  formal: string
  interpretation: string
  homotopyType?: string
}

export interface VerificationResult {
  mode: VerificationMode
  status: VerificationStatus
  message?: string
  proofAssistant?: string
}

export interface CheckResult {
  statement: string
  ontologyPosition: OntologyPosition
  topologicalStatement: TopologicalStatement
  verification: VerificationResult
  timestamp: string
}

export interface CheckOptions {
  statement: string
  formalized?: string
}
