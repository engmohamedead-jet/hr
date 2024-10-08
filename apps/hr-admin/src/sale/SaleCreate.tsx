import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  NumberInput,
  BooleanInput,
  TextInput,
  DateTimeInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { CashRepositoryTitle } from "../cashRepository/CashRepositoryTitle";
import { CustomerTitle } from "../customer/CustomerTitle";
import { InvoiceTypeTitle } from "../invoiceType/InvoiceTypeTitle";
import { PaymentTermTitle } from "../paymentTerm/PaymentTermTitle";
import { PaymentTypeTitle } from "../paymentType/PaymentTypeTitle";
import { SaleDetailTitle } from "../saleDetail/SaleDetailTitle";
import { SalePaymentTitle } from "../salePayment/SalePaymentTitle";
import { SalePriceTypeTitle } from "../salePriceType/SalePriceTypeTitle";
import { SaleReturnTitle } from "../saleReturn/SaleReturnTitle";
import { StoreTitle } from "../store/StoreTitle";
import { TenantTitle } from "../tenant/TenantTitle";

export const SaleCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
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
        <NumberInput label="DiscountTotal" source="discountTotal" />
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
        <NumberInput label="Paid" source="paid" />
        <ReferenceInput
          source="paymentTerm.id"
          reference="PaymentTerm"
          label="PaymentTerm"
        >
          <SelectInput optionText={PaymentTermTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="paymentTypeId.id"
          reference="PaymentType"
          label="PaymentTypeId"
        >
          <SelectInput optionText={PaymentTypeTitle} />
        </ReferenceInput>
        <TextInput label="ReferenceNumber" source="referenceNumber" />
        <NumberInput label="Remaining" source="remaining" />
        <DateTimeInput label="SaleDate" source="saleDate" />
        <ReferenceArrayInput
          source="saleDetails"
          reference="SaleDetail"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={SaleDetailTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="salePayments"
          reference="SalePayment"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={SalePaymentTitle} />
        </ReferenceArrayInput>
        <ReferenceInput
          source="salePriceTypeId.id"
          reference="SalePriceType"
          label="SalePriceTypeId"
        >
          <SelectInput optionText={SalePriceTypeTitle} />
        </ReferenceInput>
        <ReferenceArrayInput
          source="saleReturns"
          reference="SaleReturn"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={SaleReturnTitle} />
        </ReferenceArrayInput>
        <NumberInput label="SaleTotal" source="saleTotal" />
        <TextInput label="SequenceNumber" source="sequenceNumber" />
        <ReferenceInput source="storeId.id" reference="Store" label="StoreId">
          <SelectInput optionText={StoreTitle} />
        </ReferenceInput>
        <NumberInput label="Tax" source="tax" />
        <NumberInput label="TaxRate" source="taxRate" />
        <NumberInput label="TaxableTotal" source="taxableTotal" />
        <ReferenceInput source="tenantId.id" reference="Tenant" label="Tenant">
          <SelectInput optionText={TenantTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
