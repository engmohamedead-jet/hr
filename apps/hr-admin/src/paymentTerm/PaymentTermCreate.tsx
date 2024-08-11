import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
  BooleanInput,
} from "react-admin";

import { PeriodTitle } from "../period/PeriodTitle";
import { InstallmentSaleFeeTitle } from "../installmentSaleFee/InstallmentSaleFeeTitle";

export const PaymentTermCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Code" source="code" />
        <TextInput label="Description" multiline source="description" />
        <NumberInput step={1} label="DueDays" source="dueDays" />
        <DateTimeInput label="DueOnDate" source="dueOnDate" />
        <ReferenceInput
          source="duePeriodId.id"
          reference="Period"
          label="DuePeriodId"
        >
          <SelectInput optionText={PeriodTitle} />
        </ReferenceInput>
        <NumberInput step={1} label="GracePeriod" source="gracePeriod" />
        <ReferenceInput
          source="installmentSaleFeeId.id"
          reference="InstallmentSaleFee"
          label="InstallmentSaleFeeId"
        >
          <SelectInput optionText={InstallmentSaleFeeTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="installmentSaleFeePostingPeriodId.id"
          reference="Period"
          label="InstallmentSaleFeePostingPeriodId"
        >
          <SelectInput optionText={PeriodTitle} />
        </ReferenceInput>
        <BooleanInput label="IsDefault" source="isDefault" />
        <TextInput label="Name" source="name" />
        <TextInput label="NormalizedName" source="normalizedName" />
      </SimpleForm>
    </Create>
  );
};
