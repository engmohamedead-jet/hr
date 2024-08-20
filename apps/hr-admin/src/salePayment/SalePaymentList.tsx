import * as React from "react";

import {
  List,
  Datagrid,
  ListProps,
  TextField,
  ReferenceField,
  DateField,
  BooleanField,
} from "react-admin";

import Pagination from "../Components/Pagination";
import { BANK_TITLE_FIELD } from "../bank/BankTitle";
import { BANKBRANCH_TITLE_FIELD } from "../bankBranch/BankBranchTitle";
import { CURRENCY_TITLE_FIELD } from "../currency/CurrencyTitle";
import { PAYMENTMETHOD_TITLE_FIELD } from "../paymentMethod/PaymentMethodTitle";
import { SALE_TITLE_FIELD } from "../sale/SaleTitle";
import { TENANT_TITLE_FIELD } from "../tenant/TenantTitle";

export const SalePaymentList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"SalePayments"}
      perPage={50}
      pagination={<Pagination />}
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
        <TextField label="ForeignCurrencyRate" source="foreignCurrencyRate" />
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
        <ReferenceField label="Tenant" source="tenant.id" reference="Tenant">
          <TextField source={TENANT_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
