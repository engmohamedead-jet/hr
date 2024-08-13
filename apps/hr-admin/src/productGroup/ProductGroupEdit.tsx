import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  TextInput,
  BooleanInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { AccountTitle } from "../account/AccountTitle";
import { ProductGroupTitle } from "./ProductGroupTitle";
import { ProductTitle } from "../product/ProductTitle";
import { SaleTaxTitle } from "../saleTax/SaleTaxTitle";

export const ProductGroupEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput
          source="PurchaseDiscountAccountId.id"
          reference="Account"
          label="PurchaseDiscountAccountId"
        >
          <SelectInput optionText={AccountTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="SaleReturnAccountId.id"
          reference="Account"
          label="SaleReturnAccountId"
        >
          <SelectInput optionText={AccountTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="account.id"
          reference="Account"
          label="CostOfGoodsSoldAccountId"
        >
          <SelectInput optionText={AccountTitle} />
        </ReferenceInput>
        <TextInput label="Code" source="code" />
        <TextInput label="Description" multiline source="description" />
        <BooleanInput
          label="ExcludeFromPurchase"
          source="excludeFromPurchase"
        />
        <BooleanInput label="ExcludeFromSale" source="excludeFromSale" />
        <ReferenceInput
          source="inventoryAccountId.id"
          reference="Account"
          label="InventoryAccountId"
        >
          <SelectInput optionText={AccountTitle} />
        </ReferenceInput>
        <BooleanInput label="IsDefault" source="isDefault" />
        <TextInput label="Name" source="name" />
        <TextInput label="NormalizedName" source="normalizedName" />
        <TextInput label="Notes" multiline source="notes" />
        <ReferenceArrayInput
          source="parentProductGroupId"
          reference="ProductGroup"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ProductGroupTitle} />
        </ReferenceArrayInput>
        <ReferenceInput
          source="productGroups.id"
          reference="ProductGroup"
          label="ProductGroups"
        >
          <SelectInput optionText={ProductGroupTitle} />
        </ReferenceInput>
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
          source="saleTaxId.id"
          reference="SaleTax"
          label="SaleTaxId"
        >
          <SelectInput optionText={SaleTaxTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
