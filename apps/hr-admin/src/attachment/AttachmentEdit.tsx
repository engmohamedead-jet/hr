import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const AttachmentEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="FileExtension" source="fileExtension" />
        <TextInput label="FilePath" source="filePath" />
        <TextInput label="Note" multiline source="note" />
        <TextInput label="OriginalFileName" source="originalFileName" />
        <TextInput label="TableKeyName" source="tableKeyName" />
        <TextInput label="TableKeyValue" source="tableKeyValue" />
        <TextInput label="TableName" source="tableName" />
      </SimpleForm>
    </Edit>
  );
};
