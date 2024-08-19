import * as React from "react";

import {
  List,
  Datagrid,
  ListProps,
  TextField,
  ReferenceField,
  DateField,
  BooleanField,
} from "react-admin";

import Pagination from "../Components/Pagination";
import { UNIT_TITLE_FIELD } from "../unit/UnitTitle";
import { PRODUCT_TITLE_FIELD } from "../product/ProductTitle";
import { TENANT_TITLE_FIELD } from "../tenant/TenantTitle";

export const ProductUnitList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"ProductUnits"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
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
      </Datagrid>
    </List>
  );
};
