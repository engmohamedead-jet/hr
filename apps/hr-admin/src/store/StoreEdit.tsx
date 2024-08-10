import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
  BooleanInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { AccountTransactionDetailTitle } from "../accountTransactionDetail/AccountTransactionDetailTitle";
import { AccountTransactionTitle } from "../accountTransaction/AccountTransactionTitle";
import { NotificationTitle } from "../notification/NotificationTitle";
import { OfficeTitle } from "../office/OfficeTitle";
import { StoreTypeTitle } from "../storeType/StoreTypeTitle";

export const StoreEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="accountTransactionDetails"
          reference="AccountTransactionDetail"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={AccountTransactionDetailTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="accountTransactions"
          reference="AccountTransaction"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={AccountTransactionTitle} />
        </ReferenceArrayInput>
        <TextInput label="AddressLine1" source="addressLine1" />
        <BooleanInput label="AllowSale" source="allowSale" />
        <TextInput label="CellPhoneNumber" source="cellPhoneNumber" />
        <TextInput label="Code" source="code" />
        <TextInput label="Fax" source="fax" />
        <TextInput label="HomePhoneNumber" source="homePhoneNumber" />
        <TextInput label="Name" source="name" />
        <TextInput label="NormalizedName" source="normalizedName" />
        <TextInput label="Note" source="note" />
        <ReferenceArrayInput
          source="notifications"
          reference="Notification"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={NotificationTitle} />
        </ReferenceArrayInput>
        <ReferenceInput source="office.id" reference="Office" label="OfficeId">
          <SelectInput optionText={OfficeTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="storeType.id"
          reference="StoreType"
          label="StoreTypeId"
        >
          <SelectInput optionText={StoreTypeTitle} />
        </ReferenceInput>
        <TextInput label="Street" source="street" />
      </SimpleForm>
    </Edit>
  );
};
