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
import { PurchasePriceTypeTitle } from "../purchasePriceType/PurchasePriceTypeTitle";
import { PurchaseReturnTitle } from "../purchaseReturn/PurchaseReturnTitle";
import { TenantTitle } from "../tenant/TenantTitle";
import { UnitTitle } from "../unit/UnitTitle";

export const PurchaseReturnDetailCreate = (
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
        <BooleanInput label="IsReplicated" source="isReplicated" />
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
        <ReferenceInput
          source="purchasePriceTypeId.id"
          reference="PurchasePriceType"
          label="PurchasePriceTypeId"
        >
          <SelectInput optionText={PurchasePriceTypeTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="purchaseReturnId.id"
          reference="PurchaseReturn"
          label="PurchaseReturnId"
        >
          <SelectInput optionText={PurchaseReturnTitle} />
        </ReferenceInput>
        <NumberInput label="Quantity" source="quantity" />
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
    </Create>
  );
};