import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
  BooleanInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { WorkCenterRoutingTitle } from "../workCenterRouting/WorkCenterRoutingTitle";

export const WorkCenterEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
        <TextInput label="Note" source="note" />
        <NumberInput label="OeeTareget" source="oeeTareget" />
        <NumberInput step={1} label="Sequence" source="sequence" />
        <NumberInput label="StartTime" source="startTime" />
        <NumberInput label="StopTime" source="stopTime" />
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
    </Edit>
  );
};