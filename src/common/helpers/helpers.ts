import {paginatedInput} from "../graphql/paginated.input";

export function normalizePagination(paginated:paginatedInput): paginatedInput{
    !paginated ? paginated = {} as paginatedInput : "";
    paginated.limit <= 0 ? paginated.limit = 100 : '';
    paginated.skip === null ? paginated.limit = 0 : '';
    return paginated;
}