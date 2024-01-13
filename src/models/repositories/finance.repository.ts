import { prisma } from "../../database/prisma-client";
import { CreateFinance, Finance, FinanceRepository } from "../interfaces/finance.interface";

export class PrismaFinanceRepository implements FinanceRepository
{
    async create(data: CreateFinance): Promise<Finance> {
        const result = await prisma.finance.create({
            data: {
                price: data.price,
                description: data.description,
                categoryId: data.categoryId
            }
        })
        return result
    }

    async getAll()
    {
        const result = await prisma.finance.findMany({
            where: {}
        });
        return result;
    }
}
