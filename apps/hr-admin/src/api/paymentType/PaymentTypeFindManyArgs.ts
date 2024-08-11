import { PaymentTypeWhereInput } from "./PaymentTypeWhereInput";
import { PaymentTypeOrderByInput } from "./PaymentTypeOrderByInput";

export type PaymentTypeFindManyArgs = {
  where?: PaymentTypeWhereInput;
  orderBy?: Array<PaymentTypeOrderByInput>;
  skip?: number;
  take?: number;
};
