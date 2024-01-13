export interface Finance
{
    id: string;
    price: string;
    categoryId: string;
    description: string;
}

export interface CreateFinance
{
    price: string;
    categoryId: string;
    description: string
}

export interface FinanceRepository
{
    create(data: CreateFinance): Promise<Finance>;
}