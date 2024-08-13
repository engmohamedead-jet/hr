import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
  BooleanInput,
} from "react-admin";

import { CompoundUnitTitle } from "../compoundUnit/CompoundUnitTitle";
import { ProductTitle } from "../product/ProductTitle";

export const UnitEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Code" source="code" />
        <ReferenceInput
          source="compareUnit.id"
          reference="CompoundUnit"
          label="CompareUnit"
        >
          <SelectInput optionText={CompoundUnitTitle} />
        </ReferenceInput>
        <ReferenceArrayInput
          source="compoundUnits"
          reference="CompoundUnit"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={CompoundUnitTitle} />
        </ReferenceArrayInput>
        <TextInput label="Description" multiline source="description" />
        <BooleanInput label="IsCompound" source="isCompound" />
        <BooleanInput label="IsDefault" source="isDefault" />
        <TextInput label="Name" source="name" />
        <TextInput label="NormalizedName" source="normalizedName" />
        <TextInput label="Note" multiline source="note" />
        <ReferenceArrayInput
          source="products"
          reference="Product"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ProductTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Edit>
  );
};
