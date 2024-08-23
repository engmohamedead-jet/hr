import * as React from "react";

import {
  List,
  Datagrid,
  ListProps,
  TextField,
  ReferenceField,
  DateField,
  BooleanField,
} from "react-admin";

import Pagination from "../Components/Pagination";
import { USER_TITLE_FIELD } from "../user/UserTitle";
import { EMPLOYEE_TITLE_FIELD } from "../employee/EmployeeTitle";
import { FISCALMONTH_TITLE_FIELD } from "../fiscalMonth/FiscalMonthTitle";
import { TENANT_TITLE_FIELD } from "../tenant/TenantTitle";

export const BonusRequestList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"BonusRequests"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Absent" source="absent" />
        <TextField label="Actual" source="actual" />
        <TextField label="AllStoresValue" source="allStoreValue" />
        <TextField label="AnnualLeave" source="annualLeave" />
        <ReferenceField
          label="ApprovedByUserId"
          source="user.id"
          reference="User"
        >
          <TextField source={USER_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="AssistantManager" source="assistantManager" />
        <DateField source="createdAt" label="Created At" />
        <ReferenceField
          label="EmployeeId"
          source="employee.id"
          reference="Employee"
        >
          <TextField source={EMPLOYEE_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="FinalAmount" source="finalAmount" />
        <ReferenceField
          label="FiscalMonthId"
          source="fiscalmonth.id"
          reference="FiscalMonth"
        >
          <TextField source={FISCALMONTH_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="ID" source="id" />
        <BooleanField label="IsActive" source="isActive" />
        <BooleanField label="IsAppreoved" source="isAppreoved" />
        <TextField label="Note" source="note" />
        <TextField label="Penalty" source="penalty" />
        <TextField label="Percentage2" source="percentage2" />
        <TextField label="Present" source="present" />
        <TextField label="ProratedValue" source="proratedValue" />
        <TextField label="Sales" source="sales" />
        <TextField label="SalesStaff" source="salesStaff" />
        <TextField
          label="SalesTargetPercentage"
          source="salesTargetPercentage"
        />
        <TextField label="ShopManager" source="shopManager" />
        <TextField label="SickLeave" source="sickLeave" />
        <TextField label="Target" source="target" />
        <ReferenceField label="TenantId" source="tenant.id" reference="Tenant">
          <TextField source={TENANT_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Warning" source="warning" />
      </Datagrid>
    </List>
  );
};
