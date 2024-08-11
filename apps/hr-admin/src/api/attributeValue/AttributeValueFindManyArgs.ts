import { AttributeValueWhereInput } from "./AttributeValueWhereInput";
import { AttributeValueOrderByInput } from "./AttributeValueOrderByInput";

export type AttributeValueFindManyArgs = {
  where?: AttributeValueWhereInput;
  orderBy?: Array<AttributeValueOrderByInput>;
  skip?: number;
  take?: number;
};
