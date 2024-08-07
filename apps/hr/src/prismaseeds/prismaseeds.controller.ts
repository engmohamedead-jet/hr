import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { PrismaSeedsService } from "./prismaseeds.service";

@swagger.ApiTags("prismaSeeds")
@common.Controller("prismaSeeds")
export class PrismaSeedsController {
  constructor(protected readonly service: PrismaSeedsService) {}

  @common.Post("/seed-roles")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async SeedRoles(
    @common.Body()
    body: string
  ): Promise<string> {
        return this.service.SeedRoles(body);
      }
}
