import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  ReferenceField,
  TextField,
  DateField,
  BooleanField,
} from "react-admin";

import { ACCOUNTTRANSACTION_TITLE_FIELD } from "../accountTransaction/AccountTransactionTitle";
import { CASHREPOSITORY_TITLE_FIELD } from "../cashRepository/CashRepositoryTitle";
import { CURRENCY_TITLE_FIELD } from "../currency/CurrencyTitle";
import { EMPLOYEE_TITLE_FIELD } from "../employee/EmployeeTitle";
import { EXPENSEITEM_TITLE_FIELD } from "../expenseItem/ExpenseItemTitle";
import { SUPPLIER_TITLE_FIELD } from "../supplier/SupplierTitle";
import { TENANT_TITLE_FIELD } from "../tenant/TenantTitle";
import { VOUCHERTYPE_TITLE_FIELD } from "../voucherType/VoucherTypeTitle";

export const PaymentVoucherShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
        <ReferenceField label="TenantId" source="tenant.id" reference="Tenant">
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
      </SimpleShowLayout>
    </Show>
  );
};
