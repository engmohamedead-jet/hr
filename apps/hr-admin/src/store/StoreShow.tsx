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
import { CUSTOMER_TITLE_FIELD } from "../customer/CustomerTitle";
import { ORDERSTATUS_TITLE_FIELD } from "../orderStatus/OrderStatusTitle";
import { PRODUCT_TITLE_FIELD } from "../product/ProductTitle";
import { STORE_TITLE_FIELD } from "./StoreTitle";
import { TENANT_TITLE_FIELD } from "../tenant/TenantTitle";
import { UNIT_TITLE_FIELD } from "../unit/UnitTitle";
import { PRODUCTCATEGORY_TITLE_FIELD } from "../productCategory/ProductCategoryTitle";
import { PRODUCTDEPARTMENT_TITLE_FIELD } from "../productDepartment/ProductDepartmentTitle";
import { PRODUCTGROUP_TITLE_FIELD } from "../productGroup/ProductGroupTitle";
import { PRODUCTTYPE_TITLE_FIELD } from "../productType/ProductTypeTitle";
import { SALETAX_TITLE_FIELD } from "../saleTax/SaleTaxTitle";
import { CASHREPOSITORY_TITLE_FIELD } from "../cashRepository/CashRepositoryTitle";
import { INVOICETYPE_TITLE_FIELD } from "../invoiceType/InvoiceTypeTitle";
import { PAYMENTTERM_TITLE_FIELD } from "../paymentTerm/PaymentTermTitle";
import { PAYMENTTYPE_TITLE_FIELD } from "../paymentType/PaymentTypeTitle";
import { PURCHASE_TITLE_FIELD } from "../purchase/PurchaseTitle";
import { PURCHASEPRICETYPE_TITLE_FIELD } from "../purchasePriceType/PurchasePriceTypeTitle";
import { SUPPLIER_TITLE_FIELD } from "../supplier/SupplierTitle";
import { PAYMENTSTATUS_TITLE_FIELD } from "../paymentStatus/PaymentStatusTitle";
import { SALEPRICETYPE_TITLE_FIELD } from "../salePriceType/SalePriceTypeTitle";
import { SALEQUOTATION_TITLE_FIELD } from "../saleQuotation/SaleQuotationTitle";
import { SHIPPINGSTATUS_TITLE_FIELD } from "../shippingStatus/ShippingStatusTitle";
import { SALE_TITLE_FIELD } from "../sale/SaleTitle";
import { STORETYPE_TITLE_FIELD } from "../storeType/StoreTypeTitle";

export const StoreShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="AddressLine1" source="addressLine1" />
        <BooleanField label="AllowSale" source="allowSale" />
        <TextField label="CellPhoneNumber" source="cellPhoneNumber" />
        <TextField label="Code" source="code" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="Fax" source="fax" />
        <TextField label="HomePhoneNumber" source="homePhoneNumber" />
        <TextField label="ID" source="id" />
        <BooleanField label="IsActive" source="isActive" />
        <TextField label="Name" source="name" />
        <TextField label="NormalizedName" source="normalizedName" />
        <TextField label="Note" source="note" />
        <ReferenceField
          label="StoreTypeId"
          source="storetype.id"
          reference="StoreType"
        >
          <TextField source={STORETYPE_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Street" source="street" />
        <ReferenceField label="TenantId" source="tenant.id" reference="Tenant">
          <TextField source={TENANT_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="ProductionOrder"
          target="storeIdId"
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
            <BooleanField label="IsActive" source="isActive" />
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
            <ReferenceField
              label="TenantId"
              source="tenant.id"
              reference="Tenant"
            >
              <TextField source={TENANT_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField label="UnitId" source="unit.id" reference="Unit">
              <TextField source={UNIT_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Product"
          target="defaultStoreIdId"
          label="Products"
        >
          <Datagrid rowClick="show">
            <TextField label="Barcode" source="barcode" />
            <BooleanField label="CanExpire" source="canExpire" />
            <TextField label="Code" source="code" />
            <TextField label="CostPrice" source="costPrice" />
            <BooleanField
              label="CostPriceIncludesTax"
              source="costPriceIncludesTax"
            />
            <DateField source="createdAt" label="Created At" />
            <TextField
              label="CurrentStockQuantity"
              source="currentStockQuantity"
            />
            <TextField label="DaysToManufacture" source="daysToManufacture" />
            <ReferenceField
              label="DefaultStoreId"
              source="store.id"
              reference="Store"
            >
              <TextField source={STORE_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="DefaultUnitId"
              source="unit.id"
              reference="Unit"
            >
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
            <BooleanField
              label="MaintainInventory"
              source="maintainInventory"
            />
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
            <ReferenceField
              label="TenantId"
              source="tenant.id"
              reference="Tenant"
            >
              <TextField source={TENANT_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="PurchaseReturn"
          target="storeIdId"
          label="PurchaseReturns"
        >
          <Datagrid rowClick="show">
            <ReferenceField
              label="CashRepositoryId"
              source="cashrepository.id"
              reference="CashRepository"
            >
              <TextField source={CASHREPOSITORY_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <TextField label="DiscountTotal" source="discountTotal" />
            <TextField label="ID" source="id" />
            <ReferenceField
              label="InvoiceTypeId"
              source="invoicetype.id"
              reference="InvoiceType"
            >
              <TextField source={INVOICETYPE_TITLE_FIELD} />
            </ReferenceField>
            <BooleanField label="IsActive" source="isActive" />
            <BooleanField label="IsCancelled" source="isCancelled" />
            <BooleanField label="IsReplicated" source="isReplicated" />
            <TextField label="NetTotal" source="netTotal" />
            <TextField label="NonTaxableTotal" source="nonTaxableTotal" />
            <TextField label="Note" source="note" />
            <TextField label="Paid" source="paid" />
            <ReferenceField
              label="PaymentTermId"
              source="paymentterm.id"
              reference="PaymentTerm"
            >
              <TextField source={PAYMENTTERM_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="PaymentTypeId"
              source="paymenttype.id"
              reference="PaymentType"
            >
              <TextField source={PAYMENTTYPE_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="PurchaseId"
              source="purchase.id"
              reference="Purchase"
            >
              <TextField source={PURCHASE_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="PurchasePriceTypeId"
              source="purchasepricetype.id"
              reference="PurchasePriceType"
            >
              <TextField source={PURCHASEPRICETYPE_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="PurchaseReturnDate" source="purchaseReturnDate" />
            <TextField
              label="PurchaseReturnTotal"
              source="purchaseReturnTotal"
            />
            <TextField label="ReferenceNumber" source="referenceNumber" />
            <TextField label="Remaining" source="remaining" />
            <TextField label="SequenceNumber" source="sequenceNumber" />
            <ReferenceField label="StoreId" source="store.id" reference="Store">
              <TextField source={STORE_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="SupplierId"
              source="supplier.id"
              reference="Supplier"
            >
              <TextField source={SUPPLIER_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Tax" source="tax" />
            <TextField label="TaxRate" source="taxRate" />
            <TextField label="TaxableTotal" source="taxableTotal" />
            <ReferenceField
              label="TenantId"
              source="tenant.id"
              reference="Tenant"
            >
              <TextField source={TENANT_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Purchase"
          target="storeIdId"
          label="Purchases"
        >
          <Datagrid rowClick="show">
            <ReferenceField
              label="CashRepositoryId"
              source="cashrepository.id"
              reference="CashRepository"
            >
              <TextField source={CASHREPOSITORY_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <TextField label="DiscountTotal" source="discountTotal" />
            <TextField label="ID" source="id" />
            <ReferenceField
              label="InvoiceTypeId"
              source="invoicetype.id"
              reference="InvoiceType"
            >
              <TextField source={INVOICETYPE_TITLE_FIELD} />
            </ReferenceField>
            <BooleanField label="IsActive" source="isActive" />
            <BooleanField label="IsCancelled" source="isCancelled" />
            <BooleanField label="IsReplicated" source="isReplicated" />
            <TextField label="NetTotal" source="netTotal" />
            <TextField label="NonTaxableTotal" source="nonTaxableTotal" />
            <TextField label="Note" source="note" />
            <TextField label="Paid" source="paid" />
            <ReferenceField
              label="PaymentTermId"
              source="paymentterm.id"
              reference="PaymentTerm"
            >
              <TextField source={PAYMENTTERM_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="PaymentTypeId"
              source="paymenttype.id"
              reference="PaymentType"
            >
              <TextField source={PAYMENTTYPE_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="PurchaseDate" source="purchaseDate" />
            <ReferenceField
              label="PurchasePriceTypeId"
              source="purchasepricetype.id"
              reference="PurchasePriceType"
            >
              <TextField source={PURCHASEPRICETYPE_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="PurchaseTotal" source="purchaseTotal" />
            <TextField label="ReferenceNumber" source="referenceNumber" />
            <TextField label="Remaining" source="remaining" />
            <TextField label="SequenceNumber" source="sequenceNumber" />
            <ReferenceField label="StoreId" source="store.id" reference="Store">
              <TextField source={STORE_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="SupplierId"
              source="supplier.id"
              reference="Supplier"
            >
              <TextField source={SUPPLIER_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Tax" source="tax" />
            <TextField label="TaxRate" source="taxRate" />
            <TextField label="TaxableTotal" source="taxableTotal" />
            <ReferenceField
              label="TenantId"
              source="tenant.id"
              reference="Tenant"
            >
              <TextField source={TENANT_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="SaleOrder"
          target="storeIdId"
          label="SaleOrders"
        >
          <Datagrid rowClick="show">
            <TextField label="BillingAddress" source="billingAddress" />
            <ReferenceField
              label="CashRepositoryId"
              source="cashrepository.id"
              reference="CashRepository"
            >
              <TextField source={CASHREPOSITORY_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <ReferenceField
              label="CustomerId"
              source="customer.id"
              reference="Customer"
            >
              <TextField source={CUSTOMER_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="DeliveryDate" source="deliveryDate" />
            <TextField label="DiscountTotal" source="discountTotal" />
            <TextField
              label="ExpectedDeliveryDate"
              source="expectedDeliveryDate"
            />
            <TextField label="ID" source="id" />
            <ReferenceField
              label="InvoiceTypeId"
              source="invoicetype.id"
              reference="InvoiceType"
            >
              <TextField source={INVOICETYPE_TITLE_FIELD} />
            </ReferenceField>
            <BooleanField label="IsActive" source="isActive" />
            <BooleanField label="IsCancelled" source="isCancelled" />
            <BooleanField label="IsReplicated" source="isReplicated" />
            <TextField label="NetTotal" source="netTotal" />
            <TextField label="NonTaxableTotal" source="nonTaxableTotal" />
            <TextField label="Note" source="note" />
            <ReferenceField
              label="OrderStatus"
              source="orderstatus.id"
              reference="OrderStatus"
            >
              <TextField source={ORDERSTATUS_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="PaymentStatus"
              source="paymentstatus.id"
              reference="PaymentStatus"
            >
              <TextField source={PAYMENTSTATUS_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="PaymentTypeId"
              source="paymenttype.id"
              reference="PaymentType"
            >
              <TextField source={PAYMENTTYPE_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="ReferenceNumber" source="referenceNumber" />
            <TextField label="SaleOrderDate" source="saleOrderDate" />
            <ReferenceField
              label="SalePriceType"
              source="salepricetype.id"
              reference="SalePriceType"
            >
              <TextField source={SALEPRICETYPE_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="SalePriceTypeId" source="salePriceTypeId" />
            <ReferenceField
              label="SaleQuotationId"
              source="salequotation.id"
              reference="SaleQuotation"
            >
              <TextField source={SALEQUOTATION_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="SaleTotal" source="saleTotal" />
            <TextField label="ShippingAddress" source="shippingAddress" />
            <TextField label="ShippingCost" source="shippingCost" />
            <ReferenceField
              label="ShippingStatus"
              source="shippingstatus.id"
              reference="ShippingStatus"
            >
              <TextField source={SHIPPINGSTATUS_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField label="StoreId" source="store.id" reference="Store">
              <TextField source={STORE_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Tax" source="tax" />
            <TextField label="TaxRate" source="taxRate" />
            <TextField label="TaxableTotal" source="taxableTotal" />
            <ReferenceField
              label="Tenant"
              source="tenant.id"
              reference="Tenant"
            >
              <TextField source={TENANT_TITLE_FIELD} />
            </ReferenceField>
            <TextField
              label="TransactionDateTime"
              source="transactionDateTime"
            />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="SaleReturn"
          target="storeIdId"
          label="SaleReturns"
        >
          <Datagrid rowClick="show">
            <ReferenceField
              label="CashRepositoryId"
              source="cashrepository.id"
              reference="CashRepository"
            >
              <TextField source={CASHREPOSITORY_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <ReferenceField
              label="CustomerId"
              source="customer.id"
              reference="Customer"
            >
              <TextField source={CUSTOMER_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="DiscountTotal" source="discountTotal" />
            <TextField label="ID" source="id" />
            <ReferenceField
              label="InvoiceTypeId"
              source="invoicetype.id"
              reference="InvoiceType"
            >
              <TextField source={INVOICETYPE_TITLE_FIELD} />
            </ReferenceField>
            <BooleanField label="IsActive" source="isActive" />
            <BooleanField label="IsCancelled" source="isCancelled" />
            <BooleanField label="IsReplicated" source="isReplicated" />
            <TextField label="NetTotal" source="netTotal" />
            <TextField label="NonTaxableTotal" source="nonTaxableTotal" />
            <TextField label="Note" source="note" />
            <TextField label="Paid" source="paid" />
            <ReferenceField
              label="PaymentTermId"
              source="paymentterm.id"
              reference="PaymentTerm"
            >
              <TextField source={PAYMENTTERM_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="PaymentTypeId"
              source="paymenttype.id"
              reference="PaymentType"
            >
              <TextField source={PAYMENTTYPE_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="ReferenceNumber" source="referenceNumber" />
            <TextField label="Remaining" source="remaining" />
            <TextField label="ReturnTotal" source="returnTotal" />
            <ReferenceField label="SaleId" source="sale.id" reference="Sale">
              <TextField source={SALE_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="SalePriceTypeId"
              source="salepricetype.id"
              reference="SalePriceType"
            >
              <TextField source={SALEPRICETYPE_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="SaleReturnDate" source="saleReturnDate" />
            <TextField label="Sequence" source="sequence" />
            <ReferenceField label="StoreId" source="store.id" reference="Store">
              <TextField source={STORE_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Tax" source="tax" />
            <TextField label="TaxRate" source="taxRate" />
            <TextField label="TaxableTotal" source="taxableTotal" />
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
        <ReferenceManyField reference="Sale" target="storeIdId" label="Sales">
          <Datagrid rowClick="show">
            <ReferenceField
              label="CashRepositoryId"
              source="cashrepository.id"
              reference="CashRepository"
            >
              <TextField source={CASHREPOSITORY_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <ReferenceField
              label="CustomerId"
              source="customer.id"
              reference="Customer"
            >
              <TextField source={CUSTOMER_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="DiscountTotal" source="discountTotal" />
            <TextField label="ID" source="id" />
            <ReferenceField
              label="InvoiceTypeId"
              source="invoicetype.id"
              reference="InvoiceType"
            >
              <TextField source={INVOICETYPE_TITLE_FIELD} />
            </ReferenceField>
            <BooleanField label="IsActive" source="isActive" />
            <BooleanField label="IsCancelled" source="isCancelled" />
            <BooleanField label="IsReplicated" source="isReplicated" />
            <TextField label="NetTotal" source="netTotal" />
            <TextField label="NonTaxableTotal" source="nonTaxableTotal" />
            <TextField label="Note" source="note" />
            <TextField label="Paid" source="paid" />
            <ReferenceField
              label="PaymentTerm"
              source="paymentterm.id"
              reference="PaymentTerm"
            >
              <TextField source={PAYMENTTERM_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="PaymentTypeId"
              source="paymenttype.id"
              reference="PaymentType"
            >
              <TextField source={PAYMENTTYPE_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="ReferenceNumber" source="referenceNumber" />
            <TextField label="Remaining" source="remaining" />
            <TextField label="SaleDate" source="saleDate" />
            <ReferenceField
              label="SalePriceTypeId"
              source="salepricetype.id"
              reference="SalePriceType"
            >
              <TextField source={SALEPRICETYPE_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="SaleTotal" source="saleTotal" />
            <TextField label="SequenceNumber" source="sequenceNumber" />
            <ReferenceField label="StoreId" source="store.id" reference="Store">
              <TextField source={STORE_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Tax" source="tax" />
            <TextField label="TaxRate" source="taxRate" />
            <TextField label="TaxableTotal" source="taxableTotal" />
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
          reference="StoreLocation"
          target="storeIdId"
          label="StoreLocations"
        >
          <Datagrid rowClick="show">
            <TextField label="Code" source="code" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="CreatedAtSide" source="createdAtSide" />
            <TextField label="ID" source="id" />
            <BooleanField label="IsActive" source="isActive" />
            <TextField label="Name" source="name" />
            <TextField label="NormalizedName" source="normalizedName" />
            <TextField label="Note" source="note" />
            <ReferenceField label="StoreId" source="store.id" reference="Store">
              <TextField source={STORE_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="TenantId"
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
