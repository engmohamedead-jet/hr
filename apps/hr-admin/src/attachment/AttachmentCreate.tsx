import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const AttachmentCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="FileExtension" source="fileExtension" />
        <TextInput label="FilePath" source="filePath" />
        <TextInput label="Note" multiline source="note" />
        <TextInput label="OriginalFileName" source="originalFileName" />
        <TextInput label="TableKeyName" source="tableKeyName" />
        <TextInput label="TableKeyValue" source="tableKeyValue" />
        <TextInput label="TableName" source="tableName" />
      </SimpleForm>
    </Create>
  );
};
