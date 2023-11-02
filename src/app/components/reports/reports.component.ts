import { Component, ViewChild } from '@angular/core';
import { ChartComponent } from "ng-apexcharts";
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
  ApexTooltip
} from "ng-apexcharts";

export type PolarAreaChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  responsive: ApexResponsive[];
  labels: any;
  stroke: ApexStroke;
  fill: ApexFill;
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
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['../../app.component.css', './reports.component.css']
})
export class ReportsComponent {
  @ViewChild("PolarAreaChart") PolarAreaChart!: ChartComponent;
  public PolarAreaChartOptions: Partial<PolarAreaChartOptions>;

  @ViewChild("BasicColumnChart") BasicColumnChart!: ChartComponent;
  public BasicColumnChartOptions: Partial<BasicColumnChartOptions>;

  constructor() {
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
      series: [14, 23, 21, 17, 15, 10, 12, 17, 21],
      chart: {
        type: "polarArea"
      },
      stroke: {
        colors: ["#fff"]
      },
      fill: {
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
              position: "bottom"
            }
          }
        }
      ]
    };

    this.BasicColumnChartOptions = {
      series: [
        {
          name: "Kişi Ortalaması",
          data: [44, 55, 57, 56, 61, 58, 63, 60, 66, 80]
        },
        {
          name: "Departman Ortalaması",
          data: [76, 85, 101, 98, 87, 105, 91, 114, 94, 55]
        },
        {
          name: "Şirket Ortalaması",
          data: [35, 41, 36, 26, 45, 48, 52, 53, 41, 18]
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
      yaxis: {
        title: {
          text: "$ (thousands)"
        }
      },
      fill: {
        opacity: 1
      },
      tooltip: {
        y: {
          formatter: function(val) {
            return "$ " + val + " thousands";
          }
        }
      }
    };
  }
}
