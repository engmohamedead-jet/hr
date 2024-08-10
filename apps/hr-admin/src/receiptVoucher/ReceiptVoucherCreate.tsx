import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  DateTimeInput,
  TextInput,
  ReferenceInput,
  SelectInput,
  BooleanInput,
} from "react-admin";

import { VoucherTypeTitle } from "../voucherType/VoucherTypeTitle";

export const ReceiptVoucherCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput label="Amount" source="amount" />
        <DateTimeInput label="ChequeDueDate" source="chequeDueDate" />
        <TextInput label="ChequeNumber" source="chequeNumber" />
        <NumberInput label="ChequeValue" source="chequeValue" />
        <TextInput label="Note" multiline source="note" />
        <DateTimeInput label="ReceiptVoucherDate" source="receiptVoucherDate" />
        <TextInput label="SerialNumber" source="serialNumber" />
        <TextInput label="StatementReference" source="statementReference" />
        <ReferenceInput
          source="voucherTypeId.id"
          reference="VoucherType"
          label="VoucherTypeId"
        >
          <SelectInput optionText={VoucherTypeTitle} />
        </ReferenceInput>
        <BooleanInput label="WasChequePaid" source="wasChequePaid" />
      </SimpleForm>
    </Create>
  );
};
