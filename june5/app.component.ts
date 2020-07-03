import { Component, OnInit } from '@angular/core';
import { $ } from 'protractor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    this.calculateTotalPremium();
  }

  totalPremium;

  calculateTotalPremium(){
    this.totalPremium = this.getValue("excessAllocation") + this.getValue("aggInsAllocation") + this.getValue("gaAllocation") + this.getValue("claimsAllocation") + this.getValue("intelAllocation") + this.getValue("basicAllocation") + this.getValue("captiveAllocation");  
    }

  getValue(id){
    var htmlstring = document.getElementById(id).innerHTML;
    htmlstring = (htmlstring.trim) ? htmlstring.trim() : htmlstring.replace(/^\s+/,'');
    if(htmlstring == "" || htmlstring == null){
      return 0;
    }
    return parseInt(htmlstring);
  }
  title = 'lraro';

  //Expand Collapse control
  aggInsuranceExpanded; gaExpanded; claimsExpanded; intelExpanded; basicExpanded; captiveExpanded; totalExpanded  = false;
  excessExpanded = true; 

  // excess related calculation
  excessUW; //ng-model for excess expense
  excessVariance;
  excessVariancePercentage;
  
  onExcessUWChange(amountInput) {
    var excess_variance = document.getElementById("excessAllocation").innerHTML;
    this.excessVariance = parseInt(excess_variance) - amountInput;
    this.excessVariancePercentage = (amountInput / parseInt(excess_variance))* 100;
  }
  
  //Aggregate Insurance Charge

  aggInsUW; //ng-model for excess expense
  aggInsVariance;
  aggInsVariancePercentage;

  onAggInsuranceUWChange(amountInput) {
      var aggIns_variance = document.getElementById("aggInsAllocation").innerHTML;
      this.aggInsVariance = parseInt(aggIns_variance) - amountInput;
      this.aggInsVariancePercentage = (amountInput / parseInt(aggIns_variance))* 100;
  }

  //Total General Expense Calculation



}
