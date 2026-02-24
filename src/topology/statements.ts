import type { TheoreticalProvenance } from '../types.js'

export const TOPOLOGY_PATTERNS: Array<{
  pattern: RegExp
  formal: string
  interpretation: string
  homotopyType?: string
  provenance?: TheoreticalProvenance[]
}> = [
  {
    pattern: /\b(equality|identity|等価|同一)\b/i,
    formal: 'a ≡ b : A',
    interpretation: 'Identity type (path space)',
    homotopyType: 'Id_A(a,b)',
    provenance: [
      { mathematician: 'Vladimir Voevodsky', venue: 'IAS', model: 'HoTT Identity Type', source: 'groundism-ontopologics' },
      { mathematician: 'Dennis Sullivan', venue: 'IHES', model: 'Rational homotopy theory', source: 'groundism-ontopologics' },
    ],
  },
  {
    pattern: /\b(isomorphism|同型)\b/i,
    formal: 'A ≃ B',
    interpretation: 'Equivalence of types',
    homotopyType: 'Equiv(A,B)',
    provenance: [
      { mathematician: 'Jacob Lurie', venue: 'IAS', model: '∞-categories, Higher Topos Theory', source: 'groundism-ontopologics' },
    ],
  },
  {
    pattern: /\b(fiber|ファイバー)\b/i,
    formal: 'fib_f(b) := Σ(a:A). f(a) = b',
    interpretation: 'Fiber of a map',
    homotopyType: 'Σ',
    provenance: [
      { mathematician: 'Alexander Grothendieck', venue: 'IHES', model: 'Étale cohomology, Topos', source: 'groundism-ontopologics' },
    ],
  },
  {
    pattern: /\b(forall|任意|すべて)\b/i,
    formal: 'Π(x:A). B(x)',
    interpretation: 'Dependent product type',
    homotopyType: 'Π',
    provenance: [
      { mathematician: 'Vladimir Voevodsky', venue: 'IAS', model: 'HoTT dependent types', source: 'groundism-ontopologics' },
    ],
  },
  {
    pattern: /\b(exists|存在)\b/i,
    formal: 'Σ(x:A). B(x)',
    interpretation: 'Dependent sum type',
    homotopyType: 'Σ',
    provenance: [
      { mathematician: 'Jacob Lurie', venue: 'IAS', model: '∞-categories', source: 'groundism-ontopologics' },
    ],
  },
  {
    pattern: /\b(set|集合)\b/i,
    formal: 'isSet(A) := Π(a,b:A). isProp(a=b)',
    interpretation: 'Set (0-truncated type)',
    homotopyType: 'hSet',
    provenance: [
      { mathematician: 'Vladimir Voevodsky', venue: 'IAS', model: 'HoTT h-levels', source: 'groundism-ontopologics' },
    ],
  },
  {
    pattern: /\b(proposition|命題)\b/i,
    formal: 'isProp(A) := Π(a,b:A). a = b',
    interpretation: 'Proposition (mere proposition)',
    homotopyType: 'hProp',
    provenance: [
      { mathematician: 'Vladimir Voevodsky', venue: 'IAS', model: 'HoTT mere propositions', source: 'groundism-ontopologics' },
    ],
  },
  {
    pattern: /\b(univalence|一価性)\b/i,
    formal: '(A ≃ B) ≃ (A = B)',
    interpretation: 'Univalence axiom',
    homotopyType: 'ua',
    provenance: [
      { mathematician: 'Vladimir Voevodsky', venue: 'IAS', model: 'Univalence Axiom (HoTT)', source: 'groundism-ontopologics' },
    ],
  },
  {
    pattern: /\b(UUID|uuid)\b/i,
    formal: 'x : Fin(16) → Hex',
    interpretation: 'Finite type with 128 bits',
    homotopyType: '1',
    provenance: [
      { mathematician: 'Alexander Grothendieck', venue: 'IHES', model: 'Scheme theory (finite type)', source: 'groundism-ontopologics' },
    ],
  },
  {
    pattern: /\b(relation|関係)\b/i,
    formal: 'R : A → B → Type',
    interpretation: 'Type family as relation',
    homotopyType: 'Type',
    provenance: [
      { mathematician: 'Jacob Lurie', venue: 'IAS', model: '∞-categories', source: 'groundism-ontopologics' },
    ],
  },
  {
    pattern: /\b(phase\s*transition|相転移)\b/i,
    formal: 'C : Continuous → Discontinuous',
    interpretation: 'Phase transition; catastrophe',
    homotopyType: 'Thom',
    provenance: [
      { mathematician: 'René Thom', venue: 'IHES', model: 'Catastrophe theory', source: 'groundism-ontopologics' },
      { mathematician: 'Hugo Duminil-Copin', venue: 'IHES', model: 'Ising model phase transitions', source: 'groundism-ontopologics' },
    ],
  },
  {
    pattern: /\b(path|パス)\b/i,
    formal: 'p : a =_A b',
    interpretation: 'Path in identity type',
    homotopyType: 'Id_A',
    provenance: [
      { mathematician: 'Dennis Sullivan', venue: 'IHES', model: 'Rational homotopy, String topology', source: 'groundism-ontopologics' },
      { mathematician: 'Vladimir Voevodsky', venue: 'IAS', model: 'Identity type as path', source: 'groundism-ontopologics' },
    ],
  },
]
