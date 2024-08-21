import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  BooleanInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { SettingGroupTitle } from "../settingGroup/SettingGroupTitle";
import { TenantTitle } from "../tenant/TenantTitle";

export const SettingEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Code" source="code" />
        <BooleanInput label="IsActive" source="isActive" />
        <BooleanInput label="IsEnabled" source="isEnabled" />
        <BooleanInput label="IsSystem" source="isSystem" />
        <TextInput label="Key" source="key" />
        <TextInput label="Note" multiline source="note" />
        <ReferenceInput
          source="settingGroup.id"
          reference="SettingGroup"
          label="SettingGroup"
        >
          <SelectInput optionText={SettingGroupTitle} />
        </ReferenceInput>
        <ReferenceInput source="tenant.id" reference="Tenant" label="Tenant">
          <SelectInput optionText={TenantTitle} />
        </ReferenceInput>
        <TextInput label="Value" source="value" />
      </SimpleForm>
    </Edit>
  );
};
