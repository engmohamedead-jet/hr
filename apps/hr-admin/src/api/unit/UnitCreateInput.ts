import { BillOfMaterialDetailCreateNestedManyWithoutUnitsInput } from "./BillOfMaterialDetailCreateNestedManyWithoutUnitsInput";
import { BillOfMaterialCreateNestedManyWithoutUnitsInput } from "./BillOfMaterialCreateNestedManyWithoutUnitsInput";
import { ProductUnitWhereUniqueInput } from "../productUnit/ProductUnitWhereUniqueInput";
import { ProductUnitCreateNestedManyWithoutUnitsInput } from "./ProductUnitCreateNestedManyWithoutUnitsInput";
import { ProductionOrderCreateNestedManyWithoutUnitsInput } from "./ProductionOrderCreateNestedManyWithoutUnitsInput";
import { ProductCreateNestedManyWithoutUnitsInput } from "./ProductCreateNestedManyWithoutUnitsInput";
import { PurchaseDetailCreateNestedManyWithoutUnitsInput } from "./PurchaseDetailCreateNestedManyWithoutUnitsInput";
import { PurchaseReturnDetailCreateNestedManyWithoutUnitsInput } from "./PurchaseReturnDetailCreateNestedManyWithoutUnitsInput";
import { SaleDetailCreateNestedManyWithoutUnitsInput } from "./SaleDetailCreateNestedManyWithoutUnitsInput";
import { SaleOrderDetailCreateNestedManyWithoutUnitsInput } from "./SaleOrderDetailCreateNestedManyWithoutUnitsInput";
import { SaleQuotationDetailCreateNestedManyWithoutUnitsInput } from "./SaleQuotationDetailCreateNestedManyWithoutUnitsInput";
import { SaleReturnDetailCreateNestedManyWithoutUnitsInput } from "./SaleReturnDetailCreateNestedManyWithoutUnitsInput";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";

export type UnitCreateInput = {
  billOfMaterialDetails?: BillOfMaterialDetailCreateNestedManyWithoutUnitsInput;
  billOfMaterials?: BillOfMaterialCreateNestedManyWithoutUnitsInput;
  code?: string | null;
  description?: string | null;
  isActive: boolean;
  isCompound?: boolean | null;
  isDefault?: boolean | null;
  name: string;
  normalizedName: string;
  note?: string | null;
  productUnitCompareUnits?: ProductUnitWhereUniqueInput | null;
  productUnits?: ProductUnitCreateNestedManyWithoutUnitsInput;
  productionOrders?: ProductionOrderCreateNestedManyWithoutUnitsInput;
  products?: ProductCreateNestedManyWithoutUnitsInput;
  purchaseDetails?: PurchaseDetailCreateNestedManyWithoutUnitsInput;
  purchaseReturnDetails?: PurchaseReturnDetailCreateNestedManyWithoutUnitsInput;
  saleDetails?: SaleDetailCreateNestedManyWithoutUnitsInput;
  saleOrderDetails?: SaleOrderDetailCreateNestedManyWithoutUnitsInput;
  saleQuotationDetails?: SaleQuotationDetailCreateNestedManyWithoutUnitsInput;
  saleReturnDetails?: SaleReturnDetailCreateNestedManyWithoutUnitsInput;
  tenantId?: TenantWhereUniqueInput | null;
};
