import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const DebitList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Debits"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="AmountTotal" source="amountTotal" />
        <TextField label="ContractDate" source="contractDate" />
        <TextField label="ContractNumber" source="contractNumber" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="FirstShare" source="firstShare" />
        <TextField label="FourthShare" source="fourthShare" />
        <TextField label="ID" source="id" />
        <TextField label="Note" source="note" />
        <TextField label="PaidTotal" source="paidTotal" />
        <TextField label="Remaining" source="remaining" />
        <TextField label="SecondShare" source="secondShare" />
        <TextField label="ThirdShare" source="thirdShare" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
