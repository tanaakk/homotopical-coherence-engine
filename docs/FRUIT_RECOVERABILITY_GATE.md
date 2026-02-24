# 果実回収の確実性ゲート (Fruit Recoverability Gate)

> **制約**: HCE は**使った瞬間に確実に果実が回収できる**場合のみ使用する。限定的火力として運用する。

---

## 背景：相転移・ハイパーグロース・オペレーティングレバレッジ

[groundism-ontopologics](https://github.com/tanaakk/groundism-ontopologics) および [universal-guideline](https://github.com/tanaakk/universal-guideline) の更新によれば：

- **系の成長**は相転移によって実現する。同一性を維持することなく転移する系こそが**ハイパーグロース**と**オペレーティングレバレッジ**（小さな労力でより大きな資源を吸収する特異点）となる。
- **Engine の出力**は常に節約されるべきである。
- [law-of-scale-verificator](https://github.com/tanaakk/law-of-scale-verificator) は、相転移を繰り返して全く異質の存在になりうる系（生物）をスクリーニングする。
- **HCE** は、発見した系が社会において相対的に深いルート権限を持っているかを最終証明する**限定的火力**である。

---

## 制約の哲学

| 原理 | 内容 |
|------|------|
| **最小作用原理** | 検証に要する計算エントロピーを最小化する（mathematical-resource-parsimony） |
| **限定的火力** | HCE は L1–L4 を通過した系に対する最終門番であり、無駄な発火を避ける |
| **果実の確実性** | 使用した瞬間に確実に果実が回収できるという制約を満たす場合のみ発火する |

---

## ゲートの仕様

### オプション

| オプション | 型 | デフォルト | 説明 |
|-----------|-----|-----------|------|
| `gateMode` | `'strict' \| 'permissive'` | `'permissive'` | `strict` のとき果実確実性ゲートが有効 |
| `fruitRecoverability` | `'certain' \| 'uncertain'` | — | `strict` の場合、`'certain'` が必須 |
| `lsvOutput` | `string \| object` | — | L4 からの出力（上流通過の証明）。オプション |

### ゲート条件

- **gateMode === 'strict'** かつ **fruitRecoverability !== 'certain'** のとき、検証は実行されず `gate-closed` を返す。
- `gateMode === 'permissive'` のときは従来どおり動作（後方互換）。

### 使用例

```typescript
import { check } from 'homotopical-coherence-engine'

// 厳格モード：果実が確実に回収できる場合のみ検証
const result = await check({
  statement: 'PK is UUID v4',
  gateMode: 'strict',
  fruitRecoverability: 'certain',
  lsvOutput: { /* L4 からの出力 */ },
})
```

```typescript
// ゲート閉鎖：fruitRecoverability が未指定の場合
const result = await check({
  statement: 'PK is UUID v4',
  gateMode: 'strict',
  // fruitRecoverability なし → gate-closed
})
// result.verification.status === 'gate-closed'
```

---

## 参照

- [5 層メタフレームワーク](META_FRAMEWORK.md) — HCE の位置づけ
- [mathematical-resource-parsimony](.cursor/rules/mathematical-resource-parsimony.mdc) — 最小作用原理
- [universal-guideline](https://github.com/tanaakk/universal-guideline) — 階層定義
- [law-of-scale-verificator](https://github.com/tanaakk/law-of-scale-verificator) — L4 スクリーニング
