import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { BankTitle } from "../bank/BankTitle";
import { CityTitle } from "../city/CityTitle";
import { CountryTitle } from "../country/CountryTitle";

export const StateEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="banks"
          reference="Bank"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={BankTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="cities"
          reference="City"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={CityTitle} />
        </ReferenceArrayInput>
        <TextInput label="Code" source="code" />
        <ReferenceInput
          source="countryId.id"
          reference="Country"
          label="CountryId"
        >
          <SelectInput optionText={CountryTitle} />
        </ReferenceInput>
        <TextInput label="Description" multiline source="description" />
        <TextInput label="Name" source="name" />
        <TextInput label="NormalizedName" source="normalizedName" />
        <TextInput label="Note" multiline source="note" />
      </SimpleForm>
    </Edit>
  );
};
