import { Component, ViewChild } from '@angular/core';
import { ComponentState } from '../ComponentState';

@Component({
  selector: 'app-campaign',
  templateUrl: './campaign.component.html',
  styleUrls: ['./campaign.component.css']
})

export class CampaignComponent {

  @ViewChild('navigation') navigationComponent;
  
  title = "CAMPAIGN DETAILS";
  headerTitle = "CAMPAIGNS";
  state = ComponentState.Empty;
  StateEnum = ComponentState;
  listIcons = ["info", "dashboard"];
  clients = ["BASF", "Samsung"];
  countries = ["Algeria", "Mexico", "United Kingdom"];

  campaignIcons = [
    {name: 'dashboard', action: () => this.showDashboard() },
    {name: 'show_chart', action: () => this.showFlowchart() },
    {name: 'delete', action: () => this.delete() },
    {name: 'save', action: () => this.save() },
    {name: 'file_download', action: () => this.exportExcel() },
    {name: 'insert_chart', action: () => this.exportClikView() },
    {name: 'picture_as_pdf', action: () => this.exportPdf() },
  ];

  headerIcons = [
    {name: 'add', action:() => this.showNewCampaignForm()  }
  ];

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
 
  showDashboard() {
    alert("Not implemented yet. Show grid");
  }

  showFlowchart() {
    alert("Not implemented yet. Show flowchart");
  }

  delete() {
    alert("Not implemented yet. Delete");
  }

  save() {
    alert("Not implemented yet. Save");
  }

  exportExcel() {
    alert("Not implemented yet. Export excel");
  }

  exportClikView() {
    alert("Not implemented yet. Export ClikView");
  }

  exportPdf() {
    alert("Not implemented yet. Export Pdf");
  }

  showFilterOptions() {
    alert("Not implemented. Show filter options");
  }

  showNewCampaignForm() {    
    this.state = ComponentState.Data;
  }

  onChangeView() {
    this.navigationComponent.toggle();
  }

  onCampaignClick(campaignId) {
    this.state = ComponentState.Loading;
    alert("Not implemented yet. Campaign clicked: " + campaignId);
  }

  onCampaignCheck(campaignId) {
    alert("Not implemented yet. Campaign checked: " + campaignId);
  }

}