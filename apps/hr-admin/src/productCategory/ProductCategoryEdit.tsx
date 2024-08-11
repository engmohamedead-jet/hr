import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  BooleanInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { ProductDepartmentTitle } from "../productDepartment/ProductDepartmentTitle";

export const ProductCategoryEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Code" source="code" />
        <TextInput label="Description" multiline source="description" />
        <BooleanInput label="IsDefault" source="isDefault" />
        <TextInput label="Name" source="name" />
        <TextInput label="NormalizedName" source="normalizedName" />
        <TextInput label="Note" multiline source="note" />
        <ReferenceInput
          source="productDepartment.id"
          reference="ProductDepartment"
          label="ParentProductDepartmentId"
        >
          <SelectInput optionText={ProductDepartmentTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
