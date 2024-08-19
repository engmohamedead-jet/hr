import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
  BooleanInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { ProductGroupTitle } from "../productGroup/ProductGroupTitle";
import { InstallmentSaleFeeTitle } from "../installmentSaleFee/InstallmentSaleFeeTitle";
import { AccountTitle } from "./AccountTitle";
import { SalePersonTitle } from "../salePerson/SalePersonTitle";
import { TenantTitle } from "../tenant/TenantTitle";

export const AccountEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="SaleReturnAccountProductGroups"
          reference="ProductGroup"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ProductGroupTitle} />
        </ReferenceArrayInput>
        <TextInput label="AccountNumber" source="accountNumber" />
        <ReferenceArrayInput
          source="aleAccountProductGroups"
          reference="ProductGroup"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ProductGroupTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="costOfGoodsSoldAccountProductGroups"
          reference="ProductGroup"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ProductGroupTitle} />
        </ReferenceArrayInput>
        <TextInput label="Description" multiline source="description" />
        <ReferenceArrayInput
          source="installmentSaleFees"
          reference="InstallmentSaleFee"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={InstallmentSaleFeeTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="inventoryAccountProductGroups"
          reference="ProductGroup"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ProductGroupTitle} />
        </ReferenceArrayInput>
        <BooleanInput label="IsActive" source="isActive" />
        <BooleanInput label="IsMasterAccount" source="isMasterAccount" />
        <TextInput label="Name" source="name" />
        <TextInput label="NormalizedName" source="normalizedName" />
        <TextInput label="Note" multiline source="note" />
        <ReferenceInput
          source="parentAccountId.id"
          reference="Account"
          label="ParentAccountId"
        >
          <SelectInput optionText={AccountTitle} />
        </ReferenceInput>
        <ReferenceArrayInput
          source="parentAccounts"
          reference="Account"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={AccountTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="purchaseAccountProductGroups"
          reference="ProductGroup"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ProductGroupTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="purchaseDiscountAccountProductGroups"
          reference="ProductGroup"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ProductGroupTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="purchaseReturnAccountProductGroups"
          reference="ProductGroup"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ProductGroupTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="saleDiscountAccountProductGroups"
          reference="ProductGroup"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ProductGroupTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="salePeople"
          reference="SalePerson"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={SalePersonTitle} />
        </ReferenceArrayInput>
        <ReferenceInput
          source="tenantId.id"
          reference="Tenant"
          label="TenantId"
        >
          <SelectInput optionText={TenantTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
