import { createRoutine, promisifyRoutine } from 'redux-saga-routines';
import NAME_SPACE from '../../../constants/nama-space/index';

// overtime tips if it exceeds retry times
// trigger this action by axios

export const setRetryTip = createRoutine(`${NAME_SPACE.COMMON}`);
