import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  BooleanField,
  ReferenceField,
} from "react-admin";

import { PRODUCTIONORDER_TITLE_FIELD } from "../productionOrder/ProductionOrderTitle";
import { SALEORDER_TITLE_FIELD } from "../saleOrder/SaleOrderTitle";
import { TENANT_TITLE_FIELD } from "../tenant/TenantTitle";

export const OrderStatusShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Code" source="code" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="Description" source="description" />
        <TextField label="ID" source="id" />
        <BooleanField label="IsActive" source="isActive" />
        <TextField label="Name" source="name" />
        <TextField label="NormalizedName" source="normalizedName" />
        <TextField label="Note" source="note" />
        <ReferenceField
          label="ProductionOrders"
          source="productionorder.id"
          reference="ProductionOrder"
        >
          <TextField source={PRODUCTIONORDER_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField
          label="SaleOrders"
          source="saleorder.id"
          reference="SaleOrder"
        >
          <TextField source={SALEORDER_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField label="TenantId" source="tenant.id" reference="Tenant">
          <TextField source={TENANT_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
