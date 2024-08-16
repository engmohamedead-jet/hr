import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  ReferenceField,
  DateField,
  BooleanField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { ACCOUNT_TITLE_FIELD } from "../account/AccountTitle";
import { PRODUCTGROUP_TITLE_FIELD } from "./ProductGroupTitle";
import { SALETAX_TITLE_FIELD } from "../saleTax/SaleTaxTitle";
import { STORE_TITLE_FIELD } from "../store/StoreTitle";
import { UNIT_TITLE_FIELD } from "../unit/UnitTitle";
import { PRODUCTCATEGORY_TITLE_FIELD } from "../productCategory/ProductCategoryTitle";
import { PRODUCTDEPARTMENT_TITLE_FIELD } from "../productDepartment/ProductDepartmentTitle";
import { PRODUCTTYPE_TITLE_FIELD } from "../productType/ProductTypeTitle";

export const ProductGroupShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Code" source="code" />
        <ReferenceField
          label="CostOfGoodsSoldAccountId"
          source="account.id"
          reference="Account"
        >
          <TextField source={ACCOUNT_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="createdAt" label="Created At" />
        <TextField label="Description" source="description" />
        <BooleanField
          label="ExcludeFromPurchase"
          source="excludeFromPurchase"
        />
        <BooleanField label="ExcludeFromSale" source="excludeFromSale" />
        <TextField label="ID" source="id" />
        <ReferenceField
          label="InventoryAccountId"
          source="account.id"
          reference="Account"
        >
          <TextField source={ACCOUNT_TITLE_FIELD} />
        </ReferenceField>
        <BooleanField label="IsDefault" source="isDefault" />
        <TextField label="Name" source="name" />
        <TextField label="NormalizedName" source="normalizedName" />
        <TextField label="Note" source="note" />
        <ReferenceField
          label="ParentProductGroupId"
          source="productgroup.id"
          reference="ProductGroup"
        >
          <TextField source={PRODUCTGROUP_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField
          label="PurchaseAccountId"
          source="account.id"
          reference="Account"
        >
          <TextField source={ACCOUNT_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField
          label="PurchaseDiscountAccountId"
          source="account.id"
          reference="Account"
        >
          <TextField source={ACCOUNT_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField
          label="PurchaseReturnAccountId"
          source="account.id"
          reference="Account"
        >
          <TextField source={ACCOUNT_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField
          label="SaleAccountId"
          source="account.id"
          reference="Account"
        >
          <TextField source={ACCOUNT_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField
          label="SaleDiscountAccountId"
          source="account.id"
          reference="Account"
        >
          <TextField source={ACCOUNT_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField
          label="SaleReturnAccountId"
          source="account.id"
          reference="Account"
        >
          <TextField source={ACCOUNT_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField
          label="SaleTaxId"
          source="saletax.id"
          reference="SaleTax"
        >
          <TextField source={SALETAX_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="ProductGroup"
          target="parentProductGroupIdId"
          label="ProductGroups"
        >
          <Datagrid rowClick="show">
            <TextField label="Code" source="code" />
            <ReferenceField
              label="CostOfGoodsSoldAccountId"
              source="account.id"
              reference="Account"
            >
              <TextField source={ACCOUNT_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <TextField label="Description" source="description" />
            <BooleanField
              label="ExcludeFromPurchase"
              source="excludeFromPurchase"
            />
            <BooleanField label="ExcludeFromSale" source="excludeFromSale" />
            <TextField label="ID" source="id" />
            <ReferenceField
              label="InventoryAccountId"
              source="account.id"
              reference="Account"
            >
              <TextField source={ACCOUNT_TITLE_FIELD} />
            </ReferenceField>
            <BooleanField label="IsDefault" source="isDefault" />
            <TextField label="Name" source="name" />
            <TextField label="NormalizedName" source="normalizedName" />
            <TextField label="Note" source="note" />
            <ReferenceField
              label="ParentProductGroupId"
              source="productgroup.id"
              reference="ProductGroup"
            >
              <TextField source={PRODUCTGROUP_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="PurchaseAccountId"
              source="account.id"
              reference="Account"
            >
              <TextField source={ACCOUNT_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="PurchaseDiscountAccountId"
              source="account.id"
              reference="Account"
            >
              <TextField source={ACCOUNT_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="PurchaseReturnAccountId"
              source="account.id"
              reference="Account"
            >
              <TextField source={ACCOUNT_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="SaleAccountId"
              source="account.id"
              reference="Account"
            >
              <TextField source={ACCOUNT_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="SaleDiscountAccountId"
              source="account.id"
              reference="Account"
            >
              <TextField source={ACCOUNT_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="SaleReturnAccountId"
              source="account.id"
              reference="Account"
            >
              <TextField source={ACCOUNT_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="SaleTaxId"
              source="saletax.id"
              reference="SaleTax"
            >
              <TextField source={SALETAX_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Product"
          target="productGroupIdId"
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
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
