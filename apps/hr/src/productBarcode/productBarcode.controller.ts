import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ProductBarcodeService } from "./productBarcode.service";
import { ProductBarcodeControllerBase } from "./base/productBarcode.controller.base";

@swagger.ApiTags("productBarcodes")
@common.Controller("productBarcodes")
export class ProductBarcodeController extends ProductBarcodeControllerBase {
  constructor(
    protected readonly service: ProductBarcodeService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
