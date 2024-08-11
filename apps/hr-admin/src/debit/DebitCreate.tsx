import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  DateTimeInput,
  TextInput,
} from "react-admin";

export const DebitCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
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
    </Create>
  );
};
