import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-campaign-form',
  templateUrl: './campaign-form.component.html',
  styleUrls: ['./campaign-form.component.css']
})

export class CampaignFormComponent {
  
  @Input() clients: any[];
  @Input() countries: any[];

}