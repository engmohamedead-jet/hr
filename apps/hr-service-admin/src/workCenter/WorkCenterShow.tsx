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

import { WORKCENTER_TITLE_FIELD } from "./WorkCenterTitle";
import { TENANT_TITLE_FIELD } from "../tenant/TenantTitle";
import { WORKCENTERPRODUCTIVITYLOSSTYPE_TITLE_FIELD } from "../workCenterProductivityLossType/WorkCenterProductivityLossTypeTitle";
import { WORKCENTERTAG_TITLE_FIELD } from "../workCenterTag/WorkCenterTagTitle";

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
        <ReferenceField label="TenantId" source="tenant.id" reference="Tenant">
          <TextField source={TENANT_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="TimeEfficiency" source="timeEfficiency" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="WorkCenterAlternative"
          target="workCenterIdId"
          label="WorkCenterAlternatives"
        >
          <Datagrid rowClick="show">
            <ReferenceField
              label="AlternativeWorkCenterId"
              source="workcenter.id"
              reference="WorkCenter"
            >
              <TextField source={WORKCENTER_TITLE_FIELD} />
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
              label="WorkCenterId1"
              source="workcenter.id"
              reference="WorkCenter"
            >
              <TextField source={WORKCENTER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="WorkCenterAlternative"
          target="alternativeWorkCenterIdId"
          label="WorkCenterAlternatives"
        >
          <Datagrid rowClick="show">
            <ReferenceField
              label="AlternativeWorkCenterId"
              source="workcenter.id"
              reference="WorkCenter"
            >
              <TextField source={WORKCENTER_TITLE_FIELD} />
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
              label="WorkCenterId1"
              source="workcenter.id"
              reference="WorkCenter"
            >
              <TextField source={WORKCENTER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="WorkCenterCapacity"
          target="workCenterIdId"
          label="WorkCenterCapacities"
        >
          <Datagrid rowClick="show">
            <TextField label="Capacity" source="capacity" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <BooleanField label="IsActive" source="isActive" />
            <TextField label="Note" source="note" />
            <TextField label="StartTime" source="startTime" />
            <TextField label="StopTime" source="stopTime" />
            <ReferenceField
              label="TenantId"
              source="tenant.id"
              reference="Tenant"
            >
              <TextField source={TENANT_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
            <ReferenceField
              label="WorkCenterId"
              source="workcenter.id"
              reference="WorkCenter"
            >
              <TextField source={WORKCENTER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="WorkCenterProductivity"
          target="workCenterIdId"
          label="WorkCenterProductivities"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="Description" source="description" />
            <TextField label="Duration" source="duration" />
            <TextField label="EndDate" source="endDate" />
            <TextField label="ID" source="id" />
            <BooleanField label="IsActive" source="isActive" />
            <TextField label="Note" source="note" />
            <TextField label="StartDate" source="startDate" />
            <ReferenceField
              label="TenantId"
              source="tenant.id"
              reference="Tenant"
            >
              <TextField source={TENANT_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
            <ReferenceField
              label="WorkCenterId"
              source="workcenter.id"
              reference="WorkCenter"
            >
              <TextField source={WORKCENTER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="WorkCenterProductivityLoss"
          target="workCenterIdId"
          label="WorkCenterProductivityLosses"
        >
          <Datagrid rowClick="show">
            <TextField label="Code" source="code" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <BooleanField label="IsActive" source="isActive" />
            <BooleanField label="IsManual" source="isManual" />
            <TextField label="EffectiveLossType" source="lossType" />
            <TextField label="Name" source="name" />
            <TextField label="NormalizedName" source="normalizedName" />
            <TextField label="Note" source="note" />
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
              label="WorkCenterId"
              source="workcenter.id"
              reference="WorkCenter"
            >
              <TextField source={WORKCENTER_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="WorkCenterProductivityLossTypeId"
              source="workcenterproductivitylosstype.id"
              reference="WorkCenterProductivityLossType"
            >
              <TextField source={WORKCENTERPRODUCTIVITYLOSSTYPE_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="WorkCenterRouting"
          target="workCenterIdId"
          label="WorkCenterRoutings"
        >
          <Datagrid rowClick="show">
            <TextField label="BillOfMaterialId" source="billOfMaterialId" />
            <TextField label="Code" source="code" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <BooleanField label="IsActive" source="isActive" />
            <TextField label="Name" source="name" />
            <TextField label="NormalizedName" source="normalizedName" />
            <TextField label="Note" source="note" />
            <TextField label="Sequence" source="sequence" />
            <ReferenceField
              label="TenantId"
              source="tenant.id"
              reference="Tenant"
            >
              <TextField source={TENANT_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="TimeCycleManual" source="timeCycleManual" />
            <TextField label="TimeModeBatch" source="timeModeBatch" />
            <DateField source="updatedAt" label="Updated At" />
            <ReferenceField
              label="WorkCenterId"
              source="workcenter.id"
              reference="WorkCenter"
            >
              <TextField source={WORKCENTER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="WorkCenterWorkCenterTag"
          target="workCenterId"
          label="WorkCenterWorkCenterTags"
        >
          <Datagrid rowClick="show">
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
              label="WorkCenterId"
              source="workcenter.id"
              reference="WorkCenter"
            >
              <TextField source={WORKCENTER_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="WorkCenterTagId"
              source="workcentertag.id"
              reference="WorkCenterTag"
            >
              <TextField source={WORKCENTERTAG_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
