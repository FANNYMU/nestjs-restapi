import { HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService }          from './../../prisma/prisma/prisma.service';

@Injectable()
export class ProductService {
    constructor(
        private PrismaService: PrismaService
    ){}
    async getProducts(): Promise<object> {
        const data = await this.PrismaService.product.findMany()
        return {status: "Success Get Data Products",code: 200 ,data: data};
    }
    async postProduct(body: any): Promise<object> {
        const price = parseFloat(body.price)
        const data  = await this.PrismaService.product.create({data: {
            title      : body.title,
            description: body.description,
            price      : price,
            image      : body.image
        }})
        return {status: "Success Post Data Products",code: HttpStatus.CREATED ,data: data};
    }
    async deleteProduct(id: any): Promise<object> {
        const data = await this.PrismaService.product.delete({where: {id: id}})
        return {status: "Success Delete Data Products",code: HttpStatus.OK ,data: data};
    }
}
