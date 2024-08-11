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

import { PERIOD_TITLE_FIELD } from "../period/PeriodTitle";
import { INSTALLMENTSALEFEE_TITLE_FIELD } from "../installmentSaleFee/InstallmentSaleFeeTitle";

export const PaymentTermShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Code" source="code" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="Description" source="description" />
        <TextField label="DueDays" source="dueDays" />
        <TextField label="DueOnDate" source="dueOnDate" />
        <ReferenceField
          label="DuePeriodId"
          source="period.id"
          reference="Period"
        >
          <TextField source={PERIOD_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="GracePeriod" source="gracePeriod" />
        <TextField label="ID" source="id" />
        <ReferenceField
          label="InstallmentSaleFeeId"
          source="installmentsalefee.id"
          reference="InstallmentSaleFee"
        >
          <TextField source={INSTALLMENTSALEFEE_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField
          label="InstallmentSaleFeePostingPeriodId"
          source="period.id"
          reference="Period"
        >
          <TextField source={PERIOD_TITLE_FIELD} />
        </ReferenceField>
        <BooleanField label="IsDefault" source="isDefault" />
        <TextField label="Name" source="name" />
        <TextField label="NormalizedName" source="normalizedName" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
