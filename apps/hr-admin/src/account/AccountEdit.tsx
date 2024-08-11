import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceArrayInput,
  SelectArrayInput,
  ReferenceInput,
  SelectInput,
  TextInput,
  BooleanInput,
} from "react-admin";

import { ProductGroupTitle } from "../productGroup/ProductGroupTitle";
import { AccountCategoryTitle } from "../accountCategory/AccountCategoryTitle";
import { AccountTypeTitle } from "../accountType/AccountTypeTitle";
import { CurrencyTitle } from "../currency/CurrencyTitle";
import { InstallmentSaleFeeTitle } from "../installmentSaleFee/InstallmentSaleFeeTitle";

export const AccountEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="ProductGroupPurchaseReturnAccounts"
          reference="ProductGroup"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ProductGroupTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="ProductGroupSaleAccounts"
          reference="ProductGroup"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ProductGroupTitle} />
        </ReferenceArrayInput>
        <ReferenceInput
          source="accountCategory.id"
          reference="AccountCategory"
          label="AccountCategoryId"
        >
          <SelectInput optionText={AccountCategoryTitle} />
        </ReferenceInput>
        <TextInput label="AccountNumber" source="accountNumber" />
        <ReferenceInput
          source="accountTypeId.id"
          reference="AccountType"
          label="AccountTypeId"
        >
          <SelectInput optionText={AccountTypeTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="currencyId.id"
          reference="Currency"
          label="CurrencyId"
        >
          <SelectInput optionText={CurrencyTitle} />
        </ReferenceInput>
        <TextInput label="Description" multiline source="description" />
        <ReferenceArrayInput
          source="installmentSaleFees"
          reference="InstallmentSaleFee"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={InstallmentSaleFeeTitle} />
        </ReferenceArrayInput>
        <BooleanInput label="IsActive" source="isActive" />
        <BooleanInput label="IsMasterAccount" source="isMasterAccount" />
        <BooleanInput label="IsUnderRevision" source="isUnderRevision" />
        <TextInput label="Name" source="name" />
        <TextInput label="NormalizedName" source="normalizedName" />
        <TextInput label="Note" source="note" />
        <TextInput label="ParentAccountId" source="parentAccountId" />
        <ReferenceArrayInput
          source="productGroupCostOfGoodsSoldAccounts"
          reference="ProductGroup"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ProductGroupTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="productGroupInventoryAccounts"
          reference="ProductGroup"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ProductGroupTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="productGroupPurchaseAccounts"
          reference="ProductGroup"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ProductGroupTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="productGroupPurchaseDiscountAccounts"
          reference="ProductGroup"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ProductGroupTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="productGroupSaleDiscountAccountIds"
          reference="ProductGroup"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ProductGroupTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="productGroupSaleReturnAccountIds"
          reference="ProductGroup"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ProductGroupTitle} />
        </ReferenceArrayInput>
        <TextInput label="ReferenceNumber" source="referenceNumber" />
      </SimpleForm>
    </Edit>
  );
};
