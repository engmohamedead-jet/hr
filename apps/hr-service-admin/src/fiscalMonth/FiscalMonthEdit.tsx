import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  TextInput,
  DateTimeInput,
  BooleanInput,
} from "react-admin";

import { BonusRequestTitle } from "../bonusRequest/BonusRequestTitle";
import { TenantTitle } from "../tenant/TenantTitle";

export const FiscalMonthEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
