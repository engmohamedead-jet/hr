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

import { USER_TITLE_FIELD } from "../user/UserTitle";
import { EMPLOYEE_TITLE_FIELD } from "../employee/EmployeeTitle";
import { MACHINE_TITLE_FIELD } from "./MachineTitle";
import { TENANT_TITLE_FIELD } from "../tenant/TenantTitle";

export const MachineShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Code" source="code" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="IP" source="ip" />
        <BooleanField label="IsAndroid" source="isAndroid" />
        <TextField label="Name" source="name" />
        <TextField label="NormalizedName" source="normalizedName" />
        <TextField label="Note" source="note" />
        <ReferenceField label="TenantId" source="tenant.id" reference="Tenant">
          <TextField source={TENANT_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="CheckInOut"
          target="machineId"
          label="CheckInOuts"
        >
          <Datagrid rowClick="show">
            <ReferenceField
              label="ApprovedByUserId"
              source="user.id"
              reference="User"
            >
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="CheckDate" source="checkDate" />
            <TextField label="CheckTime" source="checkTime" />
            <TextField label="CheckType" source="checkType" />
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
            <BooleanField label="IsAppreoved" source="isAppreoved" />
            <ReferenceField
              label="MachineId"
              source="machine.id"
              reference="Machine"
            >
              <TextField source={MACHINE_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Note" source="note" />
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
