import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  BooleanInput,
  SelectInput,
  NumberInput,
  ReferenceInput,
} from "react-admin";

import { TenantTitle } from "../tenant/TenantTitle";
import { WorkCenterTitle } from "../workCenter/WorkCenterTitle";
import { WorkCenterProductivityLossTypeTitle } from "../workCenterProductivityLossType/WorkCenterProductivityLossTypeTitle";

export const WorkCenterProductivityLossCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Code" source="code" />
        <BooleanInput label="IsActive" source="isActive" />
        <BooleanInput label="IsManual" source="isManual" />
        <SelectInput
          source="lossType"
          label="EffectiveLossType"
          choices={[
            { label: "Availability", value: "Availability" },
            { label: "Perfomance", value: "Perfomance" },
            { label: "Quality", value: "Quality" },
            { label: "Productive", value: "Productive" },
          ]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <TextInput label="Name" source="name" />
        <TextInput label="NormalizedName" source="normalizedName" />
        <TextInput label="Note" multiline source="note" />
        <NumberInput step={1} label="Sequence" source="sequence" />
        <ReferenceInput
          source="tenantId.id"
          reference="Tenant"
          label="TenantId"
        >
          <SelectInput optionText={TenantTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="workCenterId.id"
          reference="WorkCenter"
          label="WorkCenterId"
        >
          <SelectInput optionText={WorkCenterTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="workCenterProductivityLossTypeI.id"
          reference="WorkCenterProductivityLossType"
          label="WorkCenterProductivityLossTypeId"
        >
          <SelectInput optionText={WorkCenterProductivityLossTypeTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
