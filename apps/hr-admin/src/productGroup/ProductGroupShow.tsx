import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  ReferenceField,
  TextField,
  DateField,
  BooleanField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { ACCOUNT_TITLE_FIELD } from "../account/AccountTitle";
import { PRODUCTGROUP_TITLE_FIELD } from "./ProductGroupTitle";
import { SALETAX_TITLE_FIELD } from "../saleTax/SaleTaxTitle";

export const ProductGroupShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <ReferenceField
          label="PurchaseDiscountAccountId"
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
          label="CostOfGoodsSoldAccountId"
          source="account.id"
          reference="Account"
        >
          <TextField source={ACCOUNT_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Code" source="code" />
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
        <TextField label="Notes" source="notes" />
        <ReferenceField
          label="ProductGroups"
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
          label="SaleTaxId"
          source="saletax.id"
          reference="SaleTax"
        >
          <TextField source={SALETAX_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="ProductGroup"
          target="productGroupsId"
          label="ProductGroups"
        >
          <Datagrid rowClick="show">
            <ReferenceField
              label="PurchaseDiscountAccountId"
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
              label="CostOfGoodsSoldAccountId"
              source="account.id"
              reference="Account"
            >
              <TextField source={ACCOUNT_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Code" source="code" />
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
            <TextField label="Notes" source="notes" />
            <ReferenceField
              label="ProductGroups"
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
