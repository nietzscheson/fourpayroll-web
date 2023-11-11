import React from 'react';
import { List, Datagrid, TextField, Create, SimpleForm, TextInput, Edit, ReferenceInput, SelectInput, ReferenceField } from 'react-admin';

export const PatientList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField sortable={false} source="id"/>
            <ReferenceField source="user_id" reference="User">
                <TextField source="fullName" />
            </ReferenceField>
            <TextField source="age" />
            <TextField source="gendre" />
            <TextField source="pin_number" />
            <TextField source="priority" />
        </Datagrid>
    </List>
);

export const PatientCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <ReferenceInput label="User" source="user_id" reference="User">
                <SelectInput optionText="firstName" />
            </ReferenceInput>
            <ReferenceInput label="Doctor" source="doctor_id" reference="Doctor">
                <SelectInput optionText="id" />
            </ReferenceInput>
            <ReferenceInput label="InsuranceCarrier" source="insuranceCarrier_id" reference="InsuranceCarrier">
                <SelectInput optionText="name" />
            </ReferenceInput>
            <TextInput source="age" />
            <TextInput source="gendre" />
            <TextInput source="pin_number" />
            <TextInput source="priority" />
        </SimpleForm>
    </Create>
);

export const PatientEdit = props => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput disabled source="id" />
            <ReferenceInput label="User" source="user_id" reference="User">
                <SelectInput optionText="firstName" />
            </ReferenceInput>
            <ReferenceInput label="Doctor" source="doctor_id" reference="Doctor">
                <SelectInput optionText="id" />
            </ReferenceInput>
            <ReferenceInput label="InsuranceCarrier" source="insuranceCarrier_id" reference="InsuranceCarrier">
                <SelectInput optionText="name" />
            </ReferenceInput>
            <TextInput source="age" />
            <TextInput source="gendre" />
            <TextInput source="pin_number" />
            <TextInput source="priority" />
        </SimpleForm>
    </Edit>
);

