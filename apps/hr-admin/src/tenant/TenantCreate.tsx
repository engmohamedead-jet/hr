import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
  BooleanInput,
} from "react-admin";

import { AccountTitle } from "../account/AccountTitle";
import { ApplicationDependencyTitle } from "../applicationDependency/ApplicationDependencyTitle";
import { ApplicationTitle } from "../application/ApplicationTitle";
import { AttributeValueTitle } from "../attributeValue/AttributeValueTitle";
import { AttributeTitle } from "../attribute/AttributeTitle";
import { BankBranchTitle } from "../bankBranch/BankBranchTitle";
import { BankTypeTitle } from "../bankType/BankTypeTitle";
import { BarcodeTypeTitle } from "../barcodeType/BarcodeTypeTitle";
import { BillOfMaterialDetailTitle } from "../billOfMaterialDetail/BillOfMaterialDetailTitle";
import { BillOfMaterialTypeTitle } from "../billOfMaterialType/BillOfMaterialTypeTitle";
import { BillOfMaterialTitle } from "../billOfMaterial/BillOfMaterialTitle";
import { CashRepositoryTitle } from "../cashRepository/CashRepositoryTitle";
import { CurrencyTitle } from "../currency/CurrencyTitle";
import { CustomerTitle } from "../customer/CustomerTitle";
import { EmployeeClassTitle } from "../employeeClass/EmployeeClassTitle";
import { EmployeeDepartmentTitle } from "../employeeDepartment/EmployeeDepartmentTitle";
import { EmployeeTitle } from "../employee/EmployeeTitle";
import { InstallmentSaleFeeTitle } from "../installmentSaleFee/InstallmentSaleFeeTitle";
import { InvoiceTypeTitle } from "../invoiceType/InvoiceTypeTitle";
import { OrderStatusTitle } from "../orderStatus/OrderStatusTitle";
import { PaymentMethodTitle } from "../paymentMethod/PaymentMethodTitle";
import { PaymentStatusTitle } from "../paymentStatus/PaymentStatusTitle";
import { PaymentTermTitle } from "../paymentTerm/PaymentTermTitle";
import { PaymentTypeTitle } from "../paymentType/PaymentTypeTitle";
import { PeriodTitle } from "../period/PeriodTitle";
import { PrintTemplateContentTitle } from "../printTemplateContent/PrintTemplateContentTitle";
import { PrintTemplateGroupTitle } from "../printTemplateGroup/PrintTemplateGroupTitle";
import { PrintTemplateTitle } from "../printTemplate/PrintTemplateTitle";
import { ProductBarcodeTitle } from "../productBarcode/ProductBarcodeTitle";
import { ProductCategoryTitle } from "../productCategory/ProductCategoryTitle";
import { ProductDepartmentTitle } from "../productDepartment/ProductDepartmentTitle";
import { ProductGroupTitle } from "../productGroup/ProductGroupTitle";
import { ProductTypeTitle } from "../productType/ProductTypeTitle";
import { ProductUnitTitle } from "../productUnit/ProductUnitTitle";
import { ProductVariantTitle } from "../productVariant/ProductVariantTitle";
import { ProductionAvailabilityTitle } from "../productionAvailability/ProductionAvailabilityTitle";
import { ProductionDocumentTitle } from "../productionDocument/ProductionDocumentTitle";
import { ProductionOrderTitle } from "../productionOrder/ProductionOrderTitle";
import { ProductTitle } from "../product/ProductTitle";
import { PurchaseDetailTitle } from "../purchaseDetail/PurchaseDetailTitle";
import { PurchasePriceTypeTitle } from "../purchasePriceType/PurchasePriceTypeTitle";
import { PurchaseReturnDetailTitle } from "../purchaseReturnDetail/PurchaseReturnDetailTitle";
import { PurchaseReturnTitle } from "../purchaseReturn/PurchaseReturnTitle";
import { PurchaseTitle } from "../purchase/PurchaseTitle";
import { ResourceTypeTitle } from "../resourceType/ResourceTypeTitle";
import { ResourceTitle } from "../resource/ResourceTitle";
import { RoleGroupTitle } from "../roleGroup/RoleGroupTitle";
import { SalaryItemGroupTitle } from "../salaryItemGroup/SalaryItemGroupTitle";
import { SalaryItemTypeTitle } from "../salaryItemType/SalaryItemTypeTitle";
import { SalaryItemTitle } from "../salaryItem/SalaryItemTitle";
import { SalaryLawTitle } from "../salaryLaw/SalaryLawTitle";
import { SaleDetailTitle } from "../saleDetail/SaleDetailTitle";
import { SaleOrderDetailTitle } from "../saleOrderDetail/SaleOrderDetailTitle";
import { SaleOrderTitle } from "../saleOrder/SaleOrderTitle";
import { SalePaymentTitle } from "../salePayment/SalePaymentTitle";
import { SalePersonTitle } from "../salePerson/SalePersonTitle";
import { SalePriceTypeTitle } from "../salePriceType/SalePriceTypeTitle";
import { SaleQuotationDetailTitle } from "../saleQuotationDetail/SaleQuotationDetailTitle";
import { SaleQuotationTitle } from "../saleQuotation/SaleQuotationTitle";
import { SaleReturnDetailTitle } from "../saleReturnDetail/SaleReturnDetailTitle";
import { SaleReturnTitle } from "../saleReturn/SaleReturnTitle";
import { SaleTaxTitle } from "../saleTax/SaleTaxTitle";
import { SaleTeamTitle } from "../saleTeam/SaleTeamTitle";
import { SaleTitle } from "../sale/SaleTitle";
import { ScrapReasonTitle } from "../scrapReason/ScrapReasonTitle";
import { ShippingStatusTitle } from "../shippingStatus/ShippingStatusTitle";
import { StoreTitle } from "../store/StoreTitle";
import { SupplierTitle } from "../supplier/SupplierTitle";
import { UnitTitle } from "../unit/UnitTitle";
import { UserTitle } from "../user/UserTitle";
import { WorkCenterRoutingTitle } from "../workCenterRouting/WorkCenterRoutingTitle";
import { WorkCenterTitle } from "../workCenter/WorkCenterTitle";

export const TenantCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="accounts"
          reference="Account"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={AccountTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="applicationDependencies"
          reference="ApplicationDependency"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ApplicationDependencyTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="applications"
          reference="Application"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ApplicationTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="attributeValues"
          reference="AttributeValue"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={AttributeValueTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="attributes"
          reference="Attribute"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={AttributeTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="bankBranches"
          reference="BankBranch"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={BankBranchTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="bankTypes"
          reference="BankType"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={BankTypeTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="barcodeTypes"
          reference="BarcodeType"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={BarcodeTypeTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="billOfMaterialDetails"
          reference="BillOfMaterialDetail"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={BillOfMaterialDetailTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="billOfMaterialTypes"
          reference="BillOfMaterialType"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={BillOfMaterialTypeTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="billOfMaterials"
          reference="BillOfMaterial"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={BillOfMaterialTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="cashRepositories"
          reference="CashRepository"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={CashRepositoryTitle} />
        </ReferenceArrayInput>
        <TextInput label="Code" source="code" />
        <TextInput label="CreatorUserId" source="creatorUserId" />
        <ReferenceArrayInput
          source="currencies"
          reference="Currency"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={CurrencyTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="customers"
          reference="Customer"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={CustomerTitle} />
        </ReferenceArrayInput>
        <TextInput label="Description" multiline source="description" />
        <TextInput label="Email" source="email" type="email" />
        <ReferenceArrayInput
          source="employeeClasses"
          reference="EmployeeClass"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={EmployeeClassTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="employeeDepartments"
          reference="EmployeeDepartment"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={EmployeeDepartmentTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="employees"
          reference="Employee"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={EmployeeTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="installmentSaleFees"
          reference="InstallmentSaleFee"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={InstallmentSaleFeeTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="invoiceTypes"
          reference="InvoiceType"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={InvoiceTypeTitle} />
        </ReferenceArrayInput>
        <BooleanInput label="IsActive" source="isActive" />
        <TextInput label="LastModifierUserId" source="lastModifierUserIdl" />
        <TextInput label="Name" source="name" />
        <TextInput label="NormalizedName" source="normalizedName" />
        <TextInput label="Note" multiline source="note" />
        <ReferenceArrayInput
          source="orderStatuses"
          reference="OrderStatus"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={OrderStatusTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="paymentMethods"
          reference="PaymentMethod"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={PaymentMethodTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="paymentStatuses"
          reference="PaymentStatus"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={PaymentStatusTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="paymentTerms"
          reference="PaymentTerm"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={PaymentTermTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="paymentTypes"
          reference="PaymentType"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={PaymentTypeTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="periods"
          reference="Period"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={PeriodTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="printTemplateContents"
          reference="PrintTemplateContent"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={PrintTemplateContentTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="printTemplateGroups"
          reference="PrintTemplateGroup"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={PrintTemplateGroupTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="printTemplates"
          reference="PrintTemplate"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={PrintTemplateTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="productBarcodes"
          reference="ProductBarcode"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ProductBarcodeTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="productCategories"
          reference="ProductCategory"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ProductCategoryTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="productDepartments"
          reference="ProductDepartment"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ProductDepartmentTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="productGroups"
          reference="ProductGroup"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ProductGroupTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="productTypes"
          reference="ProductType"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ProductTypeTitle} />
        </ReferenceArrayInput>
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
          source="productionAvailabilities"
          reference="ProductionAvailability"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ProductionAvailabilityTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="productionDocuments"
          reference="ProductionDocument"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ProductionDocumentTitle} />
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
          source="purchasePriceTypes"
          reference="PurchasePriceType"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={PurchasePriceTypeTitle} />
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
          source="resourceTypes"
          reference="ResourceType"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ResourceTypeTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="resources"
          reference="Resource"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ResourceTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="roleGroups"
          reference="RoleGroup"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={RoleGroupTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="salaryItemGroups"
          reference="SalaryItemGroup"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={SalaryItemGroupTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="salaryItemTypes"
          reference="SalaryItemType"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={SalaryItemTypeTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="salaryItems"
          reference="SalaryItem"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={SalaryItemTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="salaryLaws"
          reference="SalaryLaw"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={SalaryLawTitle} />
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
          source="saleOrderDetails"
          reference="SaleOrderDetail"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={SaleOrderDetailTitle} />
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
          source="salePayments"
          reference="SalePayment"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={SalePaymentTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="salePeople"
          reference="SalePerson"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={SalePersonTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="salePriceTypes"
          reference="SalePriceType"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={SalePriceTypeTitle} />
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
          source="saleQuotations"
          reference="SaleQuotation"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={SaleQuotationTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="saleReturnDetails"
          reference="SaleReturnDetail"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={SaleReturnDetailTitle} />
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
          source="saleTaxes"
          reference="SaleTax"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={SaleTaxTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="saleTeams"
          reference="SaleTeam"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={SaleTeamTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="sales"
          reference="Sale"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={SaleTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="scrapReasons"
          reference="ScrapReason"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ScrapReasonTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="shippingStatuses"
          reference="ShippingStatus"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ShippingStatusTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="stores"
          reference="Store"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={StoreTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="suppliers"
          reference="Supplier"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={SupplierTitle} />
        </ReferenceArrayInput>
        <TextInput label="TenancyName" source="tenancyName" />
        <ReferenceArrayInput
          source="units"
          reference="Unit"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={UnitTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="users"
          reference="User"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={UserTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="workCenterRoutings"
          reference="WorkCenterRouting"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={WorkCenterRoutingTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="workCenters"
          reference="WorkCenter"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={WorkCenterTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};
