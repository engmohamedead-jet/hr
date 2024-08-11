import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  NumberInput,
} from "react-admin";
import { ElevatorTitle } from "../elevator/ElevatorTitle";

export const ElevatorSparePartCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput
          source="elevator.id"
          reference="Elevator"
          label="Elevator"
        >
          <SelectInput optionText={ElevatorTitle} />
        </ReferenceInput>
        <NumberInput label="Price" source="price" />
        <NumberInput label="WholeSalePrice" source="wholeSalePrice" />
      </SimpleForm>
    </Create>
  );
};
