import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  ReferenceField,
  TextField,
  DateField,
  BooleanField,
} from "react-admin";

import { ACCOUNT_TITLE_FIELD } from "../account/AccountTitle";
import { EMPLOYEE_TITLE_FIELD } from "../employee/EmployeeTitle";
import { SALETEAM_TITLE_FIELD } from "../saleTeam/SaleTeamTitle";
import { TENANT_TITLE_FIELD } from "../tenant/TenantTitle";

export const SalePersonShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <ReferenceField
          label="AccountId"
          source="account.id"
          reference="Account"
        >
          <TextField source={ACCOUNT_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Address" source="address" />
        <TextField label="Code" source="code" />
        <TextField label="CommissionRate" source="commissionRate" />
        <DateField source="createdAt" label="Created At" />
        <ReferenceField
          label="EmployeeId"
          source="employee.id"
          reference="Employee"
        >
          <TextField source={EMPLOYEE_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="ID" source="id" />
        <BooleanField label="IsActive" source="isActive" />
        <TextField label="Name" source="name" />
        <TextField label="NormalizedName" source="normalizedName" />
        <TextField label="PhoneNumber" source="phoneNumber" />
        <TextField label="Photo" source="photo" />
        <ReferenceField
          label="SaleTeamId"
          source="saleteam.id"
          reference="SaleTeam"
        >
          <TextField source={SALETEAM_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField label="TenantId" source="tenant.id" reference="Tenant">
          <TextField source={TENANT_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
