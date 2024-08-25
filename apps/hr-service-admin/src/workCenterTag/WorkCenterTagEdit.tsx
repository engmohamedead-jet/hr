import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
  BooleanInput,
  ReferenceInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { TenantTitle } from "../tenant/TenantTitle";
import { WorkCenterWorkCenterTagTitle } from "../workCenterWorkCenterTag/WorkCenterWorkCenterTagTitle";

export const WorkCenterTagEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Desciption" multiline source="Desciption" />
        <TextInput label="Code" source="code" />
        <NumberInput step={1} label="Color" source="color" />
        <BooleanInput label="IsActive" source="isActive" />
        <TextInput label="Name" source="name" />
        <TextInput label="NormalizedName" source="normalizedName" />
        <TextInput label="Note" multiline source="note" />
        <ReferenceInput
          source="tenantId.id"
          reference="Tenant"
          label="TenantId"
        >
          <SelectInput optionText={TenantTitle} />
        </ReferenceInput>
        <ReferenceArrayInput
          source="workCenterWorkCenterTags"
          reference="WorkCenterWorkCenterTag"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={WorkCenterWorkCenterTagTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Edit>
  );
};
