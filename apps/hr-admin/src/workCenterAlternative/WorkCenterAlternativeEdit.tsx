import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  BooleanInput,
  TextInput,
} from "react-admin";

import { WorkCenterTitle } from "../workCenter/WorkCenterTitle";
import { TenantTitle } from "../tenant/TenantTitle";

export const WorkCenterAlternativeEdit = (
  props: EditProps
): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput
          source="alternativeWorkCenterId.id"
          reference="WorkCenter"
          label="AlternativeWorkCenterId"
        >
          <SelectInput optionText={WorkCenterTitle} />
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
          source="workCenterId.id"
          reference="WorkCenter"
          label="WorkCenterId1"
        >
          <SelectInput optionText={WorkCenterTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
