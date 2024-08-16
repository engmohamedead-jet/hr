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

import { ACCOUNT_TITLE_FIELD } from "./AccountTitle";
import { PRODUCTGROUP_TITLE_FIELD } from "../productGroup/ProductGroupTitle";
import { SALETAX_TITLE_FIELD } from "../saleTax/SaleTaxTitle";

export const AccountShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="AccountNumber" source="accountNumber" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="Description" source="description" />
        <TextField label="ID" source="id" />
        <BooleanField label="IsMasterAccount" source="isMasterAccount" />
        <TextField label="Name" source="name" />
        <TextField label="NormalizedName" source="normalizedName" />
        <TextField label="Note" source="note" />
        <ReferenceField
          label="ParentAccountId"
          source="account.id"
          reference="Account"
        >
          <TextField source={ACCOUNT_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="ProductGroup"
          target="saleReturnAccountIdId"
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
          reference="ProductGroup"
          target="saleAccountIdId"
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
          reference="ProductGroup"
          target="costOfGoodsSoldAccountId"
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
          reference="ProductGroup"
          target="inventoryAccountId"
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
          reference="Account"
          target="parentAccountIdId"
          label="Accounts"
        >
          <Datagrid rowClick="show">
            <TextField label="AccountNumber" source="accountNumber" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="Description" source="description" />
            <TextField label="ID" source="id" />
            <BooleanField label="IsMasterAccount" source="isMasterAccount" />
            <TextField label="Name" source="name" />
            <TextField label="NormalizedName" source="normalizedName" />
            <TextField label="Note" source="note" />
            <ReferenceField
              label="ParentAccountId"
              source="account.id"
              reference="Account"
            >
              <TextField source={ACCOUNT_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="ProductGroup"
          target="purchaseAccountIdId"
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
          reference="ProductGroup"
          target="purchaseDiscountAccountIdId"
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
          reference="ProductGroup"
          target="purchaseReturnAccountIdId"
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
          reference="ProductGroup"
          target="saleDiscountAccountIdId"
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
      </SimpleShowLayout>
    </Show>
  );
};
