import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { FiscalMonthTitle } from "../fiscalMonth/FiscalMonthTitle";

export const FiscalWeekEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Code" source="code" />
        <TextInput label="EndsOn" source="endsOn" />
        <ReferenceInput
          source="fiscalMonthId.id"
          reference="FiscalMonth"
          label="FiscalMonthId"
        >
          <SelectInput optionText={FiscalMonthTitle} />
        </ReferenceInput>
        <TextInput label="Name" source="name" />
        <TextInput label="NormalizedName" source="normalizedName" />
        <TextInput label="Note" source="note" />
        <TextInput label="StartsFrom" source="startsFrom" />
      </SimpleForm>
    </Edit>
  );
};
