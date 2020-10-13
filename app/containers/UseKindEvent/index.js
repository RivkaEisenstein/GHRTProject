/**
 *
 * UseKindEvent
 *
 */


import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import saga from './saga';

const KINDES ={allKinds:'allkinds', meeting:'meeting',wedding:'weeding',birthday:'birthday'};

export function useKindEvent(kind) {
  useInjectSaga({ key: 'useKindEvent', saga });
  if (kind === KINDES.wedding)
    return "#A9A9A9";
  if (kind === KINDES.meeting)
    return "#808080"
  if (kind === KINDES.birthday)
    return "#696969"
  return "#C0C0C0";
}

useKindEvent.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  null,
  mapDispatchToProps,
);

export default compose(withConnect)(useKindEvent);
