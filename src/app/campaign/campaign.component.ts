import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-campaign',
  templateUrl: './campaign.component.html',
  styleUrls: ['./campaign.component.css']
})

export class CampaignComponent {

  @ViewChild('navigation') navigationComponent;
  
  title = "CAMPAIGN DETAILS";
  headerTitle="CAMPAIGNS";
  headerIcons: string[] = ['filter_list', 'add'];
  campaignIcons: string[] = ['dashboard', 'show_chart', 'delete', 'save', 'file_download', 'insert_chart', 'picture_as_pdf'];
 
  onChangeView() {
    this.navigationComponent.toggle();
  }

}