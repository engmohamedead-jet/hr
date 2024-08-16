import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  BooleanField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { WORKCENTER_TITLE_FIELD } from "./WorkCenterTitle";

export const WorkCenterShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="AnalyticDistribution" source="analyticDistribution" />
        <TextField label="Code" source="code" />
        <TextField label="Color" source="color" />
        <TextField label="CostPerHour" source="costPerHour" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="DefaultCapacity" source="defaultCapacity" />
        <TextField label="ID" source="id" />
        <BooleanField label="IsActive" source="isActive" />
        <BooleanField label="IsProductive" source="isProductive" />
        <TextField label="Name" source="name" />
        <TextField label="NormalizedName" source="normalizedName" />
        <TextField label="Note" source="note" />
        <TextField label="OeeTareget" source="oeeTareget" />
        <TextField label="Sequence" source="sequence" />
        <TextField label="StartTime" source="startTime" />
        <TextField label="StopTime" source="stopTime" />
        <TextField label="TimeEfficiency" source="timeEfficiency" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="WorkCenterRouting"
          target="workCenterId"
          label="WorkCenterRoutings"
        >
          <Datagrid rowClick="show">
            <TextField label="Code" source="code" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <BooleanField label="IsActive" source="isActive" />
            <TextField label="Name" source="name" />
            <TextField label="NormalizedName" source="normalizedName" />
            <TextField label="Note" source="note" />
            <TextField label="Sequence" source="sequence" />
            <TextField label="TimeCycleManual" source="timeCycleManual" />
            <TextField label="TimeModeBatch" source="timeModeBatch" />
            <DateField source="updatedAt" label="Updated At" />
            <ReferenceField
              label="WorkCenter"
              source="workcenter.id"
              reference="WorkCenter"
            >
              <TextField source={WORKCENTER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};