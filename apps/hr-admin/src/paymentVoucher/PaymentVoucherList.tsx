import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const PaymentVoucherList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"PaymentVouchers"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Amount" source="amount" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="Note" source="note" />
        <TextField label="PaymentVoucherDate" source="paymentVoucherDate" />
        <TextField label="StatementReference" source="statementReference" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
