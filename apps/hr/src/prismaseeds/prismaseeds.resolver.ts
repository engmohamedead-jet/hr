import * as graphql from "@nestjs/graphql";
import { PrismaSeedsService } from "./prismaseeds.service";

export class PrismaSeedsResolver {
  constructor(protected readonly service: PrismaSeedsService) {}

  @graphql.Mutation(() => String)
  async SeedRoles(
    @graphql.Args("args")
    args: string
  ): Promise<string> {
    return this.service.SeedRoles(args);
  }
}
