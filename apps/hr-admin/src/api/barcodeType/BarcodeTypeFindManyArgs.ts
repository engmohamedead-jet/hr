import { BarcodeTypeWhereInput } from "./BarcodeTypeWhereInput";
import { BarcodeTypeOrderByInput } from "./BarcodeTypeOrderByInput";

export type BarcodeTypeFindManyArgs = {
  where?: BarcodeTypeWhereInput;
  orderBy?: Array<BarcodeTypeOrderByInput>;
  skip?: number;
  take?: number;
};
