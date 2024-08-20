import { Account } from "../account/Account";
import { ApplicationDependency } from "../applicationDependency/ApplicationDependency";
import { Application } from "../application/Application";
import { AttributeValue } from "../attributeValue/AttributeValue";
import { Attribute } from "../attribute/Attribute";
import { BankBranch } from "../bankBranch/BankBranch";
import { BankType } from "../bankType/BankType";
import { BarcodeType } from "../barcodeType/BarcodeType";
import { BillOfMaterialDetail } from "../billOfMaterialDetail/BillOfMaterialDetail";
import { BillOfMaterialType } from "../billOfMaterialType/BillOfMaterialType";
import { BillOfMaterial } from "../billOfMaterial/BillOfMaterial";
import { CashRepository } from "../cashRepository/CashRepository";
import { Currency } from "../currency/Currency";
import { Customer } from "../customer/Customer";
import { EmployeeClass } from "../employeeClass/EmployeeClass";
import { EmployeeDepartment } from "../employeeDepartment/EmployeeDepartment";
import { Employee } from "../employee/Employee";
import { InstallmentSaleFee } from "../installmentSaleFee/InstallmentSaleFee";
import { InvoiceType } from "../invoiceType/InvoiceType";
import { OrderStatus } from "../orderStatus/OrderStatus";
import { PaymentMethod } from "../paymentMethod/PaymentMethod";
import { PaymentStatus } from "../paymentStatus/PaymentStatus";
import { PaymentTerm } from "../paymentTerm/PaymentTerm";
import { PaymentType } from "../paymentType/PaymentType";
import { Period } from "../period/Period";
import { PrintTemplateContent } from "../printTemplateContent/PrintTemplateContent";
import { PrintTemplateGroup } from "../printTemplateGroup/PrintTemplateGroup";
import { PrintTemplate } from "../printTemplate/PrintTemplate";
import { ProductBarcode } from "../productBarcode/ProductBarcode";
import { ProductCategory } from "../productCategory/ProductCategory";
import { ProductDepartment } from "../productDepartment/ProductDepartment";
import { ProductGroup } from "../productGroup/ProductGroup";
import { ProductType } from "../productType/ProductType";
import { ProductUnit } from "../productUnit/ProductUnit";
import { ProductVariant } from "../productVariant/ProductVariant";
import { ProductionAvailability } from "../productionAvailability/ProductionAvailability";
import { ProductionDocument } from "../productionDocument/ProductionDocument";
import { ProductionOrder } from "../productionOrder/ProductionOrder";
import { Product } from "../product/Product";
import { PurchaseDetail } from "../purchaseDetail/PurchaseDetail";
import { PurchasePriceType } from "../purchasePriceType/PurchasePriceType";
import { PurchaseReturnDetail } from "../purchaseReturnDetail/PurchaseReturnDetail";
import { PurchaseReturn } from "../purchaseReturn/PurchaseReturn";
import { Purchase } from "../purchase/Purchase";
import { ResourceType } from "../resourceType/ResourceType";
import { Resource } from "../resource/Resource";
import { RoleGroup } from "../roleGroup/RoleGroup";
import { SalaryItemGroup } from "../salaryItemGroup/SalaryItemGroup";
import { SalaryItemType } from "../salaryItemType/SalaryItemType";
import { SalaryItem } from "../salaryItem/SalaryItem";
import { SalaryLaw } from "../salaryLaw/SalaryLaw";
import { SaleDetail } from "../saleDetail/SaleDetail";
import { SaleOrderDetail } from "../saleOrderDetail/SaleOrderDetail";
import { SaleOrder } from "../saleOrder/SaleOrder";
import { SalePayment } from "../salePayment/SalePayment";
import { SalePerson } from "../salePerson/SalePerson";
import { SalePriceType } from "../salePriceType/SalePriceType";
import { SaleQuotationDetail } from "../saleQuotationDetail/SaleQuotationDetail";
import { SaleQuotation } from "../saleQuotation/SaleQuotation";
import { SaleReturnDetail } from "../saleReturnDetail/SaleReturnDetail";
import { SaleReturn } from "../saleReturn/SaleReturn";
import { SaleTax } from "../saleTax/SaleTax";
import { SaleTeam } from "../saleTeam/SaleTeam";
import { Sale } from "../sale/Sale";
import { ScrapReason } from "../scrapReason/ScrapReason";
import { ShippingStatus } from "../shippingStatus/ShippingStatus";
import { Store } from "../store/Store";
import { Supplier } from "../supplier/Supplier";
import { Unit } from "../unit/Unit";
import { User } from "../user/User";
import { WorkCenterRouting } from "../workCenterRouting/WorkCenterRouting";
import { WorkCenter } from "../workCenter/WorkCenter";

export type Tenant = {
  accounts?: Array<Account>;
  applicationDependencies?: Array<ApplicationDependency>;
  applications?: Array<Application>;
  attributeValues?: Array<AttributeValue>;
  attributes?: Array<Attribute>;
  bankBranches?: Array<BankBranch>;
  bankTypes?: Array<BankType>;
  barcodeTypes?: Array<BarcodeType>;
  billOfMaterialDetails?: Array<BillOfMaterialDetail>;
  billOfMaterialTypes?: Array<BillOfMaterialType>;
  billOfMaterials?: Array<BillOfMaterial>;
  cashRepositories?: Array<CashRepository>;
  code: string | null;
  createdAt: Date;
  creatorUserId: string | null;
  currencies?: Array<Currency>;
  customers?: Array<Customer>;
  description: string | null;
  email: string | null;
  employeeClasses?: Array<EmployeeClass>;
  employeeDepartments?: Array<EmployeeDepartment>;
  employees?: Array<Employee>;
  id: string;
  installmentSaleFees?: Array<InstallmentSaleFee>;
  invoiceTypes?: Array<InvoiceType>;
  isActive: boolean;
  lastModifierUserIdl: string | null;
  name: string;
  normalizedName: string;
  note: string | null;
  orderStatuses?: Array<OrderStatus>;
  paymentMethods?: Array<PaymentMethod>;
  paymentStatuses?: Array<PaymentStatus>;
  paymentTerms?: Array<PaymentTerm>;
  paymentTypes?: Array<PaymentType>;
  periods?: Array<Period>;
  printTemplateContents?: Array<PrintTemplateContent>;
  printTemplateGroups?: Array<PrintTemplateGroup>;
  printTemplates?: Array<PrintTemplate>;
  productBarcodes?: Array<ProductBarcode>;
  productCategories?: Array<ProductCategory>;
  productDepartments?: Array<ProductDepartment>;
  productGroups?: Array<ProductGroup>;
  productTypes?: Array<ProductType>;
  productUnits?: Array<ProductUnit>;
  productVariants?: Array<ProductVariant>;
  productionAvailabilities?: Array<ProductionAvailability>;
  productionDocuments?: Array<ProductionDocument>;
  productionOrders?: Array<ProductionOrder>;
  products?: Array<Product>;
  purchaseDetails?: Array<PurchaseDetail>;
  purchasePriceTypes?: Array<PurchasePriceType>;
  purchaseReturnDetails?: Array<PurchaseReturnDetail>;
  purchaseReturns?: Array<PurchaseReturn>;
  purchases?: Array<Purchase>;
  resourceTypes?: Array<ResourceType>;
  resources?: Array<Resource>;
  roleGroups?: Array<RoleGroup>;
  salaryItemGroups?: Array<SalaryItemGroup>;
  salaryItemTypes?: Array<SalaryItemType>;
  salaryItems?: Array<SalaryItem>;
  salaryLaws?: Array<SalaryLaw>;
  saleDetails?: Array<SaleDetail>;
  saleOrderDetails?: Array<SaleOrderDetail>;
  saleOrders?: Array<SaleOrder>;
  salePayments?: Array<SalePayment>;
  salePeople?: Array<SalePerson>;
  salePriceTypes?: Array<SalePriceType>;
  saleQuotationDetails?: Array<SaleQuotationDetail>;
  saleQuotations?: Array<SaleQuotation>;
  saleReturnDetails?: Array<SaleReturnDetail>;
  saleReturns?: Array<SaleReturn>;
  saleTaxes?: Array<SaleTax>;
  saleTeams?: Array<SaleTeam>;
  sales?: Array<Sale>;
  scrapReasons?: Array<ScrapReason>;
  shippingStatuses?: Array<ShippingStatus>;
  stores?: Array<Store>;
  suppliers?: Array<Supplier>;
  tenancyName: string;
  units?: Array<Unit>;
  updatedAt: Date;
  users?: Array<User>;
  workCenterRoutings?: Array<WorkCenterRouting>;
  workCenters?: Array<WorkCenter>;
};
