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
import { PaymentTypeTitle } from "../paymentType/PaymentTypeTitle";
import { SaleTitle } from "../sale/SaleTitle";
import { SalePriceTypeTitle } from "../salePriceType/SalePriceTypeTitle";
import { SaleReturnDetailTitle } from "../saleReturnDetail/SaleReturnDetailTitle";
import { StoreTitle } from "../store/StoreTitle";
import { TenantTitle } from "../tenant/TenantTitle";

export const SaleReturnCreate = (props: CreateProps): React.ReactElement => {
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
          source="paymentTypeId.id"
          reference="PaymentType"
          label="PaymentTypeId"
        >
          <SelectInput optionText={PaymentTypeTitle} />
        </ReferenceInput>
        <TextInput label="ReferenceNumber" source="referenceNumber" />
        <NumberInput label="Remaining" source="remaining" />
        <NumberInput label="ReturnTotal" source="returnTotal" />
        <ReferenceInput source="saleId.id" reference="Sale" label="SaleId">
          <SelectInput optionText={SaleTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="salePriceTyped.id"
          reference="SalePriceType"
          label="SalePriceTypeId"
        >
          <SelectInput optionText={SalePriceTypeTitle} />
        </ReferenceInput>
        <DateTimeInput label="SaleReturnDate" source="saleReturnDate" />
        <ReferenceArrayInput
          source="saleReturnDetails"
          reference="SaleReturnDetail"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={SaleReturnDetailTitle} />
        </ReferenceArrayInput>
        <TextInput label="Sequence" source="sequence" />
        <ReferenceInput source="storeId.id" reference="Store" label="StoreId">
          <SelectInput optionText={StoreTitle} />
        </ReferenceInput>
        <NumberInput label="Tax" source="tax" />
        <NumberInput label="TaxRate" source="taxRate" />
        <NumberInput label="TaxableTotal" source="taxableTotal" />
        <ReferenceInput source="tenant.id" reference="Tenant" label="Tenant">
          <SelectInput optionText={TenantTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
