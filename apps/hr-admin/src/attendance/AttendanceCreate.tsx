import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  DateTimeInput,
  TextInput,
  NumberInput,
  BooleanInput,
} from "react-admin";

export const AttendanceCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <DateTimeInput label="AttendanceDate" source="attendanceDate" />
        <DateTimeInput label="CheckInTime" source="checkInTime" />
        <DateTimeInput label="CheckOutTime" source="checkOutTime" />
        <TextInput label="Note" multiline source="note" />
        <NumberInput label="OvertimeHours" source="overtimeHours" />
        <TextInput label="ReasonForAbsenteeism" source="reasonForAbsenteeism" />
        <BooleanInput label="WasAbsent" source="wasAbsent" />
        <BooleanInput label="WasPresent" source="wasPresent" />
      </SimpleForm>
    </Create>
  );
};
