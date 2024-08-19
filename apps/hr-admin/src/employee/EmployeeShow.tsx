import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
  BooleanField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { ACCOUNT_TITLE_FIELD } from "../account/AccountTitle";
import { EMPLOYEE_TITLE_FIELD } from "./EmployeeTitle";
import { SALETEAM_TITLE_FIELD } from "../saleTeam/SaleTeamTitle";
import { TENANT_TITLE_FIELD } from "../tenant/TenantTitle";
import { EMPLOYEECLASS_TITLE_FIELD } from "../employeeClass/EmployeeClassTitle";
import { EMPLOYEEDEPARTMENT_TITLE_FIELD } from "../employeeDepartment/EmployeeDepartmentTitle";

export const EmployeeShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Balance" source="balance" />
        <TextField label="Code" source="code" />
        <DateField source="createdAt" label="Created At" />
        <ReferenceField
          label="EmployeeClassId"
          source="employeeclass.id"
          reference="EmployeeClass"
        >
          <TextField source={EMPLOYEECLASS_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField
          label="EmployeeDepartmentId"
          source="employeedepartment.id"
          reference="EmployeeDepartment"
        >
          <TextField source={EMPLOYEEDEPARTMENT_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="ID" source="id" />
        <BooleanField label="IsActive" source="isActive" />
        <TextField label="LastYearBalance" source="lastYearBalance" />
        <TextField label="Name" source="name" />
        <TextField label="NormalizedName" source="normalizedName" />
        <TextField label="Note" source="note" />
        <TextField label="RemainingBalance" source="remainingBalance" />
        <ReferenceField label="TenantId" source="tenant.id" reference="Tenant">
          <TextField source={TENANT_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="UsedBalance" source="usedBalance" />
        <ReferenceManyField
          reference="SalePerson"
          target="employeeIdId"
          label="SalePeople"
        >
          <Datagrid rowClick="show">
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
