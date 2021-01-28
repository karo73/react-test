import React from 'react';
import Request from '../../fetch';
import Nav from '../Nav/Nav';
import List from '../List/List';
import Loading from '../Loading/Loading';
import {
  addItemsAction
} from '../../store/catItems/actions';
import { connect } from 'react-redux';
import './App.scss';

interface Props {
  items: any;
  addItemsAction: any
}

interface State {
  category: object[];
  disabledButton: boolean;
  limit: number;
  currentId: number | null;
}

class App extends React.Component<Props, State> {

  constructor( props: Props ){
    super( props );

    this.state = {
      category: [],
      disabledButton: false,
      limit: 10,
      currentId: null
    };

    // Bind own methods
    this.updateState = this.updateState.bind( this );

  }

  componentDidMount() {

    // Get categories
    Request.get('https://api.thecatapi.com/v1/categories').then(data => {
      this.setState({
        category: data
      });

      const newItems: any = {};
      data.map(( item: any ) => newItems[item.id] = []);
      this.props.addItemsAction( newItems );

      const id = Number(window.location.pathname.replace('/', ''));
      if ( id ) {
        this.setState({
          currentId: id
        });
      }

    });

  }

  updateState( newState: object ){
    this.setState( newState );
  }

  loadItems(){

    this.setState({
      disabledButton: true
    });

    Request.get('https://api.thecatapi.com/v1/images/search?limit=' + this.state.limit + '&category_ids=' + this.state.currentId).then(data => {

      if ( this.state.currentId !== null ) {
        const newItems = this.props.items;
        newItems[this.state.currentId] = this.props.items[this.state.currentId].concat(data);
        this.props.addItemsAction( newItems );
      }

      this.setState({
        disabledButton: false
      });

    });

  }

  render(){

    if ( !this.state.category.length ) {
      return <Loading />;
    }

    return (
        <div className="center">
          <header>
            <h1 className="main-header">Cats</h1>
            <Nav
                navItems={this.state.category}
                updateState={this.updateState}
            />
          </header>
          <main>
            {
              this.state.currentId !== null ?
                <>
                  <List listItems={this.props.items[this.state.currentId]} />
                  <button
                      className="btn"
                      type="button"
                      disabled={this.state.disabledButton}
                      onClick={() => this.loadItems()}
                  >{this.state.disabledButton ? <Loading /> : 'Load more 10 cats'}</button>
                </> : ''
            }
          </main>
        </div>
    );

  }

}

const mapStateToProps = (state: any) => {
  return {
    items: state.items
  };
};

const mapDispatchToProps = {
  addItemsAction
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)( App );
