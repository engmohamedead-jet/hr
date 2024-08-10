import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  ReferenceField,
  TextField,
  DateField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { COSTCENTER_TITLE_FIELD } from "../costCenter/CostCenterTitle";
import { STORE_TITLE_FIELD } from "../store/StoreTitle";

export const AccountTransactionList = (
  props: ListProps
): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"AccountTransactions"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <ReferenceField
          label="CostCenterId"
          source="costcenter.id"
          reference="CostCenter"
        >
          <TextField source={COSTCENTER_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="Note" source="note" />
        <TextField label="ReferenceNumber" source="referenceNumber" />
        <TextField label="StatementReference" source="statementReference" />
        <ReferenceField label="StoreId" source="store.id" reference="Store">
          <TextField source={STORE_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="TransactionDate" source="transactionDate" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
