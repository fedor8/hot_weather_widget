import { Pipe, PipeTransform } from '@angular/core';
import {Resort} from '../classes/resort';

@Pipe({
  name: 'resortFilter'
})
export class ResortFilterPipe implements PipeTransform {

  transform(resorts: Resort[], category: string): Resort[] {
    if (!category || resorts == null || !(Array.isArray(resorts))) {
      return resorts;
    }
    console.log('ResortFilterPipe1', resorts);
    console.log('ResortFilterPipe2', resorts.filter);
    return resorts.filter((resort: Resort) =>
      resort.categories.includes(category)
    );
  }

}
