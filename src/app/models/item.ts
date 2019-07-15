import { Friend } from './friend';

export class Item {
  name: string = ''
  assigned = new Friend()
  imgSrc: string = ''
  key: string 
  isAssigned: boolean = false
  isValid: boolean = false
}
