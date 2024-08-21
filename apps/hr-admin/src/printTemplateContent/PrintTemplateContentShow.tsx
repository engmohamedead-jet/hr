import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  BooleanField,
  ReferenceField,
} from "react-admin";

import { PRINTTEMPLATE_TITLE_FIELD } from "../printTemplate/PrintTemplateTitle";
import { TENANT_TITLE_FIELD } from "../tenant/TenantTitle";

export const PrintTemplateContentShow = (
  props: ShowProps
): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="Display" source="display" />
        <TextField label="FieldValue" source="fieldValue" />
        <TextField label="ID" source="id" />
        <BooleanField label="IsActive" source="isActive" />
        <TextField label="Key" source="key" />
        <TextField label="Note" source="note" />
        <ReferenceField
          label="PrintTemplateId"
          source="printtemplate.id"
          reference="PrintTemplate"
        >
          <TextField source={PRINTTEMPLATE_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField label="Tenantd" source="tenant.id" reference="Tenant">
          <TextField source={TENANT_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Value" source="value" />
      </SimpleShowLayout>
    </Show>
  );
};
