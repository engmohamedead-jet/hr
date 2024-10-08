import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
  BooleanInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { ProductTitle } from "../product/ProductTitle";
import { ProductVariantTitle } from "../productVariant/ProductVariantTitle";
import { SaleTitle } from "../sale/SaleTitle";
import { SalePriceTypeTitle } from "../salePriceType/SalePriceTypeTitle";
import { TenantTitle } from "../tenant/TenantTitle";
import { UnitTitle } from "../unit/UnitTitle";

export const SaleDetailEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Barcode" source="barcode" />
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
        <TextInput label="ProductSerialNumber" source="productSerialNumber" />
        <ReferenceInput
          source="productVariantId.id"
          reference="ProductVariant"
          label="ProductVariantId"
        >
          <SelectInput optionText={ProductVariantTitle} />
        </ReferenceInput>
        <NumberInput label="Quantity" source="quantity" />
        <ReferenceInput source="saleId.id" reference="Sale" label="SaleId">
          <SelectInput optionText={SaleTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="salePriceTypeId.id"
          reference="SalePriceType"
          label="SalePriceTypeId"
        >
          <SelectInput optionText={SalePriceTypeTitle} />
        </ReferenceInput>
        <NumberInput step={1} label="Sequence" source="sequence" />
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
    </Edit>
  );
};
