import { cdate } from 'cdate';

export function today(): string {
  return cdate().format('YYYY-MM-DD');
}
