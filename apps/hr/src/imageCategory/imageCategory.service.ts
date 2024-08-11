import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ImageCategoryServiceBase } from "./base/imageCategory.service.base";

@Injectable()
export class ImageCategoryService extends ImageCategoryServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
