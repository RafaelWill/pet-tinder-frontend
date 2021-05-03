import { Pipe, PipeTransform } from '@angular/core';
import {Pet} from '../../model/Pet';

@Pipe({
  name: 'nameFilterPipe'
})
export class NameFilterPipePipe implements PipeTransform {

  transform(pets: Pet[], searchText: string): any[] {
    return pets.filter(pet => { return pet.name.toLocaleLowerCase().includes(searchText.toLowerCase());
    });
  }

}
