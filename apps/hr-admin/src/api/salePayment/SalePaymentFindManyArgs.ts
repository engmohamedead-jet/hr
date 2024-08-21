import { SalePaymentWhereInput } from "./SalePaymentWhereInput";
import { SalePaymentOrderByInput } from "./SalePaymentOrderByInput";

export type SalePaymentFindManyArgs = {
  where?: SalePaymentWhereInput;
  orderBy?: Array<SalePaymentOrderByInput>;
  skip?: number;
  take?: number;
};
