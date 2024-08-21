import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  ReferenceField,
  DateField,
  ReferenceManyField,
  Datagrid,
  BooleanField,
} from "react-admin";

import { BANK_TITLE_FIELD } from "./BankTitle";
import { TENANT_TITLE_FIELD } from "../tenant/TenantTitle";
import { BANKBRANCH_TITLE_FIELD } from "../bankBranch/BankBranchTitle";
import { CURRENCY_TITLE_FIELD } from "../currency/CurrencyTitle";
import { PAYMENTMETHOD_TITLE_FIELD } from "../paymentMethod/PaymentMethodTitle";
import { SALE_TITLE_FIELD } from "../sale/SaleTitle";
import { BANKTYPE_TITLE_FIELD } from "../bankType/BankTypeTitle";

export const BankShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Address" source="address" />
        <ReferenceField
          label="BankType"
          source="banktype.id"
          reference="BankType"
        >
          <TextField source={BANKTYPE_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="CellPhoneNumber" source="cellPhoneNumber" />
        <TextField label="Code" source="code" />
        <TextField label="ContactPhoneNumber" source="contactPhoneNumber" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="Description" source="description" />
        <TextField label="Fax" source="fax" />
        <TextField label="HomePhoneNumber" source="homePhoneNumber" />
        <TextField label="ID" source="id" />
        <TextField label="Name" source="name" />
        <TextField label="NormalizedName" source="normalizedName" />
        <TextField
          label="RelationshipOfficerContactNumber"
          source="relationshipOfficerContactNumber"
        />
        <TextField
          label="RelationshipOfficerName"
          source="relationshipOfficerName"
        />
        <TextField label="Street" source="street" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="BankBranch"
          target="bankId"
          label="BankBranches"
        >
          <Datagrid rowClick="show">
            <TextField label="Address" source="address" />
            <ReferenceField label="Bank" source="bank.id" reference="Bank">
              <TextField source={BANK_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Code" source="code" />
            <TextField label="ContactPhoneNumber" source="contactPhoneNumber" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="Description" source="description" />
            <TextField label="ID" source="id" />
            <BooleanField label="IsActive" source="isActive" />
            <TextField label="Name" source="name" />
            <TextField label="NormalizedName" source="normalizedName" />
            <TextField label="Note" source="note" />
            <ReferenceField
              label="Tenant"
              source="tenant.id"
              reference="Tenant"
            >
              <TextField source={TENANT_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="SalePayment"
          target="bankId"
          label="SalePayments"
        >
          <Datagrid rowClick="show">
            <TextField label="LocalCurrencyRate" source="LocalCurrencyRatl" />
            <ReferenceField label="Bank" source="bank.id" reference="Bank">
              <TextField source={BANK_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="BankBrach" source="bankBrach" />
            <ReferenceField
              label="BankBranch"
              source="bankbranch.id"
              reference="BankBranch"
            >
              <TextField source={BANKBRANCH_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="ChequeNumber" source="chequeNumber" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="CreditCardNumber" source="creditCardNumber" />
            <ReferenceField
              label="CurrencyId"
              source="currency.id"
              reference="Currency"
            >
              <TextField source={CURRENCY_TITLE_FIELD} />
            </ReferenceField>
            <TextField
              label="ForeignCurrencyRate"
              source="foreignCurrencyRate"
            />
            <TextField label="ID" source="id" />
            <BooleanField label="IsCheque" source="isCheque" />
            <TextField label="Note" source="note" />
            <TextField label="PaidValue" source="paidValue" />
            <TextField label="PaymentDate" source="paymentDate" />
            <ReferenceField
              label="PaymentMethodId"
              source="paymentmethod.id"
              reference="PaymentMethod"
            >
              <TextField source={PAYMENTMETHOD_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Quantity" source="quantity" />
            <ReferenceField label="SaleId" source="sale.id" reference="Sale">
              <TextField source={SALE_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Seqeunce" source="seqeunce" />
            <ReferenceField
              label="Tenant"
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
