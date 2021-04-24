import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'testt'
})
export class TesttPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
