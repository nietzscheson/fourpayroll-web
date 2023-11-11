import React from 'react';
import { List, Datagrid, TextField, Create, SimpleForm, TextInput, Edit } from 'react-admin';

export const InsuranceCarrierList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField sortable={false} source="id"/>
            <TextField source="name" />
        </Datagrid>
    </List>
);

export const InsuranceCarrierCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="name" />
        </SimpleForm>
    </Create>
);

export const InsuranceCarrierEdit = props => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput disabled source="id" />
            <TextInput source="name" />
        </SimpleForm>
    </Edit>
);