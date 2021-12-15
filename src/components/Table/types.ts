import AddBox from '@material-ui/icons/AddBox';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import { ICarsData } from '../../fixtures/types';

export interface IActionProps {
  icon: typeof AddBox | typeof DeleteOutline,
  tooltip: string,
  onClick: (arg0: any, arg1: ICarsData | undefined) => void
  isFreeAction?: true,
}