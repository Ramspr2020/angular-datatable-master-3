import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatasourceService {

  constructor() {}

  // Get and returns the Element data object
  async getData(){
    return await ElementData;
  }
}

// Data Element
const ElementData = [
  {name:'Work up#',C:'Separate Expense',D:'Totals',E:'',F:'', G:''},
  {name:'L',C:'',D:'',E:'',F:'', G:''},
  {name:'Segment',C:'',D:'',E:'',F:'', G:''},
  {name:'PLL',C:'',D:'',E:'4000000',F:'500000', G:'500000'},
  {name:'PLP',C:'',D:'',E:'133639891',F:'1933434', G:'1933434'},
  {name:'LP',C:'',D:'',E:'100000000',F:'1000000', G:'1000000'},
  {name:'EX',C:'',D:'',E:'13906633',F:'322006', G:'322006'},
  {name:'EXT',C:'',D:'',E:'',F:'', G:''},
  {name:'ST',C:'',D:'',E:'cw',F:'cw', G:''},
  {name:'EA',C:'',D:'',E:'n',F:'n', G:''},
  {name:'SPA',C:'',D:'',E:'o',F:'o', G:''},
  {name:'Ad',C:'',D:'',E:'y',F:'y', G:''},
  {name:'PR EX',C:'',D:'',E:'',F:'', G:''},
  {name:'CL SER F',C:'',D:'71337',E:'51841',F:'750', G:'7831',
    rate:{name:'Rate',C:'0,003',D:'0,003',E:'0,003',F:'0,003', G:''},
    rate_per:{name:'Rate per',C:'100',D:'100',E:'100',F:'100', G:''},
    minimum:{name:'Minimum',C:'50%',D:'50%',E:'50%',F:'50%', G:''}
  },
  {name:'CL SP',C:'',D:'2056036',E:'1494099',F:'21616', G:'225703',
    rate:{name:'Rate',C:'0,003',D:'0,003',E:'0,003',F:'0,003', G:''},
    rate_per:{name:'Rate per',C:'100',D:'100',E:'100',F:'100', G:''},
    minimum:{name:'Minimum',C:'50%',D:'50%',E:'50%',F:'50%', G:''}
  },
  {name:'G&A',C:'',D:'',E:'',F:'', G:'',
    rate:{name:'Rate',C:'0,003',D:'0,003',E:'0,003',F:'0,003', G:''},
    rate_per:{name:'Rate per',C:'100',D:'100',E:'100',F:'100', G:''},
    minimum:{name:'Minimum',C:'50%',D:'50%',E:'50%',F:'50%', G:''}
  },
  {name:'BLC',
    rate:{name:'Rate',C:'0,003',D:'0,003',E:'0,003',F:'0,003', G:''},
    rate_per:{name:'Rate per',C:'100',D:'100',E:'100',F:'100', G:''},
    minimum:{name:'Minimum',C:'50%',D:'50%',E:'50%',F:'50%', G:''}
  },
  {name:'ELC',C:'',D:'',E:'',F:'', G:'',
    rate:{name:'Rate',C:'0,003',D:'0,003',E:'0,003',F:'0,003', G:''},
    rate_per:{name:'Rate per',C:'100',D:'100',E:'100',F:'100', G:''},
    minimum:{name:'Minimum',C:'50%',D:'50%',E:'50%',F:'50%', G:''}
  },
  {name:'CMF',
    rate:{name:'Rate',C:'0,003',D:'0,003',E:'0,003',F:'0,003', G:''},
    rate_per:{name:'Rate per',C:'100',D:'100',E:'100',F:'100', G:''},
    minimum:{name:'Minimum',C:'50%',D:'50%',E:'50%',F:'50%', G:''}
  },
  {name:'IR',C:'',D:'',E:'',F:'', G:'',
    rate:{name:'Rate',C:'0,003',D:'0,003',E:'0,003',F:'0,003', G:''},
    rate_per:{name:'Rate per',C:'100',D:'100',E:'100',F:'100', G:''},
    minimum:{name:'Minimum',C:'50%',D:'50%',E:'50%',F:'50%', G:''}
  },
  {name:'A/MS',C:'',D:'',E:'',F:'', G:'',
    rate:{name:'Rate',C:'0,003',D:'0,003',E:'0,003',F:'0,003', G:''},
    rate_per:{name:'Rate per',C:'100',D:'100',E:'100',F:'100', G:''},
    minimum:{name:'Minimum',C:'50%',D:'50%',E:'50%',F:'50%', G:''}
  },
  {name:'INC',C:'',D:'',E:'',F:'', G:'',
    rate:{name:'Rate',C:'0,003',D:'0,003',E:'0,003',F:'0,003', G:''},
    rate_per:{name:'Rate per',C:'100',D:'100',E:'100',F:'100', G:''},
    minimum:{name:'Minimum',C:'50%',D:'50%',E:'50%',F:'50%', G:''}
  },
  {name:'PT&A',C:'',D:'',E:'',F:'', G:'',
    rate:{name:'Rate',C:'0,003',D:'0,003',E:'0,003',F:'0,003', G:''},
    rate_per:{name:'Rate per',C:'100',D:'100',E:'100',F:'100', G:''},
    minimum:{name:'Minimum',C:'50%',D:'50%',E:'50%',F:'50%', G:''}
  },
  {name:'RRL',C:'',D:'7780813',E:'4996312',F:'0', G:''},
  {name:'REL',C:'',D:'189011628',E:'1286435579',F:'1933434', G:''},
  {name:'TEL',C:'',D:'12807414',E:'9033390',F:'253376', G:''}
];  

// Interface of Data Element
export interface ElementData {
  name: string;
  C: string;
  D: string;
  E: string;
  F: string;
}