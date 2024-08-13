import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
  BooleanField,
  ReferenceField,
} from "react-admin";

import { PRINTTEMPLATEGROUP_TITLE_FIELD } from "./PrintTemplateGroupTitle";

export const PrintTemplateGroupShow = (
  props: ShowProps
): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Code" source="code" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="Description" source="description" />
        <TextField label="ID" source="id" />
        <TextField label="Name" source="name" />
        <TextField label="NormalizedName" source="normalizedName" />
        <TextField label="Note" source="note" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="PrintTemplate"
          target="printTemplateGroupIdId"
          label="PrintTemplates"
        >
          <Datagrid rowClick="show">
            <TextField label="Description" source="Description" />
            <TextField label="Code" source="code" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="FilePath" source="filePath" />
            <TextField label="ID" source="id" />
            <BooleanField label="IsCustomized" source="isCustomized" />
            <BooleanField label="IsFavourite" source="isFavourite" />
            <TextField label="Name" source="name" />
            <TextField label="NormalizedName" source="normalizedName" />
            <TextField label="Note" source="note" />
            <TextField label="PaperLayout" source="paperLayout" />
            <TextField label="PaperSize" source="paperSize" />
            <TextField label="PreviewImage" source="previewImage" />
            <ReferenceField
              label="PrintTemplateGroupId"
              source="printtemplategroup.id"
              reference="PrintTemplateGroup"
            >
              <TextField source={PRINTTEMPLATEGROUP_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
