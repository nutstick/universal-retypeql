import withStyles from 'isomorphic-style-loader/lib/withStyles';
import * as React from 'react';
import { connect } from 'react-redux';
import { State } from '../../reduxs';
import { UserState } from '../../reduxs/user/reducers';
import { Header } from '../Header';
import { Main } from '../Main';

import * as s from './Layout.css';

// TODO not using required
// tslint:disable-next-line:no-var-requires
// const MdAdd = require('react-icons/lib/md/add');

namespace Layout {
  export interface IConnectState {
    user: UserState;
  }

  export type Props = IConnectState;
}

const mapStateToProps = (state: State) => ({
  user: state.user,
});

@withStyles(s)
export class Layout extends React.Component<Layout.Props> {
  public render() {
    return (
      <div>
        <Header />
        <Main>
          {this.props.children}
        </Main>
      </div>
    );
  }
}

export default connect(mapStateToProps)(Layout);
