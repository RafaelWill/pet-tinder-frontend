import { Pipe, PipeTransform } from '@angular/core';
import {Pet} from '../../model/Pet';

@Pipe({
  name: 'popularityFilter'
})
export class PopularityFilterPipe implements PipeTransform {

  transform(popularity: number): string {
    if (popularity < 1) {
      return 'Freezing';
    } else if (popularity <= 2) {
      return 'Normal';
    } else if (popularity <= 4) {
      return 'Popular';
    } else {
      return 'Sizzling hot!';
    }
  }

}
