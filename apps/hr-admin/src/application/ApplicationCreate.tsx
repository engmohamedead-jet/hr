import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  TextInput,
  BooleanInput,
  DateTimeInput,
} from "react-admin";

import { ApplicationDependencyTitle } from "../applicationDependency/ApplicationDependencyTitle";
import { TenantTitle } from "../tenant/TenantTitle";

export const ApplicationCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput
          source="DependsOnApplicationDependency.id"
          reference="ApplicationDependency"
          label="DependsOnApplicationDependency"
        >
          <SelectInput optionText={ApplicationDependencyTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="applicationDependency.id"
          reference="ApplicationDependency"
          label="ApplicationDependency"
        >
          <SelectInput optionText={ApplicationDependencyTitle} />
        </ReferenceInput>
        <TextInput label="Code" source="code" />
        <TextInput label="Description" multiline source="description" />
        <TextInput label="I18nKey" source="i18nKey" />
        <TextInput label="Icon" source="icon" />
        <BooleanInput label="IsActive" source="isActive" />
        <TextInput label="LandingUrl" source="landingUrl" />
        <TextInput label="Name" source="name" />
        <TextInput label="NormalizedName" source="normalizedName" />
        <TextInput label="Note" multiline source="note" />
        <DateTimeInput label="PublishedDateTime" source="publishedDateTime" />
        <TextInput label="Publisher" source="publisher" />
        <ReferenceInput
          source="tenantId.id"
          reference="Tenant"
          label="TenantId"
        >
          <SelectInput optionText={TenantTitle} />
        </ReferenceInput>
        <TextInput label="VersionNumber" source="versionNumber" />
      </SimpleForm>
    </Create>
  );
};
