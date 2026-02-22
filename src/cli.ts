#!/usr/bin/env node
import { check } from './index.js'

const statement = process.argv.slice(2).join(' ') || 'PK is UUID v4'

const result = await check({ statement })
console.log(JSON.stringify(result, null, 2))
