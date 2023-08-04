import { Component, ElementRef, Input, OnChanges, SimpleChanges, ViewChild } from '@angular/core';
import * as Highcharts from 'highcharts';
import more from 'highcharts/highcharts-more';
more(Highcharts);

@Component({
  selector: 'chart',
  template: `<div #chartContainer></div>`,
})
export class ChartComponent implements OnChanges {
  @ViewChild('chartContainer', { read: ElementRef, static: true })
  chartContainerRef: ElementRef;

  @Input() chartOptions: Highcharts.Options;

  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.chartOptions 
      && JSON.stringify(changes.chartOptions.currentValue) !== JSON.stringify(changes.chartOptions.previousValue)) {
        Highcharts.chart(this.chartContainerRef.nativeElement, this.chartOptions);
    }
  }
}
