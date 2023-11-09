import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { ChartComponent } from "ng-apexcharts";

import { FileUploadFunction } from "../../functions/file-upload.function";
import { PersonFunction } from "../../functions/person.function";

import { FileUploadModel } from "../../models/file-upload.model";
import { PersonModel } from "../../models/person.model";
import { Person10Model } from "../../models/person-10.model";

import {
  ApexNonAxisChartSeries,
  ApexResponsive,
  ApexChart,
  ApexStroke,
  ApexFill,
  ApexAxisChartSeries,
  ApexDataLabels,
  ApexPlotOptions,
  ApexYAxis,
  ApexLegend,
  ApexXAxis,
  ApexTooltip,
  ApexTitleSubtitle,
} from "ng-apexcharts";

export type PolarAreaChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  responsive: ApexResponsive[];
  labels: any;
  stroke: ApexStroke;
  fill: ApexFill;
  dataLabels: ApexDataLabels;
  title: ApexTitleSubtitle;
  colors: string[];
};

export type BasicColumnChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  yaxis: ApexYAxis;
  xaxis: ApexXAxis;
  fill: ApexFill;
  tooltip: ApexTooltip;
  stroke: ApexStroke;
  legend: ApexLegend;
};

@Component({
  selector: 'app-chart-department',
  templateUrl: './chart-department.component.html',
  styleUrls: ['../../app.component.css', './chart-department.component.css']
})
export class ChartDepartmentComponent implements OnInit {
  isLoading: boolean = false;
  fileList: FileUploadModel[] = [];
  personList: PersonModel[] = [];
  companyFilteredPersonList: PersonModel[] = [];
  departmentFilteredPersonList: PersonModel[] = [];
  filteredPersonList: PersonModel[] = [];
  groupByDepartmentPersonList: any[] = [];

  @Input() companySelectionId: string | null = null;
  @Input() departmentSelection: string | null = null;

  @Input() departmentEvaluation: string = "";

  @ViewChild("PolarAreaChart") PolarAreaChart!: ChartComponent;
  public PolarAreaChartOptions!: Partial<PolarAreaChartOptions>;
  @ViewChild("BasicColumnChart") BasicColumnChart!: ChartComponent;
  public BasicColumnChartOptions!: Partial<BasicColumnChartOptions>;

  constructor(
    private _FileUploadFunction: FileUploadFunction,
    private _PersonFunction: PersonFunction
  ) {
    this.PolarAreaChartOptions = {
      labels: [
        "Yönetim",
        "Dikkat ve Sürdürebilme",
        "Etkin İletişim",
        "İş Disiplini",
        "Adaptasyon",
        "Kariyer Gelişimi",
        "Öz Yönetim",
        "Problem Çözme",
        "Yabancı Dil Kullanma",
        "Okuma Anlama"
      ],
      colors: ["#F0B67F", "#FE5F55", "#D6D1B1", "#C7EFCF", "#EEF5DB", "#7B4B94", "#7D82B8", "#B7E3CC", "#C4FFB2", "#D6F7A3"],
      series: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      chart: {
        type: "polarArea",

      },
      stroke: {
        colors: ["#fff"]
      },
      fill: {
        colors: ["#F0B67F", "#FE5F55", "#D6D1B1", "#C7EFCF", "#EEF5DB", "#7B4B94", "#7D82B8", "#B7E3CC", "#C4FFB2", "#D6F7A3"],
        opacity: 0.8
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: "bottom",

            }
          }
        }
      ]
    };

    this.BasicColumnChartOptions = {
      series: [
        {
          name: "Şirket Ortalaması",
          data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        },
        {
          name: "Departman Ortalaması",
          data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        }
      ],
      chart: {
        type: "bar",
        height: 350
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "55%",

        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        show: true,
        width: 2,
        colors: ["transparent"]
      },
      xaxis: {
        categories: [
          "Yönetim",
          "Dikkat ve Sürdürebilme",
          "Etkin İletişim",
          "İş Disiplini",
          "Adaptasyon",
          "Kariyer Gelişimi",
          "Öz Yönetim",
          "Problem Çözme",
          "Yabancı Dil Kullanma",
          "Okuma Anlama"
        ]
      },

      fill: {
        opacity: 1
      },

    };
  }

  ngOnInit(): void {
    this.fileList = this._FileUploadFunction.getFileList();
    this.personList = this._PersonFunction.getPersonList();

    if (this.personList.length > 0) {
      this.companyFilter();
      this.groupByDepartmentPersonList = this.groupByToDepartment(this.companyFilteredPersonList);
      this.departmentSelection = this.groupByDepartmentPersonList[0].department;
      this.departmentFilter();
      this.buildCharts();
    }
  }

  buildCharts() {
    this.isLoading = true;
    setTimeout(() => {
      this.PolarAreaChartOptions.series = this.getMeanPerson10Result(this.departmentFilteredPersonList);
      this.BasicColumnChartOptions.series![0].data = this.getMeanPerson10Result(this.companyFilteredPersonList);
      this.BasicColumnChartOptions.series![1].data = this.getMeanPerson10Result(this.departmentFilteredPersonList);

      this.isLoading = false;
    }, 0);
  }

  companyFilter() {
    var _companyFilteredPersonList: PersonModel[] = [];
    if (this.companySelectionId) {
      _companyFilteredPersonList = this.personList.filter(p => p.fileId == this.companySelectionId);
    } else {
      _companyFilteredPersonList = this.personList;
    }

    this.companyFilteredPersonList = _companyFilteredPersonList;

  }

  departmentFilter() {
    var _departmentFilteredPersonList: PersonModel[] = [];
    if (this.departmentSelection) {
      _departmentFilteredPersonList = this.personList.filter(p => p.department == this.departmentSelection);
    } else {
      _departmentFilteredPersonList = this.companyFilteredPersonList;
    }

    this.departmentFilteredPersonList = _departmentFilteredPersonList;

  }

  groupByToDepartment(personList: PersonModel[]): any[] {
    this.groupByDepartmentPersonList = [];
    const groupBy = (prop: string) => (data: any[]) => {
      return data.reduce((dict, item) => {
        const { [prop]: _, ...rest } = item;
        dict[item[prop]] = [...(dict[item[prop]] || []), rest];
        return dict;
      }, {});
    };

    const _groupByToDepartment = Object.entries(groupBy('department')(personList))
      .map(([key, value]) => ({ department: key, personList: value }));

    return _groupByToDepartment;
  }

  onCompanyChange() {
    this.companyFilter();
    this.groupByDepartmentPersonList = this.groupByToDepartment(this.companyFilteredPersonList);
    this.departmentSelection = this.groupByDepartmentPersonList[0].department;
    this.departmentFilter();
    this.buildCharts();
  }

  onDepartmentChange() {
    this.departmentFilter();
    this.buildCharts();
  }

  printCompanyName(fileId: string): string {
    let companyName = "";
    if (fileId) {
      companyName = this.fileList.find(f => f.id == fileId)!.companyName;
    }
    return companyName;
  }

  getMeanPerson10Result(personList: any[]): number[] {
    const Person10ModelSum: Person10Model = <Person10Model>{};
    const Person10MeanArray: number[] = [];

    Person10ModelSum.yonetim = 0;
    Person10ModelSum.dikkatVeSurdurebilme = 0;
    Person10ModelSum.etkinIletisim = 0;
    Person10ModelSum.isDisiplini = 0;
    Person10ModelSum.adaptasyon = 0;
    Person10ModelSum.kariyerGelisimi = 0;
    Person10ModelSum.ozYonetim = 0;
    Person10ModelSum.problemCozme = 0;
    Person10ModelSum.yabanciDilKullanma = 0;
    Person10ModelSum.okumaAnlama = 0;

    for (let i = 0; i < personList.length; i++) {
      const result = personList[i].person10Result;

      Person10ModelSum.yonetim += result.yonetim;
      Person10ModelSum.dikkatVeSurdurebilme += result.dikkatVeSurdurebilme;
      Person10ModelSum.etkinIletisim += result.etkinIletisim;
      Person10ModelSum.isDisiplini += result.isDisiplini;
      Person10ModelSum.adaptasyon += result.adaptasyon;
      Person10ModelSum.kariyerGelisimi += result.kariyerGelisimi;
      Person10ModelSum.ozYonetim += result.ozYonetim;
      Person10ModelSum.problemCozme += result.problemCozme;
      Person10ModelSum.yabanciDilKullanma += result.yabanciDilKullanma;
      Person10ModelSum.okumaAnlama += result.okumaAnlama;
    }
    Person10MeanArray.push( Number((Person10ModelSum.yonetim / personList.length).toFixed(0)) );
    Person10MeanArray.push( Number((Person10ModelSum.dikkatVeSurdurebilme / personList.length).toFixed(0)) );
    Person10MeanArray.push( Number((Person10ModelSum.etkinIletisim / personList.length).toFixed(0)) );
    Person10MeanArray.push( Number((Person10ModelSum.isDisiplini / personList.length).toFixed(0)) );
    Person10MeanArray.push( Number((Person10ModelSum.adaptasyon / personList.length).toFixed(0)) );
    Person10MeanArray.push( Number((Person10ModelSum.kariyerGelisimi / personList.length).toFixed(0)) );
    Person10MeanArray.push( Number((Person10ModelSum.ozYonetim / personList.length).toFixed(0)) );
    Person10MeanArray.push( Number((Person10ModelSum.problemCozme / personList.length).toFixed(0)) );
    Person10MeanArray.push( Number((Person10ModelSum.yabanciDilKullanma / personList.length).toFixed(0)) );
    Person10MeanArray.push( Number((Person10ModelSum.okumaAnlama / personList.length).toFixed(0)) );


    return Person10MeanArray;
  }

  printPage(){
    let popupWin;
    const polarAreaChartDepartment = document.getElementById("polarAreaChartDepartment")!.innerHTML;
    const basicColumnChartDepartment = document.getElementById("basicColumnChartDepartment")!.innerHTML;
		popupWin = window.open('', '_blank', 'top=0,left=0,height=100%,width=auto');
		if(popupWin){
			popupWin.document.open();
			popupWin.document.write(`
				<!doctype html>
        <html lang="en">
					<head>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
						<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous"></script>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1">
            <title>Ceviz Bilgeliği</title>
						<style type="text/css">
              p, th, td {
                font-family: "Arial";
              }

              th {
                padding-right: 0.5rem;
              }

              .padding-main-divcls{
                padding: 5px;
              }

              .text-center{
                text-align: center
              }

              .width-full{
                width: 100%;
              }

              .box{
                  border-style: solid;
                  border-width: 1px;
                  width: 65px;
                  height: 100px;
                  float: right;
                  margin-right: 50px;
                  font-size: 10px;
                  padding: 5px;
              }
              .box-divcls{
                width: 100%;
                display: inline-block;
              }

              .apexcharts-ycrosshairs, .apexcharts-toolbar, .apexcharts-tooltip {
                display: none;
              }
            </style>
            <body onload="window.print();window.close()">


              <div class="table table-borderless">
                <table>
                  <tr>
                    <th>Şirket</th>
                    <td>${this.printCompanyName(this.companySelectionId!)}</td>
                  </tr>

                  <tr>
                    <th>Departman</th>
                    <td>${this.departmentSelection}</td>
                  </tr>
                </table>
              </div>

              <div class"row">
                <div class="col-2">
                  ${polarAreaChartDepartment}
                  ${basicColumnChartDepartment}
                </div>

                <div class="col-2">

                </div>
              </div>

              <br><br>

              <div>
                <h4>Değerlendirme</h4>
                <p>${this.departmentEvaluation}</p>
              </div

              <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous"></script>
              <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js" integrity="sha384-I7E8VVD/ismYTF4hNIPjVp/Zjvgyol6VFvRkX/vR+Vc4jQkC+hVqc2pM8ODewa9r" crossorigin="anonymous"></script>
              <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.min.js" integrity="sha384-BBtl+eGJRgqQAUMxJ7pMwbEyER4l1g+O15P+16Ep7Q9Q+zqX6gSbd85u4mG4QzX+" crossorigin="anonymous"></script>

            </body>
          </head>
        </html>
      `);
      popupWin.document.close();
    }

  }

}
