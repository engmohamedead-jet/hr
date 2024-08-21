import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  SelectInput,
  BooleanInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { BankTitle } from "../bank/BankTitle";
import { SalePaymentTitle } from "../salePayment/SalePaymentTitle";
import { TenantTitle } from "../tenant/TenantTitle";

export const BankBranchEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Address" source="address" />
        <ReferenceInput source="bank.id" reference="Bank" label="Bank">
          <SelectInput optionText={BankTitle} />
        </ReferenceInput>
        <TextInput label="Code" source="code" />
        <TextInput label="ContactPhoneNumber" source="contactPhoneNumber" />
        <TextInput label="Description" multiline source="description" />
        <BooleanInput label="IsActive" source="isActive" />
        <TextInput label="Name" source="name" />
        <TextInput label="NormalizedName" source="normalizedName" />
        <TextInput label="Note" multiline source="note" />
        <ReferenceArrayInput
          source="salePayments"
          reference="SalePayment"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={SalePaymentTitle} />
        </ReferenceArrayInput>
        <ReferenceInput source="tenant.id" reference="Tenant" label="Tenant">
          <SelectInput optionText={TenantTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
