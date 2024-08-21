import * as React from "react";

import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  BooleanField,
  ReferenceField,
} from "react-admin";

import Pagination from "../Components/Pagination";
import { SETTINGGROUP_TITLE_FIELD } from "../settingGroup/SettingGroupTitle";
import { TENANT_TITLE_FIELD } from "../tenant/TenantTitle";

export const SettingList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Settings"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
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
      </Datagrid>
    </List>
  );
};
