import { Module } from "@nestjs/common";
import { PrismaSeedsService } from "./prismaseeds.service";
import { PrismaSeedsController } from "./prismaseeds.controller";
import { PrismaSeedsResolver } from "./prismaseeds.resolver";

@Module({
  controllers: [PrismaSeedsController],
  providers: [PrismaSeedsService, PrismaSeedsResolver],
  exports: [PrismaSeedsService],
})
export class PrismaSeedsModule {}
