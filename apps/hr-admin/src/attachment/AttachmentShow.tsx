import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
} from "react-admin";

export const AttachmentShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="FileExtension" source="fileExtension" />
        <TextField label="FilePath" source="filePath" />
        <TextField label="ID" source="id" />
        <TextField label="Note" source="note" />
        <TextField label="OriginalFileName" source="originalFileName" />
        <TextField label="TableKeyName" source="tableKeyName" />
        <TextField label="TableKeyValue" source="tableKeyValue" />
        <TextField label="TableName" source="tableName" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
