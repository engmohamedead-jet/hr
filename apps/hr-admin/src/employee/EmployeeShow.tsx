import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
  BooleanField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { ACCOUNTTRANSACTION_TITLE_FIELD } from "../accountTransaction/AccountTransactionTitle";
import { CASHREPOSITORY_TITLE_FIELD } from "../cashRepository/CashRepositoryTitle";
import { CURRENCY_TITLE_FIELD } from "../currency/CurrencyTitle";
import { EMPLOYEE_TITLE_FIELD } from "./EmployeeTitle";
import { EXPENSEITEM_TITLE_FIELD } from "../expenseItem/ExpenseItemTitle";
import { SUPPLIER_TITLE_FIELD } from "../supplier/SupplierTitle";
import { TENANT_TITLE_FIELD } from "../tenant/TenantTitle";
import { VOUCHERTYPE_TITLE_FIELD } from "../voucherType/VoucherTypeTitle";
import { CUSTOMER_TITLE_FIELD } from "../customer/CustomerTitle";
import { ACCOUNT_TITLE_FIELD } from "../account/AccountTitle";
import { SALETEAM_TITLE_FIELD } from "../saleTeam/SaleTeamTitle";
import { EMPLOYEECLASS_TITLE_FIELD } from "../employeeClass/EmployeeClassTitle";
import { EMPLOYEEDEPARTMENT_TITLE_FIELD } from "../employeeDepartment/EmployeeDepartmentTitle";

export const EmployeeShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Balance" source="balance" />
        <TextField label="Code" source="code" />
        <DateField source="createdAt" label="Created At" />
        <ReferenceField
          label="EmployeeClassId"
          source="employeeclass.id"
          reference="EmployeeClass"
        >
          <TextField source={EMPLOYEECLASS_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField
          label="EmployeeDepartmentId"
          source="employeedepartment.id"
          reference="EmployeeDepartment"
        >
          <TextField source={EMPLOYEEDEPARTMENT_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="ID" source="id" />
        <BooleanField label="IsActive" source="isActive" />
        <TextField label="LastYearBalance" source="lastYearBalance" />
        <TextField label="Name" source="name" />
        <TextField label="NormalizedName" source="normalizedName" />
        <TextField label="Note" source="note" />
        <TextField label="RemainingBalance" source="remainingBalance" />
        <ReferenceField label="TenantId" source="tenant.id" reference="Tenant">
          <TextField source={TENANT_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="UsedBalance" source="usedBalance" />
        <ReferenceManyField
          reference="PaymentVoucher"
          target="employeeIdId"
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
          target="employeeIdId"
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
          reference="SalePerson"
          target="employeeIdId"
          label="SalePeople"
        >
          <Datagrid rowClick="show">
            <ReferenceField
              label="AccountId"
              source="account.id"
              reference="Account"
            >
              <TextField source={ACCOUNT_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Address" source="address" />
            <TextField label="Code" source="code" />
            <TextField label="CommissionRate" source="commissionRate" />
            <DateField source="createdAt" label="Created At" />
            <ReferenceField
              label="EmployeeId"
              source="employee.id"
              reference="Employee"
            >
              <TextField source={EMPLOYEE_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="ID" source="id" />
            <BooleanField label="IsActive" source="isActive" />
            <TextField label="Name" source="name" />
            <TextField label="NormalizedName" source="normalizedName" />
            <TextField label="PhoneNumber" source="phoneNumber" />
            <TextField label="Photo" source="photo" />
            <ReferenceField
              label="SaleTeamId"
              source="saleteam.id"
              reference="SaleTeam"
            >
              <TextField source={SALETEAM_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="TenantId"
              source="tenant.id"
              reference="Tenant"
            >
              <TextField source={TENANT_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
