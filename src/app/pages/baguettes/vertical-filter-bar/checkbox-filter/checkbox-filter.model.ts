import { FBFilter } from "../fb-filter.interface";

export class CheckboxFilter implements FBFilter {

    public filterValue: string[] = []

    constructor(
        public identifier: string,
        public title: string,
        public options: string[],
        public showMoreAfter: number
    ) { }

    public getClassName(): string {
        return 'CheckboxFilter'
    }

    public resetFilterValue(): void {
        this.filterValue = []
    }
}