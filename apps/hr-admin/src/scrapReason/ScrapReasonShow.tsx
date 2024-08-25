import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  BooleanField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { SCRAPREASON_TITLE_FIELD } from "./ScrapReasonTitle";
import { TENANT_TITLE_FIELD } from "../tenant/TenantTitle";

export const ScrapReasonShow = (props: ShowProps): React.ReactElement => {
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
        <ReferenceField label="TenantId" source="tenant.id" reference="Tenant">
          <TextField source={TENANT_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="WorkOrder"
          target="scrapReasonIdId"
          label="WorkOrders"
        >
          <Datagrid rowClick="show">
            <TextField label="Barcode" source="barcode" />
            <TextField label="Code" source="code" />
            <TextField label="CostsPerHour" source="costsPerHour" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="Duaration" source="duaration" />
            <TextField label="DuarationExpected" source="duarationExpected" />
            <TextField label="DuarationPercent" source="duarationPercent" />
            <TextField label="DuarationUnit" source="duarationUnit" />
            <TextField label="DueDate" source="dueDate" />
            <TextField label="EndDate" source="endDate" />
            <TextField label="ID" source="id" />
            <BooleanField label="IsActive" source="isActive" />
            <TextField label="Name" source="name" />
            <TextField label="NormalizedName" source="normalizedName" />
            <TextField label="Note" source="note" />
            <TextField label="OrderQuantity" source="orderQuantity" />
            <TextField label="ProductionDate" source="productionDate" />
            <TextField label="QuantityProduced" source="quantityProduced" />
            <TextField
              label="QuantityReportedFromPreviouseWorkOrder"
              source="quantityReportedFromPreviouseWorkOrder"
            />
            <ReferenceField
              label="ScrapReasonId"
              source="scrapreason.id"
              reference="ScrapReason"
            >
              <TextField source={SCRAPREASON_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="ScrappedQuantity" source="scrappedQuantity" />
            <TextField label="StartDate" source="startDate" />
            <TextField label="StockQuantity" source="stockQuantity" />
            <ReferenceField
              label="TenantId"
              source="tenant.id"
              reference="Tenant"
            >
              <TextField source={TENANT_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
