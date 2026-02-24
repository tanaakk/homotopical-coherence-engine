# HCE Architecture

For the full vision and capabilities, see [WHITEPAPER.md](WHITEPAPER.md).

## Pipeline

```
Statement Input
      │
      ├──► Fruit Recoverability Gate (gateMode strict 時)
      │         │ fruitRecoverability !== 'certain' → gate-closed, 終了
      │         └──► 通過
      │
      ├──► Ontology Locator ──► ontologyPosition (L0–L4)
      │
      ├──► Topology Mapper ───► topologicalStatement (formal, interpretation)
      │
      └──► ZFC vs HoTT Decider
                │
                ├── ZFC ──► ZFC Verifier (Lean, etc.)
                └── HoTT ─► Homotopy Verifier (Agda, Cubical Agda)
```

## Modules

| Module | Role |
|--------|------|
| `ontology/locator` | Maps statement to universal-guideline HIERARCHY (L0–L4) |
| `topology/mapper` | Maps to HoTT/type-theoretic formal statements |
| `verifier/decider` | Chooses ZFC or HoTT based on statement content |
| `verifier/zfc` | ZFC verification (proof assistant subprocess) |
| `verifier/homotopy` | HoTT verification (proof assistant subprocess) |

## Ontology Hierarchy (universal-guideline)

- **L0**: Foundation — ID design, time, currency, accounting
- **L1**: Cross-cutting — API, security, IAM, UI
- **L2**: Domain-agnostic — Color, SKU, digital twin
- **L3**: Domain-specific — Vehicle, MES, manufacturing
- **L4**: Project — Coding standards

## Verification Modes

- **ZFC**: Set-theoretic statements; verified via Lean/Isabelle
- **HoTT**: Type-theoretic/homotopical statements; verified via Agda/Cubical Agda
