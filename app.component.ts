import { FormBuilder, FormGroup, FormArray, FormControl, Validators, AbstractControl } from '@angular/forms';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { DatasourceService } from './services/datasource/datasource.service';
import { ElementData } from './services/datasource/datasource.service';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatDividerModule } from '@angular/material/divider';
import { MatSelectModule } from '@angular/material/select';
import { MatPaginator } from '@angular/material/paginator';
import { MatInputModule } from '@angular/material/input';
import { CdkTableModule } from '@angular/cdk/table';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class AppComponent implements OnInit {

  sumres;
  dataSource;
  text: string;
  dataApiSource = [];
  title = 'Datatable';
  expandedElement: ElementData | null;
  displayedColumns = ['name','C', 'D', 'E', 'F', 'G'];
  
  constructor(
    private dataServ:DatasourceService
  ){
  }

  ngOnInit() {    
    this.dataServ.getData()
    .then(res => {
      this.dataApiSource = res;
      if(res.length>0){
        this.dataSource = new MatTableDataSource(res);
      }
      console.log('dataApiSource: ', res);
      // this.readKeyValue(this.dataSource);
    });
  }

  // Read the Key ans values from ElementData Object
  readKeyValue(dataApiSource) {
    Object.keys(this.dataApiSource).forEach(key => {
      console.log(`key: ${key}, value: ${this.dataApiSource[key]}`)
      if (typeof this.dataApiSource[key] === 'object') {
        this.readKeyValue(this.dataApiSource[key])
      }else{
        let colunKey = key;
      }
    })
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  calcData() {
    var res;
    this.dataApiSource.forEach(element => {
      var E = parseInt(element.E);
      var F = parseInt(element.F);
      var G = parseInt(element.G);
      if (isNaN(E)) {
      } else {
        var resE = E;
      }
      if (isNaN(element.F)) {
      } else {
        var resF = F
      }
      if (isNaN(element.G)) {
      } else {
        var resG = G;
      }
      res = resE + resF + resG;
      if (isNaN(res.toString())) {
        element.D = '';
      } else {
        element.D = res.toString();
        //console.log('element.D: ', element.D); // just to check the NaN values
      }
    });
  }

  saveDatatable(){
    console.log('Saved: ', this.dataApiSource);
  }
}
