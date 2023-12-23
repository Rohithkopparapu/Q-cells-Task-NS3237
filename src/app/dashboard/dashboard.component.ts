import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as Highcharts from 'highcharts';
import { HighchartsChartModule } from 'highcharts-angular';
import * as moment from 'moment';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],

})
export class DashboardComponent implements OnInit {

  next7Days: moment.Moment[] = [];
  lineXaxisCat:any[]=[];
  position!:any;
  display=false
  isWeatherDeatilsShow=false;
  constructor() {
    this.generateNext7Days();
  }

  tabs=[
    {title:'Live Status'},
    {title:'Graph'},
    {title:'Profile'}
  ]

  generateNext7Days(): void {
    const today = moment();

    for (let i = 0; i < 7; i++) {
      this.next7Days.push(today.clone().add(i, 'days'));
    }
    
  }
  items = [

    {

      icon: 'pi pi-home',
      routerLink: '/',
    },
    {

      icon: 'pi pi-envelope',
      routerLink: '/messages',
    },
    {

      icon: 'pi pi-cog',
      routerLink: '/settings',
    },
  ];

  showSidebar: boolean = true;
  chartOptions!: any;
  doughnutChart!: any;
  doughnut!: any;
  semiDoughnutChart!: any;
  sidebarVisible() {
    return this.showSidebar
  }

  Highcharts: typeof Highcharts = Highcharts;
  data = [1, 2, 3, 4];


  ChartOptions: Highcharts.Options = {
    series: [{
      type: 'line',
      data: this.data
    },
    ],
  };

  solar = [
    {
      name: 'Percentage',
      colorByPoint: true,
      data: [
        {
          name: 'Solar',
          y: 55,
          color: '#bcbc19eb'
        },
        {
          name: 'Battery',
          y: 40,
          color: '#87d94beb'
        },
        {
          name: 'Grid',
          y: 5,
          color: '#314169eb'
        }
      ]
    }
  ]

  ngOnInit(): void {
    
      
    this.createDougntChart();
    this.createSemiDoughnut();
    this.next7Days.forEach((day)=>{
      let days=day.format(('ddd MMM D'))
      
      this.lineXaxisCat.push(days);
    })
    console.log(this.lineXaxisCat);
   if(this.lineXaxisCat)
   {
    this.createChart();
    
   }
  } 
  chartdata = [
    {
       name:'',
       data: [42,58,25,25,55,9,22],
      color:'#3d97ea'
    },
    
  ]

  createChart() {
    this.chartOptions = {
      chart: {
        type: 'column',
        width: 350,
        height: 300

      },
      title: {
        text: 'Production',
        align: 'left'
      },
      legend:
      {
        enabled: false,

      },
      xAxis: {
        categories:this.lineXaxisCat,
        crosshair: true,
       
      },
      yAxis: {
        min: 0,
        title: {
          text: ''
        },
        labels: {
          formatter: function(this: { value: number }) {
            return this.value + ' Kwh';
          }
        }        
        
      },
      tooltip: {
        valueSuffix: 'Kwh'
      },
      credits:{
        enabled:false
      },
      plotOptions: {
        
        column: {
          // pointPadding: 0.2,
          // borderWidth: 0,
          // pointWidth:10,
         
        },
      
      },
      series:this.chartdata
    };

  }

  createDougntChart() {
    this.doughnutChart = {
      chart: {
        type: 'pie',
        plotShadow: false,
        verticalAlign: 'start',
        floating: true,
        width: 300,
        height: 300,
        marginTop: 50,
        marginBottom: 50,
        marginRight: 20
      },
      legend:
      {
        enabled: true,

      },
      title: {
        text: 'Self-Powered<tspan x=200 dy=0>​</tspan>Summary',
        verticalAlign: 'start',
        style: {
          fontSize: '1.2em',
          fontWeight: 'bold',
          color: 'rgb(51, 51, 51)',
        },

        floating: true,
        x: -70,
        y: 20,
      },
      tooltip: {
        valueSuffix: '%'
      },
      credits:{
        enabled:false
      },
      plotOptions: {
        series: {
          innerSize: '75%',
          allowPointSelect: true,
          cursor: 'pointer',
          borderwidth: 10,
          // marker: {
          //   symbol: 'url(data:image/png;base64,https://www.highcharts.com/samples/graphics/sun.png)'
          // },
          scatter: {
            marker: {
              symbol: 'url(https://cdn-icons-png.flaticon.com/128/11050/11050693.png)',
              width: 40,
              height: 40
            },
            pointPlacement: 'between', // Adjust placement to align with column
            dataLabels: {
              enabled: true,
              
            }
          },
          dataLabels: [{
            enabled: true,
            distance: 0,
            format:'<img src="https://cdn-icons-png.flaticon.com/128/11050/11050693.png" style="width: 30px; height: 30px;background-color:red" />',
          },


            , {
            enabled: false,
            distance: 0,
            format: '{point.percentage:.1f}%',
            style: {
              fontSize: '1.2em',
              textOutline: 'none',
              opacity: 0.7
            }, filter: {
              operator: '>',
              property: 'percentage',
              value: 10
            }
          }]
        }
      },
      series: this.solar

    }
  }

  createSemiDoughnut() {
    this.semiDoughnutChart = {

      chart: {
        plotBackgroundColor: '',
        plotBorderWidth: 0,
        plotShadow: false,
        width: 300,
        height: 300,
        // marginTop: 50,
        // marginBottom: 50,
        marginRight: 20,
        align: 'center'

      },
      title: {
        text: '<span style="font-size: 25px;color:green">8.28</span><span style="font-size: 13px;color:green">kW</span><br>Real-time power',
        align: 'center',
        verticalAlign: 'middle',
        y: 30
      },
      tooltip: {

        pointFormat: '{series.name}: <b>{point.y}</b> kW'

      },
      credits:{
        enabled:false
      },
      accessibility: {
        point: {
          valueSuffix: 'kW'
        }
      },
      plotOptions: {
        series: {
          innerSize: '75%',
          allowPointSelect: true,
          cursor: 'pointer',
          borderwidth: 10,
          dataLabels: {
            enabled: false,
            distance: 0,

            style: {
              fontWeight: 'bold',
              color: 'white'
            }
          },
          startAngle: -90,
          endAngle: 90,
          center: ['50%', '70%'],
          size: '90%'
        }
      },
      series: [
        {
          type: 'pie',
          data: [
            { name: 'first', y: 70, color: 'rgb(47 103 47)' },
            { name: 'Edge', y: 35, color: 'rgb(39 34 34)' }

          ]
        }
      ]
    }

  }


 
  
}

