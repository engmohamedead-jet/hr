import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  DateTimeInput,
  TextInput,
} from "react-admin";

export const DebitEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput label="AmountTotal" source="amountTotal" />
        <DateTimeInput label="ContractDate" source="contractDate" />
        <TextInput label="ContractNumber" source="contractNumber" />
        <NumberInput label="FirstShare" source="firstShare" />
        <NumberInput label="FourthShare" source="fourthShare" />
        <TextInput label="Note" multiline source="note" />
        <NumberInput label="PaidTotal" source="paidTotal" />
        <NumberInput label="Remaining" source="remaining" />
        <NumberInput label="SecondShare" source="secondShare" />
        <NumberInput label="ThirdShare" source="thirdShare" />
      </SimpleForm>
    </Edit>
  );
};
