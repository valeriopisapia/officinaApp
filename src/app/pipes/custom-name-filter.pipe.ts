import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customNameFilter'
})
export class CustomNameFilterPipe implements PipeTransform {

  transform(items: any[], field: string, value: string, origin: any[]): any[] {
    console.log(items, field, value, origin);
    if (!!items && value != '-1' && value != "") {
      return items.filter(it => it[field].toLowerCase() == value.toLowerCase());
    } else {
      return origin;
    }
  }

}
