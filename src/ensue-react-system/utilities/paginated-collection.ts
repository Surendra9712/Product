import {Collection} from "./collection";

interface PaginatedCollectionProps {
    docs: Array<any>,
    pagination: {
        limit: number,
        total: number,
        nextPage: boolean,
        previousPage: boolean,
        page: number
    },

}

export class PaginatedCollection<T> extends Collection<T> {
    public page: number = 0;
    public total: number = 0;
    public limit: number = 0;
    public nextPage: boolean = false;
    public previousPage: boolean = false;

    public constructor(body: PaginatedCollectionProps = {
        docs: [], pagination: {
            page: 0, limit: 0, total: 0,
            nextPage: false, previousPage: false
        }
    }) {
        super(body.docs);
        this.page = body.pagination.page;
        this.nextPage = body.pagination.nextPage;
        this.previousPage = body.pagination.previousPage;
        this.limit = body.pagination.limit;
        this.total = body.pagination.total;
    }
}