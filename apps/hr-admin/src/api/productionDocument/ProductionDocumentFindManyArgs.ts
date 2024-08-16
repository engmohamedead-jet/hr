import { ProductionDocumentWhereInput } from "./ProductionDocumentWhereInput";
import { ProductionDocumentOrderByInput } from "./ProductionDocumentOrderByInput";

export type ProductionDocumentFindManyArgs = {
  where?: ProductionDocumentWhereInput;
  orderBy?: Array<ProductionDocumentOrderByInput>;
  skip?: number;
  take?: number;
};
