import { Category, CreateCategory, GetCategory } from "../interfaces/category.interface";
import { PrismaCategoryRepository } from "../repositories/category.repository"

export class CategoryUseCases 
{
    private categoryRepository: PrismaCategoryRepository;

    constructor()
    {
        this.categoryRepository = new PrismaCategoryRepository();
    }

    async create({ title }: CreateCategory)
    {
        const res = await this.categoryRepository.create({ title })
        return res;
    }

    async getOne({ id }: GetCategory)
    {
        const res = await this.categoryRepository.getOne({ id })
        return res;
    }

    async getAll()
    {
        const res = await this.categoryRepository.getAll();
        return res;
    }
}