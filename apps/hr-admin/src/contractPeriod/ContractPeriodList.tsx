import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const ContractPeriodList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"ContractPeriods"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Description" source="Description" />
        <TextField label="Code" source="code" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="Name" source="name" />
        <TextField label="NormalizedName" source="normalizedName" />
        <TextField label="Note" source="note" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};