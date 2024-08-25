import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  BooleanInput,
  TextInput,
} from "react-admin";

import { WorkOrderTitle } from "../workOrder/WorkOrderTitle";
import { TenantTitle } from "../tenant/TenantTitle";

export const WorkOrderDependencyCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput
          source="blockedByWorkOrderId.id"
          reference="WorkOrder"
          label="BlockedByWorkOrderId"
        >
          <SelectInput optionText={WorkOrderTitle} />
        </ReferenceInput>
        <BooleanInput label="IsActive" source="isActive" />
        <TextInput label="Note" multiline source="note" />
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
    </Create>
  );
};
