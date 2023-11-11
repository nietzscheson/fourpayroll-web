import React from 'react';
import { List, Datagrid, TextField, Create, SimpleForm, TextInput, Edit, ReferenceInput, ReferenceField, SelectInput } from 'react-admin';

export const DoctorList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField sortable={false} source="id"/>
            <ReferenceField label="Name" source="user_id" reference="User" >
                <TextField source="fullName" />
            </ReferenceField>
            <TextField source="identification_card" />
            <TextField source="pin_number" />
            <TextField source="specialization_id" />
        </Datagrid>
    </List>
);

export const DoctorCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <ReferenceInput label="User" source="user_id" reference="User">
                <SelectInput optionText="fullName" />
            </ReferenceInput>
            <ReferenceInput label="Hospital" source="hospital_id" reference="Hospital">
                <SelectInput optionText="name" />
            </ReferenceInput>
            <TextInput source="identification_card" />
            <TextInput source="pin_number" />
            <TextInput source="specialization_id" />
        </SimpleForm>
    </Create>
);

export const DoctorEdit = props => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput disabled source="id" />
            <ReferenceInput label="User" source="user_id" reference="User">
                <SelectInput optionText="fullName" />
            </ReferenceInput>
            <ReferenceInput label="Hospital" source="hospital_id" reference="Hospital">
                <SelectInput optionText="name" />
            </ReferenceInput>
            <TextInput source="identification_card" />
            <TextInput source="pin_number" />
            <TextInput source="specialization_id" />
        </SimpleForm>
    </Edit>
);

