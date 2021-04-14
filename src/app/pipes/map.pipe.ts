import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';


@Pipe({
  name: 'map'
})
export class MapPipe implements PipeTransform {

  constructor(private sanitizer: DomSanitizer) { }
  
  // transform(value: unknown, ...args: unknown[]): unknown {
  //   return null;
  // }
  transform(url:any) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

}
