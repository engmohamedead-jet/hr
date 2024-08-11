import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const CashTransferCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput label="Amount" source="amount" />
        <TextInput label="Note" multiline source="note" />
        <TextInput label="ReferenceNumber" source="referenceNumber" />
        <TextInput
          label="StatementReference"
          multiline
          source="statementReference"
        />
        <DateTimeInput label="TransferDate" source="transferDate" />
      </SimpleForm>
    </Create>
  );
};
