import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'pipeFilter' })
export class FilterPipe implements PipeTransform {
  transform( items: Array<any>, searchText: string): any {
    if (!items || !searchText) {
        return items;
    }
    if(searchText.length != 0){
        return (items.filter((obj)=>{
            return obj.name.toLocaleUpperCase().indexOf(searchText.toLocaleUpperCase()) != -1; 
        }))
    }
    
  }
}
