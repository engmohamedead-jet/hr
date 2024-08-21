import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
  BooleanInput,
  NumberInput,
  ReferenceInput,
  SelectInput,
  DateTimeInput,
} from "react-admin";

import { BillOfMaterialDetailTitle } from "../billOfMaterialDetail/BillOfMaterialDetailTitle";
import { BillOfMaterialTitle } from "../billOfMaterial/BillOfMaterialTitle";
import { StoreTitle } from "../store/StoreTitle";
import { UnitTitle } from "../unit/UnitTitle";
import { ProductBarcodeTitle } from "../productBarcode/ProductBarcodeTitle";
import { ProductCategoryTitle } from "../productCategory/ProductCategoryTitle";
import { ProductDepartmentTitle } from "../productDepartment/ProductDepartmentTitle";
import { ProductGroupTitle } from "../productGroup/ProductGroupTitle";
import { ProductTypeTitle } from "../productType/ProductTypeTitle";
import { ProductUnitTitle } from "../productUnit/ProductUnitTitle";
import { ProductVariantTitle } from "../productVariant/ProductVariantTitle";
import { ProductionOrderTitle } from "../productionOrder/ProductionOrderTitle";
import { PurchaseDetailTitle } from "../purchaseDetail/PurchaseDetailTitle";
import { PurchaseReturnDetailTitle } from "../purchaseReturnDetail/PurchaseReturnDetailTitle";
import { SaleDetailTitle } from "../saleDetail/SaleDetailTitle";
import { SaleOrderDetailTitle } from "../saleOrderDetail/SaleOrderDetailTitle";
import { SaleQuotationDetailTitle } from "../saleQuotationDetail/SaleQuotationDetailTitle";
import { SaleReturnDetailTitle } from "../saleReturnDetail/SaleReturnDetailTitle";
import { SaleTaxTitle } from "../saleTax/SaleTaxTitle";
import { TenantTitle } from "../tenant/TenantTitle";

export const ProductCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Barcode" source="barcode" />
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
        <BooleanInput label="CanExpire" source="canExpire" />
        <TextInput label="Code" source="code" />
        <NumberInput label="CostPrice" source="costPrice" />
        <BooleanInput
          label="CostPriceIncludesTax"
          source="costPriceIncludesTax"
        />
        <NumberInput
          label="CurrentStockQuantity"
          source="currentStockQuantity"
        />
        <NumberInput
          step={1}
          label="DaysToManufacture"
          source="daysToManufacture"
        />
        <ReferenceInput
          source="defaultStoreId.id"
          reference="Store"
          label="DefaultStoreId"
        >
          <SelectInput optionText={StoreTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="defaultUnitId.id"
          reference="Unit"
          label="DefaultUnitId"
        >
          <SelectInput optionText={UnitTitle} />
        </ReferenceInput>
        <TextInput label="Description" multiline source="description" />
        <DateTimeInput label="DiscontinuedDate" source="discontinuedDate" />
        <NumberInput label="DiscountRate" source="discountRate" />
        <NumberInput
          step={1}
          label="ExpireAlarmInDays"
          source="expireAlarmInDays"
        />
        <NumberInput
          step={1}
          label="ExpireIsDefaultAfterDaysFromPurchase"
          source="expireIsDefaultAfterDaysFromPurchase"
        />
        <NumberInput label="FirstStockQuantity" source="firstStockQuantity" />
        <BooleanInput label="IsActive" source="isActive" />
        <BooleanInput label="IsCompound" source="isCompound" />
        <BooleanInput label="IsFavorite" source="isFavorite" />
        <BooleanInput label="MaintainInventory" source="maintainInventory" />
        <NumberInput label="MinimumSalePrice" source="minimumSalePrice" />
        <TextInput label="Name" source="name" />
        <TextInput label="NormalizedName" source="normalizedName" />
        <TextInput label="Note" multiline source="note" />
        <div />
        <ReferenceArrayInput
          source="productBarcodes"
          reference="ProductBarcode"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ProductBarcodeTitle} />
        </ReferenceArrayInput>
        <ReferenceInput
          source="productCategoryId.id"
          reference="ProductCategory"
          label="ProductCategoryId"
        >
          <SelectInput optionText={ProductCategoryTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="productDepartmentId.id"
          reference="ProductDepartment"
          label="ProductDepartmentId"
        >
          <SelectInput optionText={ProductDepartmentTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="productGroupId.id"
          reference="ProductGroup"
          label="ProductGroupId"
        >
          <SelectInput optionText={ProductGroupTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="productTypeId.id"
          reference="ProductType"
          label="ProductTypeId"
        >
          <SelectInput optionText={ProductTypeTitle} />
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
          source="productVariants"
          reference="ProductVariant"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ProductVariantTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="productionOrders"
          reference="ProductionOrder"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ProductionOrderTitle} />
        </ReferenceArrayInput>
        <NumberInput label="ProfitRate" source="profitRate" />
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
        <NumberInput label="ReorderQuantity" source="reorderQuantity" />
        <ReferenceArrayInput
          source="saleDetails"
          reference="SaleDetail"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={SaleDetailTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="saleOrderDetails"
          reference="SaleOrderDetail"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={SaleOrderDetailTitle} />
        </ReferenceArrayInput>
        <NumberInput label="SalePrice" source="salePrice" />
        <BooleanInput
          label="SalePriceIncludesTax"
          source="salePriceIncludesTax"
        />
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
          source="saleTaxId.id"
          reference="SaleTax"
          label="SaleTaxId"
        >
          <SelectInput optionText={SaleTaxTitle} />
        </ReferenceInput>
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
