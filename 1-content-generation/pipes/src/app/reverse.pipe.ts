import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse',
  pure: true
})
export class ReversePipe implements PipeTransform {

  // date      // timeAgo
  // language  // changeLanguage 
  transform(value: string, args?: any): any {
    console.log('transform');
    return value.split('').reverse().join('');
  }

}
