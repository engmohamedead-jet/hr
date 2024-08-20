import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  TextInput,
  ReferenceInput,
  SelectInput,
  BooleanInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { EmployeeClassTitle } from "../employeeClass/EmployeeClassTitle";
import { EmployeeDepartmentTitle } from "../employeeDepartment/EmployeeDepartmentTitle";
import { PaymentVoucherTitle } from "../paymentVoucher/PaymentVoucherTitle";
import { ReceiptVoucherTitle } from "../receiptVoucher/ReceiptVoucherTitle";
import { SalePersonTitle } from "../salePerson/SalePersonTitle";
import { TenantTitle } from "../tenant/TenantTitle";

export const EmployeeCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput label="Balance" source="balance" />
        <TextInput label="Code" source="code" />
        <ReferenceInput
          source="employeeClassId.id"
          reference="EmployeeClass"
          label="EmployeeClassId"
        >
          <SelectInput optionText={EmployeeClassTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="employeeDepartmentId.id"
          reference="EmployeeDepartment"
          label="EmployeeDepartmentId"
        >
          <SelectInput optionText={EmployeeDepartmentTitle} />
        </ReferenceInput>
        <BooleanInput label="IsActive" source="isActive" />
        <NumberInput label="LastYearBalance" source="lastYearBalance" />
        <TextInput label="Name" source="name" />
        <TextInput label="NormalizedName" source="normalizedName" />
        <TextInput label="Note" multiline source="note" />
        <ReferenceArrayInput
          source="paymentVouchers"
          reference="PaymentVoucher"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={PaymentVoucherTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="receiptVouchers"
          reference="ReceiptVoucher"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ReceiptVoucherTitle} />
        </ReferenceArrayInput>
        <NumberInput label="RemainingBalance" source="remainingBalance" />
        <ReferenceArrayInput
          source="salePeople"
          reference="SalePerson"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={SalePersonTitle} />
        </ReferenceArrayInput>
        <ReferenceInput
          source="tenantId.id"
          reference="Tenant"
          label="TenantId"
        >
          <SelectInput optionText={TenantTitle} />
        </ReferenceInput>
        <NumberInput label="UsedBalance" source="usedBalance" />
      </SimpleForm>
    </Create>
  );
};
