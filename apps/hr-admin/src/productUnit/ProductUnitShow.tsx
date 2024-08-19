import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  ReferenceField,
  DateField,
  BooleanField,
} from "react-admin";

import { UNIT_TITLE_FIELD } from "../unit/UnitTitle";
import { PRODUCT_TITLE_FIELD } from "../product/ProductTitle";
import { TENANT_TITLE_FIELD } from "../tenant/TenantTitle";

export const ProductUnitShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Barcode" source="barcode" />
        <ReferenceField label="CompareUnitId" source="unit.id" reference="Unit">
          <TextField source={UNIT_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="CompareUnitQuantity" source="compareUnitQuantity" />
        <TextField label="CostPrice" source="costPrice" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <BooleanField label="IsActive" source="isActive" />
        <BooleanField
          label="IsCostPriceIncludingTax"
          source="isCostPriceIncludingTax"
        />
        <BooleanField
          label="IsDefaultForPurchase"
          source="isDefaultForPurchase"
        />
        <BooleanField label="IsDefaultForSale" source="isDefaultForSale" />
        <BooleanField
          label="IsSalePriceIncludingTax"
          source="isSalePriceIncludingTax"
        />
        <TextField label="Note" source="note" />
        <ReferenceField
          label="ProductId"
          source="product.id"
          reference="Product"
        >
          <TextField source={PRODUCT_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Quantity" source="quantity" />
        <TextField label="SalePrice" source="salePrice" />
        <ReferenceField label="TenantId" source="tenant.id" reference="Tenant">
          <TextField source={TENANT_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField label=" UnitId" source="unit.id" reference="Unit">
          <TextField source={UNIT_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
