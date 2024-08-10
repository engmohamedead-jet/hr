import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
  BooleanField,
} from "react-admin";

import { VOUCHERTYPE_TITLE_FIELD } from "./VoucherTypeTitle";

export const VoucherTypeShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Code" source="code" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="Description" source="description" />
        <TextField label="ID" source="id" />
        <TextField label="Name" source="name" />
        <TextField label="NormalizedName" source="normalizedName" />
        <TextField label="Note" source="note" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="ReceiptVoucher"
          target="voucherTypeIdId"
          label="ReceiptVouchers"
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
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
