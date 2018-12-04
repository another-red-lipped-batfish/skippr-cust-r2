import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';

const mapStateToProps = store => ({
  user: store.user,
  restaurant: store.restaurant.list,
  menu: store.menu.menu,
  order: store.order,
});
const mapDispatchToProps = dispatch => ({
  onLoad: () => {
    // console.log('firing onload dispatch')
    dispatch(actions.getRestaurants());
    dispatch(actions.getMenu());
  },
  setOrder: (key) => {
    console.log('setting order');
    dispatch(actions.setOrder(key));
  },
  submitOrder: (state) => {
    dispatch(actions.submitOrder(state));
  }
});

class Restaurant extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // console.log('before running onload in component did mount')
    this.props.onLoad();
  }
  
  render() {
    let Menottis;
    const menuList = [];
    if (this.props.restaurant && this.props.menu) {
      // console.log('list is ', this.props.restaurant);
      Menottis = this.props.restaurant;
      this.props.menu.forEach((el, index) => {
        menuList.push(<p>{el.menu_item_name}</p>, <p>{el.menu_item_price}</p>, <p>{el.menu_item_desc}</p>, <button id={index + 1} onClick={() => this.props.setOrder(index + 1)}>Add to order</button>);
      });
      // console.log('Menottis is ', Menottis);
      return (
        <div>
          <h4>{Menottis.rest_name}</h4>
          <img src={Menottis.rest_imagelink}/>
          <p>{Menottis.rest_address}</p>
          <p>{Menottis.rest_city}, {Menottis.rest_state} {Menottis.rest_zipcode}</p>
          <p>{Menottis.rest_phone}</p>
          <p>{Menottis.rest_email}</p>
          <p>{Menottis.rest_yelp_link}</p>
          <div>
            {menuList}
            <br/>
            <button onClick={() => this.props.submitOrder(this.props.order)}>Submit order</button>
          </div>
        </div>
      )
    }
    else {
      Menottis = null;
      return (
        <div>
          <h4>Restaurant {Menottis}</h4>
        </div>
      )
    }
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(Restaurant);