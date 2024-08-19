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

import { BillOfMaterialDetailTitle } from "../billOfMaterialDetail/BillOfMaterialDetailTitle";
import { BillOfMaterialTitle } from "../billOfMaterial/BillOfMaterialTitle";
import { ProductUnitTitle } from "../productUnit/ProductUnitTitle";
import { ProductionOrderTitle } from "../productionOrder/ProductionOrderTitle";
import { ProductTitle } from "../product/ProductTitle";
import { PurchaseDetailTitle } from "../purchaseDetail/PurchaseDetailTitle";
import { PurchaseReturnDetailTitle } from "../purchaseReturnDetail/PurchaseReturnDetailTitle";
import { SaleDetailTitle } from "../saleDetail/SaleDetailTitle";
import { SaleQuotationDetailTitle } from "../saleQuotationDetail/SaleQuotationDetailTitle";
import { SaleReturnDetailTitle } from "../saleReturnDetail/SaleReturnDetailTitle";
import { TenantTitle } from "../tenant/TenantTitle";

export const UnitCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="billOfMaterialDetails"
          reference="BillOfMaterialDetail"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={BillOfMaterialDetailTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="billOfMaterials"
          reference="BillOfMaterial"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={BillOfMaterialTitle} />
        </ReferenceArrayInput>
        <TextInput label="Code" source="code" />
        <TextInput label="Description" multiline source="description" />
        <BooleanInput label="IsActive" source="isActive" />
        <BooleanInput label="IsCompound" source="isCompound" />
        <BooleanInput label="IsDefault" source="isDefault" />
        <TextInput label="Name" source="name" />
        <TextInput label="NormalizedName" source="normalizedName" />
        <TextInput label="Note" multiline source="note" />
        <ReferenceInput
          source="productUnitCompareUnits.id"
          reference="ProductUnit"
          label="ProductUnitCompareUnits"
        >
          <SelectInput optionText={ProductUnitTitle} />
        </ReferenceInput>
        <ReferenceArrayInput
          source="productUnits"
          reference="ProductUnit"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ProductUnitTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="productionOrders"
          reference="ProductionOrder"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ProductionOrderTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="products"
          reference="Product"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ProductTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="purchaseDetails"
          reference="PurchaseDetail"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={PurchaseDetailTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="purchaseReturnDetails"
          reference="PurchaseReturnDetail"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={PurchaseReturnDetailTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="saleDetails"
          reference="SaleDetail"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={SaleDetailTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="saleQuotationDetails"
          reference="SaleQuotationDetail"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={SaleQuotationDetailTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="saleReturnDetails"
          reference="SaleReturnDetail"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={SaleReturnDetailTitle} />
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
