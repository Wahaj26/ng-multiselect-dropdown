import { Pipe, PipeTransform } from '@angular/core';

import { ListItem } from './multiselect.model';

@Pipe({
    name: 'ng2ListFilter',
    pure: false
})
export class ListFilterPipe implements PipeTransform {
    transform(items: ListItem[], filter: ListItem): ListItem[] {
        if (!items || !filter) {
            return items;
        }
        return items.filter((item: ListItem) => this.applyFilter(item, filter));
    }

    applyFilter(item: ListItem, filter: ListItem): boolean {
        return !(filter.text && item.text && (item.text as string).toLowerCase().indexOf((filter.text as string).toLowerCase()) === -1);
    }
}
