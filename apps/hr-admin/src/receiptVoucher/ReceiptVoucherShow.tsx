import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
  BooleanField,
} from "react-admin";

import { VOUCHERTYPE_TITLE_FIELD } from "../voucherType/VoucherTypeTitle";

export const ReceiptVoucherShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
      </SimpleShowLayout>
    </Show>
  );
};
