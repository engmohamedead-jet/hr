import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  TextInput,
  NumberInput,
} from "react-admin";

import { UnitTitle } from "../unit/UnitTitle";

export const CompoundUnitCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
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
    </Create>
  );
};
