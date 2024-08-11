import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  BooleanField,
} from "react-admin";
import Pagination from "../Components/Pagination";

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
        <TextField label="AttendanceDate" source="attendanceDate" />
        <TextField label="CheckInTime" source="checkInTime" />
        <TextField label="CheckOutTime" source="checkOutTime" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="Note" source="note" />
        <TextField label="OvertimeHours" source="overtimeHours" />
        <TextField label="ReasonForAbsenteeism" source="reasonForAbsenteeism" />
        <DateField source="updatedAt" label="Updated At" />
        <BooleanField label="WasAbsent" source="wasAbsent" />
        <BooleanField label="WasPresent" source="wasPresent" />
      </Datagrid>
    </List>
  );
};
