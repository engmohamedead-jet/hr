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

import { EMPLOYEEDEPARTMENT_TITLE_FIELD } from "./EmployeeDepartmentTitle";
import { EMPLOYEEGROUP_TITLE_FIELD } from "../employeeGroup/EmployeeGroupTitle";
import { EMPLOYEEROLE_TITLE_FIELD } from "../employeeRole/EmployeeRoleTitle";
import { JOBTITLE_TITLE_FIELD } from "../jobTitle/JobTitleTitle";
import { TENANT_TITLE_FIELD } from "../tenant/TenantTitle";

export const EmployeeDepartmentShow = (
  props: ShowProps
): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Code" source="code" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="Description" source="description" />
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
          reference="Employee"
          target="employeeDepartmentIdId"
          label="Employees"
        >
          <Datagrid rowClick="show">
            <TextField label="Balance" source="balance" />
            <TextField label="Code" source="code" />
            <DateField source="createdAt" label="Created At" />
            <ReferenceField
              label="EmployeeDepartmentId"
              source="employeedepartment.id"
              reference="EmployeeDepartment"
            >
              <TextField source={EMPLOYEEDEPARTMENT_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="EmployeeGroupId"
              source="employeegroup.id"
              reference="EmployeeGroup"
            >
              <TextField source={EMPLOYEEGROUP_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="EmployeeRoleId"
              source="employeerole.id"
              reference="EmployeeRole"
            >
              <TextField source={EMPLOYEEROLE_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="HireDate" source="hireDate" />
            <TextField label="ID" source="id" />
            <BooleanField label="IsActive" source="isActive" />
            <ReferenceField
              label="JobTitleId"
              source="jobtitle.id"
              reference="JobTitle"
            >
              <TextField source={JOBTITLE_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="LastYearBalance" source="lastYearBalance" />
            <TextField label="Name" source="name" />
            <TextField label="Note" source="note" />
            <TextField label="RemainingBalance" source="remainingBalance" />
            <ReferenceField
              label="TenantId"
              source="tenant.id"
              reference="Tenant"
            >
              <TextField source={TENANT_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="UsedBalance" source="usedBalance" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
