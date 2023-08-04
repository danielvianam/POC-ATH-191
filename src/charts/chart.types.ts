export interface HighchartsSeries {
  name?: string;
  type?: string;
  data?: HighchartsSeriesData[];
}

export interface HighchartsSeriesData {
  name?: string;
  y?: number;
  color?: string;
}
