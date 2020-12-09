import React from 'react'
import { Admin, Resource } from 'react-admin'
import { createBrowserHistory } from 'history'
import authProvider from './authProvider'
import dataProvider from './dataProvider'

// import { FileList, FileEdit } from './models/files'
import { UserList, UserEdit, UserCreate } from './models/users'
import { ConfigList } from './models/config'

const history = createBrowserHistory({ basename: '/admin' })

const App = () => (
  <Admin
    history={history}
    dataProvider={dataProvider}
    authProvider={authProvider}
    locale='en'
  >
    <Resource
      name='users'
      create={UserCreate}
      list={UserList}
      edit={UserEdit}
    />
    <Resource
      name='config'
      list={ConfigList}
    />
  </Admin>
)

export default App
