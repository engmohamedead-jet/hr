import { Decimal } from "decimal.js";
import { CurrencyWhereUniqueInput } from "../currency/CurrencyWhereUniqueInput";
import { ProductionOrderCreateNestedManyWithoutCustomersInput } from "./ProductionOrderCreateNestedManyWithoutCustomersInput";
import { ReceiptVoucherCreateNestedManyWithoutCustomersInput } from "./ReceiptVoucherCreateNestedManyWithoutCustomersInput";
import { SaleOrderCreateNestedManyWithoutCustomersInput } from "./SaleOrderCreateNestedManyWithoutCustomersInput";
import { SaleReturnCreateNestedManyWithoutCustomersInput } from "./SaleReturnCreateNestedManyWithoutCustomersInput";
import { SaleCreateNestedManyWithoutCustomersInput } from "./SaleCreateNestedManyWithoutCustomersInput";
import { SupplierCreateNestedManyWithoutCustomersInput } from "./SupplierCreateNestedManyWithoutCustomersInput";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";

export type CustomerCreateInput = {
  DefaultSalePriceTypeId?: number | null;
  address?: string | null;
  code?: string | null;
  credit?: Decimal | null;
  currencyId?: CurrencyWhereUniqueInput | null;
  debit?: Decimal | null;
  description?: string | null;
  email?: string | null;
  firstBalance?: Decimal | null;
  firstBalanceDate?: Date | null;
  isActive: boolean;
  isSystem?: boolean | null;
  isUnderRevision?: boolean | null;
  maxAllowedDebit?: Decimal | null;
  name: string;
  normalizedName: string;
  phoneNumber?: string | null;
  previousBalance?: Decimal | null;
  productionOrders?: ProductionOrderCreateNestedManyWithoutCustomersInput;
  receiptVouchers?: ReceiptVoucherCreateNestedManyWithoutCustomersInput;
  revisionDate?: Date | null;
  saleDiscountRate?: Decimal | null;
  saleOrders?: SaleOrderCreateNestedManyWithoutCustomersInput;
  saleReturns?: SaleReturnCreateNestedManyWithoutCustomersInput;
  sales?: SaleCreateNestedManyWithoutCustomersInput;
  supplierId?: string | null;
  suppliers?: SupplierCreateNestedManyWithoutCustomersInput;
  taxNumber?: string | null;
  tenant?: TenantWhereUniqueInput | null;
  website?: string | null;
};
