import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  ReferenceField,
  DateField,
  BooleanField,
} from "react-admin";

import { USER_TITLE_FIELD } from "../user/UserTitle";
import { EMPLOYEE_TITLE_FIELD } from "../employee/EmployeeTitle";
import { LEAVEREQUESTTYPE_TITLE_FIELD } from "../leaveRequestType/LeaveRequestTypeTitle";
import { TENANT_TITLE_FIELD } from "../tenant/TenantTitle";

export const LeaveRequestShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="LeaveDate" source="LeaveDate" />
        <ReferenceField
          label="ApprovedByUserId"
          source="user.id"
          reference="User"
        >
          <TextField source={USER_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Cause" source="cause" />
        <DateField source="createdAt" label="Created At" />
        <ReferenceField
          label="Employee"
          source="employee.id"
          reference="Employee"
        >
          <TextField source={EMPLOYEE_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="ID" source="id" />
        <BooleanField label="IsActive" source="isActive" />
        <BooleanField label="IsAppreoved" source="isAppreoved" />
        <ReferenceField
          label="LeaveRequestTypeId"
          source="leaverequesttype.id"
          reference="LeaveRequestType"
        >
          <TextField source={LEAVEREQUESTTYPE_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Note" source="note" />
        <ReferenceField label="TenantId" source="tenant.id" reference="Tenant">
          <TextField source={TENANT_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
