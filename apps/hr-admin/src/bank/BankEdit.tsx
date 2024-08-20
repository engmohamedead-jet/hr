import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { BankBranchTitle } from "../bankBranch/BankBranchTitle";
import { BankTypeTitle } from "../bankType/BankTypeTitle";
import { SalePaymentTitle } from "../salePayment/SalePaymentTitle";

export const BankEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Address" source="address" />
        <ReferenceArrayInput
          source="bankBranches"
          reference="BankBranch"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={BankBranchTitle} />
        </ReferenceArrayInput>
        <ReferenceInput
          source="bankType.id"
          reference="BankType"
          label="BankType"
        >
          <SelectInput optionText={BankTypeTitle} />
        </ReferenceInput>
        <TextInput label="CellPhoneNumber" source="cellPhoneNumber" />
        <TextInput label="Code" source="code" />
        <TextInput label="ContactPhoneNumber" source="contactPhoneNumber" />
        <TextInput label="Description" multiline source="description" />
        <TextInput label="Fax" source="fax" />
        <TextInput label="HomePhoneNumber" source="homePhoneNumber" />
        <TextInput label="Name" source="name" />
        <TextInput label="NormalizedName" source="normalizedName" />
        <TextInput
          label="RelationshipOfficerContactNumber"
          source="relationshipOfficerContactNumber"
        />
        <TextInput
          label="RelationshipOfficerName"
          source="relationshipOfficerName"
        />
        <ReferenceArrayInput
          source="salePayments"
          reference="SalePayment"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={SalePaymentTitle} />
        </ReferenceArrayInput>
        <TextInput label="Street" source="street" />
      </SimpleForm>
    </Edit>
  );
};
