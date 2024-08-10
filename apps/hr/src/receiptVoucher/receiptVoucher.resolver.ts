import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { ReceiptVoucherResolverBase } from "./base/receiptVoucher.resolver.base";
import { ReceiptVoucher } from "./base/ReceiptVoucher";
import { ReceiptVoucherService } from "./receiptVoucher.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => ReceiptVoucher)
export class ReceiptVoucherResolver extends ReceiptVoucherResolverBase {
  constructor(
    protected readonly service: ReceiptVoucherService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
