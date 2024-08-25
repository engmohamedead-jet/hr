import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  DateTimeInput,
  BooleanInput,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { TenantTitle } from "../tenant/TenantTitle";
import { WorkOrderTitle } from "../workOrder/WorkOrderTitle";

export const WorkOrderRoutingEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput label="ActualCost" source="actualCost" />
        <DateTimeInput label="ActualEndDate" source="actualEndDate" />
        <NumberInput label="ActualResourceHours" source="actualResourceHours" />
        <DateTimeInput label="ActualStartDate" source="actualStartDate" />
        <BooleanInput label="IsActive" source="isActive" />
        <TextInput label="Note" multiline source="note" />
        <NumberInput label="PlannedCost" source="plannedCost" />
        <DateTimeInput label="ScheduledEndDate" source="scheduledEndDate" />
        <DateTimeInput label="ScheduledStartDate" source="scheduledStartDate" />
        <NumberInput step={1} label="Sequence" source="sequence" />
        <ReferenceInput
          source="tenantId.id"
          reference="Tenant"
          label="TenantId"
        >
          <SelectInput optionText={TenantTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="workOrderId.id"
          reference="WorkOrder"
          label="WorkOrderId"
        >
          <SelectInput optionText={WorkOrderTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
