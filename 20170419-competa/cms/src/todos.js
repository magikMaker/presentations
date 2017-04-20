import React from 'react';
import {
    List,
    Edit,
    Create,
    Datagrid,
    TextField,
    BooleanField,
    EditButton,
    DisabledInput,
    SimpleForm,
    TextInput,
    BooleanInput
} from 'admin-on-rest/lib/mui';

export const TodoList = (props) => (
    <List {...props}>
        <Datagrid>
            <BooleanField source="done"/>
            <TextField source="id"/>
            <TextField source="title"/>
            <EditButton />
        </Datagrid>
    </List>
);

const TodoTitle = ({record}) => {
    return <span>Todo: {record ? `${record.title}` : ''}</span>;
};

export const TodoEdit = (props) => (
    <Edit title={<TodoTitle />} {...props}>
        <SimpleForm>
            <DisabledInput source="id"/>
            <TextInput source="title"/>
            <BooleanInput source="done"/>
        </SimpleForm>
    </Edit>
);

export const TodoCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="title"/>
            <BooleanInput source="done"/>
        </SimpleForm>
    </Create>
);