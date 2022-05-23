// model/schema.js
import { appSchema, tableSchema } from '@nozbe/watermelondb'

const dbSchema = appSchema({
  version: 1,
  tables: [
    tableSchema({
      name: 'categories',
      columns: [
        { name: 'name', type: 'string', isOptional: false },
        { name: 'color', type: 'string', isOptional: false },
        { name: 'icon', type: 'string', isOptional: false },
        { name: 'order', type: 'number', isOptional: false },
        { name: 'created_at', type: 'number', isOptional: false },
        { name: 'updated_at', type: 'number', isOptional: false },
      ]
    }),
  ]
})

export default dbSchema;

