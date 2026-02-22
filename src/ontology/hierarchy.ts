import type { OntologyLevel } from '../types.js'

export interface HierarchyNode {
  level: OntologyLevel
  id: string
  name: string
  scope: string
  keywords: string[]
}

export const UNIVERSAL_HIERARCHY: HierarchyNode[] = [
  {
    level: 'L0',
    id: 'universal-schema',
    name: '基盤 (Foundation)',
    scope: '全アプリ',
    keywords: [
      'UUID',
      'PK',
      'FK',
      'Surrogate Key',
      'ISO 8601',
      'UTC',
      '通貨',
      'ISO 4217',
      '会計',
      'JGAAP',
      'IFRS',
      'US GAAP',
      '識別子',
      '属性',
    ],
  },
  {
    level: 'L1',
    id: 'api-first',
    name: '横断 (Cross-cutting)',
    scope: '全アプリ',
    keywords: [
      'API',
      'OpenAPI',
      'REST',
      'セキュリティ',
      'IAM',
      'OAuth',
      'OIDC',
      'URL',
      'サイトマップ',
      'UI',
      'UX',
      '言語',
    ],
  },
  {
    level: 'L2',
    id: 'domain-agnostic',
    name: 'ドメイン横断 (Domain-agnostic)',
    scope: '複数ドメイン',
    keywords: [
      'カラー',
      'SKU',
      'デジタルツイン',
      'color_system_type',
      'universal_sku_id',
    ],
  },
  {
    level: 'L3',
    id: 'vehicle-geospatial',
    name: 'ドメイン特化: 車両・位置・建設',
    scope: '単一ドメイン',
    keywords: [
      '車両',
      'VIN',
      '位置',
      'WGS84',
      '緯度',
      '経度',
      '建設',
      'IFC',
      'BIM',
    ],
  },
  {
    level: 'L3',
    id: 'mes-manufacturing',
    name: 'ドメイン特化: MES・製造',
    scope: '単一ドメイン',
    keywords: [
      'MES',
      'ISA-95',
      '製造',
      '縫製',
      'SKU',
      'GTIN',
      'B2MML',
    ],
  },
  {
    level: 'L4',
    id: 'project',
    name: 'プロジェクト (Project)',
    scope: '単一プロジェクト',
    keywords: ['Zustand', 'react-query-kit', 'i18n', 'コーディング'],
  },
]
