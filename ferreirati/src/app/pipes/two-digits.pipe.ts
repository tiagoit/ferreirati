import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'twoDigits'})
export class TwoDigitsPipe implements PipeTransform {
  transform(value: number): string {
    let num = value.toString();
    return (num.length === 1 ? '0' : '') + num;
  }
}