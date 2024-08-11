import * as React from "react";
import { List, Datagrid, ListProps, DateField, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const FailureList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Failures"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <TextField label="FailureDate" source="failureDate" />
        <TextField label="FailureReport" source="failureReport" />
        <TextField label="ID" source="id" />
        <TextField label="Note" source="note" />
        <TextField label="Serial" source="serial" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
