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

import { CURRENCY_TITLE_FIELD } from "./CurrencyTitle";
import { TENANT_TITLE_FIELD } from "../tenant/TenantTitle";
import { ACCOUNTTRANSACTION_TITLE_FIELD } from "../accountTransaction/AccountTransactionTitle";
import { CASHREPOSITORY_TITLE_FIELD } from "../cashRepository/CashRepositoryTitle";
import { EMPLOYEE_TITLE_FIELD } from "../employee/EmployeeTitle";
import { EXPENSEITEM_TITLE_FIELD } from "../expenseItem/ExpenseItemTitle";
import { SUPPLIER_TITLE_FIELD } from "../supplier/SupplierTitle";
import { VOUCHERTYPE_TITLE_FIELD } from "../voucherType/VoucherTypeTitle";
import { CUSTOMER_TITLE_FIELD } from "../customer/CustomerTitle";
import { BANK_TITLE_FIELD } from "../bank/BankTitle";
import { BANKBRANCH_TITLE_FIELD } from "../bankBranch/BankBranchTitle";
import { PAYMENTMETHOD_TITLE_FIELD } from "../paymentMethod/PaymentMethodTitle";
import { SALE_TITLE_FIELD } from "../sale/SaleTitle";

export const CurrencyShow = (props: ShowProps): React.ReactElement => {
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
          reference="Customer"
          target="currencyIdId"
          label="Customers"
        >
          <Datagrid rowClick="show">
            <TextField
              label="DefaultSalePriceTypeId"
              source="DefaultSalePriceTypeId"
            />
            <TextField label="Address" source="address" />
            <TextField label="Code" source="code" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="Credit" source="credit" />
            <ReferenceField
              label="CurrencyId"
              source="currency.id"
              reference="Currency"
            >
              <TextField source={CURRENCY_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Debit" source="debit" />
            <TextField label="Description" source="description" />
            <TextField label="Email" source="email" />
            <TextField label="FirstBalance" source="firstBalance" />
            <TextField label="FirstBalanceDate" source="firstBalanceDate" />
            <TextField label="ID" source="id" />
            <BooleanField label="IsActive" source="isActive" />
            <BooleanField label="IsSystem" source="isSystem" />
            <BooleanField label="IsUnderRevision" source="isUnderRevision" />
            <TextField label="MaxAllowedDebit" source="maxAllowedDebit" />
            <TextField label="Name" source="name" />
            <TextField label="NormalizedName" source="normalizedName" />
            <TextField label="PhoneNumber" source="phoneNumber" />
            <TextField label="PreviousBalance" source="previousBalance" />
            <TextField label="RevisionDate" source="revisionDate" />
            <TextField label="SaleDiscountRate" source="saleDiscountRate" />
            <TextField label="SupplierId" source="supplierId" />
            <TextField label="TaxNumber" source="taxNumber" />
            <ReferenceField
              label="TenantId"
              source="tenant.id"
              reference="Tenant"
            >
              <TextField source={TENANT_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="Website" source="website" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="PaymentVoucher"
          target="currencyId"
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
          target="currencyIdId"
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
        <ReferenceManyField
          reference="SalePayment"
          target="currencyIdId"
          label="SalePayments"
        >
          <Datagrid rowClick="show">
            <TextField label="LocalCurrencyRate" source="LocalCurrencyRatl" />
            <ReferenceField label="Bank" source="bank.id" reference="Bank">
              <TextField source={BANK_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="BankBrach" source="bankBrach" />
            <ReferenceField
              label="BankBranch"
              source="bankbranch.id"
              reference="BankBranch"
            >
              <TextField source={BANKBRANCH_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="ChequeNumber" source="chequeNumber" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="CreditCardNumber" source="creditCardNumber" />
            <ReferenceField
              label="CurrencyId"
              source="currency.id"
              reference="Currency"
            >
              <TextField source={CURRENCY_TITLE_FIELD} />
            </ReferenceField>
            <TextField
              label="ForeignCurrencyRate"
              source="foreignCurrencyRate"
            />
            <TextField label="ID" source="id" />
            <BooleanField label="IsCheque" source="isCheque" />
            <TextField label="Note" source="note" />
            <TextField label="PaidValue" source="paidValue" />
            <TextField label="PaymentDate" source="paymentDate" />
            <ReferenceField
              label="PaymentMethodId"
              source="paymentmethod.id"
              reference="PaymentMethod"
            >
              <TextField source={PAYMENTMETHOD_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Quantity" source="quantity" />
            <ReferenceField label="SaleId" source="sale.id" reference="Sale">
              <TextField source={SALE_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Seqeunce" source="seqeunce" />
            <ReferenceField
              label="Tenant"
              source="tenant.id"
              reference="Tenant"
            >
              <TextField source={TENANT_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Supplier"
          target="currencyId"
          label="Suppliers"
        >
          <Datagrid rowClick="show">
            <TextField label="Address" source="address" />
            <TextField label="Code" source="code" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="Credit" source="credit" />
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
            <TextField label="Debit" source="debit" />
            <TextField label="Description" source="description" />
            <TextField label="Email" source="email" />
            <TextField label="ID" source="id" />
            <BooleanField label="IsActive" source="isActive" />
            <TextField label="Name" source="name" />
            <TextField label="NormalizedName" source="normalizedName" />
            <TextField label="Note" source="note" />
            <TextField label="PhoneNumber" source="phoneNumber" />
            <ReferenceField
              label="TenantId"
              source="tenant.id"
              reference="Tenant"
            >
              <TextField source={TENANT_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="Website" source="website" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
