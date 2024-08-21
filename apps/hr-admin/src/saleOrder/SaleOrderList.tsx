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
import { CASHREPOSITORY_TITLE_FIELD } from "../cashRepository/CashRepositoryTitle";
import { CUSTOMER_TITLE_FIELD } from "../customer/CustomerTitle";
import { INVOICETYPE_TITLE_FIELD } from "../invoiceType/InvoiceTypeTitle";
import { ORDERSTATUS_TITLE_FIELD } from "../orderStatus/OrderStatusTitle";
import { PAYMENTSTATUS_TITLE_FIELD } from "../paymentStatus/PaymentStatusTitle";
import { PAYMENTTYPE_TITLE_FIELD } from "../paymentType/PaymentTypeTitle";
import { SALEPRICETYPE_TITLE_FIELD } from "../salePriceType/SalePriceTypeTitle";
import { SALEQUOTATION_TITLE_FIELD } from "../saleQuotation/SaleQuotationTitle";
import { SHIPPINGSTATUS_TITLE_FIELD } from "../shippingStatus/ShippingStatusTitle";
import { STORE_TITLE_FIELD } from "../store/StoreTitle";
import { TENANT_TITLE_FIELD } from "../tenant/TenantTitle";

export const SaleOrderList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"SaleOrders"}
      perPage={50}
      pagination={<Pagination />}
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
        <TextField label="ExpectedDeliveryDate" source="expectedDeliveryDate" />
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
        <ReferenceField label="Tenant" source="tenant.id" reference="Tenant">
          <TextField source={TENANT_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="TransactionDateTime" source="transactionDateTime" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
