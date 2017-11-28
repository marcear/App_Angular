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
  items = [
    { id: 1, name: 'WCC CHINA', startDate: "01/01/2015", endDate: "01/08/2016"},
    { id: 2, name: 'WCC AUSTRALIA', startDate: "25/07/2015", endDate: "25/12/2017"},
    { id: 3, name: 'WCC Czech Republic', startDate: "15/04/2013", endDate: "09/11/2016"},
    { id: 4, name: 'WCC ARGENTINA', startDate: "01/01/2015", endDate: "01/08/2016"},
    { id: 5, name: 'WCC France', startDate: "25/07/2015", endDate: "25/12/2017"},
    { id: 6, name: 'WCC Malaysia', startDate: "15/04/2013", endDate: "09/11/2016"},
    { id: 7, name: 'WCC CHINA', startDate: "01/01/2015", endDate: "01/08/2016"},
    { id: 8, name: 'WCC AUSTRALIA', startDate: "25/07/2015", endDate: "25/12/2017"},
    { id: 9, name: 'WCC Czech Republic', startDate: "15/04/2013", endDate: "09/11/2016"},
    { id: 10, name: 'WCC ARGENTINA', startDate: "01/01/2015", endDate: "01/08/2016"},
    { id: 11, name: 'WCC France', startDate: "25/07/2015", endDate: "25/12/2017"},
    { id: 12, name: 'WCC Malaysia', startDate: "15/04/2013", endDate: "09/11/2016"},
  ];
  listIcons = ["info","dashboard"];
 
  onChangeView() {
    this.navigationComponent.toggle();
  }

  onCampaignClick(campaignId){
    console.log("Campaign clicked: ", campaignId);
  }

  onCampaignCheck(campaignId){
    console.log("Campaign checked: ", campaignId);
  }

}