import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  TextInput,
  NumberInput,
} from "react-admin";

import { UnitTitle } from "../unit/UnitTitle";

export const CompoundUnitEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput
          source="baseUnitId.id"
          reference="Unit"
          label="BaseUnitId"
        >
          <SelectInput optionText={UnitTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="compareUnitId.id"
          reference="Unit"
          label="CompareUnitId"
        >
          <SelectInput optionText={UnitTitle} />
        </ReferenceInput>
        <TextInput label="Notes" multiline source="notes" />
        <NumberInput label="Value" source="value" />
      </SimpleForm>
    </Edit>
  );
};
