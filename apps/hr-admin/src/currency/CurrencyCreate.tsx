import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
  ReferenceInput,
  SelectInput,
  BooleanInput,
} from "react-admin";

import { AccountTitle } from "../account/AccountTitle";
import { CustomerTitle } from "../customer/CustomerTitle";
import { ExchangeRateDetailTitle } from "../exchangeRateDetail/ExchangeRateDetailTitle";
import { SupplierTitle } from "../supplier/SupplierTitle";

export const CurrencyCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="accounts"
          reference="Account"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={AccountTitle} />
        </ReferenceArrayInput>
        <TextInput label="Code" source="code" />
        <ReferenceArrayInput
          source="customers"
          reference="Customer"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={CustomerTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="exchangeRateDetails"
          reference="ExchangeRateDetail"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ExchangeRateDetailTitle} />
        </ReferenceArrayInput>
        <ReferenceInput
          source="foreignCurrencyName.id"
          reference="ExchangeRateDetail"
          label="ForeignCurrencyName"
        >
          <SelectInput optionText={ExchangeRateDetailTitle} />
        </ReferenceInput>
        <TextInput label="HundredthName" source="hundredthName" />
        <BooleanInput label="IsDefault" source="isDefault" />
        <TextInput label="Name" source="name" />
        <TextInput label="NormalizedName" source="normalizedName" />
        <TextInput label="Note" multiline source="note" />
        <ReferenceArrayInput
          source="suppliers"
          reference="Supplier"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={SupplierTitle} />
        </ReferenceArrayInput>
        <TextInput label="Symbol" source="symbolField" />
      </SimpleForm>
    </Create>
  );
};
