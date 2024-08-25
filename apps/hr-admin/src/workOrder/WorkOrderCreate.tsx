import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
  DateTimeInput,
  BooleanInput,
  ReferenceInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { ScrapReasonTitle } from "../scrapReason/ScrapReasonTitle";
import { TenantTitle } from "../tenant/TenantTitle";
import { WorkOrderDependencyTitle } from "../workOrderDependency/WorkOrderDependencyTitle";
import { WorkOrderRoutingTitle } from "../workOrderRouting/WorkOrderRoutingTitle";

export const WorkOrderCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Barcode" source="barcode" />
        <TextInput label="Code" source="code" />
        <NumberInput label="CostsPerHour" source="costsPerHour" />
        <NumberInput label="Duaration" source="duaration" />
        <NumberInput label="DuarationExpected" source="duarationExpected" />
        <NumberInput label="DuarationPercent" source="duarationPercent" />
        <NumberInput label="DuarationUnit" source="duarationUnit" />
        <DateTimeInput label="DueDate" source="dueDate" />
        <DateTimeInput label="EndDate" source="endDate" />
        <BooleanInput label="IsActive" source="isActive" />
        <TextInput label="Name" source="name" />
        <TextInput label="NormalizedName" source="normalizedName" />
        <TextInput label="Note" multiline source="note" />
        <NumberInput label="OrderQuantity" source="orderQuantity" />
        <DateTimeInput label="ProductionDate" source="productionDate" />
        <NumberInput label="QuantityProduced" source="quantityProduced" />
        <NumberInput
          label="QuantityReportedFromPreviouseWorkOrder"
          source="quantityReportedFromPreviouseWorkOrder"
        />
        <ReferenceInput
          source="scrapReasonId.id"
          reference="ScrapReason"
          label="ScrapReasonId"
        >
          <SelectInput optionText={ScrapReasonTitle} />
        </ReferenceInput>
        <NumberInput label="ScrappedQuantity" source="scrappedQuantity" />
        <DateTimeInput label="StartDate" source="startDate" />
        <NumberInput label="StockQuantity" source="stockQuantity" />
        <ReferenceInput
          source="tenantId.id"
          reference="Tenant"
          label="TenantId"
        >
          <SelectInput optionText={TenantTitle} />
        </ReferenceInput>
        <ReferenceArrayInput
          source="workOrderBaseDependencies"
          reference="WorkOrderDependency"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={WorkOrderDependencyTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="workOrderDependencies"
          reference="WorkOrderDependency"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={WorkOrderDependencyTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="workOrderRoutings"
          reference="WorkOrderRouting"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={WorkOrderRoutingTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};
