import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
  ReferenceInput,
  SelectInput,
  BooleanInput,
} from "react-admin";

import { PeriodTitle } from "../period/PeriodTitle";
import { InstallmentSaleFeeTitle } from "../installmentSaleFee/InstallmentSaleFeeTitle";
import { TenantTitle } from "../tenant/TenantTitle";

export const PaymentTermCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Code" source="code" />
        <TextInput label="Description" multiline source="description" />
        <NumberInput step={1} label="DueDays" source="dueDays" />
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
          source="installmentSaleFeePostingPeriod.id"
          reference="Period"
          label="InstallmentSaleFeePostingPeriodId"
        >
          <SelectInput optionText={PeriodTitle} />
        </ReferenceInput>
        <BooleanInput label="IsActive" source="isActive" />
        <BooleanInput label="IsDefault" source="isDefault" />
        <BooleanInput label="IsDueOnDate" source="isDueOnDate" />
        <TextInput label="Name" source="name" />
        <TextInput label="NormalizedName" source="normalizedName" />
        <TextInput label="Note" multiline source="note" />
        <ReferenceInput
          source="tenantId.id"
          reference="Tenant"
          label="TenantId"
        >
          <SelectInput optionText={TenantTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
