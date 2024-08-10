import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  BooleanField,
  DateField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { ACCOUNTTRANSACTION_TITLE_FIELD } from "../accountTransaction/AccountTransactionTitle";
import { STORE_TITLE_FIELD } from "./StoreTitle";
import { TRANSACTIONTYPE_TITLE_FIELD } from "../transactionType/TransactionTypeTitle";
import { COSTCENTER_TITLE_FIELD } from "../costCenter/CostCenterTitle";
import { OFFICE_TITLE_FIELD } from "../office/OfficeTitle";
import { STORETYPE_TITLE_FIELD } from "../storeType/StoreTypeTitle";

export const StoreShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="AddressLine1" source="addressLine1" />
        <BooleanField label="AllowSale" source="allowSale" />
        <TextField label="CellPhoneNumber" source="cellPhoneNumber" />
        <TextField label="Code" source="code" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="Fax" source="fax" />
        <TextField label="HomePhoneNumber" source="homePhoneNumber" />
        <TextField label="ID" source="id" />
        <TextField label="Name" source="name" />
        <TextField label="NormalizedName" source="normalizedName" />
        <TextField label="Note" source="note" />
        <ReferenceField label="OfficeId" source="office.id" reference="Office">
          <TextField source={OFFICE_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField
          label="StoreTypeId"
          source="storetype.id"
          reference="StoreType"
        >
          <TextField source={STORETYPE_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Street" source="street" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="AccountTransactionDetail"
          target="storeIdId"
          label="AccountTransactionDetails"
        >
          <Datagrid rowClick="show">
            <ReferenceField
              label="AccountTransactionId"
              source="accounttransaction.id"
              reference="AccountTransaction"
            >
              <TextField source={ACCOUNTTRANSACTION_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <TextField label="Credit" source="credit" />
            <TextField label="Debit" source="debit" />
            <TextField label="ExchangeRate" source="exchangeRate" />
            <TextField label="ID" source="id" />
            <TextField label="Note" source="note" />
            <TextField label="ReferenceNumber" source="referenceNumber" />
            <TextField label="Serial" source="serial" />
            <TextField label="StatementReference" source="statementReference" />
            <ReferenceField label="StoreId" source="store.id" reference="Store">
              <TextField source={STORE_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="TransactionDate" source="transactionDate" />
            <ReferenceField
              label="TransactionTypeId"
              source="transactiontype.id"
              reference="TransactionType"
            >
              <TextField source={TRANSACTIONTYPE_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="AccountTransaction"
          target="storeId"
          label="AccountTransactions"
        >
          <Datagrid rowClick="show">
            <ReferenceField
              label="CostCenterId"
              source="costcenter.id"
              reference="CostCenter"
            >
              <TextField source={COSTCENTER_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <TextField label="Note" source="note" />
            <TextField label="ReferenceNumber" source="referenceNumber" />
            <TextField label="StatementReference" source="statementReference" />
            <ReferenceField label="StoreId" source="store.id" reference="Store">
              <TextField source={STORE_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="TransactionDate" source="transactionDate" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Notification"
          target="storeId"
          label="Notifications"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="Description" source="description" />
            <TextField label="EventDateTime" source="eventDateTime" />
            <TextField label="Icon" source="icon" />
            <TextField label="ID" source="id" />
            <BooleanField label="IsSystem" source="isSystem" />
            <TextField label="Note" source="note" />
            <TextField label="NotificationText" source="notificationText" />
            <ReferenceField
              label="Office"
              source="office.id"
              reference="Office"
            >
              <TextField source={OFFICE_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField label="Store" source="store.id" reference="Store">
              <TextField source={STORE_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="ToLoginId" source="toLoginId" />
            <TextField label="ToRoleId" source="toRoleId" />
            <TextField label="ToUserId" source="toUserId" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="Url" source="url" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
