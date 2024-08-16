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

import { PRINTTEMPLATECONTENT_TITLE_FIELD } from "../printTemplateContent/PrintTemplateContentTitle";

export const PrintTemplateShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Code" source="code" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="Description" source="description" />
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
          label="PrintTemplateContents"
          source="printtemplatecontent.id"
          reference="PrintTemplateContent"
        >
          <TextField source={PRINTTEMPLATECONTENT_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
