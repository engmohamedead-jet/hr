import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  ReferenceField,
  TextField,
  DateField,
  BooleanField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { PERIOD_TITLE_FIELD } from "../period/PeriodTitle";
import { INSTALLMENTSALEFEE_TITLE_FIELD } from "./InstallmentSaleFeeTitle";
import { ACCOUNT_TITLE_FIELD } from "../account/AccountTitle";

export const InstallmentSaleFeeShow = (
  props: ShowProps
): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <ReferenceField label="Account" source="account.id" reference="Account">
          <TextField source={ACCOUNT_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Code" source="code" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="Description" source="description" />
        <TextField label="ID" source="id" />
        <BooleanField label="IsFlatAmount" source="isFlatAmount" />
        <TextField label="Name" source="name" />
        <TextField label="NormalizedName" source="normalizedName" />
        <TextField label="Note" source="note" />
        <TextField label="Rate" source="rate" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="PaymentTerm"
          target="installmentSaleFeeIdId"
          label="PaymentTerms"
        >
          <Datagrid rowClick="show">
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
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
