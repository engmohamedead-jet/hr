import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  BooleanInput,
  NumberInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { TenantTitle } from "../tenant/TenantTitle";
import { WorkCenterTitle } from "../workCenter/WorkCenterTitle";

export const WorkCenterRoutingEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="BillOfMaterialId" source="billOfMaterialId" />
        <TextInput label="Code" source="code" />
        <BooleanInput label="IsActive" source="isActive" />
        <TextInput label="Name" source="name" />
        <TextInput label="NormalizedName" source="normalizedName" />
        <TextInput label="Note" multiline source="note" />
        <NumberInput step={1} label="Sequence" source="sequence" />
        <ReferenceInput source="tenant.id" reference="Tenant" label="TenantId">
          <SelectInput optionText={TenantTitle} />
        </ReferenceInput>
        <NumberInput label="TimeCycleManual" source="timeCycleManual" />
        <NumberInput step={1} label="TimeModeBatch" source="timeModeBatch" />
        <ReferenceInput
          source="workCenterId.id"
          reference="WorkCenter"
          label="WorkCenterId"
        >
          <SelectInput optionText={WorkCenterTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
