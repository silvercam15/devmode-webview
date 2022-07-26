export default interface Span {
  data: any;
  name: string;
  span_id: string;
  trace_id: string;
  parent_id: string;
  start_time: number;
  end_time: number;
  attributes: object | null;
  resource_attributes: object | null;
}
