import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  DateTimeInput,
  TextInput,
  BooleanInput,
  ReferenceArrayInput,
  SelectArrayInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { SaleOrderTitle } from "../saleOrder/SaleOrderTitle";
import { SaleQuotationDetailTitle } from "../saleQuotationDetail/SaleQuotationDetailTitle";
import { TenantTitle } from "../tenant/TenantTitle";

export const SaleQuotationCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput label="Discount" source="discount" />
        <NumberInput label="DiscountRate" source="discountRate" />
        <DateTimeInput
          label="ExpectedDeliveryDate"
          source="expectedDeliveryDate"
        />
        <TextInput label="InternalMemo" source="internalMemo" />
        <BooleanInput label="IsActive" source="isActive" />
        <BooleanInput label="IsCancelled" source="isCancelled" />
        <NumberInput label="NonTaxableTotal" source="nonTaxableTotal" />
        <TextInput label="Note" multiline source="note" />
        <TextInput label="ReferenceNumber" source="referenceNumber" />
        <ReferenceArrayInput
          source="saleOrders"
          reference="SaleOrder"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={SaleOrderTitle} />
        </ReferenceArrayInput>
        <DateTimeInput label="SaleQuotationDate" source="saleQuotationDate" />
        <ReferenceArrayInput
          source="saleQuotationDetails"
          reference="SaleQuotationDetail"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={SaleQuotationDetailTitle} />
        </ReferenceArrayInput>
        <TextInput label="SequenceNumber" source="sequenceNumber" />
        <NumberInput label="TaxRate" source="taxRate" />
        <NumberInput label="TaxTotal" source="taxTotal" />
        <NumberInput label="TaxableTotal" source="taxableTotal" />
        <ReferenceInput
          source="tenantId.id"
          reference="Tenant"
          label="TenantId"
        >
          <SelectInput optionText={TenantTitle} />
        </ReferenceInput>
        <TextInput label="Terms" source="terms" />
        <DateTimeInput
          label="TransactionDateTime"
          source="transactionDateTime"
        />
      </SimpleForm>
    </Create>
  );
};
