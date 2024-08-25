import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  TextInput,
  DateTimeInput,
  BooleanInput,
} from "react-admin";

import { BonusRequestTitle } from "../bonusRequest/BonusRequestTitle";
import { TenantTitle } from "../tenant/TenantTitle";

export const FiscalMonthCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput
          source="bonusRequests.id"
          reference="BonusRequest"
          label="BonusRequests"
        >
          <SelectInput optionText={BonusRequestTitle} />
        </ReferenceInput>
        <TextInput label="Code" source="code" />
        <DateTimeInput label="EndsOn" source="endsOn" />
        <BooleanInput label="IsActive" source="isActive" />
        <TextInput label="Name" source="name" />
        <TextInput label="NormalizedName" source="normalizedName" />
        <TextInput label="Note" multiline source="note" />
        <DateTimeInput label="StartsFrom" source="startsFrom" />
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
