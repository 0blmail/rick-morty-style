import { FrameHeader } from './FrameHeader';

export interface Frame<T> {
  info: FrameHeader;
  results: T[];
}
