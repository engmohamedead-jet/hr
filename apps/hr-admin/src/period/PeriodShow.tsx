import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  BooleanField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { PERIOD_TITLE_FIELD } from "./PeriodTitle";
import { INSTALLMENTSALEFEE_TITLE_FIELD } from "../installmentSaleFee/InstallmentSaleFeeTitle";
import { TENANT_TITLE_FIELD } from "../tenant/TenantTitle";

export const PeriodShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Code" source="code" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="Description" source="description" />
        <TextField label="ID" source="id" />
        <BooleanField label="IsActive" source="isActive" />
        <TextField label="Name" source="name" />
        <TextField label="NormalizedName" source="normalizedName" />
        <TextField label="Note" source="note" />
        <ReferenceField label="TenantId" source="tenant.id" reference="Tenant">
          <TextField source={TENANT_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="PaymentTerm"
          target="installmentSaleFeePostingPeriodId"
          label="PaymentTerms"
        >
          <Datagrid rowClick="show">
            <TextField label="Code" source="code" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="Description" source="description" />
            <TextField label="DueDays" source="dueDays" />
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
            <BooleanField label="IsActive" source="isActive" />
            <BooleanField label="IsDefault" source="isDefault" />
            <BooleanField label="IsDueOnDate" source="isDueOnDate" />
            <TextField label="Name" source="name" />
            <TextField label="NormalizedName" source="normalizedName" />
            <TextField label="Note" source="note" />
            <ReferenceField
              label="TenantId"
              source="tenant.id"
              reference="Tenant"
            >
              <TextField source={TENANT_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="PaymentTerm"
          target="duePeriodIdId"
          label="PaymentTerms"
        >
          <Datagrid rowClick="show">
            <TextField label="Code" source="code" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="Description" source="description" />
            <TextField label="DueDays" source="dueDays" />
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
            <BooleanField label="IsActive" source="isActive" />
            <BooleanField label="IsDefault" source="isDefault" />
            <BooleanField label="IsDueOnDate" source="isDueOnDate" />
            <TextField label="Name" source="name" />
            <TextField label="NormalizedName" source="normalizedName" />
            <TextField label="Note" source="note" />
            <ReferenceField
              label="TenantId"
              source="tenant.id"
              reference="Tenant"
            >
              <TextField source={TENANT_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
