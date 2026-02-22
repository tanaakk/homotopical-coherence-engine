export const TOPOLOGY_PATTERNS: Array<{
  pattern: RegExp
  formal: string
  interpretation: string
  homotopyType?: string
}> = [
  {
    pattern: /\b(equality|identity|等価|同一)\b/i,
    formal: 'a ≡ b : A',
    interpretation: 'Identity type (path space)',
    homotopyType: 'Id_A(a,b)',
  },
  {
    pattern: /\b(isomorphism|同型)\b/i,
    formal: 'A ≃ B',
    interpretation: 'Equivalence of types',
    homotopyType: 'Equiv(A,B)',
  },
  {
    pattern: /\b(fiber|ファイバー)\b/i,
    formal: 'fib_f(b) := Σ(a:A). f(a) = b',
    interpretation: 'Fiber of a map',
    homotopyType: 'Σ',
  },
  {
    pattern: /\b(forall|任意|すべて)\b/i,
    formal: 'Π(x:A). B(x)',
    interpretation: 'Dependent product type',
    homotopyType: 'Π',
  },
  {
    pattern: /\b(exists|存在)\b/i,
    formal: 'Σ(x:A). B(x)',
    interpretation: 'Dependent sum type',
    homotopyType: 'Σ',
  },
  {
    pattern: /\b(set|集合)\b/i,
    formal: 'isSet(A) := Π(a,b:A). isProp(a=b)',
    interpretation: 'Set (0-truncated type)',
    homotopyType: 'hSet',
  },
  {
    pattern: /\b(proposition|命題)\b/i,
    formal: 'isProp(A) := Π(a,b:A). a = b',
    interpretation: 'Proposition (mere proposition)',
    homotopyType: 'hProp',
  },
  {
    pattern: /\b(univalence|一価性)\b/i,
    formal: '(A ≃ B) ≃ (A = B)',
    interpretation: 'Univalence axiom',
    homotopyType: 'ua',
  },
  {
    pattern: /\b(UUID|uuid)\b/i,
    formal: 'x : Fin(16) → Hex',
    interpretation: 'Finite type with 128 bits',
    homotopyType: '1',
  },
  {
    pattern: /\b(relation|関係)\b/i,
    formal: 'R : A → B → Type',
    interpretation: 'Type family as relation',
    homotopyType: 'Type',
  },
]
