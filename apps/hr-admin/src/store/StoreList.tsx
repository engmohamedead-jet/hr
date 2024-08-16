import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  BooleanField,
  DateField,
} from "react-admin";
import Pagination from "../Components/Pagination";

export const StoreList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Stores"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="AddressLine1" source="addressLine1" />
        <BooleanField label="AllowSale" source="allowSale" />
        <TextField label="CellPhoneNumber" source="cellPhoneNumber" />
        <TextField label="Code" source="code" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="Fax" source="fax" />
        <TextField label="HomePhoneNumber" source="homePhoneNumber" />
        <TextField label="ID" source="id" />
        <TextField label="Name" source="name" />
        <TextField label="NormalizedName" source="normalizedName" />
        <TextField label="Note" source="note" />
        <TextField label="Street" source="street" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
