import { Module }            from '@nestjs/common';
import { AppController }     from './app.controller';
import { AppService }        from './app.service';
import { ProductController } from './product/product/product.controller';
import { ProductModule }     from './product/product.module';
import { PrismaService }     from './prisma/prisma/prisma.service';
import { PrismaModule }      from './prisma/prisma.module';
import { ProductService }    from './product/product/product.service';

@Module({
  imports    : [PrismaModule, ProductModule],
  controllers: [AppController, ProductController],
  providers  : [AppService, PrismaService, ProductService],
})
export class AppModule {}
