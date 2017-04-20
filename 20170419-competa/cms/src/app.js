import React from 'react';
import {jsonServerRestClient, Admin, Resource} from 'admin-on-rest';
import { Delete } from 'admin-on-rest/lib/mui';
import {TodoList, TodoEdit, TodoCreate} from './todos';

const App = () => (
    <Admin title="Competa Todo CMS" restClient={jsonServerRestClient('http://localhost:3000')}>
        <Resource name="todos" list={TodoList} edit={TodoEdit} create={TodoCreate} remove={Delete} />
    </Admin>
);

export default App;