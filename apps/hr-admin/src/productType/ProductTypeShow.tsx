import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  BooleanField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { STORE_TITLE_FIELD } from "../store/StoreTitle";
import { UNIT_TITLE_FIELD } from "../unit/UnitTitle";
import { PRODUCTCATEGORY_TITLE_FIELD } from "../productCategory/ProductCategoryTitle";
import { PRODUCTDEPARTMENT_TITLE_FIELD } from "../productDepartment/ProductDepartmentTitle";
import { PRODUCTGROUP_TITLE_FIELD } from "../productGroup/ProductGroupTitle";
import { PRODUCTTYPE_TITLE_FIELD } from "./ProductTypeTitle";
import { SALETAX_TITLE_FIELD } from "../saleTax/SaleTaxTitle";
import { TENANT_TITLE_FIELD } from "../tenant/TenantTitle";

export const ProductTypeShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Code" source="code" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <BooleanField label="IsActive" source="isActive" />
        <BooleanField label="IsComponent" source="isComponent" />
        <TextField label="Name" source="name" />
        <TextField label="NormalizedName" source="normalizedName" />
        <TextField label="Note" source="note" />
        <ReferenceField label="TenantId" source="tenant.id" reference="Tenant">
          <TextField source={TENANT_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Product"
          target="productTypeIdId"
          label="Products"
        >
          <Datagrid rowClick="show">
            <TextField label="Barcode" source="barcode" />
            <BooleanField label="CanExpire" source="canExpire" />
            <TextField label="Code" source="code" />
            <TextField label="CostPrice" source="costPrice" />
            <BooleanField
              label="CostPriceIncludesTax"
              source="costPriceIncludesTax"
            />
            <DateField source="createdAt" label="Created At" />
            <TextField
              label="CurrentStockQuantity"
              source="currentStockQuantity"
            />
            <TextField label="DaysToManufacture" source="daysToManufacture" />
            <ReferenceField
              label="DefaultStoreId"
              source="store.id"
              reference="Store"
            >
              <TextField source={STORE_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="DefaultUnitId"
              source="unit.id"
              reference="Unit"
            >
              <TextField source={UNIT_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Description" source="description" />
            <TextField label="DiscontinuedDate" source="discontinuedDate" />
            <TextField label="DiscountRate" source="discountRate" />
            <TextField label="ExpireAlarmInDays" source="expireAlarmInDays" />
            <TextField
              label="ExpireIsDefaultAfterDaysFromPurchase"
              source="expireIsDefaultAfterDaysFromPurchase"
            />
            <TextField label="FirstStockQuantity" source="firstStockQuantity" />
            <TextField label="ID" source="id" />
            <BooleanField label="IsActive" source="isActive" />
            <BooleanField label="IsCompound" source="isCompound" />
            <BooleanField label="IsFavorite" source="isFavorite" />
            <BooleanField
              label="MaintainInventory"
              source="maintainInventory"
            />
            <TextField label="MinimumSalePrice" source="minimumSalePrice" />
            <TextField label="Name" source="name" />
            <TextField label="NormalizedName" source="normalizedName" />
            <TextField label="Note" source="note" />
            <TextField label="Photo" source="photo" />
            <ReferenceField
              label="ProductCategoryId"
              source="productcategory.id"
              reference="ProductCategory"
            >
              <TextField source={PRODUCTCATEGORY_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="ProductDepartmentId"
              source="productdepartment.id"
              reference="ProductDepartment"
            >
              <TextField source={PRODUCTDEPARTMENT_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="ProductGroupId"
              source="productgroup.id"
              reference="ProductGroup"
            >
              <TextField source={PRODUCTGROUP_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="ProductTypeId"
              source="producttype.id"
              reference="ProductType"
            >
              <TextField source={PRODUCTTYPE_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="ProfitRate" source="profitRate" />
            <TextField label="ReorderQuantity" source="reorderQuantity" />
            <TextField label="SalePrice" source="salePrice" />
            <BooleanField
              label="SalePriceIncludesTax"
              source="salePriceIncludesTax"
            />
            <ReferenceField
              label="SaleTaxId"
              source="saletax.id"
              reference="SaleTax"
            >
              <TextField source={SALETAX_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="TenantId"
              source="tenant.id"
              reference="Tenant"
            >
              <TextField source={TENANT_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
