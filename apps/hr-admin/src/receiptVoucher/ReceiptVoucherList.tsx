import * as React from "react";

import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  ReferenceField,
  BooleanField,
} from "react-admin";

import Pagination from "../Components/Pagination";
import { VOUCHERTYPE_TITLE_FIELD } from "../voucherType/VoucherTypeTitle";

export const ReceiptVoucherList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"ReceiptVouchers"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Amount" source="amount" />
        <TextField label="ChequeDueDate" source="chequeDueDate" />
        <TextField label="ChequeNumber" source="chequeNumber" />
        <TextField label="ChequeValue" source="chequeValue" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="Note" source="note" />
        <TextField label="ReceiptVoucherDate" source="receiptVoucherDate" />
        <TextField label="SerialNumber" source="serialNumber" />
        <TextField label="StatementReference" source="statementReference" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceField
          label="VoucherTypeId"
          source="vouchertype.id"
          reference="VoucherType"
        >
          <TextField source={VOUCHERTYPE_TITLE_FIELD} />
        </ReferenceField>
        <BooleanField label="WasChequePaid" source="wasChequePaid" />
      </Datagrid>
    </List>
  );
};
