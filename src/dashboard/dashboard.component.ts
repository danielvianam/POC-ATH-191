import { Component } from '@angular/core';

interface CustomPoint extends Highcharts.PointOptionsObject {
  description?: string;
}

@Component({
  selector: 'dashboard',
  styleUrls: ['./dashboard.component.scss'],
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent {
  uniqueLoginsOptions: Highcharts.Options = {
    chart: {
      type: 'pie',
    },
    colors: ['#413476', '#5A97DB', '#E46E6A', '#E6CA61'],
    series: this.uniqueLoginsSeries,
    credits: {
      enabled: false,
    },
    plotOptions: {
      pie: {
        startAngle: -90,
        endAngle: 90,
        showInLegend: true,
        center: ['50%', '75%'],
        size: '110%',
        dataLabels: {
          enabled: true,
          distance: -50,
          style: {
            fontWeight: 'bold',
            color: 'white',
          },
        },
      },
    },
  };

  uniqueLoginsBySitesOptions: Highcharts.Options = {
    chart: {
      type: 'bar',
    },
    colors: ['#413476', '#5A97DB', '#E46E6A', '#E6CA61'],
    series: this.uniqueLoginsBySitesSeries,
    credits: {
      enabled: false,
    },
    plotOptions: {
      series: {
        stacking: 'normal',
      }
    },
    yAxis: {
      reversedStacks: false
    },
  };

  uniqueLoginsOverTimeOptions: Highcharts.Options = {
    chart: {
      type: 'line',
    },
    colors: ['#413476', '#E46E6A', '#5A97DB', '#E6CA61'],
    series: this.uniqueLoginsOverTimeSeries,
    credits: {
      enabled: false,
    },
    xAxis: {
      type: 'datetime',
      labels: {
        format: "{value:%m/%d/%Y}",
      }
    },
    legend: {
      symbolWidth: 40,
    }
  };

  assessmentOverTimeOptions: Highcharts.Options = {
    chart: {
      type: 'column',
    },
    colors: ['#5A97DB', '#413476'],
    series: this.assessmentOverTimeSeries,
    credits: {
      enabled: false,
    },
    plotOptions: {
    },
    yAxis: {
      reversedStacks: false
    },
    xAxis: {
      type: 'datetime',
      labels: {
        format: "{value:%m/%d/%Y}",
      }
    }
  };

  assessmentOverTimeByTypeOtions: Highcharts.Options = {
    chart: {
      type: 'column',
    },
    colors: ['#5A97DB', '#E46E6A', '#413476'],
    series: this.assessmentsByTypeSeries,
    credits: {
      enabled: false,
    },
    plotOptions: {
      series: {
        stacking: 'normal'
      }
    },
    yAxis: {
      reversedStacks: true
    },
    xAxis: {
      type: 'datetime',
      labels: {
        format: "{value:%m/%d/%Y}",
      }
    }
  };

  mostAssessedStandardsOptions: Highcharts.Options = {
    chart: {
      type: 'packedbubble',
      height: '500px',
    },
    legend: {
      enabled: false,
    },
    plotOptions: {
      packedbubble: {
        minSize: '30%',
        maxSize: '120%',
        layoutAlgorithm: {
          gravitationalConstant: 0.02,
          seriesInteraction: false,
          dragBetweenSeries: true,
          parentNodeLimit: true,
        },
        dataLabels: {
          enabled: true,
          useHTML: true,
          format: '{point.name}',
          filter: {
            property: 'y',
            operator: '>',
            value: 250
          },
          // formatter: function () {
          //   const maxCharactersPerLine = 10; // Defina o número máximo de caracteres por linha
          //   const words = this.point.name.split(' ');
          //   let lines = [];
          //   let currentLine = '';
  
          //   words.forEach(word => {
          //     if (currentLine.length + word.length <= maxCharactersPerLine) {
          //       currentLine += (currentLine === '' ? '' : ' ') + word;
          //     } else {
          //       lines.push(currentLine);
          //       currentLine = word;
          //     }
          //   });
  
          //   lines.push(currentLine);
          //   return lines.join('<br>');
          // },
          style: {
            color: 'black',
            textOutline: 'none',
            fontWeight: 'normal',
            textOverflow: 'ellipsis',
            textAlign: 'justify',
          },
        }
      }
    },
    tooltip: {
      formatter: function() {
        const custom = this.point as CustomPoint;
        return `
          ${custom.name}
          <br/>
          ${custom.description}
          <br/>
          ${custom.y}
        `
      }
    },
    series: this.mostAssessedStandardsSeries,
  };

  standardsOverTimeOptions: Highcharts.Options = {
    chart: {
      type: 'line',
    },
    colors: ['#413476'],
    series: this.standardsOverTimeSeries,
    credits: {
      enabled: false,
    },
    // yAxis: {
    //   reversedStacks: true
    // },
    xAxis: {
      type: 'datetime',
      labels: {
        format: "{value:%m/%d/%Y}",
      }
    }
  };

  plansRecentlyAddedStudentsOptions: Highcharts.Options = {
    chart: {
      type: 'column',
    },
    colors: ['#413476', '#5A97DB', '#E46E6A', '#E6CA61'],
    series: this.plansRecentlyAddedStudentsSeries,
    credits: {
      enabled: false,
    },
    legend: {
      enabled: false,
    },
    xAxis: {
      type: 'category',
      labels: {
        formatter: function () {
          return this.value + '';
        }
      },
    },
  };

  plansOverTimeOptions: Highcharts.Options = {
    chart: {
      type: 'line',
    },
    colors: ['#413476'],
    series: this.plansOverTimeSeries,
    credits: {
      enabled: false,
    },
    xAxis: {
      type: 'datetime',
      labels: {
        format: "{value:%m/%d/%Y}",
      }
    }
  };

  studentsExitedPlansOptions: Highcharts.Options = {
    chart: {
      type: 'line',
    },
    colors: ['#413476', '#5A97DB', '#E46E6A', '#E6CA61'],
    series: this.studentsExitedPlansSeries,
    credits: {
      enabled: false,
    },
    xAxis: {
      type: 'datetime',
      labels: {
        format: "{value:%m/%d/%Y}",
      }
    }
  };

  get uniqueLoginsSeries(): Highcharts.SeriesOptionsType[] {
    return [
      {
        type: 'pie',
        innerSize: '50%',
        data: [
          {
            name: 'Admin',
            y: 2054,
          },
          {
            name: 'Student',
            y: 5000,
          },
          {
            name: 'Teacher',
            y: 4000,
          },
          {
            name: 'Family',
            y: 200,
          },
        ],
      },
    ];
  }

  get uniqueLoginsBySitesSeries(): Highcharts.SeriesOptionsType[] {
    return [
      {
        type: 'bar',
        name: 'Admin',
        data: [
          {
            name: 'Wayside High School',
            y: 2054,
          },
          {
            name: 'Kennedy Middle School',
            y: 5000,
          },
          {
            name: 'Jefferson Elementary',
            y: 4000,
          },
        ],
      },
      {
        type: 'bar',
        name: 'Student',
        data: [
          {
            name: 'Wayside High School',
            y: 2054,
          },
          {
            name: 'Kennedy Middle School',
            y: 5000,
          },
          {
            name: 'Jefferson Elementary',
            y: 4000,
          },
        ],
      },
      {
        type: 'bar',
        name: 'Teacher',
        data: [
          {
            name: 'Wayside High School',
            y: 2054,
          },
          {
            name: 'Kennedy Middle School',
            y: 5000,
          },
          {
            name: 'Jefferson Elementary',
            y: 4000,
          },
        ],
      },
      {
        type: 'bar',
        name: 'Family',
        data: [
          {
            name: 'Wayside High School',
            y: 2054,
          },
          {
            name: 'Kennedy Middle School',
            y: 5000,
          },
          {
            name: 'Jefferson Elementary',
            y: 4000,
          },
        ],
      },
    ];
  }

  get uniqueLoginsOverTimeSeries(): Highcharts.SeriesOptionsType[] {
    return [
      {
        name: 'Admin',
        type: 'line',
        dashStyle: 'Solid',
        marker: {
          symbol: 'circle',
        },
        data: [
          {
            y: 120,
            x: new Date('2023-01-01 GMT-03:00').getTime(),
          },
          {
            y: 490,
            x: new Date('2023-01-02 GMT-03:00').getTime(),
          },
          {
            y: 810,
            x: new Date('2023-01-03 GMT-03:00').getTime(),
          },
          {
            y: 993,
            x: new Date('2023-01-04 GMT-03:00').getTime(),
          },
        ],
      },
      {
        name: 'Teacher',
        type: 'line',
        dashStyle: 'ShortDash',
        marker: {
          symbol: 'square',
        },
        data: [
          {
            y: 400,
            x: new Date('2023-01-01 GMT-03:00').getTime(),
          },
          {
            y: 590,
            x: new Date('2023-01-02 GMT-03:00').getTime(),
          },
          {
            y: 500,
            x: new Date('2023-01-03 GMT-03:00').getTime(),
          },
          {
            y: 790,
            x: new Date('2023-01-04 GMT-03:00').getTime(),
          },
        ],
      },
      {
        name: 'Student',
        type: 'line',
        dashStyle: 'ShortDot',
        marker: {
          symbol: 'square',
        },
        data: [
          {
            y: 650,
            x: new Date('2023-01-01 GMT-03:00').getTime(),
          },
          {
            y: 390,
            x: new Date('2023-01-02 GMT-03:00').getTime(),
          },
          {
            y: 500,
            x: new Date('2023-01-03 GMT-03:00').getTime(),
          },
          {
            y: 780,
            x: new Date('2023-01-04 GMT-03:00').getTime(),
          },
        ],
      },
      {
        name: 'Family',
        type: 'line',
        dashStyle: 'ShortDashDot',
        marker: {
          symbol: 'square',
        },
        data: [
          {
            y: 100,
            x: new Date('2023-01-01 GMT-03:00').getTime(),
          },
          {
            y: 200,
            x: new Date('2023-01-02 GMT-03:00').getTime(),
          },
          {
            y: 100,
            x: new Date('2023-01-03 GMT-03:00').getTime(),
          },
          {
            y: 100,
            x: new Date('2023-01-04 GMT-03:00').getTime(),
          },
        ],
      },
    ];
  }

  get assessmentOverTimeSeries(): Highcharts.SeriesOptionsType[] {
    return [
      {
        type: 'column',
        name: 'Assigned Assessments',
        data: [
          {
            y: 130,
            x: new Date('2023-01-02 GMT-03:00').getTime(),
          },
          {
            y: 50,
            x: new Date('2023-04-02 GMT-03:00').getTime(),
          },
          {
            y: 160,
            x: new Date('2023-02-02 GMT-03:00').getTime(),
          },
          {
            y: 350,
            x: new Date('2023-03-02 GMT-03:00').getTime(),
          },
          {
            y: 120,
            x: new Date('2023-05-02 GMT-03:00').getTime(),
          },
          {
            y: 20,
            x: new Date('2023-06-02 GMT-03:00').getTime(),
          },
          {
            y: 10,
            x: new Date('2023-07-02 GMT-03:00').getTime(),
          },
        ],
      },
      {
        type: 'column',
        name: 'Graded Assessments',
        data: [
          {
            y: 310,
            x: new Date('2023-01-02 GMT-03:00').getTime(),
          },
          {
            y: 360,
            x: new Date('2023-02-01 GMT-03:00').getTime(),
          },
          {
            y: 15,
            x: new Date('2023-03-01 GMT-03:00').getTime(),
          },
          {
            y: 50,
            x: new Date('2023-04-01 GMT-03:00').getTime(),
          },
          {
            y: 100,
            x: new Date('2023-05-01 GMT-03:00').getTime(),
          },
          {
            y: 125,
            x: new Date('2023-06-01 GMT-03:00').getTime(),
          },
          {
            y: 5,
            x: new Date('2023-08-01 GMT-03:00').getTime(),
          },
  
        ],
      },
    ];
  }

  get assessmentsByTypeSeries(): Highcharts.SeriesOptionsType[] {
    return  [
      {
        type: 'column',
        name: 'Advanced Assessments',
        data: [
          {
            y: 310,
            x: new Date('2023-01-02 GMT-03:00').getTime(),
          },
          {
            y: 360,
            x: new Date('2023-02-02 GMT-03:00').getTime(),
          },
          {
            y: 15,
            x: new Date('2023-03-01 GMT-03:00').getTime(),
          },
          {
            y: 50,
            x: new Date('2023-04-01 GMT-03:00').getTime(),
          },
          {
            y: 100,
            x: new Date('2023-05-01 GMT-03:00').getTime(),
          },
          {
            y: 125,
            x: new Date('2023-06-01 GMT-03:00').getTime(),
          },
          {
            y: 5,
            x: new Date('2023-08-01 GMT-03:00').getTime(),
          },
  
        ],
      },
      {
        type: 'column',
        name: 'Rubric Assessments',
        data: [
          {
            y: 130,
            x: new Date('2023-01-02 GMT-03:00').getTime(),
          },
          {
            y: 50,
            x: new Date('2023-04-01 GMT-03:00').getTime(),
          },
          {
            y: 160,
            x: new Date('2023-02-02 GMT-03:00').getTime(),
          },
          {
            y: 350,
            x: new Date('2023-03-01 GMT-03:00').getTime(),
          },
          {
            y: 120,
            x: new Date('2023-05-01 GMT-03:00').getTime(),
          },
          {
            y: 20,
            x: new Date('2023-06-01 GMT-03:00').getTime(),
          },
          {
            y: 10,
            x: new Date('2023-07-01 GMT-03:00').getTime(),
          },
        ],
      },
      {
        type: 'column',
        name: 'Simple Assessments',
        data: [
          {
            y: 310,
            x: new Date('2023-01-02 GMT-03:00').getTime(),
          },
          {
            y: 360,
            x: new Date('2023-02-02 GMT-03:00').getTime(),
          },
          {
            y: 15,
            x: new Date('2023-03-01 GMT-03:00').getTime(),
          },
          {
            y: 50,
            x: new Date('2023-04-01 GMT-03:00').getTime(),
          },
          {
            y: 100,
            x: new Date('2023-05-01 GMT-03:00').getTime(),
          },
          {
            y: 125,
            x: new Date('2023-06-01 GMT-03:00').getTime(),
          },
          {
            y: 5,
            x: new Date('2023-08-01 GMT-03:00').getTime(),
          },
  
        ],
      },
    ];
  }

  get mostAssessedStandardsSeries(): Highcharts.SeriesOptionsType[] {
    return [
      {
        type: 'packedbubble',
        name: 'Standards',
        data: [
          {
            name: 'Range of Reading and Level of Text Complexity',
            value: 800,
            description: "Standard Description",
          },
          {
            name: 'Dok-1',
            value: 300
          },
          {
            name: 'DOK-2',
            value: 350
          },
          {
            name: 'DOK-3',
            value: 400
          },
          {
            name: 'DOK-4',
            value: 250
          },
          {
            name: 'CCSS.ELA-Literacy.RL.7.10',
            value: 700
          },
          {
            name: 'R.L.7.2',
            value: 300
          },
          {
            name: 'Collaboration with Classmates',
            value: 500
          },
          {
            name: '',
            value: 222
          },
          {
            name: '',
            value: 150
          },
          {
            name: '',
            value: 415.4
          },
          {
            name: '',
            value: 353.2
          },
          {
            name: '',
            value: 337.6
          },
          {
            name: '',
            value: 71.1
          },
          {
            name: '',
            value: 69.8
          },
          {
            name: '',
            value: 67.7
          },
          {
            name: '',
            value: 59.3
          },
          {
            name: '',
            value: 54.8
          },
          {
            name: '',
            value: 51.2
          },
          {
            name: '',
            value: 48.3
          },
          {
            name: '',
            value: 44.4
          },
          {
            name: '',
            value: 44.3
          },
          {
            name: '',
            value: 43.7
          },
          {
            name: '',
            value: 40.2
          },
          {
            name: '',
            value: 40
          },
          {
            name: '',
            value: 34.7
          },
          {
            name: '',
            value: 34.6
          },
          {
            name: '',
            value: 20.7
          },
          {
            name: '',
            value: 19.4
          },
          {
            name: '',
            value: 16.7
          },
          {
            name: '',
            value: 12.3
          },
          {
            name: '',
            value: 10.4
          },
          {
            name: '',
            value: 9.5
          },
          {
            name: '',
            value: 7.8
          },
          {
            name: '',
            value: 7.5
          },
          {
            name: '',
            value: 7.2
          }
        ]
      }
    ]
  }

  get standardsOverTimeSeries(): Highcharts.SeriesOptionsType[] {
    return [
      {
        name: '',
        type: 'line',
        marker: {
          symbol: 'square',
        },
        data: [
          {
            y: 180,
            x: new Date('2023-01-01 GMT-03:00').getTime(),
          },
          {
            y: 160,
            x: new Date('2023-01-02 GMT-03:00').getTime(),
          },
          {
            y: 124,
            x: new Date('2023-01-03 GMT-03:00').getTime(),
          },
          {
            y: 153,
            x: new Date('2023-01-04 GMT-03:00').getTime(),
          },
          {
            y: 122,
            x: new Date('2023-01-05 GMT-03:00').getTime(),
          },
          {
            y: 133,
            x: new Date('2023-01-06 GMT-03:00').getTime(),
          },
          {
            y: 119,
            x: new Date('2023-01-07 GMT-03:00').getTime(),
          },
        ],
      },
    ];
  }
  
  get plansRecentlyAddedStudentsSeries(): Highcharts.SeriesOptionsType[] {
    return [
      {
        name: 'Positive Supports',
        type: 'column',
        data: [
          {
            name: 'Positive Supports',
            y: 330,
          },
        ],
      },
      {
        name: 'Increase On-Task',
        type: 'column',
        data: [
          {
            name: 'Increase On-Task',
            y: 240,
          },
        ],
      },
      {
        name: 'Pathway to Graduation',
        type: 'column',
        data: [
          {
            name: 'Pathway to Graduation',
            y: 460,
          },
        ],
      },
      {
        name: 'State Reading',
        type: 'column',
        data: [
          {
            name: 'State Reading',
            y: 45,
          },
        ],
      },
    ];
  }

  get plansOverTimeSeries(): Highcharts.SeriesOptionsType[] {
    return [
      {
        name: '',
        type: 'line',
        marker: {
          symbol: 'square',
        },
        data: [
          {
            y: 180,
            x: new Date('2023-01-01 GMT-03:00').getTime(),
          },
          {
            y: 160,
            x: new Date('2023-01-02 GMT-03:00').getTime(),
          },
          {
            y: 124,
            x: new Date('2023-01-03 GMT-03:00').getTime(),
          },
          {
            y: 153,
            x: new Date('2023-01-04 GMT-03:00').getTime(),
          },
          {
            y: 122,
            x: new Date('2023-01-05 GMT-03:00').getTime(),
          },
          {
            y: 133,
            x: new Date('2023-01-06 GMT-03:00').getTime(),
          },
          {
            y: 119,
            x: new Date('2023-01-07 GMT-03:00').getTime(),
          },
        ],
      },
    ];
  }

  get studentsExitedPlansSeries(): Highcharts.SeriesOptionsType[] {
    return [
      {
        name: 'Removed',
        type: 'line',
        marker: {
          symbol: 'square',
        },
        data: [
          {
            y: 180,
            x: new Date('2023-01-01 GMT-03:00').getTime(),
          },
          {
            y: 160,
            x: new Date('2023-01-02 GMT-03:00').getTime(),
          },
          {
            y: 124,
            x: new Date('2023-01-03 GMT-03:00').getTime(),
          },
          {
            y: 153,
            x: new Date('2023-01-04 GMT-03:00').getTime(),
          },
          {
            y: 122,
            x: new Date('2023-01-05 GMT-03:00').getTime(),
          },
          {
            y: 133,
            x: new Date('2023-01-06 GMT-03:00').getTime(),
          },
          {
            y: 119,
            x: new Date('2023-01-07 GMT-03:00').getTime(),
          },
        ],
      },
      {
        name: 'Completed',
        type: 'line',
        dashStyle: 'ShortDot',
        marker: {
          symbol: 'square',
        },
        data: [
          {
            y: 300,
            x: new Date('2023-01-01 GMT-03:00').getTime(),
          },
          {
            y: 100,
            x: new Date('2023-01-02 GMT-03:00').getTime(),
          },
          {
            y: 150,
            x: new Date('2023-01-03 GMT-03:00').getTime(),
          },
          {
            y: 200,
            x: new Date('2023-01-04 GMT-03:00').getTime(),
          },
          {
            y: 110,
            x: new Date('2023-01-05 GMT-03:00').getTime(),
          },
          {
            y: 133,
            x: new Date('2023-01-06 GMT-03:00').getTime(),
          },
          {
            y: 131,
            x: new Date('2023-01-07 GMT-03:00').getTime(),
          },
        ],
      },
    ];
  }
}
