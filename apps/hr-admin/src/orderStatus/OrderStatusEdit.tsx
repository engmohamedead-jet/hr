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

import { ProductionOrderTitle } from "../productionOrder/ProductionOrderTitle";
import { SaleOrderTitle } from "../saleOrder/SaleOrderTitle";
import { TenantTitle } from "../tenant/TenantTitle";

export const OrderStatusEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Code" source="code" />
        <TextInput label="Description" multiline source="description" />
        <BooleanInput label="IsActive" source="isActive" />
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
        <ReferenceInput
          source="saleOrders.id"
          reference="SaleOrder"
          label="SaleOrders"
        >
          <SelectInput optionText={SaleOrderTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="tenantId.id"
          reference="Tenant"
          label="TenantId"
        >
          <SelectInput optionText={TenantTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
