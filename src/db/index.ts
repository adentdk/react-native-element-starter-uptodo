
import { Platform } from 'react-native'
import { Database } from '@nozbe/watermelondb'
import SQLiteAdapter from '@nozbe/watermelondb/adapters/sqlite'

import schema from './model/schema'
import migrations from './model/migrations'

import Category from './model/Category'



const adapter = new SQLiteAdapter({
  schema,
  migrations,
  jsi: Platform.OS === 'ios',
  onSetUpError: error => {
    console.log('onSetUpError', error)
  }
})

const database = new Database({
  adapter,
  modelClasses: [
    Category,
  ],
})


export default database;
