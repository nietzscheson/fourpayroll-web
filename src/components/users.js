import React from 'react';
import { List, Datagrid, TextField, Create, SimpleForm, TextInput, Edit, BooleanInput, PasswordInput } from 'react-admin';

export const UserList = () => (
    <List>
      <Datagrid rowClick="edit">
        <TextField source="id" />
        <TextField source="name" />
        <TextField source="username" />
        <TextField source="address.street" />
        <TextField source="phone" />
        <TextField source="website" />
        <TextField source="company.name" />
      </Datagrid>
    </List>
  );

export const UserCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="username" />
            <TextInput source="firstName" />
            <TextInput source="lastName" />
            <BooleanInput source="enabled" />
            <BooleanInput source="locked" />
            <BooleanInput source="isAdmin" />
            <TextInput source="email" />
            <PasswordInput source="password" />
            <TextInput source="gendre" />
            <TextInput source="phoneNumber" />
        </SimpleForm>
    </Create>
);

export const UserEdit = props => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput source="username" />
            <TextInput source="firstName" />
            <TextInput source="lastName" />
            <BooleanInput source="enabled" />
            <BooleanInput source="locked" />
            <BooleanInput source="isAdmin" />
            <TextInput source="email" />
            <PasswordInput source="password" />
            <TextInput source="gendre" />
            <TextInput source="phoneNumber" />
        </SimpleForm>
    </Edit>
);
