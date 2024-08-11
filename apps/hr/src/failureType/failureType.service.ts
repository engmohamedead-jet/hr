import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { FailureTypeServiceBase } from "./base/failureType.service.base";

@Injectable()
export class FailureTypeService extends FailureTypeServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
