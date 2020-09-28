/**
 *
 * Asynchronously loads the component for DashBoardd
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
