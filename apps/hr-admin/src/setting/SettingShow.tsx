import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  BooleanField,
  ReferenceField,
} from "react-admin";

import { SETTINGGROUP_TITLE_FIELD } from "../settingGroup/SettingGroupTitle";
import { TENANT_TITLE_FIELD } from "../tenant/TenantTitle";

export const SettingShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Code" source="code" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <BooleanField label="IsActive" source="isActive" />
        <BooleanField label="IsEnabled" source="isEnabled" />
        <BooleanField label="IsSystem" source="isSystem" />
        <TextField label="Key" source="key" />
        <TextField label="Note" source="note" />
        <ReferenceField
          label="SettingGroup"
          source="settinggroup.id"
          reference="SettingGroup"
        >
          <TextField source={SETTINGGROUP_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField label="Tenant" source="tenant.id" reference="Tenant">
          <TextField source={TENANT_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Value" source="value" />
      </SimpleShowLayout>
    </Show>
  );
};
