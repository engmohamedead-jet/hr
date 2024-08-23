import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { EmployeeList } from "./employee/EmployeeList";
import { EmployeeCreate } from "./employee/EmployeeCreate";
import { EmployeeEdit } from "./employee/EmployeeEdit";
import { EmployeeShow } from "./employee/EmployeeShow";
import { EmployeeDepartmentList } from "./employeeDepartment/EmployeeDepartmentList";
import { EmployeeDepartmentCreate } from "./employeeDepartment/EmployeeDepartmentCreate";
import { EmployeeDepartmentEdit } from "./employeeDepartment/EmployeeDepartmentEdit";
import { EmployeeDepartmentShow } from "./employeeDepartment/EmployeeDepartmentShow";
import { AttendanceList } from "./attendance/AttendanceList";
import { AttendanceCreate } from "./attendance/AttendanceCreate";
import { AttendanceEdit } from "./attendance/AttendanceEdit";
import { AttendanceShow } from "./attendance/AttendanceShow";
import { JobTitleList } from "./jobTitle/JobTitleList";
import { JobTitleCreate } from "./jobTitle/JobTitleCreate";
import { JobTitleEdit } from "./jobTitle/JobTitleEdit";
import { JobTitleShow } from "./jobTitle/JobTitleShow";
import { TenantUserList } from "./tenantUser/TenantUserList";
import { TenantUserCreate } from "./tenantUser/TenantUserCreate";
import { TenantUserEdit } from "./tenantUser/TenantUserEdit";
import { TenantUserShow } from "./tenantUser/TenantUserShow";
import { TenantList } from "./tenant/TenantList";
import { TenantCreate } from "./tenant/TenantCreate";
import { TenantEdit } from "./tenant/TenantEdit";
import { TenantShow } from "./tenant/TenantShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { EmployeeRoleList } from "./employeeRole/EmployeeRoleList";
import { EmployeeRoleCreate } from "./employeeRole/EmployeeRoleCreate";
import { EmployeeRoleEdit } from "./employeeRole/EmployeeRoleEdit";
import { EmployeeRoleShow } from "./employeeRole/EmployeeRoleShow";
import { EmployeeGroupList } from "./employeeGroup/EmployeeGroupList";
import { EmployeeGroupCreate } from "./employeeGroup/EmployeeGroupCreate";
import { EmployeeGroupEdit } from "./employeeGroup/EmployeeGroupEdit";
import { EmployeeGroupShow } from "./employeeGroup/EmployeeGroupShow";
import { BonusRequestList } from "./bonusRequest/BonusRequestList";
import { BonusRequestCreate } from "./bonusRequest/BonusRequestCreate";
import { BonusRequestEdit } from "./bonusRequest/BonusRequestEdit";
import { BonusRequestShow } from "./bonusRequest/BonusRequestShow";
import { MachineList } from "./machine/MachineList";
import { MachineCreate } from "./machine/MachineCreate";
import { MachineEdit } from "./machine/MachineEdit";
import { MachineShow } from "./machine/MachineShow";
import { CheckInOutList } from "./checkInOut/CheckInOutList";
import { CheckInOutCreate } from "./checkInOut/CheckInOutCreate";
import { CheckInOutEdit } from "./checkInOut/CheckInOutEdit";
import { CheckInOutShow } from "./checkInOut/CheckInOutShow";
import { DailyMovementRequestList } from "./dailyMovementRequest/DailyMovementRequestList";
import { DailyMovementRequestCreate } from "./dailyMovementRequest/DailyMovementRequestCreate";
import { DailyMovementRequestEdit } from "./dailyMovementRequest/DailyMovementRequestEdit";
import { DailyMovementRequestShow } from "./dailyMovementRequest/DailyMovementRequestShow";
import { DayOffRequestList } from "./dayOffRequest/DayOffRequestList";
import { DayOffRequestCreate } from "./dayOffRequest/DayOffRequestCreate";
import { DayOffRequestEdit } from "./dayOffRequest/DayOffRequestEdit";
import { DayOffRequestShow } from "./dayOffRequest/DayOffRequestShow";
import { LeaveRequestList } from "./leaveRequest/LeaveRequestList";
import { LeaveRequestCreate } from "./leaveRequest/LeaveRequestCreate";
import { LeaveRequestEdit } from "./leaveRequest/LeaveRequestEdit";
import { LeaveRequestShow } from "./leaveRequest/LeaveRequestShow";
import { LeaveRequestTypeList } from "./leaveRequestType/LeaveRequestTypeList";
import { LeaveRequestTypeCreate } from "./leaveRequestType/LeaveRequestTypeCreate";
import { LeaveRequestTypeEdit } from "./leaveRequestType/LeaveRequestTypeEdit";
import { LeaveRequestTypeShow } from "./leaveRequestType/LeaveRequestTypeShow";
import { OverNightRequestList } from "./overNightRequest/OverNightRequestList";
import { OverNightRequestCreate } from "./overNightRequest/OverNightRequestCreate";
import { OverNightRequestEdit } from "./overNightRequest/OverNightRequestEdit";
import { OverNightRequestShow } from "./overNightRequest/OverNightRequestShow";
import { FiscalMonthList } from "./fiscalMonth/FiscalMonthList";
import { FiscalMonthCreate } from "./fiscalMonth/FiscalMonthCreate";
import { FiscalMonthEdit } from "./fiscalMonth/FiscalMonthEdit";
import { FiscalMonthShow } from "./fiscalMonth/FiscalMonthShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"HR Service"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Employee"
          list={EmployeeList}
          edit={EmployeeEdit}
          create={EmployeeCreate}
          show={EmployeeShow}
        />
        <Resource
          name="EmployeeDepartment"
          list={EmployeeDepartmentList}
          edit={EmployeeDepartmentEdit}
          create={EmployeeDepartmentCreate}
          show={EmployeeDepartmentShow}
        />
        <Resource
          name="Attendance"
          list={AttendanceList}
          edit={AttendanceEdit}
          create={AttendanceCreate}
          show={AttendanceShow}
        />
        <Resource
          name="JobTitle"
          list={JobTitleList}
          edit={JobTitleEdit}
          create={JobTitleCreate}
          show={JobTitleShow}
        />
        <Resource
          name="TenantUser"
          list={TenantUserList}
          edit={TenantUserEdit}
          create={TenantUserCreate}
          show={TenantUserShow}
        />
        <Resource
          name="Tenant"
          list={TenantList}
          edit={TenantEdit}
          create={TenantCreate}
          show={TenantShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
        <Resource
          name="EmployeeRole"
          list={EmployeeRoleList}
          edit={EmployeeRoleEdit}
          create={EmployeeRoleCreate}
          show={EmployeeRoleShow}
        />
        <Resource
          name="EmployeeGroup"
          list={EmployeeGroupList}
          edit={EmployeeGroupEdit}
          create={EmployeeGroupCreate}
          show={EmployeeGroupShow}
        />
        <Resource
          name="BonusRequest"
          list={BonusRequestList}
          edit={BonusRequestEdit}
          create={BonusRequestCreate}
          show={BonusRequestShow}
        />
        <Resource
          name="Machine"
          list={MachineList}
          edit={MachineEdit}
          create={MachineCreate}
          show={MachineShow}
        />
        <Resource
          name="CheckInOut"
          list={CheckInOutList}
          edit={CheckInOutEdit}
          create={CheckInOutCreate}
          show={CheckInOutShow}
        />
        <Resource
          name="DailyMovementRequest"
          list={DailyMovementRequestList}
          edit={DailyMovementRequestEdit}
          create={DailyMovementRequestCreate}
          show={DailyMovementRequestShow}
        />
        <Resource
          name="DayOffRequest"
          list={DayOffRequestList}
          edit={DayOffRequestEdit}
          create={DayOffRequestCreate}
          show={DayOffRequestShow}
        />
        <Resource
          name="LeaveRequest"
          list={LeaveRequestList}
          edit={LeaveRequestEdit}
          create={LeaveRequestCreate}
          show={LeaveRequestShow}
        />
        <Resource
          name="LeaveRequestType"
          list={LeaveRequestTypeList}
          edit={LeaveRequestTypeEdit}
          create={LeaveRequestTypeCreate}
          show={LeaveRequestTypeShow}
        />
        <Resource
          name="OverNightRequest"
          list={OverNightRequestList}
          edit={OverNightRequestEdit}
          create={OverNightRequestCreate}
          show={OverNightRequestShow}
        />
        <Resource
          name="FiscalMonth"
          list={FiscalMonthList}
          edit={FiscalMonthEdit}
          create={FiscalMonthCreate}
          show={FiscalMonthShow}
        />
      </Admin>
    </div>
  );
};

export default App;
