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

import { CASHREPOSITORY_TITLE_FIELD } from "./CashRepositoryTitle";
import { PURCHASE_TITLE_FIELD } from "../purchase/PurchaseTitle";
import { TENANT_TITLE_FIELD } from "../tenant/TenantTitle";
import { ACCOUNTTRANSACTION_TITLE_FIELD } from "../accountTransaction/AccountTransactionTitle";
import { CURRENCY_TITLE_FIELD } from "../currency/CurrencyTitle";
import { EMPLOYEE_TITLE_FIELD } from "../employee/EmployeeTitle";
import { EXPENSEITEM_TITLE_FIELD } from "../expenseItem/ExpenseItemTitle";
import { SUPPLIER_TITLE_FIELD } from "../supplier/SupplierTitle";
import { VOUCHERTYPE_TITLE_FIELD } from "../voucherType/VoucherTypeTitle";
import { INVOICETYPE_TITLE_FIELD } from "../invoiceType/InvoiceTypeTitle";
import { PAYMENTTERM_TITLE_FIELD } from "../paymentTerm/PaymentTermTitle";
import { PAYMENTTYPE_TITLE_FIELD } from "../paymentType/PaymentTypeTitle";
import { PURCHASEPRICETYPE_TITLE_FIELD } from "../purchasePriceType/PurchasePriceTypeTitle";
import { STORE_TITLE_FIELD } from "../store/StoreTitle";
import { CUSTOMER_TITLE_FIELD } from "../customer/CustomerTitle";
import { ORDERSTATUS_TITLE_FIELD } from "../orderStatus/OrderStatusTitle";
import { PAYMENTSTATUS_TITLE_FIELD } from "../paymentStatus/PaymentStatusTitle";
import { SALEPRICETYPE_TITLE_FIELD } from "../salePriceType/SalePriceTypeTitle";
import { SALEQUOTATION_TITLE_FIELD } from "../saleQuotation/SaleQuotationTitle";
import { SHIPPINGSTATUS_TITLE_FIELD } from "../shippingStatus/ShippingStatusTitle";
import { SALE_TITLE_FIELD } from "../sale/SaleTitle";

export const CashRepositoryShow = (props: ShowProps): React.ReactElement => {
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
        <ReferenceField
          label="ParentCashRepositoryId"
          source="cashrepository.id"
          reference="CashRepository"
        >
          <TextField source={CASHREPOSITORY_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField
          label="Purchases"
          source="purchase.id"
          reference="Purchase"
        >
          <TextField source={PURCHASE_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField label="TenantId" source="tenant.id" reference="Tenant">
          <TextField source={TENANT_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="CashRepository"
          target="parentCashRepositoryIdId"
          label="CashRepositories"
        >
          <Datagrid rowClick="show">
            <TextField label="Code" source="code" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="Description" source="description" />
            <TextField label="ID" source="id" />
            <BooleanField label="IsActive" source="isActive" />
            <TextField label="Name" source="name" />
            <TextField label="NormalizedName" source="normalizedName" />
            <TextField label="Note" source="note" />
            <ReferenceField
              label="ParentCashRepositoryId"
              source="cashrepository.id"
              reference="CashRepository"
            >
              <TextField source={CASHREPOSITORY_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Purchases"
              source="purchase.id"
              reference="Purchase"
            >
              <TextField source={PURCHASE_TITLE_FIELD} />
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
        <ReferenceManyField
          reference="PaymentVoucher"
          target="cashRepositoryIdId"
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
          reference="PurchaseReturn"
          target="cashRepositoryIdId"
          label="PurchaseReturns"
        >
          <Datagrid rowClick="show">
            <ReferenceField
              label="CashRepositoryId"
              source="cashrepository.id"
              reference="CashRepository"
            >
              <TextField source={CASHREPOSITORY_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <TextField label="DiscountTotal" source="discountTotal" />
            <TextField label="ID" source="id" />
            <ReferenceField
              label="InvoiceTypeId"
              source="invoicetype.id"
              reference="InvoiceType"
            >
              <TextField source={INVOICETYPE_TITLE_FIELD} />
            </ReferenceField>
            <BooleanField label="IsActive" source="isActive" />
            <BooleanField label="IsCancelled" source="isCancelled" />
            <BooleanField label="IsReplicated" source="isReplicated" />
            <TextField label="NetTotal" source="netTotal" />
            <TextField label="NonTaxableTotal" source="nonTaxableTotal" />
            <TextField label="Note" source="note" />
            <TextField label="Paid" source="paid" />
            <ReferenceField
              label="PaymentTermId"
              source="paymentterm.id"
              reference="PaymentTerm"
            >
              <TextField source={PAYMENTTERM_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="PaymentTypeId"
              source="paymenttype.id"
              reference="PaymentType"
            >
              <TextField source={PAYMENTTYPE_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="PurchaseId"
              source="purchase.id"
              reference="Purchase"
            >
              <TextField source={PURCHASE_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="PurchasePriceTypeId"
              source="purchasepricetype.id"
              reference="PurchasePriceType"
            >
              <TextField source={PURCHASEPRICETYPE_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="PurchaseReturnDate" source="purchaseReturnDate" />
            <TextField
              label="PurchaseReturnTotal"
              source="purchaseReturnTotal"
            />
            <TextField label="ReferenceNumber" source="referenceNumber" />
            <TextField label="Remaining" source="remaining" />
            <TextField label="SequenceNumber" source="sequenceNumber" />
            <ReferenceField label="StoreId" source="store.id" reference="Store">
              <TextField source={STORE_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="SupplierId"
              source="supplier.id"
              reference="Supplier"
            >
              <TextField source={SUPPLIER_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Tax" source="tax" />
            <TextField label="TaxRate" source="taxRate" />
            <TextField label="TaxableTotal" source="taxableTotal" />
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
        <ReferenceManyField
          reference="ReceiptVoucher"
          target="cashRepositoryIdId"
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
          reference="SaleOrder"
          target="cashRepositoryIdId"
          label="SaleOrders"
        >
          <Datagrid rowClick="show">
            <TextField label="BillingAddress" source="billingAddress" />
            <ReferenceField
              label="CashRepositoryId"
              source="cashrepository.id"
              reference="CashRepository"
            >
              <TextField source={CASHREPOSITORY_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <ReferenceField
              label="CustomerId"
              source="customer.id"
              reference="Customer"
            >
              <TextField source={CUSTOMER_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="DeliveryDate" source="deliveryDate" />
            <TextField label="DiscountTotal" source="discountTotal" />
            <TextField
              label="ExpectedDeliveryDate"
              source="expectedDeliveryDate"
            />
            <TextField label="ID" source="id" />
            <ReferenceField
              label="InvoiceTypeId"
              source="invoicetype.id"
              reference="InvoiceType"
            >
              <TextField source={INVOICETYPE_TITLE_FIELD} />
            </ReferenceField>
            <BooleanField label="IsActive" source="isActive" />
            <BooleanField label="IsCancelled" source="isCancelled" />
            <BooleanField label="IsReplicated" source="isReplicated" />
            <TextField label="NetTotal" source="netTotal" />
            <TextField label="NonTaxableTotal" source="nonTaxableTotal" />
            <TextField label="Note" source="note" />
            <ReferenceField
              label="OrderStatus"
              source="orderstatus.id"
              reference="OrderStatus"
            >
              <TextField source={ORDERSTATUS_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="PaymentStatus"
              source="paymentstatus.id"
              reference="PaymentStatus"
            >
              <TextField source={PAYMENTSTATUS_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="PaymentTypeId"
              source="paymenttype.id"
              reference="PaymentType"
            >
              <TextField source={PAYMENTTYPE_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="ReferenceNumber" source="referenceNumber" />
            <TextField label="SaleOrderDate" source="saleOrderDate" />
            <ReferenceField
              label="SalePriceType"
              source="salepricetype.id"
              reference="SalePriceType"
            >
              <TextField source={SALEPRICETYPE_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="SalePriceTypeId" source="salePriceTypeId" />
            <ReferenceField
              label="SaleQuotationId"
              source="salequotation.id"
              reference="SaleQuotation"
            >
              <TextField source={SALEQUOTATION_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="SaleTotal" source="saleTotal" />
            <TextField label="ShippingAddress" source="shippingAddress" />
            <TextField label="ShippingCost" source="shippingCost" />
            <ReferenceField
              label="ShippingStatus"
              source="shippingstatus.id"
              reference="ShippingStatus"
            >
              <TextField source={SHIPPINGSTATUS_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField label="StoreId" source="store.id" reference="Store">
              <TextField source={STORE_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Tax" source="tax" />
            <TextField label="TaxRate" source="taxRate" />
            <TextField label="TaxableTotal" source="taxableTotal" />
            <ReferenceField
              label="Tenant"
              source="tenant.id"
              reference="Tenant"
            >
              <TextField source={TENANT_TITLE_FIELD} />
            </ReferenceField>
            <TextField
              label="TransactionDateTime"
              source="transactionDateTime"
            />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="SaleReturn"
          target="cashRepositoryIdId"
          label="SaleReturns"
        >
          <Datagrid rowClick="show">
            <ReferenceField
              label="CashRepositoryId"
              source="cashrepository.id"
              reference="CashRepository"
            >
              <TextField source={CASHREPOSITORY_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <ReferenceField
              label="CustomerId"
              source="customer.id"
              reference="Customer"
            >
              <TextField source={CUSTOMER_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="DiscountTotal" source="discountTotal" />
            <TextField label="ID" source="id" />
            <ReferenceField
              label="InvoiceTypeId"
              source="invoicetype.id"
              reference="InvoiceType"
            >
              <TextField source={INVOICETYPE_TITLE_FIELD} />
            </ReferenceField>
            <BooleanField label="IsActive" source="isActive" />
            <BooleanField label="IsCancelled" source="isCancelled" />
            <BooleanField label="IsReplicated" source="isReplicated" />
            <TextField label="NetTotal" source="netTotal" />
            <TextField label="NonTaxableTotal" source="nonTaxableTotal" />
            <TextField label="Note" source="note" />
            <TextField label="Paid" source="paid" />
            <ReferenceField
              label="PaymentTermId"
              source="paymentterm.id"
              reference="PaymentTerm"
            >
              <TextField source={PAYMENTTERM_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="PaymentTypeId"
              source="paymenttype.id"
              reference="PaymentType"
            >
              <TextField source={PAYMENTTYPE_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="ReferenceNumber" source="referenceNumber" />
            <TextField label="Remaining" source="remaining" />
            <TextField label="ReturnTotal" source="returnTotal" />
            <ReferenceField label="SaleId" source="sale.id" reference="Sale">
              <TextField source={SALE_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="SalePriceTypeId"
              source="salepricetype.id"
              reference="SalePriceType"
            >
              <TextField source={SALEPRICETYPE_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="SaleReturnDate" source="saleReturnDate" />
            <TextField label="Sequence" source="sequence" />
            <ReferenceField label="StoreId" source="store.id" reference="Store">
              <TextField source={STORE_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Tax" source="tax" />
            <TextField label="TaxRate" source="taxRate" />
            <TextField label="TaxableTotal" source="taxableTotal" />
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
          reference="Sale"
          target="cashRepositoryIdId"
          label="Sales"
        >
          <Datagrid rowClick="show">
            <ReferenceField
              label="CashRepositoryId"
              source="cashrepository.id"
              reference="CashRepository"
            >
              <TextField source={CASHREPOSITORY_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <ReferenceField
              label="CustomerId"
              source="customer.id"
              reference="Customer"
            >
              <TextField source={CUSTOMER_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="DiscountTotal" source="discountTotal" />
            <TextField label="ID" source="id" />
            <ReferenceField
              label="InvoiceTypeId"
              source="invoicetype.id"
              reference="InvoiceType"
            >
              <TextField source={INVOICETYPE_TITLE_FIELD} />
            </ReferenceField>
            <BooleanField label="IsActive" source="isActive" />
            <BooleanField label="IsCancelled" source="isCancelled" />
            <BooleanField label="IsReplicated" source="isReplicated" />
            <TextField label="NetTotal" source="netTotal" />
            <TextField label="NonTaxableTotal" source="nonTaxableTotal" />
            <TextField label="Note" source="note" />
            <TextField label="Paid" source="paid" />
            <ReferenceField
              label="PaymentTerm"
              source="paymentterm.id"
              reference="PaymentTerm"
            >
              <TextField source={PAYMENTTERM_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="PaymentTypeId"
              source="paymenttype.id"
              reference="PaymentType"
            >
              <TextField source={PAYMENTTYPE_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="ReferenceNumber" source="referenceNumber" />
            <TextField label="Remaining" source="remaining" />
            <TextField label="SaleDate" source="saleDate" />
            <ReferenceField
              label="SalePriceTypeId"
              source="salepricetype.id"
              reference="SalePriceType"
            >
              <TextField source={SALEPRICETYPE_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="SaleTotal" source="saleTotal" />
            <TextField label="SequenceNumber" source="sequenceNumber" />
            <ReferenceField label="StoreId" source="store.id" reference="Store">
              <TextField source={STORE_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Tax" source="tax" />
            <TextField label="TaxRate" source="taxRate" />
            <TextField label="TaxableTotal" source="taxableTotal" />
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
      </SimpleShowLayout>
    </Show>
  );
};
