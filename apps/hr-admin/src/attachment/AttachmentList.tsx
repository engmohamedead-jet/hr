import * as React from "react";
import { List, Datagrid, ListProps, DateField, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const AttachmentList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Attachments"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
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
      </Datagrid>
    </List>
  );
};
