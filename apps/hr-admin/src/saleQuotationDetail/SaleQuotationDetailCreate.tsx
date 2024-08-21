import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  BooleanInput,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { ProductTitle } from "../product/ProductTitle";
import { ProductVariantTitle } from "../productVariant/ProductVariantTitle";
import { SalePriceTypeTitle } from "../salePriceType/SalePriceTypeTitle";
import { SaleQuotationTitle } from "../saleQuotation/SaleQuotationTitle";
import { TenantTitle } from "../tenant/TenantTitle";
import { UnitTitle } from "../unit/UnitTitle";

export const SaleQuotationDetailCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput label="Discount" source="discount" />
        <NumberInput label="DiscountRate" source="discountRate" />
        <BooleanInput label="IsActive" source="isActive" />
        <BooleanInput label="IsError" source="isError" />
        <BooleanInput label="IsReplicated" source="isReplicated" />
        <BooleanInput label="IsTaxed" source="isTaxed" />
        <TextInput label="Note" multiline source="note" />
        <NumberInput label="Price" source="price" />
        <NumberInput label="PriceTotal" source="priceTotal" />
        <ReferenceInput
          source="productId.id"
          reference="Product"
          label="ProductId"
        >
          <SelectInput optionText={ProductTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="productVariantId.id"
          reference="ProductVariant"
          label="ProductVariantId"
        >
          <SelectInput optionText={ProductVariantTitle} />
        </ReferenceInput>
        <NumberInput label="Quantity" source="quantity" />
        <ReferenceInput
          source="salePriceType.id"
          reference="SalePriceType"
          label="SalePriceTypeId"
        >
          <SelectInput optionText={SalePriceTypeTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="saleQuotationId.id"
          reference="SaleQuotation"
          label="SaleQuotationId"
        >
          <SelectInput optionText={SaleQuotationTitle} />
        </ReferenceInput>
        <TextInput label="Sequence" source="sequence" />
        <NumberInput label="ShippingCharge" source="shippingCharge" />
        <ReferenceInput
          source="tenantId.id"
          reference="Tenant"
          label="TenantId"
        >
          <SelectInput optionText={TenantTitle} />
        </ReferenceInput>
        <ReferenceInput source="unitId.id" reference="Unit" label="UnitId">
          <SelectInput optionText={UnitTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
