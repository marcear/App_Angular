import {CommonHelper} from './commonHelper';

export class Event {  
  id: any;
  title: string;
  cost: number;
  description: string;
  resourceId: any;
  start: any;
  end: any;
  isNew: boolean;

  constructor(start: any, end:any, resourceId:any){
    this.id = CommonHelper.newGuid();
    this.cost = 0;
    this.description = '';
    this.start = start;
    this.end = end;
    this.resourceId = resourceId; 
    this.title = 'New Event';
    this.isNew = true;
  }
}