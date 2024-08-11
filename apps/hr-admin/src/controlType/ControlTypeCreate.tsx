import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
  BooleanInput,
} from "react-admin";

import { ElevatorTitle } from "../elevator/ElevatorTitle";

export const ControlTypeCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="code" source="code" />
        <TextInput label="Name" multiline source="description" />
        <ReferenceArrayInput
          source="elevators"
          reference="Elevator"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ElevatorTitle} />
        </ReferenceArrayInput>
        <BooleanInput label="isActive" source="isActive" />
        <TextInput label="Code" source="name" />
        <TextInput label="Note" multiline source="note" />
        <TextInput label="Description" multiline source="noted" />
      </SimpleForm>
    </Create>
  );
};
