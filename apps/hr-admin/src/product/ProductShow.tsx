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

import { BILLOFMATERIAL_TITLE_FIELD } from "../billOfMaterial/BillOfMaterialTitle";
import { PRODUCT_TITLE_FIELD } from "./ProductTitle";
import { PRODUCTVARIANT_TITLE_FIELD } from "../productVariant/ProductVariantTitle";
import { UNIT_TITLE_FIELD } from "../unit/UnitTitle";
import { WORKCENTERROUTING_TITLE_FIELD } from "../workCenterRouting/WorkCenterRoutingTitle";
import { BILLOFMATERIALTYPE_TITLE_FIELD } from "../billOfMaterialType/BillOfMaterialTypeTitle";
import { BARCODETYPE_TITLE_FIELD } from "../barcodeType/BarcodeTypeTitle";
import { ATTRIBUTEVALUE_TITLE_FIELD } from "../attributeValue/AttributeValueTitle";
import { CUSTOMER_TITLE_FIELD } from "../customer/CustomerTitle";
import { ORDERSTATUS_TITLE_FIELD } from "../orderStatus/OrderStatusTitle";
import { STORE_TITLE_FIELD } from "../store/StoreTitle";
import { PRODUCTCATEGORY_TITLE_FIELD } from "../productCategory/ProductCategoryTitle";
import { PRODUCTDEPARTMENT_TITLE_FIELD } from "../productDepartment/ProductDepartmentTitle";
import { PRODUCTGROUP_TITLE_FIELD } from "../productGroup/ProductGroupTitle";
import { PRODUCTTYPE_TITLE_FIELD } from "../productType/ProductTypeTitle";
import { SALETAX_TITLE_FIELD } from "../saleTax/SaleTaxTitle";

export const ProductShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Barcode" source="barcode" />
        <BooleanField label="CanExpire" source="canExpire" />
        <TextField label="Code" source="code" />
        <TextField label="CostPrice" source="costPrice" />
        <BooleanField
          label="CostPriceIncludesTax"
          source="costPriceIncludesTax"
        />
        <DateField source="createdAt" label="Created At" />
        <TextField label="CurrentStockQuantity" source="currentStockQuantity" />
        <TextField label="DaysToManufacture" source="daysToManufacture" />
        <ReferenceField
          label="DefaultStoreId"
          source="store.id"
          reference="Store"
        >
          <TextField source={STORE_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField label="DefaultUnitId" source="unit.id" reference="Unit">
          <TextField source={UNIT_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Description" source="description" />
        <TextField label="DiscontinuedDate" source="discontinuedDate" />
        <TextField label="DiscountRate" source="discountRate" />
        <TextField label="ExpireAlarmInDays" source="expireAlarmInDays" />
        <TextField
          label="ExpireIsDefaultAfterDaysFromPurchase"
          source="expireIsDefaultAfterDaysFromPurchase"
        />
        <TextField label="FirstStockQuantity" source="firstStockQuantity" />
        <TextField label="ID" source="id" />
        <BooleanField label="IsActive" source="isActive" />
        <BooleanField label="IsCompound" source="isCompound" />
        <BooleanField label="IsFavorite" source="isFavorite" />
        <BooleanField label="MaintainInventory" source="maintainInventory" />
        <TextField label="MinimumSalePrice" source="minimumSalePrice" />
        <TextField label="Name" source="name" />
        <TextField label="NormalizedName" source="normalizedName" />
        <TextField label="Note" source="note" />
        <TextField label="Photo" source="photo" />
        <ReferenceField
          label="ProductCategoryId"
          source="productcategory.id"
          reference="ProductCategory"
        >
          <TextField source={PRODUCTCATEGORY_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField
          label="ProductDepartmentId"
          source="productdepartment.id"
          reference="ProductDepartment"
        >
          <TextField source={PRODUCTDEPARTMENT_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField
          label="ProductGroupId"
          source="productgroup.id"
          reference="ProductGroup"
        >
          <TextField source={PRODUCTGROUP_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField
          label="ProductTypeId"
          source="producttype.id"
          reference="ProductType"
        >
          <TextField source={PRODUCTTYPE_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="ProfitRate" source="profitRate" />
        <TextField label="ReorderQuantity" source="reorderQuantity" />
        <TextField label="SalePrice" source="salePrice" />
        <BooleanField
          label="SalePriceIncludesTax"
          source="salePriceIncludesTax"
        />
        <ReferenceField
          label="SaleTaxId"
          source="saletax.id"
          reference="SaleTax"
        >
          <TextField source={SALETAX_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="BillOfMaterialDetail"
          target="productIdId"
          label="BillOfMaterialDetails"
        >
          <Datagrid rowClick="show">
            <ReferenceField
              label="BillOfMaterial"
              source="billofmaterial.id"
              reference="BillOfMaterial"
            >
              <TextField source={BILLOFMATERIAL_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="CostShare" source="costShare" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <BooleanField label="IsActive" source="isActive" />
            <BooleanField
              label="IsManualConsumption"
              source="isManualConsumption"
            />
            <TextField label="Note" source="note" />
            <ReferenceField
              label="ProductId"
              source="product.id"
              reference="Product"
            >
              <TextField source={PRODUCT_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="ProductVariantId"
              source="productvariant.id"
              reference="ProductVariant"
            >
              <TextField source={PRODUCTVARIANT_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Quantity" source="quantity" />
            <TextField label="Sequence" source="sequence" />
            <ReferenceField label="UnitId" source="unit.id" reference="Unit">
              <TextField source={UNIT_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
            <ReferenceField
              label="WorkCenterRoutingId"
              source="workcenterrouting.id"
              reference="WorkCenterRouting"
            >
              <TextField source={WORKCENTERROUTING_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="BillOfMaterial"
          target="productIdId"
          label="BillOfMaterials"
        >
          <Datagrid rowClick="show">
            <ReferenceField
              label="BillOfMaterialTypeId"
              source="billofmaterialtype.id"
              reference="BillOfMaterialType"
            >
              <TextField source={BILLOFMATERIALTYPE_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Code" source="code" />
            <DateField source="createdAt" label="Created At" />
            <TextField
              label="DaysToPrepareManufacturingOrder"
              source="daysToPrepareManufacturingOrder"
            />
            <TextField label="EndDate" source="endDate" />
            <TextField label="ID" source="id" />
            <BooleanField label="IsActive" source="isActive" />
            <TextField label="Note" source="note" />
            <ReferenceField
              label="ProductId"
              source="product.id"
              reference="Product"
            >
              <TextField source={PRODUCT_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="ProductVariantId"
              source="productvariant.id"
              reference="ProductVariant"
            >
              <TextField source={PRODUCTVARIANT_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Quantity" source="quantity" />
            <TextField label="Sequence" source="sequence" />
            <TextField label="StartDate" source="startDate" />
            <ReferenceField label="UnitId" source="unit.id" reference="Unit">
              <TextField source={UNIT_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="ProductBarcode"
          target="productIdId"
          label="ProductBarcodes"
        >
          <Datagrid rowClick="show">
            <TextField label="Barcode" source="barcode" />
            <ReferenceField
              label="BarcodeTypeId"
              source="barcodetype.id"
              reference="BarcodeType"
            >
              <TextField source={BARCODETYPE_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <TextField label="Note" source="note" />
            <ReferenceField
              label="ProductId"
              source="product.id"
              reference="Product"
            >
              <TextField source={PRODUCT_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="ProductVariantId"
              source="productvariant.id"
              reference="ProductVariant"
            >
              <TextField source={PRODUCTVARIANT_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="ProductVariant"
          target="productIdId"
          label="ProductVariants"
        >
          <Datagrid rowClick="show">
            <ReferenceField
              label="AttributeValueId"
              source="attributevalue.id"
              reference="AttributeValue"
            >
              <TextField source={ATTRIBUTEVALUE_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <TextField label="Note" source="note" />
            <ReferenceField
              label="ProductId"
              source="product.id"
              reference="Product"
            >
              <TextField source={PRODUCT_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="ProductionOrder"
          target="productIdId"
          label="ProductionOrders"
        >
          <Datagrid rowClick="show">
            <ReferenceField
              label="BillOfMaterialId"
              source="billofmaterial.id"
              reference="BillOfMaterial"
            >
              <TextField source={BILLOFMATERIAL_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Code" source="code" />
            <DateField source="createdAt" label="Created At" />
            <ReferenceField
              label="CustomerId"
              source="customer.id"
              reference="Customer"
            >
              <TextField source={CUSTOMER_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="DeadlineDate" source="deadlineDate" />
            <TextField label="Description" source="description" />
            <TextField label="FinishDate" source="finishDate" />
            <TextField label="ID" source="id" />
            <TextField label="Name" source="name" />
            <TextField label="NormalizedName" source="normalizedName" />
            <TextField label="Note" source="note" />
            <TextField label="OrderDate" source="orderDate" />
            <ReferenceField
              label="OrderStatusId"
              source="orderstatus.id"
              reference="OrderStatus"
            >
              <TextField source={ORDERSTATUS_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="ProductId"
              source="product.id"
              reference="Product"
            >
              <TextField source={PRODUCT_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="ProductQuantity" source="productQuantity" />
            <TextField label="SequenceNumber" source="sequenceNumber" />
            <TextField label="StartDate" source="startDate" />
            <ReferenceField label="StoreId" source="store.id" reference="Store">
              <TextField source={STORE_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField label="UnitId" source="unit.id" reference="Unit">
              <TextField source={UNIT_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
