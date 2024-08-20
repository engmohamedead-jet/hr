import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  ReferenceInput,
  SelectInput,
  TextInput,
  BooleanInput,
  DateTimeInput,
} from "react-admin";

import { BankTitle } from "../bank/BankTitle";
import { BankBranchTitle } from "../bankBranch/BankBranchTitle";
import { CurrencyTitle } from "../currency/CurrencyTitle";
import { PaymentMethodTitle } from "../paymentMethod/PaymentMethodTitle";
import { SaleTitle } from "../sale/SaleTitle";
import { TenantTitle } from "../tenant/TenantTitle";

export const SalePaymentCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput label="LocalCurrencyRate" source="LocalCurrencyRatl" />
        <ReferenceInput source="bank.id" reference="Bank" label="Bank">
          <SelectInput optionText={BankTitle} />
        </ReferenceInput>
        <TextInput label="BankBrach" source="bankBrach" />
        <ReferenceInput
          source="bankBranch.id"
          reference="BankBranch"
          label="BankBranch"
        >
          <SelectInput optionText={BankBranchTitle} />
        </ReferenceInput>
        <TextInput label="ChequeNumber" source="chequeNumber" />
        <TextInput label="CreditCardNumber" source="creditCardNumber" />
        <ReferenceInput
          source="currencyId.id"
          reference="Currency"
          label="CurrencyId"
        >
          <SelectInput optionText={CurrencyTitle} />
        </ReferenceInput>
        <NumberInput label="ForeignCurrencyRate" source="foreignCurrencyRate" />
        <BooleanInput label="IsCheque" source="isCheque" />
        <TextInput label="Note" source="note" />
        <TextInput label="PaidValue" source="paidValue" />
        <DateTimeInput label="PaymentDate" source="paymentDate" />
        <ReferenceInput
          source="paymentMethodId.id"
          reference="PaymentMethod"
          label="PaymentMethodId"
        >
          <SelectInput optionText={PaymentMethodTitle} />
        </ReferenceInput>
        <NumberInput step={1} label="Quantity" source="quantity" />
        <ReferenceInput source="saleId.id" reference="Sale" label="SaleId">
          <SelectInput optionText={SaleTitle} />
        </ReferenceInput>
        <NumberInput step={1} label="Seqeunce" source="seqeunce" />
        <ReferenceInput source="tenant.id" reference="Tenant" label="Tenant">
          <SelectInput optionText={TenantTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
