import { Module }            from '@nestjs/common';
import { ProductController } from './product/product.controller';
import { ProductService }    from './product/product.service';
import { PrismaService }     from 'src/prisma/prisma/prisma.service';
import { PrismaModule }      from 'src/prisma/prisma.module';

@Module({
    imports    : [PrismaModule],
    controllers: [ProductController],
    providers  : [ProductService, PrismaService],
})
export class ProductModule {}
