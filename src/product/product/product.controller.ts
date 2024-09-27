import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ProductService }                             from './product.service';

type CreateProductDto = {
    title      : string;
    description: string;
    price      : string;
    image      : string;
}

@Controller('products')
export class ProductController {
    constructor(
        private productService: ProductService
    ){}

    @Get()
    getProducts(): object {
        return this.productService.getProducts();
    }

    @Post()
    postProduct(@Body() createProductDto: CreateProductDto): object {
        return this.productService.postProduct(createProductDto);
    }

    @Delete(':id')
    deleteProduct(@Param('id') id: string): object {
        const idNumber = parseInt(id);
        return this.productService.deleteProduct(idNumber);
    }
}

