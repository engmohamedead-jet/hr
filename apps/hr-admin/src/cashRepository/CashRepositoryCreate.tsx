import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
  BooleanInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { CashRepositoryTitle } from "./CashRepositoryTitle";
import { PaymentVoucherTitle } from "../paymentVoucher/PaymentVoucherTitle";
import { PurchaseReturnTitle } from "../purchaseReturn/PurchaseReturnTitle";
import { PurchaseTitle } from "../purchase/PurchaseTitle";
import { ReceiptVoucherTitle } from "../receiptVoucher/ReceiptVoucherTitle";
import { SaleOrderTitle } from "../saleOrder/SaleOrderTitle";
import { SaleReturnTitle } from "../saleReturn/SaleReturnTitle";
import { SaleTitle } from "../sale/SaleTitle";
import { TenantTitle } from "../tenant/TenantTitle";

export const CashRepositoryCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="cashRepositories"
          reference="CashRepository"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={CashRepositoryTitle} />
        </ReferenceArrayInput>
        <TextInput label="Code" source="code" />
        <TextInput label="Description" multiline source="description" />
        <BooleanInput label="IsActive" source="isActive" />
        <TextInput label="Name" source="name" />
        <TextInput label="NormalizedName" source="normalizedName" />
        <TextInput label="Note" source="note" />
        <ReferenceInput
          source="parentCashRepositoryId.id"
          reference="CashRepository"
          label="ParentCashRepositoryId"
        >
          <SelectInput optionText={CashRepositoryTitle} />
        </ReferenceInput>
        <ReferenceArrayInput
          source="paymentVouchers"
          reference="PaymentVoucher"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={PaymentVoucherTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="purchaseReturns"
          reference="PurchaseReturn"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={PurchaseReturnTitle} />
        </ReferenceArrayInput>
        <ReferenceInput
          source="purchases.id"
          reference="Purchase"
          label="Purchases"
        >
          <SelectInput optionText={PurchaseTitle} />
        </ReferenceInput>
        <ReferenceArrayInput
          source="receiptVouchers"
          reference="ReceiptVoucher"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ReceiptVoucherTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="saleOrders"
          reference="SaleOrder"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={SaleOrderTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="saleReturns"
          reference="SaleReturn"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={SaleReturnTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="sales"
          reference="Sale"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={SaleTitle} />
        </ReferenceArrayInput>
        <ReferenceInput
          source="tenantId.id"
          reference="Tenant"
          label="TenantId"
        >
          <SelectInput optionText={TenantTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
