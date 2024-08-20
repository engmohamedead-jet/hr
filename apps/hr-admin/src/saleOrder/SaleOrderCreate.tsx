import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
  DateTimeInput,
  NumberInput,
  BooleanInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { CashRepositoryTitle } from "../cashRepository/CashRepositoryTitle";
import { CustomerTitle } from "../customer/CustomerTitle";
import { InvoiceTypeTitle } from "../invoiceType/InvoiceTypeTitle";
import { OrderStatusTitle } from "../orderStatus/OrderStatusTitle";
import { PaymentStatusTitle } from "../paymentStatus/PaymentStatusTitle";
import { PaymentTypeTitle } from "../paymentType/PaymentTypeTitle";
import { SaleOrderDetailTitle } from "../saleOrderDetail/SaleOrderDetailTitle";
import { SalePriceTypeTitle } from "../salePriceType/SalePriceTypeTitle";
import { SaleQuotationTitle } from "../saleQuotation/SaleQuotationTitle";
import { ShippingStatusTitle } from "../shippingStatus/ShippingStatusTitle";
import { StoreTitle } from "../store/StoreTitle";
import { TenantTitle } from "../tenant/TenantTitle";

export const SaleOrderCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="BillingAddress" source="billingAddress" />
        <ReferenceInput
          source="cashRepositoryId.id"
          reference="CashRepository"
          label="CashRepositoryId"
        >
          <SelectInput optionText={CashRepositoryTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="customerId.id"
          reference="Customer"
          label="CustomerId"
        >
          <SelectInput optionText={CustomerTitle} />
        </ReferenceInput>
        <DateTimeInput label="DeliveryDate" source="deliveryDate" />
        <NumberInput label="DiscountTotal" source="discountTotal" />
        <DateTimeInput
          label="ExpectedDeliveryDate"
          source="expectedDeliveryDate"
        />
        <ReferenceInput
          source="invoiceTypeId.id"
          reference="InvoiceType"
          label="InvoiceTypeId"
        >
          <SelectInput optionText={InvoiceTypeTitle} />
        </ReferenceInput>
        <BooleanInput label="IsActive" source="isActive" />
        <BooleanInput label="IsCancelled" source="isCancelled" />
        <BooleanInput label="IsReplicated" source="isReplicated" />
        <NumberInput label="NetTotal" source="netTotal" />
        <NumberInput label="NonTaxableTotal" source="nonTaxableTotal" />
        <TextInput label="Note" multiline source="note" />
        <ReferenceInput
          source="orderStatus.id"
          reference="OrderStatus"
          label="OrderStatus"
        >
          <SelectInput optionText={OrderStatusTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="paymentStatus.id"
          reference="PaymentStatus"
          label="PaymentStatus"
        >
          <SelectInput optionText={PaymentStatusTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="paymentTypeId.id"
          reference="PaymentType"
          label="PaymentTypeId"
        >
          <SelectInput optionText={PaymentTypeTitle} />
        </ReferenceInput>
        <TextInput label="ReferenceNumber" source="referenceNumber" />
        <DateTimeInput label="SaleOrderDate" source="saleOrderDate" />
        <ReferenceArrayInput
          source="saleOrderDetails"
          reference="SaleOrderDetail"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={SaleOrderDetailTitle} />
        </ReferenceArrayInput>
        <ReferenceInput
          source="salePriceType.id"
          reference="SalePriceType"
          label="SalePriceType"
        >
          <SelectInput optionText={SalePriceTypeTitle} />
        </ReferenceInput>
        <NumberInput label="SalePriceTypeId" source="salePriceTypeId" />
        <ReferenceInput
          source="saleQuotation.id"
          reference="SaleQuotation"
          label="SaleQuotationId"
        >
          <SelectInput optionText={SaleQuotationTitle} />
        </ReferenceInput>
        <NumberInput label="SaleTotal" source="saleTotal" />
        <TextInput label="ShippingAddress" source="shippingAddress" />
        <NumberInput label="ShippingCost" source="shippingCost" />
        <ReferenceInput
          source="shippingStatus.id"
          reference="ShippingStatus"
          label="ShippingStatus"
        >
          <SelectInput optionText={ShippingStatusTitle} />
        </ReferenceInput>
        <ReferenceInput source="storeId.id" reference="Store" label="StoreId">
          <SelectInput optionText={StoreTitle} />
        </ReferenceInput>
        <NumberInput label="Tax" source="tax" />
        <NumberInput label="TaxRate" source="taxRate" />
        <NumberInput label="TaxableTotal" source="taxableTotal" />
        <ReferenceInput source="tenant.id" reference="Tenant" label="Tenant">
          <SelectInput optionText={TenantTitle} />
        </ReferenceInput>
        <DateTimeInput
          label="TransactionDateTime"
          source="transactionDateTime"
        />
      </SimpleForm>
    </Create>
  );
};
