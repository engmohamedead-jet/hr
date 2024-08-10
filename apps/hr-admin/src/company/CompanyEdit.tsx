import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const CompanyEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
