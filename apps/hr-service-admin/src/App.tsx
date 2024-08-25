import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { EmployeeDepartmentList } from "./employeeDepartment/EmployeeDepartmentList";
import { EmployeeDepartmentCreate } from "./employeeDepartment/EmployeeDepartmentCreate";
import { EmployeeDepartmentEdit } from "./employeeDepartment/EmployeeDepartmentEdit";
import { EmployeeDepartmentShow } from "./employeeDepartment/EmployeeDepartmentShow";
import { EmployeeList } from "./employee/EmployeeList";
import { EmployeeCreate } from "./employee/EmployeeCreate";
import { EmployeeEdit } from "./employee/EmployeeEdit";
import { EmployeeShow } from "./employee/EmployeeShow";
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
import { TradingSummaryList } from "./tradingSummary/TradingSummaryList";
import { TradingSummaryCreate } from "./tradingSummary/TradingSummaryCreate";
import { TradingSummaryEdit } from "./tradingSummary/TradingSummaryEdit";
import { TradingSummaryShow } from "./tradingSummary/TradingSummaryShow";
import { WorkCenterList } from "./workCenter/WorkCenterList";
import { WorkCenterCreate } from "./workCenter/WorkCenterCreate";
import { WorkCenterEdit } from "./workCenter/WorkCenterEdit";
import { WorkCenterShow } from "./workCenter/WorkCenterShow";
import { WorkCenterAlternativeList } from "./workCenterAlternative/WorkCenterAlternativeList";
import { WorkCenterAlternativeCreate } from "./workCenterAlternative/WorkCenterAlternativeCreate";
import { WorkCenterAlternativeEdit } from "./workCenterAlternative/WorkCenterAlternativeEdit";
import { WorkCenterAlternativeShow } from "./workCenterAlternative/WorkCenterAlternativeShow";
import { WorkCenterCapacityList } from "./workCenterCapacity/WorkCenterCapacityList";
import { WorkCenterCapacityCreate } from "./workCenterCapacity/WorkCenterCapacityCreate";
import { WorkCenterCapacityEdit } from "./workCenterCapacity/WorkCenterCapacityEdit";
import { WorkCenterCapacityShow } from "./workCenterCapacity/WorkCenterCapacityShow";
import { WorkCenterProductivityList } from "./workCenterProductivity/WorkCenterProductivityList";
import { WorkCenterProductivityCreate } from "./workCenterProductivity/WorkCenterProductivityCreate";
import { WorkCenterProductivityEdit } from "./workCenterProductivity/WorkCenterProductivityEdit";
import { WorkCenterProductivityShow } from "./workCenterProductivity/WorkCenterProductivityShow";
import { WorkCenterProductivityLossList } from "./workCenterProductivityLoss/WorkCenterProductivityLossList";
import { WorkCenterProductivityLossCreate } from "./workCenterProductivityLoss/WorkCenterProductivityLossCreate";
import { WorkCenterProductivityLossEdit } from "./workCenterProductivityLoss/WorkCenterProductivityLossEdit";
import { WorkCenterProductivityLossShow } from "./workCenterProductivityLoss/WorkCenterProductivityLossShow";
import { WorkCenterProductivityLossTypeList } from "./workCenterProductivityLossType/WorkCenterProductivityLossTypeList";
import { WorkCenterProductivityLossTypeCreate } from "./workCenterProductivityLossType/WorkCenterProductivityLossTypeCreate";
import { WorkCenterProductivityLossTypeEdit } from "./workCenterProductivityLossType/WorkCenterProductivityLossTypeEdit";
import { WorkCenterProductivityLossTypeShow } from "./workCenterProductivityLossType/WorkCenterProductivityLossTypeShow";
import { WorkCenterRoutingList } from "./workCenterRouting/WorkCenterRoutingList";
import { WorkCenterRoutingCreate } from "./workCenterRouting/WorkCenterRoutingCreate";
import { WorkCenterRoutingEdit } from "./workCenterRouting/WorkCenterRoutingEdit";
import { WorkCenterRoutingShow } from "./workCenterRouting/WorkCenterRoutingShow";
import { WorkCenterTagList } from "./workCenterTag/WorkCenterTagList";
import { WorkCenterTagCreate } from "./workCenterTag/WorkCenterTagCreate";
import { WorkCenterTagEdit } from "./workCenterTag/WorkCenterTagEdit";
import { WorkCenterTagShow } from "./workCenterTag/WorkCenterTagShow";
import { WorkCenterWorkCenterTagList } from "./workCenterWorkCenterTag/WorkCenterWorkCenterTagList";
import { WorkCenterWorkCenterTagCreate } from "./workCenterWorkCenterTag/WorkCenterWorkCenterTagCreate";
import { WorkCenterWorkCenterTagEdit } from "./workCenterWorkCenterTag/WorkCenterWorkCenterTagEdit";
import { WorkCenterWorkCenterTagShow } from "./workCenterWorkCenterTag/WorkCenterWorkCenterTagShow";
import { WorkSheetTypeList } from "./workSheetType/WorkSheetTypeList";
import { WorkSheetTypeCreate } from "./workSheetType/WorkSheetTypeCreate";
import { WorkSheetTypeEdit } from "./workSheetType/WorkSheetTypeEdit";
import { WorkSheetTypeShow } from "./workSheetType/WorkSheetTypeShow";
import { WorkOrderStatusList } from "./workOrderStatus/WorkOrderStatusList";
import { WorkOrderStatusCreate } from "./workOrderStatus/WorkOrderStatusCreate";
import { WorkOrderStatusEdit } from "./workOrderStatus/WorkOrderStatusEdit";
import { WorkOrderStatusShow } from "./workOrderStatus/WorkOrderStatusShow";
import { WorkOrderList } from "./workOrder/WorkOrderList";
import { WorkOrderCreate } from "./workOrder/WorkOrderCreate";
import { WorkOrderEdit } from "./workOrder/WorkOrderEdit";
import { WorkOrderShow } from "./workOrder/WorkOrderShow";
import { ScrapReasonList } from "./scrapReason/ScrapReasonList";
import { ScrapReasonCreate } from "./scrapReason/ScrapReasonCreate";
import { ScrapReasonEdit } from "./scrapReason/ScrapReasonEdit";
import { ScrapReasonShow } from "./scrapReason/ScrapReasonShow";
import { WorkOrderRoutingList } from "./workOrderRouting/WorkOrderRoutingList";
import { WorkOrderRoutingCreate } from "./workOrderRouting/WorkOrderRoutingCreate";
import { WorkOrderRoutingEdit } from "./workOrderRouting/WorkOrderRoutingEdit";
import { WorkOrderRoutingShow } from "./workOrderRouting/WorkOrderRoutingShow";
import { WorkOrderDependencyList } from "./workOrderDependency/WorkOrderDependencyList";
import { WorkOrderDependencyCreate } from "./workOrderDependency/WorkOrderDependencyCreate";
import { WorkOrderDependencyEdit } from "./workOrderDependency/WorkOrderDependencyEdit";
import { WorkOrderDependencyShow } from "./workOrderDependency/WorkOrderDependencyShow";
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
          name="EmployeeDepartment"
          list={EmployeeDepartmentList}
          edit={EmployeeDepartmentEdit}
          create={EmployeeDepartmentCreate}
          show={EmployeeDepartmentShow}
        />
        <Resource
          name="Employee"
          list={EmployeeList}
          edit={EmployeeEdit}
          create={EmployeeCreate}
          show={EmployeeShow}
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
        <Resource
          name="TradingSummary"
          list={TradingSummaryList}
          edit={TradingSummaryEdit}
          create={TradingSummaryCreate}
          show={TradingSummaryShow}
        />
        <Resource
          name="WorkCenter"
          list={WorkCenterList}
          edit={WorkCenterEdit}
          create={WorkCenterCreate}
          show={WorkCenterShow}
        />
        <Resource
          name="WorkCenterAlternative"
          list={WorkCenterAlternativeList}
          edit={WorkCenterAlternativeEdit}
          create={WorkCenterAlternativeCreate}
          show={WorkCenterAlternativeShow}
        />
        <Resource
          name="WorkCenterCapacity"
          list={WorkCenterCapacityList}
          edit={WorkCenterCapacityEdit}
          create={WorkCenterCapacityCreate}
          show={WorkCenterCapacityShow}
        />
        <Resource
          name="WorkCenterProductivity"
          list={WorkCenterProductivityList}
          edit={WorkCenterProductivityEdit}
          create={WorkCenterProductivityCreate}
          show={WorkCenterProductivityShow}
        />
        <Resource
          name="WorkCenterProductivityLoss"
          list={WorkCenterProductivityLossList}
          edit={WorkCenterProductivityLossEdit}
          create={WorkCenterProductivityLossCreate}
          show={WorkCenterProductivityLossShow}
        />
        <Resource
          name="WorkCenterProductivityLossType"
          list={WorkCenterProductivityLossTypeList}
          edit={WorkCenterProductivityLossTypeEdit}
          create={WorkCenterProductivityLossTypeCreate}
          show={WorkCenterProductivityLossTypeShow}
        />
        <Resource
          name="WorkCenterRouting"
          list={WorkCenterRoutingList}
          edit={WorkCenterRoutingEdit}
          create={WorkCenterRoutingCreate}
          show={WorkCenterRoutingShow}
        />
        <Resource
          name="WorkCenterTag"
          list={WorkCenterTagList}
          edit={WorkCenterTagEdit}
          create={WorkCenterTagCreate}
          show={WorkCenterTagShow}
        />
        <Resource
          name="WorkCenterWorkCenterTag"
          list={WorkCenterWorkCenterTagList}
          edit={WorkCenterWorkCenterTagEdit}
          create={WorkCenterWorkCenterTagCreate}
          show={WorkCenterWorkCenterTagShow}
        />
        <Resource
          name="WorkSheetType"
          list={WorkSheetTypeList}
          edit={WorkSheetTypeEdit}
          create={WorkSheetTypeCreate}
          show={WorkSheetTypeShow}
        />
        <Resource
          name="WorkOrderStatus"
          list={WorkOrderStatusList}
          edit={WorkOrderStatusEdit}
          create={WorkOrderStatusCreate}
          show={WorkOrderStatusShow}
        />
        <Resource
          name="WorkOrder"
          list={WorkOrderList}
          edit={WorkOrderEdit}
          create={WorkOrderCreate}
          show={WorkOrderShow}
        />
        <Resource
          name="ScrapReason"
          list={ScrapReasonList}
          edit={ScrapReasonEdit}
          create={ScrapReasonCreate}
          show={ScrapReasonShow}
        />
        <Resource
          name="WorkOrderRouting"
          list={WorkOrderRoutingList}
          edit={WorkOrderRoutingEdit}
          create={WorkOrderRoutingCreate}
          show={WorkOrderRoutingShow}
        />
        <Resource
          name="WorkOrderDependency"
          list={WorkOrderDependencyList}
          edit={WorkOrderDependencyEdit}
          create={WorkOrderDependencyCreate}
          show={WorkOrderDependencyShow}
        />
      </Admin>
    </div>
  );
};

export default App;
