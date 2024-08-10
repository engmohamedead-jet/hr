import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const PaymentVoucherCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput label="Amount" source="amount" />
        <TextInput label="Note" source="note" />
        <DateTimeInput label="PaymentVoucherDate" source="paymentVoucherDate" />
        <TextInput label="StatementReference" source="statementReference" />
      </SimpleForm>
    </Create>
  );
};
