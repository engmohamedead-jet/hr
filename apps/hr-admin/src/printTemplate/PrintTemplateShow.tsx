import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  BooleanField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { PRINTTEMPLATE_TITLE_FIELD } from "./PrintTemplateTitle";
import { PRINTTEMPLATEGROUP_TITLE_FIELD } from "../printTemplateGroup/PrintTemplateGroupTitle";

export const PrintTemplateShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
        <ReferenceManyField
          reference="PrintTemplateContent"
          target="printTemplateIdId"
          label="PrintTemplateContents"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="Display" source="display" />
            <TextField label="FieldValue" source="fieldValue" />
            <TextField label="ID" source="id" />
            <TextField label="Key" source="key" />
            <TextField label="Note" source="note" />
            <ReferenceField
              label="PrintTemplateId"
              source="printtemplate.id"
              reference="PrintTemplate"
            >
              <TextField source={PRINTTEMPLATE_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="Value" source="value" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
