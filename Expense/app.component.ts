import { Component , OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Key } from 'protractor';
import { ColDef, GridOptions } from 'ag-grid-community';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'app';

    inputColumns = ['LOB','segment', 'pll', 'plp','claimsfees','Minimum'];
    inputData = ELEMENT_DATA;
    displayColumns: string[];
    displayData: any[];
    sliceData = [];
    totalColumns = Object.keys(this.inputData[0]).length;

    constructor() {
    }

    /**seperateExpenseApplicable(){
      const seperateexpColumn = ['Claims Supervision','General & Administration','Basic Loss Control','Enhanced Loss Control','Captive Management'];
      for(var expense in seperateexpColumn){
        return true;
      }
    }**/

    public getRowNodeId = function(data) {
      return data.id;
    };

    public defaultColDef = {
      flex: 1,
      minWidth: 110,
      editable: true,
      resizable: true,
    };

    public columnDefs = [
      { headerName: 'Workup#', field: 'A0', cellRenderer: 'agGroupCellRenderer', editable: false},
      { headerName: 'Seperate Expenses',
      field: 'A1',
      width: 100,
      editable: false,
      cellRenderer: function(params) {
        //let operatorValue = params.value;
        console.log(params.node.data.A0);
        var input;
        let sepExpColumns = ['Claims Service Fees', 'Claims Supervision', 'General & Administration', 'Basic Loss Control', 'Enhanced Loss Control', 'Captive Management', 'Intellirisk', 'Aggregate / Maximum charge', 'Insurance Charge (Excess)', 'Premium Taxes And Assessments'];
        //if(params.node.data.A0 === 'Claims Service Fees'){
          if(sepExpColumns.indexOf(params.node.data.A0) !== -1){
          input = document.createElement('input');
          input.type = 'checkbox';
        /**if (operatorValue) {
            input.checked = true;
            params.data.operator = true;
        } else {
            input.checked = false;
            params.data.operator = false;
        }**/
        input.addEventListener('click', function (event) {
          input.checked != input.checked;
          params.data.operator  = input.checked;
        });
        }else{
          
        }
        return input;
    }
  },
      { headerName: 'Total', field: 'A2', editable: function(params) {
        return params.node.data.A0 === 'LOB';
      }
      /** ,valueGetter: function(params) {
        if(params.node.data.A0 === 'Primary Layer Limit'){
          return  parseInt(params.node.data.A3) + parseInt(params.node.data.A4);
        }
      },**/
    },
      { headerName: '', 
        field: 'A3', 
        editable: true,
        /*editable: function(params) {
          return params.node.data.A0 === 'Minimum%' || params.node.data.A0 === 'Override';
        },
        cellEditor: 'select',
        cellEditorParams: {
            values: ['5%','10%','15%','20%','25%','30%','35%','40%','45%','50%','55%','60%','65%','70%','75%','80%','85%','90%','95%','100%','N/A'],
        },*/
      },
      { headerName: '', field: 'A4', 
      editable: function(params) {
        return params.node.data.A0 === 'Minimum%';
      },
      cellEditor: 'select',
      cellEditorParams: {
          values: ['10%', '20%','30%'],
      },
    },
    { headerName: '', field: 'A5', 
      editable: function(params) {
        return params.node.data.A0 === 'Minimum%';
      },
    },
    ];

    /*public autoGroupColumnDef = {
      headerName: 'Workup#',
      field: '0',
      minWidth: 250,
      cellRenderer: 'agGroupCellRenderer',
    };*/

    /*gridOptions:{
      onGridReady(params) {
          params.api.sizeColumnsToFit();
      }
    }*/

    public gridOptions = {
      onGridReady(params) {
        params.api.sizeColumnsToFit();
      },
      rowSelection: 'multiple',
      groupSelectsChildren: true,
      groupSelectsFiltered: true,
      suppressAggFuncInHeader: true,
      suppressRowClickSelection: true,
       autoGroupColumnDef: {
          cellRenderer:'agGroupCellRenderer',
          cellRendererParams: {
              checkbox: true
          }
      },
      getNodeChildDetails: function getNodeChildDetails(rowItem) {
        if (rowItem.rate) {
          return {
            group: true,
            // provide ag-Grid with the children of this group
            children: rowItem.rate,
            // the key is used by the default group cellRenderer
            key: rowItem.group
          };
        } else {
          return null;
        }
      },
    };

    //Find Element In Array
    /**var elementInArray:function include(arr,obj) {
      return (arr.indexOf(obj) != -1);
    }**/

    /**onGridReady(params) {
      this.gridApi = params.api;
      this.gridColumnApi = params.columnApi;
    }**/
    /**buildColumnDef(){
      console.log(this.totalColumns);
      for(var i=0; i<this.totalColumns; i++){
        var x = {headerName: i.toString(), field: i.toString()};
        console.log(x);
        this.output.push(x)
      }
      console.log(this.output);
      return this.output;
    }**/

    saveDatatable(){

    }
    
    /**buildRowDef(){
      for(let i=0; i<this.totalColumns; i++){
        var element = this.displayData[i];
        var y = {i: element[i], }
      }
    }**/

    ngOnInit() {
      //this.displayColumns = ['0'].concat(this.inputData.map(x => x.position.toString()));
      //this.displayData = this.inputColumns.map(x => this.formatInputRow(x));
      //console.log(this.displayData[0]);
      //console.log(this.displayData[0][0]);
    }
    

    formatInputRow(row) {
      let output = [];
      let d = [];
  
      output[0] = row;
  
      for (let i = 0; i < this.inputData.length; ++i) {
        output[this.inputData[i].position] = this.inputData[i][row];
      }
      d = output.slice(1, output.length);
      this.sliceData.push(d);
      return output;
    }

    /**rowData: any;
    constructor(private http: HttpClient) {
    }
    ngOnInit() {
        this.rowData = this.http.get('https://raw.githubusercontent.com/ag-grid/ag-grid/master/grid-packages/ag-grid-docs/src/sample-data/smallRowData.json');
    }**/

    public rowData = [
      { A0: 'LOB', A1: '', A2: '', A3: 'Workers Compensation', A4:'General Liability', A5: 'General Liability'},
      { A0: 'Segment Entity Name', A1: '', A2: '', A3: 'WC Deductible', A4:'GL DED Master', A5:'GL DED Master'},
      { A0: 'Primary Layer Limit', A1: '', A2: '', A3: '4000000', A4:'75000000', A5:'75000000'},
      { A0: 'Primary Layer Losspick', A1: '', A2: '', A3: '133639891', A4:'27372615', A5:'27372615'},
      { A0: 'Losspick@250000', A1: '', A2: '', A3: '100000000', A4:'20000000', A5:'20000000'},
      { A0: 'Exposure', A1: '', A2: '', A3: '13906336666', A4:'14326449939', A5:'14326449939'},
      { A0: 'Exposure Type', A1: '', A2: '', A3: 'WC Payroll', A4:'WC Payroll', A5:'WC Payroll'},
      { A0: 'Sub-type', A1: '', A2: '', A3: 'Countrywide', A4:'Countrywide', A5:'Countrywide'},
      { A0: 'Exceptions Apply', A1: '', A2: '', A3: 'N', A4:'N', A5:'N'},
      { A0: 'Special Adjustment', A1: '', A2: '', A3: '', A4:'', A5:''},
      { A0: 'Adjustable', A1: '', A2: '', A3: 'Y', A4:'Y', A5:'Y'},
      { A0: 'Claims Service Fees', A1: '', A2: '15000', A3: '7500', A4:'7500', A5:'7500', 
          rate: [
            { A0: 'Rate', A1: '', A2: '', A3: 'per TPA Agreement', A4:'per TPA Agreement', A5:'per TPA Agreement'},
            { A0: 'Rate Per', A1: '', A2: '', A3: '0.004', A4:'0.004', A5:'0.004'},
            { A0: 'Minimum%', A1: '', A2: '', A3: '100%', A4:'100%', A5:'100%'}
          ]
      },
      { A0: 'Override', A1: '', A2: '', A3: '', A4:'', A5:''},
      { A0: 'Variance', A1: '', A2: '', A3: '', A4:'', A5:''},
      { A0: 'Claims Supervision', A1: '', A2: '59672', A3: '51841', A4:'7831', A5:'7831',
          rate: [
            { A0: 'Rate', A1: '', A2: '', A3: '0.004', A4:'0.001', A5:'0.001'},
            { A0: 'Rate Per', A1: '', A2: '', A3: '100', A4:'100', A5:'100'},
            { A0: 'Minimum%', A1: '', A2: '', A3: '10%', A4:'10%', A5:'10%'}
          ]
      },
      { A0: 'Override', A1: '', A2: '', A3: '', A4:'', A5:''},
      { A0: 'Variance', A1: '', A2: '', A3: '', A4:'', A5:''},
      { A0: 'General & Administration', A1: '', A2: '59672', A3: '51841', A4:'7831', A5:'7831',
          rate: [
            { A0: 'Rate', A1: '', A2: '', A3: '0.004', A4:'0.001', A5:'0.001'},
            { A0: 'Rate Per', A1: '', A2: '', A3: '100', A4:'100', A5:'100'},
            { A0: 'Minimum%', A1: '', A2: '', A3: '20%', A4:'20%', A5:'20%'}
          ]
      },
      { A0: 'Override', A1: '', A2: '', A3: '', A4:'', A5:''},
      { A0: 'Variance', A1: '', A2: '', A3: '', A4:'', A5:''},
      { A0: 'Basic Loss Control', A1: '', A2: '59672', A3: '51841', A4:'7831', A5:'7831',
          rate: [
            { A0: 'Rate', A1: '', A2: '', A3: '0.004', A4:'0.001', A5:'0.001'},
            { A0: 'Rate Per', A1: '', A2: '', A3: '100', A4:'100', A5:'100'},
            { A0: 'Minimum%', A1: '', A2: '', A3: '30%', A4:'30%', A5:'30%'}
          ]
      },
      { A0: 'Override', A1: '', A2: '', A3: '', A4:'', A5:''},
      { A0: 'Variance', A1: '', A2: '', A3: '', A4:'', A5:''},
      { A0: 'Enhanced Loss Control', A1: '', A2: '59672', A3: '51841', A4:'7831', A5:'7831',
          rate: [
            { A0: 'Rate', A1: '', A2: '', A3: '0.004', A4:'0.001', A5:'0.001'},
            { A0: 'Rate Per', A1: '', A2: '', A3: '100', A4:'100', A5:'100'},
            { A0: 'Minimum%', A1: '', A2: '', A3: '40%', A4:'40%', A5:'40%'}
          ]
      },
      { A0: 'Override', A1: '', A2: '', A3: '', A4:'', A5:''},
      { A0: 'Variance', A1: '', A2: '', A3: '', A4:'', A5:''},
      { A0: 'Captive Management', A1: '', A2: '59672', A3: '51841', A4:'7831', A5:'7831',
          rate: [
            { A0: 'Rate', A1: '', A2: '', A3: '0.004', A4:'0.001', A5:'0.001'},
            { A0: 'Rate Per', A1: '', A2: '', A3: '100', A4:'100', A5:'100'},
            { A0: 'Minimum%', A1: '', A2: '', A3: '55%', A4:'55%', A5:'55%'}
          ]
      },
      { A0: 'Override', A1: '', A2: '', A3: '', A4:'', A5:''},
      { A0: 'Variance', A1: '', A2: '', A3: '', A4:'', A5:''},
      { A0: 'Intellirisk', A1: '', A2: '59672', A3: '51841', A4:'7831', A5:'7831',
          rate: [
            { A0: 'Rate', A1: '', A2: '', A3: '0.004', A4:'0.001', A5:'0.001'},
            { A0: 'Rate Per', A1: '', A2: '', A3: '100', A4:'100', A5:'100'},
            { A0: 'Minimum%', A1: '', A2: '', A3: '65%', A4:'65%', A5:'65%'}
          ]
      },
      { A0: 'Override', A1: '', A2: '', A3: '', A4:'', A5:''},
      { A0: 'Variance', A1: '', A2: '', A3: '', A4:'', A5:''},
      { A0: 'Aggregate / Maximum charge', A1: '', A2: '59672', A3: '51841', A4:'7831', A5:'7831',
          rate: [
            { A0: 'Rate', A1: '', A2: '', A3: '0.004', A4:'0.001', A5:'0.001'},
            { A0: 'Rate Per', A1: '', A2: '', A3: '100', A4:'100', A5:'100'},
            { A0: 'Minimum%', A1: '', A2: '', A3: '75%', A4:'75%', A5:'75%'}
          ]
      },
      { A0: 'Override', A1: '', A2: '', A3: '', A4:'', A5:''},
      { A0: 'Variance', A1: '', A2: '', A3: '', A4:'', A5:''},
      { A0: 'Insurance Charge (Excess)', A1: '', A2: '59672', A3: '51841', A4:'7831', A5:'7831',
          rate: [
            { A0: 'Rate', A1: '', A2: '', A3: '0.004', A4:'0.001', A5:'0.001'},
            { A0: 'Rate Per', A1: '', A2: '', A3: '100', A4:'100', A5:'100'},
            { A0: 'Minimum%', A1: '', A2: '', A3: '80%', A4:'60%', A5:'60%'}
          ]
      },
      { A0: 'Override', A1: '', A2: '', A3: '', A4:'', A5:''},
      { A0: 'Variance', A1: '', A2: '', A3: '', A4:'', A5:''},
      { A0: 'Premium Taxes And Assessments', A1: '', A2: '59672', A3: '51841', A4:'7831', A5:'7831',
          rate: [
            { A0: 'Rate', A1: '', A2: '', A3: '0.004', A4:'0.001', A5:'0.001'},
            { A0: 'Rate Per', A1: '', A2: '', A3: '100', A4:'100', A5:'100'},
            { A0: 'Minimum%', A1: '', A2: '', A3: '100%', A4:'N/A', A5:'N/A'}
          ]
      },
      { A0: 'Override', A1: '', A2: '', A3: '', A4:'', A5:''},
      { A0: 'Variance', A1: '', A2: '', A3: '', A4:'', A5:''},
      { A0: 'Retrospectively Rated Losses', A1: '', A2: '7781913', A3: '4996312', A4:'2785601', A5:'2785601'},
      { A0: 'Reimbursable Losses', A1: '', A2: '189011629', A3: '128643579', A4:'60368050', A5:'60368050'},
      { A0: 'Total Estimated Premium', A1: '', A2: '12452140', A3: '8774185', A4:'3677955', A5:'3677955'}
    ];
}

export interface ExpenseElement {
  position: number
  segment: string;
  LOB: string;
  pll: number;
  plp: number;
  claimsfees: number
  Minimum: string;
}

const ELEMENT_DATA: ExpenseElement[] = [
  { position: 1, LOB: 'wc', segment: 'wc', pll: 400, plp: 133, claimsfees: 51841, Minimum: '10%' },
  { position: 2, LOB: 'wc', segment: 'wc', pll: 500, plp: 193, claimsfees: 51841, Minimum: '20%' },
  { position: 3, LOB: 'wc', segment: 'wc', pll: 500, plp: 193, claimsfees: 51841, Minimum: '30%' },
  { position: 4, LOB: 'wc', segment: 'wc', pll: 500, plp: 193, claimsfees: 51841, Minimum: '40%' },
  { position: 5, LOB: 'wc', segment: 'wc', pll: 500, plp: 193, claimsfees: 51841, Minimum: '50%' },
  { position: 6, LOB: 'wc', segment: 'wc', pll: 500, plp: 193, claimsfees: 51841, Minimum: '60%' },
];
