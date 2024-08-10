import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const CompanyCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Address" multiline source="address" />
        <TextInput label="Description" multiline source="description" />
        <TextInput label="Name" source="name" />
        <TextInput label="NormalizedName" source="normalizedName" />
        <TextInput label="Note" multiline source="note" />
        <TextInput label="PhoneNumber" source="phoneNumber" />
        <TextInput
          label="SaleReceiptExtraDetails"
          multiline
          source="saleReceiptExtraDetails"
        />
      </SimpleForm>
    </Create>
  );
};
