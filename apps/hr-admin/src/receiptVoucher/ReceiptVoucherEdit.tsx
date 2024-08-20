import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  NumberInput,
  DateTimeInput,
  TextInput,
  BooleanInput,
} from "react-admin";

import { AccountTransactionTitle } from "../accountTransaction/AccountTransactionTitle";
import { CashRepositoryTitle } from "../cashRepository/CashRepositoryTitle";
import { CurrencyTitle } from "../currency/CurrencyTitle";
import { CustomerTitle } from "../customer/CustomerTitle";
import { EmployeeTitle } from "../employee/EmployeeTitle";
import { TenantTitle } from "../tenant/TenantTitle";
import { VoucherTypeTitle } from "../voucherType/VoucherTypeTitle";

export const ReceiptVoucherEdit = (props: EditProps): React.ReactElement => {
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
        <DateTimeInput label="ChequeDueDate" source="chequeDueDate" />
        <TextInput label="ChequeNumber" source="chequeNumber" />
        <TextInput label="ChequeValue" source="chequeValue" />
        <ReferenceInput
          source="currencyId.id"
          reference="Currency"
          label="CurrencyId"
        >
          <SelectInput optionText={CurrencyTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="customerId.id"
          reference="Customer"
          label="CustomerId"
        >
          <SelectInput optionText={CustomerTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="employeeId.id"
          reference="Employee"
          label="EmployeeId"
        >
          <SelectInput optionText={EmployeeTitle} />
        </ReferenceInput>
        <BooleanInput label="IsAcive" source="isAcive" />
        <TextInput label="Note" multiline source="note" />
        <DateTimeInput label="ReceiptVoucherDate" source="receiptVoucherDate" />
        <TextInput label="Sequence" source="sequence" />
        <TextInput label="StatementReference" source="statementReference" />
        <ReferenceInput source="tenant.id" reference="Tenant" label="Tenant">
          <SelectInput optionText={TenantTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="voucherTypeId.id"
          reference="VoucherType"
          label="VoucherTypeId"
        >
          <SelectInput optionText={VoucherTypeTitle} />
        </ReferenceInput>
        <BooleanInput label="IsChequePaid" source="wasChequePaid" />
      </SimpleForm>
    </Edit>
  );
};
