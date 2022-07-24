import { Pipe, PipeTransform } from '@angular/core';
import { IPie } from '../components/pies/api/models/pie';

@Pipe({
  name: 'filterPies'
})
export class FilterPiesPipe implements PipeTransform {

  transform(pies: IPie[], search: string): IPie[] {
    return pies.filter(p => p.name.toLocaleLowerCase().includes(search.toLocaleLowerCase()))
  }

}
