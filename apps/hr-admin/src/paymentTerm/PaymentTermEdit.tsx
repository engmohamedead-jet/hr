import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
  ReferenceInput,
  SelectInput,
  BooleanInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { PeriodTitle } from "../period/PeriodTitle";
import { InstallmentSaleFeeTitle } from "../installmentSaleFee/InstallmentSaleFeeTitle";
import { PurchaseReturnTitle } from "../purchaseReturn/PurchaseReturnTitle";
import { PurchaseTitle } from "../purchase/PurchaseTitle";
import { SaleReturnTitle } from "../saleReturn/SaleReturnTitle";
import { SaleTitle } from "../sale/SaleTitle";
import { TenantTitle } from "../tenant/TenantTitle";

export const PaymentTermEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Code" source="code" />
        <TextInput label="Description" multiline source="description" />
        <NumberInput step={1} label="DueDays" source="dueDays" />
        <ReferenceInput
          source="duePeriodId.id"
          reference="Period"
          label="DuePeriodId"
        >
          <SelectInput optionText={PeriodTitle} />
        </ReferenceInput>
        <NumberInput step={1} label="GracePeriod" source="gracePeriod" />
        <ReferenceInput
          source="installmentSaleFeeId.id"
          reference="InstallmentSaleFee"
          label="InstallmentSaleFeeId"
        >
          <SelectInput optionText={InstallmentSaleFeeTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="installmentSaleFeePostingPeriod.id"
          reference="Period"
          label="InstallmentSaleFeePostingPeriodId"
        >
          <SelectInput optionText={PeriodTitle} />
        </ReferenceInput>
        <BooleanInput label="IsActive" source="isActive" />
        <BooleanInput label="IsDefault" source="isDefault" />
        <BooleanInput label="IsDueOnDate" source="isDueOnDate" />
        <TextInput label="Name" source="name" />
        <TextInput label="NormalizedName" source="normalizedName" />
        <TextInput label="Note" multiline source="note" />
        <ReferenceArrayInput
          source="purchaseReturns"
          reference="PurchaseReturn"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={PurchaseReturnTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="purchases"
          reference="Purchase"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={PurchaseTitle} />
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
    </Edit>
  );
};
