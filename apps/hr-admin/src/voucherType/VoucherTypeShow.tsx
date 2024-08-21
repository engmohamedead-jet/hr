import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  BooleanField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { ACCOUNTTRANSACTION_TITLE_FIELD } from "../accountTransaction/AccountTransactionTitle";
import { CASHREPOSITORY_TITLE_FIELD } from "../cashRepository/CashRepositoryTitle";
import { CURRENCY_TITLE_FIELD } from "../currency/CurrencyTitle";
import { EMPLOYEE_TITLE_FIELD } from "../employee/EmployeeTitle";
import { EXPENSEITEM_TITLE_FIELD } from "../expenseItem/ExpenseItemTitle";
import { SUPPLIER_TITLE_FIELD } from "../supplier/SupplierTitle";
import { TENANT_TITLE_FIELD } from "../tenant/TenantTitle";
import { VOUCHERTYPE_TITLE_FIELD } from "./VoucherTypeTitle";
import { CUSTOMER_TITLE_FIELD } from "../customer/CustomerTitle";

export const VoucherTypeShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Code" source="code" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="Description" source="description" />
        <TextField label="ID" source="id" />
        <BooleanField label="IsActive" source="isActive" />
        <TextField label="Name" source="name" />
        <TextField label="NormalizedName" source="normalizedName" />
        <TextField label="Note" source="note" />
        <ReferenceField label="TenantId" source="tenant.id" reference="Tenant">
          <TextField source={TENANT_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="PaymentVoucher"
          target="voucherTypeIdId"
          label="PaymentVouchers"
        >
          <Datagrid rowClick="show">
            <ReferenceField
              label="AccountTransactionId"
              source="accounttransaction.id"
              reference="AccountTransaction"
            >
              <TextField source={ACCOUNTTRANSACTION_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Amount" source="amount" />
            <ReferenceField
              label="CashRepositoryId"
              source="cashrepository.id"
              reference="CashRepository"
            >
              <TextField source={CASHREPOSITORY_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <ReferenceField
              label="CurrencyId"
              source="currency.id"
              reference="Currency"
            >
              <TextField source={CURRENCY_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="EmployeeId"
              source="employee.id"
              reference="Employee"
            >
              <TextField source={EMPLOYEE_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="ExpenseItemId"
              source="expenseitem.id"
              reference="ExpenseItem"
            >
              <TextField source={EXPENSEITEM_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="ID" source="id" />
            <BooleanField label="IsActive" source="isActive" />
            <TextField label="Note" source="note" />
            <TextField label="PaymentVoucherDate" source="paymentVoucherDate" />
            <TextField label="StatementReference" source="statementReference" />
            <ReferenceField
              label="Supplier"
              source="supplier.id"
              reference="Supplier"
            >
              <TextField source={SUPPLIER_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="TenantId"
              source="tenant.id"
              reference="Tenant"
            >
              <TextField source={TENANT_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
            <ReferenceField
              label="VoucherTypeId"
              source="vouchertype.id"
              reference="VoucherType"
            >
              <TextField source={VOUCHERTYPE_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="ReceiptVoucher"
          target="voucherTypeIdId"
          label="ReceiptVouchers"
        >
          <Datagrid rowClick="show">
            <ReferenceField
              label="AccountTransactionId"
              source="accounttransaction.id"
              reference="AccountTransaction"
            >
              <TextField source={ACCOUNTTRANSACTION_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Amount" source="amount" />
            <ReferenceField
              label="CashRepositoryId"
              source="cashrepository.id"
              reference="CashRepository"
            >
              <TextField source={CASHREPOSITORY_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="ChequeDueDate" source="chequeDueDate" />
            <TextField label="ChequeNumber" source="chequeNumber" />
            <TextField label="ChequeValue" source="chequeValue" />
            <DateField source="createdAt" label="Created At" />
            <ReferenceField
              label="CurrencyId"
              source="currency.id"
              reference="Currency"
            >
              <TextField source={CURRENCY_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="CustomerId"
              source="customer.id"
              reference="Customer"
            >
              <TextField source={CUSTOMER_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="EmployeeId"
              source="employee.id"
              reference="Employee"
            >
              <TextField source={EMPLOYEE_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="ID" source="id" />
            <BooleanField label="IsAcive" source="isAcive" />
            <TextField label="Note" source="note" />
            <TextField label="ReceiptVoucherDate" source="receiptVoucherDate" />
            <TextField label="Sequence" source="sequence" />
            <TextField label="StatementReference" source="statementReference" />
            <ReferenceField
              label="Tenant"
              source="tenant.id"
              reference="Tenant"
            >
              <TextField source={TENANT_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
            <ReferenceField
              label="VoucherTypeId"
              source="vouchertype.id"
              reference="VoucherType"
            >
              <TextField source={VOUCHERTYPE_TITLE_FIELD} />
            </ReferenceField>
            <BooleanField label="IsChequePaid" source="wasChequePaid" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
