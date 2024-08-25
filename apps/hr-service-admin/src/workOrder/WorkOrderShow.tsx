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

import { WORKORDER_TITLE_FIELD } from "./WorkOrderTitle";
import { TENANT_TITLE_FIELD } from "../tenant/TenantTitle";
import { SCRAPREASON_TITLE_FIELD } from "../scrapReason/ScrapReasonTitle";

export const WorkOrderShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
        <ReferenceField label="TenantId" source="tenant.id" reference="Tenant">
          <TextField source={TENANT_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="WorkOrderDependency"
          target="workOrderIdId"
          label="WorkOrderDependencies"
        >
          <Datagrid rowClick="show">
            <ReferenceField
              label="BlockedByWorkOrderId"
              source="workorder.id"
              reference="WorkOrder"
            >
              <TextField source={WORKORDER_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <BooleanField label="IsActive" source="isActive" />
            <TextField label="Note" source="note" />
            <ReferenceField
              label="TenantId"
              source="tenant.id"
              reference="Tenant"
            >
              <TextField source={TENANT_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
            <ReferenceField
              label="WorkOrderId"
              source="workorder.id"
              reference="WorkOrder"
            >
              <TextField source={WORKORDER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="WorkOrderDependency"
          target="blockedByWorkOrderIdId"
          label="WorkOrderDependencies"
        >
          <Datagrid rowClick="show">
            <ReferenceField
              label="BlockedByWorkOrderId"
              source="workorder.id"
              reference="WorkOrder"
            >
              <TextField source={WORKORDER_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <BooleanField label="IsActive" source="isActive" />
            <TextField label="Note" source="note" />
            <ReferenceField
              label="TenantId"
              source="tenant.id"
              reference="Tenant"
            >
              <TextField source={TENANT_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
            <ReferenceField
              label="WorkOrderId"
              source="workorder.id"
              reference="WorkOrder"
            >
              <TextField source={WORKORDER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="WorkOrderRouting"
          target="workOrderIdId"
          label="WorkOrderRoutings"
        >
          <Datagrid rowClick="show">
            <TextField label="ActualCost" source="actualCost" />
            <TextField label="ActualEndDate" source="actualEndDate" />
            <TextField
              label="ActualResourceHours"
              source="actualResourceHours"
            />
            <TextField label="ActualStartDate" source="actualStartDate" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <BooleanField label="IsActive" source="isActive" />
            <TextField label="Note" source="note" />
            <TextField label="PlannedCost" source="plannedCost" />
            <TextField label="ScheduledEndDate" source="scheduledEndDate" />
            <TextField label="ScheduledStartDate" source="scheduledStartDate" />
            <TextField label="Sequence" source="sequence" />
            <ReferenceField
              label="TenantId"
              source="tenant.id"
              reference="Tenant"
            >
              <TextField source={TENANT_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
            <ReferenceField
              label="WorkOrderId"
              source="workorder.id"
              reference="WorkOrder"
            >
              <TextField source={WORKORDER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
