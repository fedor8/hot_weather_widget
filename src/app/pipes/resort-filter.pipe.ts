import { Pipe, PipeTransform } from '@angular/core';
import {Resort} from '../../resort';

@Pipe({
  name: 'resortFilter'
})
export class ResortFilterPipe implements PipeTransform {

  transform(resorts: Resort[], category: string): Resort[] {
    if (!category) {
      return resorts;
    }
    return resorts.filter((resort: Resort) =>
      resort.categories.includes(category)
    );
  }

}
