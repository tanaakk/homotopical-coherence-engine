#!/usr/bin/env node
import { check } from './index.js'
import type { FruitRecoverability, FruitRecoverabilityGateMode } from './types.js'

const args = process.argv.slice(2)
const statement: string[] = []
let gateMode: FruitRecoverabilityGateMode = 'permissive'
let fruitRecoverability: FruitRecoverability | undefined

for (let i = 0; i < args.length; i++) {
  if (args[i] === '--gate-mode' && args[i + 1]) {
    gateMode = args[i + 1] === 'strict' ? 'strict' : 'permissive'
    i++
  } else if (args[i] === '--fruit-recoverability' && args[i + 1]) {
    fruitRecoverability = args[i + 1] === 'certain' ? 'certain' : 'uncertain'
    i++
  } else {
    statement.push(args[i])
  }
}

const stmt = statement.join(' ') || 'PK is UUID v4'

const result = await check({
  statement: stmt,
  gateMode,
  fruitRecoverability,
})
console.log(JSON.stringify(result, null, 2))
