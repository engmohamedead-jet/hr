import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const DebitShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="AmountTotal" source="amountTotal" />
        <TextField label="ContractDate" source="contractDate" />
        <TextField label="ContractNumber" source="contractNumber" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="FirstShare" source="firstShare" />
        <TextField label="FourthShare" source="fourthShare" />
        <TextField label="ID" source="id" />
        <TextField label="Note" source="note" />
        <TextField label="PaidTotal" source="paidTotal" />
        <TextField label="Remaining" source="remaining" />
        <TextField label="SecondShare" source="secondShare" />
        <TextField label="ThirdShare" source="thirdShare" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
