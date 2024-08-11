import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const CashTransferEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
