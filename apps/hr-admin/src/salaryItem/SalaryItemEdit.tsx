import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  BooleanInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { SalaryItemGroupTitle } from "../salaryItemGroup/SalaryItemGroupTitle";
import { SalaryItemTypeTitle } from "../salaryItemType/SalaryItemTypeTitle";
import { SalaryLawTitle } from "../salaryLaw/SalaryLawTitle";
import { TenantTitle } from "../tenant/TenantTitle";

export const SalaryItemEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Code" source="code" />
        <TextInput label="Description" multiline source="description" />
        <BooleanInput label="IsActive" source="isActive" />
        <TextInput label="Name" source="name" />
        <TextInput label="NormalizedName" source="normalizedName" />
        <TextInput label="Note" multiline source="note" />
        <ReferenceInput
          source="salaryItemGroupId.id"
          reference="SalaryItemGroup"
          label="SalaryItemGroupId"
        >
          <SelectInput optionText={SalaryItemGroupTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="salaryItemTypeId.id"
          reference="SalaryItemType"
          label="SalaryItemTypeId"
        >
          <SelectInput optionText={SalaryItemTypeTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="salaryLawId.id"
          reference="SalaryLaw"
          label="SalaryLawId"
        >
          <SelectInput optionText={SalaryLawTitle} />
        </ReferenceInput>
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
