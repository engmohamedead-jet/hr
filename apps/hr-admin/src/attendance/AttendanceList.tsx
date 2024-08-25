import * as React from "react";

import {
  List,
  Datagrid,
  ListProps,
  ReferenceField,
  TextField,
  DateField,
  BooleanField,
} from "react-admin";

import Pagination from "../Components/Pagination";
import { USER_TITLE_FIELD } from "../user/UserTitle";
import { EMPLOYEE_TITLE_FIELD } from "../employee/EmployeeTitle";
import { TENANT_TITLE_FIELD } from "../tenant/TenantTitle";

export const AttendanceList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Attendances"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <ReferenceField
          label="ApprovedByUserId"
          source="user.id"
          reference="User"
        >
          <TextField source={USER_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="AttendanceDate" source="attendanceDate" />
        <TextField label="CheckInTime" source="checkInTime" />
        <TextField label="CheckOutTime" source="checkOutTime" />
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
        <TextField label="Note" source="note" />
        <TextField label="OvertimeHours" source="overtimeHours" />
        <TextField label="ReasonForAbsenteeism" source="reasonForAbsenteeism" />
        <ReferenceField label="TenantId" source="tenant.id" reference="Tenant">
          <TextField source={TENANT_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="WasAbsent" source="wasAbsent" />
        <TextField label="WasPresent" source="wasPresent" />
      </Datagrid>
    </List>
  );
};
