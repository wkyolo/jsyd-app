import { Component, OnInit } from '@angular/core';
import { Ysjbxx } from './ysjbxx';

@Component({
  selector: 'app-ysjbxx',
  templateUrl: './ysjbxx.component.html',
  styleUrls: ['./ysjbxx.component.css']
})
export class YsjbxxComponent implements OnInit {

  ysjbxxes: Ysjbxx[] = [
    {
      'xmguid': '330603171712059000001',
      'xmmc': '哥谭市预审项目一',
      'xsdm': '330621',
      'zblx': 'A',
      'sqdw': '申请单位一',
      'sqrq': '2018-06-28',
      'xmbh': 'Y2016-000150',
      'xmzmj': 20.11,
      'nydmj': 10.12,
      'gdmj': 5.01,
      'bjkzt': 0
    },
    {
      'xmguid': '330603171712059000002',
      'xmmc': '纽约市预审项目二',
      'xsdm': '330622',
      'zblx': 'B',
      'sqdw': '申请单位二',
      'sqrq': '2018-06-29',
      'xmbh': 'Y2016-000151',
      'xmzmj': 20.11,
      'nydmj': 12.23,
      'gdmj': 6.08,
      'bjkzt': 0
    },
    {
      'xmguid': '330603171712059000003',
      'xmmc': '底特律预审项目三',
      'xsdm': '330623',
      'zblx': 'C',
      'sqdw': '申请单位三',
      'sqrq': '2018-06-30',
      'xmbh': 'Y2016-000152',
      'xmzmj': 30.67,
      'nydmj': 15.98,
      'gdmj': 4.23,
      'bjkzt': 0
    }];

  constructor() { }

  ngOnInit() {
  }

}
