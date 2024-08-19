import * as React from "react";

import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  ReferenceField,
  BooleanField,
} from "react-admin";

import Pagination from "../Components/Pagination";
import { EMPLOYEECLASS_TITLE_FIELD } from "../employeeClass/EmployeeClassTitle";
import { EMPLOYEEDEPARTMENT_TITLE_FIELD } from "../employeeDepartment/EmployeeDepartmentTitle";
import { TENANT_TITLE_FIELD } from "../tenant/TenantTitle";

export const EmployeeList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Employees"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
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
      </Datagrid>
    </List>
  );
};
