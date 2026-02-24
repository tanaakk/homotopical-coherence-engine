export type OntologyLevel = 'L0' | 'L1' | 'L2' | 'L3' | 'L4'

export type VerificationMode = 'ZFC' | 'HoTT'

export type VerificationStatus =
  | 'verified'
  | 'unverified'
  | 'undecidable'
  | 'error'
  | 'gate-closed'

export interface OntologyPosition {
  level: OntologyLevel
  domain?: string
  description: string
  source?: string
}

/** IHES/IAS アンカー数学者に基づく理論的出自（groundism-ontopologics 参照） */
export interface TheoreticalProvenance {
  mathematician: string
  venue: 'IHES' | 'IAS'
  model?: string
  source?: string
}

export interface TopologicalStatement {
  formal: string
  interpretation: string
  homotopyType?: string
  /** 理論的出自。groundism-ontopologics の IHES/IAS アンカー数学者に対応 */
  provenance?: TheoreticalProvenance[]
}

export interface VerificationResult {
  mode: VerificationMode
  status: VerificationStatus
  message?: string
  proofAssistant?: string
  /** gate-closed のとき、果実回収の確実性ゲートにより検証がスキップされた理由 */
  gateReason?: string
}

export interface CheckResult {
  statement: string
  ontologyPosition: OntologyPosition
  topologicalStatement: TopologicalStatement
  verification: VerificationResult
  timestamp: string
  /** 理論的出自の参照先（groundism-ontopologics） */
  theoreticalLineage?: string
}

/** 果実回収の確実性（HCE 使用制約） */
export type FruitRecoverability = 'certain' | 'uncertain'

/** ゲートモード: strict = 果実確実性が必須、permissive = 従来どおり */
export type FruitRecoverabilityGateMode = 'strict' | 'permissive'

export interface CheckOptions {
  statement: string
  formalized?: string
  /**
   * 果実回収の確実性。
   * gateMode が 'strict' のとき、'certain' でないと HCE 検証は実行されない。
   * 制約: 使った瞬間に確実に果実が回収できる場合のみ HCE を使用する。
   */
  fruitRecoverability?: FruitRecoverability
  /**
   * ゲートモード。'strict' のとき fruitRecoverability === 'certain' が必須。
   * デフォルト 'permissive' は後方互換のためゲートを無効化。
   */
  gateMode?: FruitRecoverabilityGateMode
  /**
   * L4 (law-of-scale-verificator) からの出力。上流通過の証明。
   * オプション。あると果実回収の確実性が高まる。
   */
  lsvOutput?: string | object
}
