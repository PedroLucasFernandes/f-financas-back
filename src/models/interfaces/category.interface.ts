export interface Category
{
    id: string;
    title: string;
}

export interface GetCategory
{
    id?: string;
    title?: string;
}

export interface CreateCategory
{
    title: string;
}

export interface CategoryRepository
{
    create(data: CreateCategory): Promise<Category>
}