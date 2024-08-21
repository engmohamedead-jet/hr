import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  ReferenceField,
  TextField,
  DateField,
  BooleanField,
} from "react-admin";

import { APPLICATIONDEPENDENCY_TITLE_FIELD } from "../applicationDependency/ApplicationDependencyTitle";
import { TENANT_TITLE_FIELD } from "../tenant/TenantTitle";

export const ApplicationShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <ReferenceField
          label="DependsOnApplicationDependency"
          source="applicationdependency.id"
          reference="ApplicationDependency"
        >
          <TextField source={APPLICATIONDEPENDENCY_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField
          label="ApplicationDependency"
          source="applicationdependency.id"
          reference="ApplicationDependency"
        >
          <TextField source={APPLICATIONDEPENDENCY_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Code" source="code" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="Description" source="description" />
        <TextField label="I18nKey" source="i18nKey" />
        <TextField label="Icon" source="icon" />
        <TextField label="ID" source="id" />
        <BooleanField label="IsActive" source="isActive" />
        <TextField label="LandingUrl" source="landingUrl" />
        <TextField label="Name" source="name" />
        <TextField label="NormalizedName" source="normalizedName" />
        <TextField label="Note" source="note" />
        <TextField label="PublishedDateTime" source="publishedDateTime" />
        <TextField label="Publisher" source="publisher" />
        <ReferenceField label="TenantId" source="tenant.id" reference="Tenant">
          <TextField source={TENANT_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="VersionNumber" source="versionNumber" />
      </SimpleShowLayout>
    </Show>
  );
};
