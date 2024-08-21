import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  BooleanField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { SALARYITEMGROUP_TITLE_FIELD } from "../salaryItemGroup/SalaryItemGroupTitle";
import { SALARYITEMTYPE_TITLE_FIELD } from "../salaryItemType/SalaryItemTypeTitle";
import { SALARYLAW_TITLE_FIELD } from "./SalaryLawTitle";
import { TENANT_TITLE_FIELD } from "../tenant/TenantTitle";

export const SalaryLawShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Code" source="code" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="Description" source="description" />
        <TextField label="EffectiveDate" source="effectiveDate" />
        <TextField label="ID" source="id" />
        <BooleanField label="IsActive" source="isActive" />
        <TextField label="Name" source="name" />
        <TextField label="NormalizedName" source="normalizedName" />
        <TextField label="Note" source="note" />
        <ReferenceField label="TenantId" source="tenant.id" reference="Tenant">
          <TextField source={TENANT_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="SalaryItem"
          target="salaryLawIdId"
          label="SalaryItems"
        >
          <Datagrid rowClick="show">
            <TextField label="Code" source="code" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="Description" source="description" />
            <TextField label="ID" source="id" />
            <BooleanField label="IsActive" source="isActive" />
            <TextField label="Name" source="name" />
            <TextField label="NormalizedName" source="normalizedName" />
            <TextField label="Note" source="note" />
            <ReferenceField
              label="SalaryItemGroupId"
              source="salaryitemgroup.id"
              reference="SalaryItemGroup"
            >
              <TextField source={SALARYITEMGROUP_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="SalaryItemTypeId"
              source="salaryitemtype.id"
              reference="SalaryItemType"
            >
              <TextField source={SALARYITEMTYPE_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="SalaryLawId"
              source="salarylaw.id"
              reference="SalaryLaw"
            >
              <TextField source={SALARYLAW_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="TenantId"
              source="tenant.id"
              reference="Tenant"
            >
              <TextField source={TENANT_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
