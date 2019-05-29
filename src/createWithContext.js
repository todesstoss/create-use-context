import React from 'react';
import getDisplayName from 'react-display-name';
import hoistStatics from 'hoist-non-react-statics';

import capitalize from './lib/capitalize';

export default function createWithContext(Context, name) {
  return function withContext(ComposedComponent) {
    const WithContextWrapper = (props) => {
      return (
        <ComposedComponent
          {...{ [name]: React.useContext(Context) }}
          {...props}
        />
      );
    };

    WithContextWrapper.displayName = `with${capitalize(
      name
    )}Context(${getDisplayName(ComposedComponent)})`;

    return hoistStatics(WithContextWrapper, ComposedComponent);
  };
}
