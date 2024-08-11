import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const PaymentVoucherEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput label="Amount" source="amount" />
        <TextInput label="Note" multiline source="note" />
        <DateTimeInput label="PaymentVoucherDate" source="paymentVoucherDate" />
        <TextInput label="StatementReference" source="statementReference" />
      </SimpleForm>
    </Edit>
  );
};
