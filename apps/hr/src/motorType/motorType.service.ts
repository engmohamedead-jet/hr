import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { MotorTypeServiceBase } from "./base/motorType.service.base";

@Injectable()
export class MotorTypeService extends MotorTypeServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
