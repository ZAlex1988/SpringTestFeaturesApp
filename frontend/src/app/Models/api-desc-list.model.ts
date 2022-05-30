import { ApiDesc } from "./api-desc.model";

export class ApiDescList {
    count!: number;
    entries!: ApiDesc[];

    constructor() {
        this.count = 0;
    }
}
    
