import { Pipe, PipeTransform } from '@angular/core';
import { IConfection } from '../../components/confections/api/models/confection';

@Pipe({
  name: 'filterConfections'
})
export class FilterConfectionsPipe implements PipeTransform {

  transform(confections: IConfection[], search: string): IConfection[] {
    return confections.filter(c => c.name.toLocaleLowerCase().includes(search.toLocaleLowerCase()))
  }

}
