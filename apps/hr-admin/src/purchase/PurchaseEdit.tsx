import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  NumberInput,
  BooleanInput,
  TextInput,
  DateTimeInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { CashRepositoryTitle } from "../cashRepository/CashRepositoryTitle";
import { InvoiceTypeTitle } from "../invoiceType/InvoiceTypeTitle";
import { PaymentTermTitle } from "../paymentTerm/PaymentTermTitle";
import { PaymentTypeTitle } from "../paymentType/PaymentTypeTitle";
import { PurchaseDetailTitle } from "../purchaseDetail/PurchaseDetailTitle";
import { PurchasePriceTypeTitle } from "../purchasePriceType/PurchasePriceTypeTitle";
import { PurchaseReturnTitle } from "../purchaseReturn/PurchaseReturnTitle";
import { StoreTitle } from "../store/StoreTitle";
import { SupplierTitle } from "../supplier/SupplierTitle";
import { TenantTitle } from "../tenant/TenantTitle";

export const PurchaseEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput
          source="cashRepositoryId.id"
          reference="CashRepository"
          label="CashRepositoryId"
        >
          <SelectInput optionText={CashRepositoryTitle} />
        </ReferenceInput>
        <NumberInput label="DiscountTotal" source="discountTotal" />
        <ReferenceInput
          source="invoiceTypeId.id"
          reference="InvoiceType"
          label="InvoiceTypeId"
        >
          <SelectInput optionText={InvoiceTypeTitle} />
        </ReferenceInput>
        <BooleanInput label="IsActive" source="isActive" />
        <BooleanInput label="IsCancelled" source="isCancelled" />
        <BooleanInput label="IsReplicated" source="isReplicated" />
        <NumberInput label="NetTotal" source="netTotal" />
        <NumberInput label="NonTaxableTotal" source="nonTaxableTotal" />
        <TextInput label="Note" multiline source="note" />
        <NumberInput label="Paid" source="paid" />
        <ReferenceInput
          source="paymentTermId.id"
          reference="PaymentTerm"
          label="PaymentTermId"
        >
          <SelectInput optionText={PaymentTermTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="paymentTypeId.id"
          reference="PaymentType"
          label="PaymentTypeId"
        >
          <SelectInput optionText={PaymentTypeTitle} />
        </ReferenceInput>
        <DateTimeInput label="PurchaseDate" source="purchaseDate" />
        <ReferenceArrayInput
          source="purchaseDetails"
          reference="PurchaseDetail"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={PurchaseDetailTitle} />
        </ReferenceArrayInput>
        <ReferenceInput
          source="purchasePriceTypeId.id"
          reference="PurchasePriceType"
          label="PurchasePriceTypeId"
        >
          <SelectInput optionText={PurchasePriceTypeTitle} />
        </ReferenceInput>
        <ReferenceArrayInput
          source="purchaseReturns"
          reference="PurchaseReturn"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={PurchaseReturnTitle} />
        </ReferenceArrayInput>
        <NumberInput label="PurchaseTotal" source="purchaseTotal" />
        <TextInput label="ReferenceNumber" source="referenceNumber" />
        <NumberInput label="Remaining" source="remaining" />
        <TextInput label="SequenceNumber" source="sequenceNumber" />
        <ReferenceInput source="storeId.id" reference="Store" label="StoreId">
          <SelectInput optionText={StoreTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="supplierId.id"
          reference="Supplier"
          label="SupplierId"
        >
          <SelectInput optionText={SupplierTitle} />
        </ReferenceInput>
        <NumberInput label="Tax" source="tax" />
        <NumberInput label="TaxRate" source="taxRate" />
        <NumberInput label="TaxableTotal" source="taxableTotal" />
        <ReferenceInput
          source="tenantId.id"
          reference="Tenant"
          label="TenantId"
        >
          <SelectInput optionText={TenantTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
