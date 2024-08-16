import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ProductionDocumentService } from "./productionDocument.service";
import { ProductionDocumentControllerBase } from "./base/productionDocument.controller.base";

@swagger.ApiTags("productionDocuments")
@common.Controller("productionDocuments")
export class ProductionDocumentController extends ProductionDocumentControllerBase {
  constructor(
    protected readonly service: ProductionDocumentService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
