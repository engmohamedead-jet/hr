import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  NumberInput,
} from "react-admin";
import { ElevatorTitle } from "../elevator/ElevatorTitle";

export const ElevatorSparePartEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
