import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { AttributeList } from "./attribute/AttributeList";
import { AttributeCreate } from "./attribute/AttributeCreate";
import { AttributeEdit } from "./attribute/AttributeEdit";
import { AttributeShow } from "./attribute/AttributeShow";
import { AttributeValueList } from "./attributeValue/AttributeValueList";
import { AttributeValueCreate } from "./attributeValue/AttributeValueCreate";
import { AttributeValueEdit } from "./attributeValue/AttributeValueEdit";
import { AttributeValueShow } from "./attributeValue/AttributeValueShow";
import { BarcodeTypeList } from "./barcodeType/BarcodeTypeList";
import { BarcodeTypeCreate } from "./barcodeType/BarcodeTypeCreate";
import { BarcodeTypeEdit } from "./barcodeType/BarcodeTypeEdit";
import { BarcodeTypeShow } from "./barcodeType/BarcodeTypeShow";
import { BillOfMaterialTypeList } from "./billOfMaterialType/BillOfMaterialTypeList";
import { BillOfMaterialTypeCreate } from "./billOfMaterialType/BillOfMaterialTypeCreate";
import { BillOfMaterialTypeEdit } from "./billOfMaterialType/BillOfMaterialTypeEdit";
import { BillOfMaterialTypeShow } from "./billOfMaterialType/BillOfMaterialTypeShow";
import { PrintTemplateGroupList } from "./printTemplateGroup/PrintTemplateGroupList";
import { PrintTemplateGroupCreate } from "./printTemplateGroup/PrintTemplateGroupCreate";
import { PrintTemplateGroupEdit } from "./printTemplateGroup/PrintTemplateGroupEdit";
import { PrintTemplateGroupShow } from "./printTemplateGroup/PrintTemplateGroupShow";
import { PrintTemplateList } from "./printTemplate/PrintTemplateList";
import { PrintTemplateCreate } from "./printTemplate/PrintTemplateCreate";
import { PrintTemplateEdit } from "./printTemplate/PrintTemplateEdit";
import { PrintTemplateShow } from "./printTemplate/PrintTemplateShow";
import { PrintTemplateContentList } from "./printTemplateContent/PrintTemplateContentList";
import { PrintTemplateContentCreate } from "./printTemplateContent/PrintTemplateContentCreate";
import { PrintTemplateContentEdit } from "./printTemplateContent/PrintTemplateContentEdit";
import { PrintTemplateContentShow } from "./printTemplateContent/PrintTemplateContentShow";
import { CustomerList } from "./customer/CustomerList";
import { CustomerCreate } from "./customer/CustomerCreate";
import { CustomerEdit } from "./customer/CustomerEdit";
import { CustomerShow } from "./customer/CustomerShow";
import { SalePriceTypeList } from "./salePriceType/SalePriceTypeList";
import { SalePriceTypeCreate } from "./salePriceType/SalePriceTypeCreate";
import { SalePriceTypeEdit } from "./salePriceType/SalePriceTypeEdit";
import { SalePriceTypeShow } from "./salePriceType/SalePriceTypeShow";
import { CurrencyList } from "./currency/CurrencyList";
import { CurrencyCreate } from "./currency/CurrencyCreate";
import { CurrencyEdit } from "./currency/CurrencyEdit";
import { CurrencyShow } from "./currency/CurrencyShow";
import { OrderStatusList } from "./orderStatus/OrderStatusList";
import { OrderStatusCreate } from "./orderStatus/OrderStatusCreate";
import { OrderStatusEdit } from "./orderStatus/OrderStatusEdit";
import { OrderStatusShow } from "./orderStatus/OrderStatusShow";
import { StoreList } from "./store/StoreList";
import { StoreCreate } from "./store/StoreCreate";
import { StoreEdit } from "./store/StoreEdit";
import { StoreShow } from "./store/StoreShow";
import { UnitList } from "./unit/UnitList";
import { UnitCreate } from "./unit/UnitCreate";
import { UnitEdit } from "./unit/UnitEdit";
import { UnitShow } from "./unit/UnitShow";
import { WorkCenterList } from "./workCenter/WorkCenterList";
import { WorkCenterCreate } from "./workCenter/WorkCenterCreate";
import { WorkCenterEdit } from "./workCenter/WorkCenterEdit";
import { WorkCenterShow } from "./workCenter/WorkCenterShow";
import { WorkCenterRoutingList } from "./workCenterRouting/WorkCenterRoutingList";
import { WorkCenterRoutingCreate } from "./workCenterRouting/WorkCenterRoutingCreate";
import { WorkCenterRoutingEdit } from "./workCenterRouting/WorkCenterRoutingEdit";
import { WorkCenterRoutingShow } from "./workCenterRouting/WorkCenterRoutingShow";
import { ProductList } from "./product/ProductList";
import { ProductCreate } from "./product/ProductCreate";
import { ProductEdit } from "./product/ProductEdit";
import { ProductShow } from "./product/ProductShow";
import { ProductTypeList } from "./productType/ProductTypeList";
import { ProductTypeCreate } from "./productType/ProductTypeCreate";
import { ProductTypeEdit } from "./productType/ProductTypeEdit";
import { ProductTypeShow } from "./productType/ProductTypeShow";
import { ProductDepartmentList } from "./productDepartment/ProductDepartmentList";
import { ProductDepartmentCreate } from "./productDepartment/ProductDepartmentCreate";
import { ProductDepartmentEdit } from "./productDepartment/ProductDepartmentEdit";
import { ProductDepartmentShow } from "./productDepartment/ProductDepartmentShow";
import { ProductGroupList } from "./productGroup/ProductGroupList";
import { ProductGroupCreate } from "./productGroup/ProductGroupCreate";
import { ProductGroupEdit } from "./productGroup/ProductGroupEdit";
import { ProductGroupShow } from "./productGroup/ProductGroupShow";
import { AccountList } from "./account/AccountList";
import { AccountCreate } from "./account/AccountCreate";
import { AccountEdit } from "./account/AccountEdit";
import { AccountShow } from "./account/AccountShow";
import { SaleTaxList } from "./saleTax/SaleTaxList";
import { SaleTaxCreate } from "./saleTax/SaleTaxCreate";
import { SaleTaxEdit } from "./saleTax/SaleTaxEdit";
import { SaleTaxShow } from "./saleTax/SaleTaxShow";
import { ProductCategoryList } from "./productCategory/ProductCategoryList";
import { ProductCategoryCreate } from "./productCategory/ProductCategoryCreate";
import { ProductCategoryEdit } from "./productCategory/ProductCategoryEdit";
import { ProductCategoryShow } from "./productCategory/ProductCategoryShow";
import { ProductVariantList } from "./productVariant/ProductVariantList";
import { ProductVariantCreate } from "./productVariant/ProductVariantCreate";
import { ProductVariantEdit } from "./productVariant/ProductVariantEdit";
import { ProductVariantShow } from "./productVariant/ProductVariantShow";
import { ProductionDocumentList } from "./productionDocument/ProductionDocumentList";
import { ProductionDocumentCreate } from "./productionDocument/ProductionDocumentCreate";
import { ProductionDocumentEdit } from "./productionDocument/ProductionDocumentEdit";
import { ProductionDocumentShow } from "./productionDocument/ProductionDocumentShow";
import { BillOfMaterialList } from "./billOfMaterial/BillOfMaterialList";
import { BillOfMaterialCreate } from "./billOfMaterial/BillOfMaterialCreate";
import { BillOfMaterialEdit } from "./billOfMaterial/BillOfMaterialEdit";
import { BillOfMaterialShow } from "./billOfMaterial/BillOfMaterialShow";
import { BillOfMaterialDetailList } from "./billOfMaterialDetail/BillOfMaterialDetailList";
import { BillOfMaterialDetailCreate } from "./billOfMaterialDetail/BillOfMaterialDetailCreate";
import { BillOfMaterialDetailEdit } from "./billOfMaterialDetail/BillOfMaterialDetailEdit";
import { BillOfMaterialDetailShow } from "./billOfMaterialDetail/BillOfMaterialDetailShow";
import { ProductBarcodeList } from "./productBarcode/ProductBarcodeList";
import { ProductBarcodeCreate } from "./productBarcode/ProductBarcodeCreate";
import { ProductBarcodeEdit } from "./productBarcode/ProductBarcodeEdit";
import { ProductBarcodeShow } from "./productBarcode/ProductBarcodeShow";
import { ProductionOrderList } from "./productionOrder/ProductionOrderList";
import { ProductionOrderCreate } from "./productionOrder/ProductionOrderCreate";
import { ProductionOrderEdit } from "./productionOrder/ProductionOrderEdit";
import { ProductionOrderShow } from "./productionOrder/ProductionOrderShow";
import { ProductionAvailabilityList } from "./productionAvailability/ProductionAvailabilityList";
import { ProductionAvailabilityCreate } from "./productionAvailability/ProductionAvailabilityCreate";
import { ProductionAvailabilityEdit } from "./productionAvailability/ProductionAvailabilityEdit";
import { ProductionAvailabilityShow } from "./productionAvailability/ProductionAvailabilityShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"hr"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
        <Resource
          name="Attribute"
          list={AttributeList}
          edit={AttributeEdit}
          create={AttributeCreate}
          show={AttributeShow}
        />
        <Resource
          name="AttributeValue"
          list={AttributeValueList}
          edit={AttributeValueEdit}
          create={AttributeValueCreate}
          show={AttributeValueShow}
        />
        <Resource
          name="BarcodeType"
          list={BarcodeTypeList}
          edit={BarcodeTypeEdit}
          create={BarcodeTypeCreate}
          show={BarcodeTypeShow}
        />
        <Resource
          name="BillOfMaterialType"
          list={BillOfMaterialTypeList}
          edit={BillOfMaterialTypeEdit}
          create={BillOfMaterialTypeCreate}
          show={BillOfMaterialTypeShow}
        />
        <Resource
          name="PrintTemplateGroup"
          list={PrintTemplateGroupList}
          edit={PrintTemplateGroupEdit}
          create={PrintTemplateGroupCreate}
          show={PrintTemplateGroupShow}
        />
        <Resource
          name="PrintTemplate"
          list={PrintTemplateList}
          edit={PrintTemplateEdit}
          create={PrintTemplateCreate}
          show={PrintTemplateShow}
        />
        <Resource
          name="PrintTemplateContent"
          list={PrintTemplateContentList}
          edit={PrintTemplateContentEdit}
          create={PrintTemplateContentCreate}
          show={PrintTemplateContentShow}
        />
        <Resource
          name="Customer"
          list={CustomerList}
          edit={CustomerEdit}
          create={CustomerCreate}
          show={CustomerShow}
        />
        <Resource
          name="SalePriceType"
          list={SalePriceTypeList}
          edit={SalePriceTypeEdit}
          create={SalePriceTypeCreate}
          show={SalePriceTypeShow}
        />
        <Resource
          name="Currency"
          list={CurrencyList}
          edit={CurrencyEdit}
          create={CurrencyCreate}
          show={CurrencyShow}
        />
        <Resource
          name="OrderStatus"
          list={OrderStatusList}
          edit={OrderStatusEdit}
          create={OrderStatusCreate}
          show={OrderStatusShow}
        />
        <Resource
          name="Store"
          list={StoreList}
          edit={StoreEdit}
          create={StoreCreate}
          show={StoreShow}
        />
        <Resource
          name="Unit"
          list={UnitList}
          edit={UnitEdit}
          create={UnitCreate}
          show={UnitShow}
        />
        <Resource
          name="WorkCenter"
          list={WorkCenterList}
          edit={WorkCenterEdit}
          create={WorkCenterCreate}
          show={WorkCenterShow}
        />
        <Resource
          name="WorkCenterRouting"
          list={WorkCenterRoutingList}
          edit={WorkCenterRoutingEdit}
          create={WorkCenterRoutingCreate}
          show={WorkCenterRoutingShow}
        />
        <Resource
          name="Product"
          list={ProductList}
          edit={ProductEdit}
          create={ProductCreate}
          show={ProductShow}
        />
        <Resource
          name="ProductType"
          list={ProductTypeList}
          edit={ProductTypeEdit}
          create={ProductTypeCreate}
          show={ProductTypeShow}
        />
        <Resource
          name="ProductDepartment"
          list={ProductDepartmentList}
          edit={ProductDepartmentEdit}
          create={ProductDepartmentCreate}
          show={ProductDepartmentShow}
        />
        <Resource
          name="ProductGroup"
          list={ProductGroupList}
          edit={ProductGroupEdit}
          create={ProductGroupCreate}
          show={ProductGroupShow}
        />
        <Resource
          name="Account"
          list={AccountList}
          edit={AccountEdit}
          create={AccountCreate}
          show={AccountShow}
        />
        <Resource
          name="SaleTax"
          list={SaleTaxList}
          edit={SaleTaxEdit}
          create={SaleTaxCreate}
          show={SaleTaxShow}
        />
        <Resource
          name="ProductCategory"
          list={ProductCategoryList}
          edit={ProductCategoryEdit}
          create={ProductCategoryCreate}
          show={ProductCategoryShow}
        />
        <Resource
          name="ProductVariant"
          list={ProductVariantList}
          edit={ProductVariantEdit}
          create={ProductVariantCreate}
          show={ProductVariantShow}
        />
        <Resource
          name="ProductionDocument"
          list={ProductionDocumentList}
          edit={ProductionDocumentEdit}
          create={ProductionDocumentCreate}
          show={ProductionDocumentShow}
        />
        <Resource
          name="BillOfMaterial"
          list={BillOfMaterialList}
          edit={BillOfMaterialEdit}
          create={BillOfMaterialCreate}
          show={BillOfMaterialShow}
        />
        <Resource
          name="BillOfMaterialDetail"
          list={BillOfMaterialDetailList}
          edit={BillOfMaterialDetailEdit}
          create={BillOfMaterialDetailCreate}
          show={BillOfMaterialDetailShow}
        />
        <Resource
          name="ProductBarcode"
          list={ProductBarcodeList}
          edit={ProductBarcodeEdit}
          create={ProductBarcodeCreate}
          show={ProductBarcodeShow}
        />
        <Resource
          name="ProductionOrder"
          list={ProductionOrderList}
          edit={ProductionOrderEdit}
          create={ProductionOrderCreate}
          show={ProductionOrderShow}
        />
        <Resource
          name="ProductionAvailability"
          list={ProductionAvailabilityList}
          edit={ProductionAvailabilityEdit}
          create={ProductionAvailabilityCreate}
          show={ProductionAvailabilityShow}
        />
      </Admin>
    </div>
  );
};

export default App;
