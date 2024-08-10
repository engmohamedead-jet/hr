import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  BooleanField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { COSTCENTER_TITLE_FIELD } from "./CostCenterTitle";
import { STORE_TITLE_FIELD } from "../store/StoreTitle";

export const CostCenterShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Code" source="code" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="Description" source="description" />
        <TextField label="ID" source="id" />
        <BooleanField label="IsSystem" source="isSystem" />
        <TextField label="Name" source="name" />
        <TextField label="NormalizedName" source="normalizedName" />
        <TextField label="Note" source="note" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="AccountTransaction"
          target="costCenterId"
          label="AccountTransactions"
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
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
