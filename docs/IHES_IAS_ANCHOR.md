# IHES / IAS アンカー数学者と HCE の理論的出自

> **参照**: [groundism-ontopologics](https://github.com/tanaakk/groundism-ontopologics) — reference/ihes-anchor-mathematicians, reference/ias-anchor-mathematicians

HCE の検証ロジックは、**IHES (Institut des Hautes Études Scientifiques, Paris)** および **IAS (Institute for Advanced Study, Princeton)** で発展した先端数学・物理の成果に理論的根拠を置く。

---

## 施設の精神（advanced-math-physics-innovation）

| 施設 | 精神 |
|------|------|
| **IAS** | 純粋数学、理論物理学、論理学の先端研究 |
| **IHÉS** | 代数幾何、トポロジー、数理物理学 |

---

## HCE との対応

### IHES アンカー（groundism-ontopologics より）

| 数学者 | 主要モデル | HCE での対応 |
|--------|-----------|-------------|
| **René Thom** | Cobordism, Catastrophe theory | 相転移・特異点のモデル化 |
| **Alexander Grothendieck** | Scheme theory, Topos, Étale cohomology | スキーマ・有限型の基盤 |
| **Pierre Deligne** | Weil conjectures | 数論的検証の論理 |
| **Dennis Sullivan** | Rational homotopy, String topology | パス・ホモトピー型 |
| **Maxim Kontsevich** | Deformation quantization, Mirror symmetry | 双対・同値性 |
| **Laurent Lafforgue** | Langlands correspondence | 大統一の論理 |
| **Hugo Duminil-Copin** | Phase transitions (Ising model) | 相転移の sharpness |

### IAS アンカー（groundism-ontopologics より）

| 数学者 | 主要モデル | HCE での対応 |
|--------|-----------|-------------|
| **Vladimir Voevodsky** | HoTT, Univalence Axiom | Identity type, 型同値とパス同値 |
| **Jacob Lurie** | ∞-categories, Higher Topos Theory | 同型・関係・高次圏 |
| **Robert MacPherson** | Intersection homology, Perverse sheaves | 構造の不変量 |
| **Phillip Griffiths** | Hodge theory | 複素幾何的検証 |
| **Bhargav Bhatt** | Prismatic cohomology (with Lurie) | p進・完備化 |

---

## 出力における provenance

`check()` の結果において、`topologicalStatement.provenance` に IHES/IAS アンカー数学者への参照が含まれる。

```json
{
  "topologicalStatement": {
    "formal": "x : Fin(16) → Hex",
    "interpretation": "Finite type with 128 bits",
    "homotopyType": "1",
    "provenance": [
      {
        "mathematician": "Alexander Grothendieck",
        "venue": "IHES",
        "model": "Scheme theory (finite type)",
        "source": "groundism-ontopologics"
      }
    ]
  },
  "theoreticalLineage": "https://github.com/tanaakk/groundism-ontopologics"
}
```

---

## 参照リンク

- [groundism-ontopologics](https://github.com/tanaakk/groundism-ontopologics)
- [IHES Anchor Mathematicians](https://github.com/tanaakk/groundism-ontopologics/tree/main/reference/ihes-anchor-mathematicians)
- [IAS Anchor Mathematicians](https://github.com/tanaakk/groundism-ontopologics/tree/main/reference/ias-anchor-mathematicians)
