import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
  BooleanInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { ProductTitle } from "../product/ProductTitle";
import { ProductVariantTitle } from "../productVariant/ProductVariantTitle";
import { SaleOrderTitle } from "../saleOrder/SaleOrderTitle";
import { SalePriceTypeTitle } from "../salePriceType/SalePriceTypeTitle";
import { TenantTitle } from "../tenant/TenantTitle";
import { UnitTitle } from "../unit/UnitTitle";

export const SaleOrderDetailCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Barcode" source="barcode" />
        <NumberInput label="Discount" source="discount" />
        <NumberInput label="DiscountRate" source="discountRate" />
        <BooleanInput label="IsActive" source="isActive" />
        <BooleanInput label="IsError" source="isError" />
        <BooleanInput label="IsTaxed" source="isTaxed" />
        <NumberInput label="Price" source="price" />
        <NumberInput label="PriceTotal" source="priceTotal" />
        <ReferenceInput
          source="productId.id"
          reference="Product"
          label="ProductId"
        >
          <SelectInput optionText={ProductTitle} />
        </ReferenceInput>
        <TextInput label="ProductSerialNumber" source="productSerialNumber" />
        <ReferenceInput
          source="productVariantId.id"
          reference="ProductVariant"
          label="ProductVariantId"
        >
          <SelectInput optionText={ProductVariantTitle} />
        </ReferenceInput>
        <NumberInput label="Quantity" source="quantity" />
        <ReferenceInput
          source="saleOrder.id"
          reference="SaleOrder"
          label="SaleOrderId"
        >
          <SelectInput optionText={SaleOrderTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="salePriceTypeId.id"
          reference="SalePriceType"
          label="SalePriceTypeId"
        >
          <SelectInput optionText={SalePriceTypeTitle} />
        </ReferenceInput>
        <TextInput label="Sequence" source="sequence" />
        <ReferenceInput source="tenant.id" reference="Tenant" label="Tenant">
          <SelectInput optionText={TenantTitle} />
        </ReferenceInput>
        <ReferenceInput source="unitId.id" reference="Unit" label="UnitId">
          <SelectInput optionText={UnitTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
