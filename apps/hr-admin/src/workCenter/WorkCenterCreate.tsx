import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
  BooleanInput,
  ReferenceInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { TenantTitle } from "../tenant/TenantTitle";
import { WorkCenterRoutingTitle } from "../workCenterRouting/WorkCenterRoutingTitle";

export const WorkCenterCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="AnalyticDistribution" source="analyticDistribution" />
        <TextInput label="Code" source="code" />
        <NumberInput step={1} label="Color" source="color" />
        <NumberInput label="CostPerHour" source="costPerHour" />
        <NumberInput label="DefaultCapacity" source="defaultCapacity" />
        <BooleanInput label="IsActive" source="isActive" />
        <BooleanInput label="IsProductive" source="isProductive" />
        <TextInput label="Name" source="name" />
        <TextInput label="NormalizedName" source="normalizedName" />
        <TextInput label="Note" multiline source="note" />
        <NumberInput label="OeeTareget" source="oeeTareget" />
        <NumberInput step={1} label="Sequence" source="sequence" />
        <NumberInput label="StartTime" source="startTime" />
        <NumberInput label="StopTime" source="stopTime" />
        <ReferenceInput
          source="tenantId.id"
          reference="Tenant"
          label="TenantId"
        >
          <SelectInput optionText={TenantTitle} />
        </ReferenceInput>
        <NumberInput label="TimeEfficiency" source="timeEfficiency" />
        <ReferenceArrayInput
          source="workCenterRoutings"
          reference="WorkCenterRouting"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={WorkCenterRoutingTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};
