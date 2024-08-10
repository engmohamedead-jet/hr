import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { BankAccountTitle } from "../bankAccount/BankAccountTitle";
import { BankBranchTitle } from "../bankBranch/BankBranchTitle";
import { CityTitle } from "../city/CityTitle";
import { CountryTitle } from "../country/CountryTitle";
import { StateTitle } from "../state/StateTitle";

export const BankCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Address" source="address" />
        <ReferenceArrayInput
          source="bankAccounts"
          reference="BankAccount"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={BankAccountTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="bankBranches"
          reference="BankBranch"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={BankBranchTitle} />
        </ReferenceArrayInput>
        <TextInput label="CellPhoneNumber" source="cellPhoneNumber" />
        <ReferenceInput source="cityId.id" reference="City" label="CityId">
          <SelectInput optionText={CityTitle} />
        </ReferenceInput>
        <TextInput label="Code" source="code" />
        <TextInput label="ContactPhoneNumber" source="contactPhoneNumber" />
        <ReferenceInput
          source="countryId.id"
          reference="Country"
          label="CountryId"
        >
          <SelectInput optionText={CountryTitle} />
        </ReferenceInput>
        <TextInput label="Description" multiline source="description" />
        <TextInput label="Fax" source="fax" />
        <TextInput label="HomePhoneNumber" source="homePhoneNumber" />
        <TextInput label="Name" source="name" />
        <TextInput label="NormalizedName" source="normalizedName" />
        <TextInput label="Note" multiline source="note" />
        <TextInput
          label="RelationshipOfficerContactNumber"
          source="relationshipOfficerContactNumber"
        />
        <TextInput
          label="RelationshipOfficerName"
          source="relationshipOfficerName"
        />
        <ReferenceInput source="stateId.id" reference="State" label="StateId">
          <SelectInput optionText={StateTitle} />
        </ReferenceInput>
        <TextInput label="Street" source="street" />
      </SimpleForm>
    </Create>
  );
};
