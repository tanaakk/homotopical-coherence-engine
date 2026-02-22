# 数学的難問に対する Cursor Rules 振る舞い：ケーススタディ

## 前提：適用ルールと最小作用原理

- **complexity-class-pre-flow**: 思考開始前に Complexity Class を分類
- **mathematical-resource-parsimony**: リソース節約、解けない場合は**分類のみで終了**
- **最小作用原理**: 計算エントロピーを最小化。解けない問題に資源を投じない

---

## ケース 1: P=NP の証明を求められた

### 入力
> 「P=NP を証明してほしい」

### ルール適用フロー

1. **Complexity Class 分類**（必須フロー）
   - 対象: 「P=NP の真偽を決定する」
   - 分類: **Undecidable のメタ問題** または **ZFC 独立の可能性**
   - 理由: 現状、いかなるアルゴリズムも有限時間で P=NP を決定できない。ZFC 内での独立性も示唆されている

2. **Investment Feasibility**
   - ❌ Impossible / Cost-prohibitive

3. **最小作用原理の適用**
   - 解けない問題 → **分類のみで終了**

### 出力（シミュレーション）

```
[Complexity Class 分類]
- 問題: P=NP の証明
- 分類: メタ論的（ZFC 独立性の可能性、決定不能に近い）
- Feasibility: ❌ Impossible

[アクション]
最小作用原理に従い、分類のみで終了。証明の試みは行わない。

[記録]
- 分類結果を記録
- 終了
```

---

## ケース 2: 巡回セールスマン問題の厳密解を大規模インスタンスで求められた

### 入力
> 「1000 都市の TSP の厳密最適解を求めよ」

### ルール適用フロー

1. **Complexity Class 分類**
   - 対象: TSP（巡回セールスマン問題）
   - 分類: **NP-Hard**（NP-complete の最適化版）

2. **Investment Feasibility**
   - ⚠️ High risk（厳密解は指数爆発）

3. **最小作用原理の適用**
   - 厳密解の探索は Cost-prohibitive
   - **分類で終了** するか、**降格戦略**（近似・ヒューリスティック）を提案して終了

### 出力（シミュレーション）

```
[Complexity Class 分類]
- 問題: TSP 厳密最適解（n=1000）
- 分類: NP-Hard
- Feasibility: ⚠️ Cost-prohibitive（厳密解）

[アクション]
最小作用原理に従い、厳密解の探索は行わない。

オプション: 近似アルゴリズム（2-opt, Christofides）やヒューリスティックの利用を提案。
分類のみで終了。
```

---

## ケース 3: 停止性判定（Halting Problem）を求められた

### 入力
> 「任意のプログラムが停止するか判定するアルゴリズムを設計せよ」

### ルール適用フロー

1. **既知の決定不能チェック** ← 最初に実行
   - **Halting Problem に該当** → **即終了**

2. （以下は実行しない）Complexity Class 分類、解決の試み

### 出力（シミュレーション）

```
[既知の決定不能チェック]
- Halting Problem に該当
- 即終了（無駄なリソース防止）

[記録]
- 分類: Undecidable (Halting Problem)
- 終了
```

---

## ケース 3b: Entscheidungsproblem（決定問題）を求められた

### 入力
> 「一階述語論理の任意の論理式が恒真かどうかを判定する手続きを設計せよ」

### ルール適用フロー

1. **既知の決定不能チェック**
   - **Entscheidungsproblem に該当** → **即終了**

### 出力（シミュレーション）

```
[既知の決定不能チェック]
- Entscheidungsproblem に該当
- 即終了（無駄なリソース防止）

[記録]
- 分類: Undecidable (Entscheidungsproblem)
- 終了
```

---

## ケース 3c: ゲーデル不可能性（無矛盾性の証明）を求められた

### 入力
> 「ZFC の無矛盾性を ZFC 内で証明せよ」

### ルール適用フロー

1. **既知の決定不能チェック**
   - **Gödel 不完全性に該当**（体系内での自己無矛盾性証明） → **即終了**

### 出力（シミュレーション）

```
[既知の決定不能チェック]
- Gödel 不完全性（体系内無矛盾性証明）に該当
- 即終了（無駄なリソース防止）

[記録]
- 分類: Undecidable (Gödel incompleteness)
- 終了
```

---

## ケース 4: 連続体仮説の ZFC 内での証明を求められた

### 入力
> 「連続体仮説を ZFC から証明せよ」

### ルール適用フロー

1. **Complexity Class 分類**
   - 対象: 連続体仮説の ZFC 内での証明
   - 分類: **ZFC 独立**（ゲーデル・コーエンの結果）

2. **Investment Feasibility**
   - ❌ Impossible（ZFC 内では証明も反証もできない）

3. **最小作用原理の適用**
   - 解けない → **分類のみで終了**

### 出力（シミュレーション）

```
[Complexity Class 分類]
- 問題: 連続体仮説の ZFC 内証明
- 分類: ZFC 独立（決定不能）
- Feasibility: ❌ Impossible

[アクション]
最小作用原理に従い、分類のみで終了。証明の試みは行わない。

[記録]
- ZFC 独立と分類
- 終了
```

---

## ケース 5: 多項式時間で解ける問題（例: ソート）

### 入力
> 「n 個の整数をソートせよ」

### ルール適用フロー

1. **Complexity Class 分類**
   - 対象: 比較ソート
   - 分類: **P**（O(n log n) で解ける）

2. **Investment Feasibility**
   - ✅ Feasible

3. **最小作用原理の適用**
   - 解ける → 通常の解決プロセスを実行

### 出力（シミュレーション）

```
[Complexity Class 分類]
- 問題: 整数ソート
- 分類: P
- Feasibility: ✅ Feasible

[アクション]
解決可能。マージソート、クイックソート等で実装。
```

---

## 振る舞いまとめ

| 分類結果 | 振る舞い |
|----------|----------|
| **既知の決定不能**（Halting, Entscheidungsproblem, Gödel） | **即終了**（チェックで検出） |
| **Undecidable** | 分類 → 記録 → **終了**（解決の試みなし） |
| **EXPTIME / EXPSPACE**（Cost-prohibitive） | 分類 → 記録 → **終了** |
| **ZFC 独立** | 分類 → 記録 → **終了** |
| **NP-Hard**（厳密解が Cost-prohibitive） | 分類 → 記録 → **終了** または 近似・緩和の提案のみ |
| **P / NP**（Feasible） | 分類 → 通常の解決プロセスへ |

**最小作用原理**: 解けない問題には、**Complexity Class の分類のみ**で応答し、それ以上の計算資源を消費しない。
