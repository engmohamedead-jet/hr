import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CompoundUnitServiceBase } from "./base/compoundUnit.service.base";

@Injectable()
export class CompoundUnitService extends CompoundUnitServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
