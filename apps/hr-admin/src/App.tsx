import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { DepartmentList } from "./department/DepartmentList";
import { DepartmentCreate } from "./department/DepartmentCreate";
import { DepartmentEdit } from "./department/DepartmentEdit";
import { DepartmentShow } from "./department/DepartmentShow";
import { EmployeeList } from "./employee/EmployeeList";
import { EmployeeCreate } from "./employee/EmployeeCreate";
import { EmployeeEdit } from "./employee/EmployeeEdit";
import { EmployeeShow } from "./employee/EmployeeShow";
import { RoleList } from "./role/RoleList";
import { RoleCreate } from "./role/RoleCreate";
import { RoleEdit } from "./role/RoleEdit";
import { RoleShow } from "./role/RoleShow";
import { EmployeeClassList } from "./employeeClass/EmployeeClassList";
import { EmployeeClassCreate } from "./employeeClass/EmployeeClassCreate";
import { EmployeeClassEdit } from "./employeeClass/EmployeeClassEdit";
import { EmployeeClassShow } from "./employeeClass/EmployeeClassShow";
import { SalaryItemList } from "./salaryItem/SalaryItemList";
import { SalaryItemCreate } from "./salaryItem/SalaryItemCreate";
import { SalaryItemEdit } from "./salaryItem/SalaryItemEdit";
import { SalaryItemShow } from "./salaryItem/SalaryItemShow";
import { FiscalMonthList } from "./fiscalMonth/FiscalMonthList";
import { FiscalMonthCreate } from "./fiscalMonth/FiscalMonthCreate";
import { FiscalMonthEdit } from "./fiscalMonth/FiscalMonthEdit";
import { FiscalMonthShow } from "./fiscalMonth/FiscalMonthShow";
import { EmployeeSalaryList } from "./employeeSalary/EmployeeSalaryList";
import { EmployeeSalaryCreate } from "./employeeSalary/EmployeeSalaryCreate";
import { EmployeeSalaryEdit } from "./employeeSalary/EmployeeSalaryEdit";
import { EmployeeSalaryShow } from "./employeeSalary/EmployeeSalaryShow";
import { EmployeeSalaryDetailList } from "./employeeSalaryDetail/EmployeeSalaryDetailList";
import { EmployeeSalaryDetailCreate } from "./employeeSalaryDetail/EmployeeSalaryDetailCreate";
import { EmployeeSalaryDetailEdit } from "./employeeSalaryDetail/EmployeeSalaryDetailEdit";
import { EmployeeSalaryDetailShow } from "./employeeSalaryDetail/EmployeeSalaryDetailShow";
import { EmployeeClassSalaryItemValueList } from "./employeeClassSalaryItemValue/EmployeeClassSalaryItemValueList";
import { EmployeeClassSalaryItemValueCreate } from "./employeeClassSalaryItemValue/EmployeeClassSalaryItemValueCreate";
import { EmployeeClassSalaryItemValueEdit } from "./employeeClassSalaryItemValue/EmployeeClassSalaryItemValueEdit";
import { EmployeeClassSalaryItemValueShow } from "./employeeClassSalaryItemValue/EmployeeClassSalaryItemValueShow";
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
        title={"hr"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
        <Resource
          name="Department"
          list={DepartmentList}
          edit={DepartmentEdit}
          create={DepartmentCreate}
          show={DepartmentShow}
        />
        <Resource
          name="Employee"
          list={EmployeeList}
          edit={EmployeeEdit}
          create={EmployeeCreate}
          show={EmployeeShow}
        />
        <Resource
          name="Role"
          list={RoleList}
          edit={RoleEdit}
          create={RoleCreate}
          show={RoleShow}
        />
        <Resource
          name="EmployeeClass"
          list={EmployeeClassList}
          edit={EmployeeClassEdit}
          create={EmployeeClassCreate}
          show={EmployeeClassShow}
        />
        <Resource
          name="SalaryItem"
          list={SalaryItemList}
          edit={SalaryItemEdit}
          create={SalaryItemCreate}
          show={SalaryItemShow}
        />
        <Resource
          name="FiscalMonth"
          list={FiscalMonthList}
          edit={FiscalMonthEdit}
          create={FiscalMonthCreate}
          show={FiscalMonthShow}
        />
        <Resource
          name="EmployeeSalary"
          list={EmployeeSalaryList}
          edit={EmployeeSalaryEdit}
          create={EmployeeSalaryCreate}
          show={EmployeeSalaryShow}
        />
        <Resource
          name="EmployeeSalaryDetail"
          list={EmployeeSalaryDetailList}
          edit={EmployeeSalaryDetailEdit}
          create={EmployeeSalaryDetailCreate}
          show={EmployeeSalaryDetailShow}
        />
        <Resource
          name="EmployeeClassSalaryItemValue"
          list={EmployeeClassSalaryItemValueList}
          edit={EmployeeClassSalaryItemValueEdit}
          create={EmployeeClassSalaryItemValueCreate}
          show={EmployeeClassSalaryItemValueShow}
        />
      </Admin>
    </div>
  );
};

export default App;
