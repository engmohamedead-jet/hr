import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  BooleanInput,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { TenantTitle } from "../tenant/TenantTitle";
import { WorkCenterTitle } from "../workCenter/WorkCenterTitle";
import { WorkCenterTagTitle } from "../workCenterTag/WorkCenterTagTitle";

export const WorkCenterWorkCenterTagCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
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
          source="workCenter.id"
          reference="WorkCenter"
          label="WorkCenterId"
        >
          <SelectInput optionText={WorkCenterTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="workCenterTagId.id"
          reference="WorkCenterTag"
          label="WorkCenterTagId"
        >
          <SelectInput optionText={WorkCenterTagTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
