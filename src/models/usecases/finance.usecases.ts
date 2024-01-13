import { CreateFinance } from "../interfaces/finance.interface";
import { PrismaFinanceRepository } from "../repositories/finance.repository";

export class FinanceUseCase 
{
    private financeRepository: PrismaFinanceRepository;

    constructor()
    {
        this.financeRepository = new PrismaFinanceRepository();
    }

    async create({ price, description, categoryId }: CreateFinance)
    {
        const result = await this.financeRepository.create({ price, description, categoryId })
        return result 
    }

    async getAll()
    {
        const result = await this.financeRepository.getAll();
        return result;
    }
}