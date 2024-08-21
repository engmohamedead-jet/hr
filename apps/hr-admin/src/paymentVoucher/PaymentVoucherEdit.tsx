import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  NumberInput,
  BooleanInput,
  TextInput,
  DateTimeInput,
} from "react-admin";

import { AccountTransactionTitle } from "../accountTransaction/AccountTransactionTitle";
import { CashRepositoryTitle } from "../cashRepository/CashRepositoryTitle";
import { CurrencyTitle } from "../currency/CurrencyTitle";
import { EmployeeTitle } from "../employee/EmployeeTitle";
import { ExpenseItemTitle } from "../expenseItem/ExpenseItemTitle";
import { SupplierTitle } from "../supplier/SupplierTitle";
import { TenantTitle } from "../tenant/TenantTitle";
import { VoucherTypeTitle } from "../voucherType/VoucherTypeTitle";

export const PaymentVoucherEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput
          source="accountTransactionId.id"
          reference="AccountTransaction"
          label="AccountTransactionId"
        >
          <SelectInput optionText={AccountTransactionTitle} />
        </ReferenceInput>
        <NumberInput label="Amount" source="amount" />
        <ReferenceInput
          source="cashRepositoryId.id"
          reference="CashRepository"
          label="CashRepositoryId"
        >
          <SelectInput optionText={CashRepositoryTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="currency.id"
          reference="Currency"
          label="CurrencyId"
        >
          <SelectInput optionText={CurrencyTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="employeeId.id"
          reference="Employee"
          label="EmployeeId"
        >
          <SelectInput optionText={EmployeeTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="expenseItemId.id"
          reference="ExpenseItem"
          label="ExpenseItemId"
        >
          <SelectInput optionText={ExpenseItemTitle} />
        </ReferenceInput>
        <BooleanInput label="IsActive" source="isActive" />
        <TextInput label="Note" source="note" />
        <DateTimeInput label="PaymentVoucherDate" source="paymentVoucherDate" />
        <TextInput label="StatementReference" source="statementReference" />
        <ReferenceInput
          source="supplier.id"
          reference="Supplier"
          label="Supplier"
        >
          <SelectInput optionText={SupplierTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="tenantId.id"
          reference="Tenant"
          label="TenantId"
        >
          <SelectInput optionText={TenantTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="voucherTypeId.id"
          reference="VoucherType"
          label="VoucherTypeId"
        >
          <SelectInput optionText={VoucherTypeTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
