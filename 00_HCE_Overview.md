# 00_HCE_Overview — Homotopical Coherence Engine 概要

The **Homotopical Coherence Engine (HCE)** は、Universal Guideline と Law of Scale の整合性を検証する高次論理実行フレームワーク。Homotopy Type Theory (HoTT) と Higher Category Theory に基づく。

---

## コア機能

1. **Logical Stratification (ZFC & Beyond)**: 命題を検証に必要な公理系の深さで分類
2. **Homotopical Path Invariance**: デジタルツインにおける経路の等価性を検証
3. **Physical-Mathematical Synthesis**: 抽象論理と物理現実の橋渡し

---

## 技術アーキテクチャ

- **Logic Engine**: Lean 4, Coq による形式的検証
- **Axiomatic Basis**: HoTT の Identity Type
- **Data Integration**: TANAAKK Universal Guideline (JSON-LD/YAML schema)

---

## 使い方

```bash
npm install
npm run check
node dist/cli.js "PK is UUID v4"
```

---

## 詳細

詳細は [README.md](README.md) および [docs/](docs/) を参照。
