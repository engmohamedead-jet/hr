import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  BooleanField,
  ReferenceField,
} from "react-admin";

import { PRODUCT_TITLE_FIELD } from "../product/ProductTitle";
import { PRODUCTVARIANT_TITLE_FIELD } from "../productVariant/ProductVariantTitle";
import { SALEORDER_TITLE_FIELD } from "../saleOrder/SaleOrderTitle";
import { SALEPRICETYPE_TITLE_FIELD } from "../salePriceType/SalePriceTypeTitle";
import { TENANT_TITLE_FIELD } from "../tenant/TenantTitle";
import { UNIT_TITLE_FIELD } from "../unit/UnitTitle";

export const SaleOrderDetailShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Barcode" source="barcode" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="Discount" source="discount" />
        <TextField label="DiscountRate" source="discountRate" />
        <TextField label="ID" source="id" />
        <BooleanField label="IsActive" source="isActive" />
        <BooleanField label="IsError" source="isError" />
        <BooleanField label="IsTaxed" source="isTaxed" />
        <TextField label="Price" source="price" />
        <TextField label="PriceTotal" source="priceTotal" />
        <ReferenceField
          label="ProductId"
          source="product.id"
          reference="Product"
        >
          <TextField source={PRODUCT_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="ProductSerialNumber" source="productSerialNumber" />
        <ReferenceField
          label="ProductVariantId"
          source="productvariant.id"
          reference="ProductVariant"
        >
          <TextField source={PRODUCTVARIANT_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Quantity" source="quantity" />
        <ReferenceField
          label="SaleOrderId"
          source="saleorder.id"
          reference="SaleOrder"
        >
          <TextField source={SALEORDER_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField
          label="SalePriceTypeId"
          source="salepricetype.id"
          reference="SalePriceType"
        >
          <TextField source={SALEPRICETYPE_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Sequence" source="sequence" />
        <ReferenceField label="Tenant" source="tenant.id" reference="Tenant">
          <TextField source={TENANT_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField label="UnitId" source="unit.id" reference="Unit">
          <TextField source={UNIT_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};