import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  BooleanField,
} from "react-admin";

export const AttendanceShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
      </SimpleShowLayout>
    </Show>
  );
};
