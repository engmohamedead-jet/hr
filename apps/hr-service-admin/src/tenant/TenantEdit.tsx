import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";
import { AttendanceTitle } from "../attendance/AttendanceTitle";
import { BonusRequestTitle } from "../bonusRequest/BonusRequestTitle";
import { CheckInOutTitle } from "../checkInOut/CheckInOutTitle";
import { DailyMovementRequestTitle } from "../dailyMovementRequest/DailyMovementRequestTitle";
import { DayOffRequestTitle } from "../dayOffRequest/DayOffRequestTitle";
import { EmployeeDepartmentTitle } from "../employeeDepartment/EmployeeDepartmentTitle";
import { EmployeeGroupTitle } from "../employeeGroup/EmployeeGroupTitle";
import { EmployeeRoleTitle } from "../employeeRole/EmployeeRoleTitle";
import { EmployeeTitle } from "../employee/EmployeeTitle";
import { MachineTitle } from "../machine/MachineTitle";
import { FiscalMonthTitle } from "../fiscalMonth/FiscalMonthTitle";
import { JobTitleTitle } from "../jobTitle/JobTitleTitle";
import { LeaveRequestTypeTitle } from "../leaveRequestType/LeaveRequestTypeTitle";
import { LeaveRequestTitle } from "../leaveRequest/LeaveRequestTitle";
import { OverNightRequestTitle } from "../overNightRequest/OverNightRequestTitle";

export const TenantEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="attendances"
          reference="Attendance"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={AttendanceTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="bonusRequests"
          reference="BonusRequest"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={BonusRequestTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="checkInOuts"
          reference="CheckInOut"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={CheckInOutTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="dailyMovements"
          reference="DailyMovementRequest"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={DailyMovementRequestTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="dayOffs"
          reference="DayOffRequest"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={DayOffRequestTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="employeeDepartments"
          reference="EmployeeDepartment"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={EmployeeDepartmentTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="employeeGroups"
          reference="EmployeeGroup"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={EmployeeGroupTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="employeeRoles"
          reference="EmployeeRole"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={EmployeeRoleTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="employees"
          reference="Employee"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={EmployeeTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="fingerprintMachines"
          reference="Machine"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={MachineTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="fiscalMonths"
          reference="FiscalMonth"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={FiscalMonthTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="jobTitles"
          reference="JobTitle"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={JobTitleTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="leaveRequestTypes"
          reference="LeaveRequestType"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={LeaveRequestTypeTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="leaveRequests"
          reference="LeaveRequest"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={LeaveRequestTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="overNights"
          reference="OverNightRequest"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={OverNightRequestTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Edit>
  );
};
