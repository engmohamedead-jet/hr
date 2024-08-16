import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { ProductionOrderTitle } from "../productionOrder/ProductionOrderTitle";

export const OrderStatusEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Code" source="code" />
        <TextInput label="Description" multiline source="description" />
        <TextInput label="Name" source="name" />
        <TextInput label="NormalizedName" source="normalizedName" />
        <TextInput label="Note" multiline source="note" />
        <ReferenceInput
          source="productionOrders.id"
          reference="ProductionOrder"
          label="ProductionOrders"
        >
          <SelectInput optionText={ProductionOrderTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
