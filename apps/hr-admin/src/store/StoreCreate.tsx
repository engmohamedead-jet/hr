import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  BooleanInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { ProductionOrderTitle } from "../productionOrder/ProductionOrderTitle";
import { ProductTitle } from "../product/ProductTitle";

export const StoreCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="AddressLine1" source="addressLine1" />
        <BooleanInput label="AllowSale" source="allowSale" />
        <TextInput label="CellPhoneNumber" source="cellPhoneNumber" />
        <TextInput label="Code" source="code" />
        <TextInput label="Fax" source="fax" />
        <TextInput label="HomePhoneNumber" source="homePhoneNumber" />
        <TextInput label="Name" source="name" />
        <TextInput label="NormalizedName" source="normalizedName" />
        <TextInput label="Note" multiline source="note" />
        <ReferenceArrayInput
          source="productionOrders"
          reference="ProductionOrder"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ProductionOrderTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="products"
          reference="Product"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ProductTitle} />
        </ReferenceArrayInput>
        <TextInput label="Street" source="street" />
      </SimpleForm>
    </Create>
  );
};
