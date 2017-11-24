import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-campaign',
  templateUrl: './campaign.component.html',
  styleUrls: ['./campaign.component.css']
})

export class CampaignComponent {
  
  arrowLeftIcon = "keyboard_arrow_left";
  arrowRightIcon = "keyboard_arrow_right";
  toogleIcon = this.arrowLeftIcon;
  title = "CAMPAIGN DETAILS";
  headerTitle="CAMPAIGNS";
  headerIcons: string[] = ['filter_list', 'add'];
  campaignIcons: string[] = ['dashboard', 'show_chart', 'delete', 'save', 'file_download', 'insert_chart', 'picture_as_pdf'];
  
  toggle(event) {
    if (this.toogleIcon == this.arrowLeftIcon) {
      this.toogleIcon = this.arrowRightIcon;
    } else {
      this.toogleIcon = this.arrowLeftIcon;
    }
  }

}