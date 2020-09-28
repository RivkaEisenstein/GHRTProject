/*
 * Dashboard Messages
 *
 * This contains all the text for the Dashboard component.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.components.Dashboard';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'This is the Dashboard component!',
  },
});
