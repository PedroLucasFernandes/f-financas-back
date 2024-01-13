import { prisma } from "../../database/prisma-client";
import { Category, CategoryRepository, CreateCategory, GetCategory } from "../interfaces/category.interface";

export class PrismaCategoryRepository implements CategoryRepository
{
    async create(data: CreateCategory): Promise<Category> 
    {
        const res = await prisma.category.create({
            data: {title: data.title}
        })
        return res;
    }

    async getOne(data: GetCategory): Promise<Category | null>
    {
        const res = await prisma.category.findUnique({
            where: {
                id: data.id
            }
        })
        return res || null;
    }

    async getAll(): Promise<Category[]>
    {
        const res = await prisma.category.findMany({ where: {} });
        return res
    }
} 
