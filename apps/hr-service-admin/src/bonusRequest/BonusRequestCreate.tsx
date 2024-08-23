import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  ReferenceInput,
  SelectInput,
  BooleanInput,
  TextInput,
} from "react-admin";

import { UserTitle } from "../user/UserTitle";
import { EmployeeTitle } from "../employee/EmployeeTitle";
import { FiscalMonthTitle } from "../fiscalMonth/FiscalMonthTitle";
import { TenantTitle } from "../tenant/TenantTitle";

export const BonusRequestCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput label="Absent" source="absent" />
        <NumberInput label="Actual" source="actual" />
        <NumberInput label="AllStoresValue" source="allStoreValue" />
        <NumberInput label="AnnualLeave" source="annualLeave" />
        <ReferenceInput
          source="approvedByUserId.id"
          reference="User"
          label="ApprovedByUserId"
        >
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
        <NumberInput label="AssistantManager" source="assistantManager" />
        <ReferenceInput
          source="employee.id"
          reference="Employee"
          label="EmployeeId"
        >
          <SelectInput optionText={EmployeeTitle} />
        </ReferenceInput>
        <NumberInput label="FinalAmount" source="finalAmount" />
        <ReferenceInput
          source="fiscalMonthId.id"
          reference="FiscalMonth"
          label="FiscalMonthId"
        >
          <SelectInput optionText={FiscalMonthTitle} />
        </ReferenceInput>
        <BooleanInput label="IsActive" source="isActive" />
        <BooleanInput label="IsAppreoved" source="isAppreoved" />
        <TextInput label="Note" multiline source="note" />
        <NumberInput label="Penalty" source="penalty" />
        <NumberInput label="Percentage2" source="percentage2" />
        <NumberInput label="Present" source="present" />
        <NumberInput label="ProratedValue" source="proratedValue" />
        <NumberInput label="Sales" source="sales" />
        <NumberInput label="SalesStaff" source="salesStaff" />
        <NumberInput
          label="SalesTargetPercentage"
          source="salesTargetPercentage"
        />
        <NumberInput label="ShopManager" source="shopManager" />
        <NumberInput label="SickLeave" source="sickLeave" />
        <NumberInput label="Target" source="target" />
        <ReferenceInput
          source="tenantId.id"
          reference="Tenant"
          label="TenantId"
        >
          <SelectInput optionText={TenantTitle} />
        </ReferenceInput>
        <NumberInput label="Warning" source="warning" />
      </SimpleForm>
    </Create>
  );
};
