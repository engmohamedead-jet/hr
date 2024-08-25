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
import { WorkCenterAlternativeTitle } from "../workCenterAlternative/WorkCenterAlternativeTitle";
import { WorkCenterCapacityTitle } from "../workCenterCapacity/WorkCenterCapacityTitle";
import { WorkCenterProductivityTitle } from "../workCenterProductivity/WorkCenterProductivityTitle";
import { WorkCenterProductivityLossTitle } from "../workCenterProductivityLoss/WorkCenterProductivityLossTitle";
import { WorkCenterRoutingTitle } from "../workCenterRouting/WorkCenterRoutingTitle";
import { WorkCenterWorkCenterTagTitle } from "../workCenterWorkCenterTag/WorkCenterWorkCenterTagTitle";

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
          source="workCenterAlternativeWorkCenters"
          reference="WorkCenterAlternative"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={WorkCenterAlternativeTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="workCenterAlternatives"
          reference="WorkCenterAlternative"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={WorkCenterAlternativeTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="workCenterCapacities"
          reference="WorkCenterCapacity"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={WorkCenterCapacityTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="workCenterProductivities"
          reference="WorkCenterProductivity"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={WorkCenterProductivityTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="workCenterProductivityLosses"
          reference="WorkCenterProductivityLoss"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={WorkCenterProductivityLossTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="workCenterRoutings"
          reference="WorkCenterRouting"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={WorkCenterRoutingTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="workCenterWorkCenterTags"
          reference="WorkCenterWorkCenterTag"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={WorkCenterWorkCenterTagTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};
