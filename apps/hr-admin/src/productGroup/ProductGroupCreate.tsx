import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
  BooleanInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { AccountTitle } from "../account/AccountTitle";
import { ProductGroupTitle } from "./ProductGroupTitle";
import { ProductTitle } from "../product/ProductTitle";
import { SaleTaxTitle } from "../saleTax/SaleTaxTitle";
import { TenantTitle } from "../tenant/TenantTitle";

export const ProductGroupCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Code" source="code" />
        <ReferenceInput
          source="costOfGoodsSoldAccount.id"
          reference="Account"
          label="CostOfGoodsSoldAccountId"
        >
          <SelectInput optionText={AccountTitle} />
        </ReferenceInput>
        <TextInput label="Description" multiline source="description" />
        <BooleanInput
          label="ExcludeFromPurchase"
          source="excludeFromPurchase"
        />
        <BooleanInput label="ExcludeFromSale" source="excludeFromSale" />
        <ReferenceInput
          source="inventoryAccount.id"
          reference="Account"
          label="InventoryAccountId"
        >
          <SelectInput optionText={AccountTitle} />
        </ReferenceInput>
        <BooleanInput label="IsActive" source="isActive" />
        <BooleanInput label="IsDefault" source="isDefault" />
        <TextInput label="Name" source="name" />
        <TextInput label="NormalizedName" source="normalizedName" />
        <TextInput label="Note" multiline source="note" />
        <ReferenceInput
          source="parentProductGroupId.id"
          reference="ProductGroup"
          label="ParentProductGroupId"
        >
          <SelectInput optionText={ProductGroupTitle} />
        </ReferenceInput>
        <ReferenceArrayInput
          source="productGroups"
          reference="ProductGroup"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ProductGroupTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="products"
          reference="Product"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ProductTitle} />
        </ReferenceArrayInput>
        <ReferenceInput
          source="purchaseAccountId.id"
          reference="Account"
          label="PurchaseAccountId"
        >
          <SelectInput optionText={AccountTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="purchaseDiscountAccountId.id"
          reference="Account"
          label="PurchaseDiscountAccountId"
        >
          <SelectInput optionText={AccountTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="purchaseReturnAccountId.id"
          reference="Account"
          label="PurchaseReturnAccountId"
        >
          <SelectInput optionText={AccountTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="saleAccountId.id"
          reference="Account"
          label="SaleAccountId"
        >
          <SelectInput optionText={AccountTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="saleDiscountAccountId.id"
          reference="Account"
          label="SaleDiscountAccountId"
        >
          <SelectInput optionText={AccountTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="saleReturnAccountId.id"
          reference="Account"
          label="SaleReturnAccountId"
        >
          <SelectInput optionText={AccountTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="saleTaxId.id"
          reference="SaleTax"
          label="SaleTaxId"
        >
          <SelectInput optionText={SaleTaxTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="tenantId.id"
          reference="Tenant"
          label="TenantId"
        >
          <SelectInput optionText={TenantTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
