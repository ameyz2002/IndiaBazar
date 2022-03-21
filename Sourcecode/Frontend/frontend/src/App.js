import './App.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import AboutScreen from './screens/AboutUsScreen'
import Navigation from './components/Navigation'
import AdminDepartmentScreen from './screens/Admin/AdminDepartmentScreen'
import AddCategoryScreen from './screens/Admin/AddCategoryScreen'
import SignInScreen from './screens/User/SignInScreen'
import SignUpScreen from './screens/User/SignUpScreen'
import ProductListScreen from './screens/Admin/ProductListScreen'
import OrderDetailListScreen from './screens/OrderMgr/OrderDetailListScreen'
import OrderManagerMainScreen from './screens/OrderMgr/OrderManagerMainScreen'
//import OrderManagerMyProfileScreen from './screens/OrderManagerMyProfileScreen'
import OrderManagerUpdateProfileScreen from './screens/OrderMgr/OrderManagerUpdateProfileScreen'
//import OrderSummeryScreen from './screens/OrderSummeryScreen'
import ListofCategoriesScreen from './screens/Admin/ListofCategoriesScreen'
import AddUserScreen from './screens/Admin/AddUserScreen'
import AddSellerScreen from './screens/Admin/AddSellerScreen'
import ListofsellerScreen from './screens/Admin/ListofsellerScreen'
import UserListScreen from './screens/User/UserListScreen'
import StoreManagingDepartmentScreen from './screens/StoreMgr/StoreMgraddprod'
import WishListScreen from './screens/Customer/WishListScreen'
import AddProductScreen from './screens/AddProductScreen'
import AddAddressCustomer from './screens/Customer/AddAddressCustomer'
import ListofFeedbackScreen from './screens/Admin/ListofFeedbackScreen'
import AddFeedbackScreen from './screens/Customer/AddFeedbackScreen'
import ListofUsersScreen from './screens/Admin/ListofUsersScreen'
import DetailProductListScreen from './screens/StoreMgr/DetailProductListScreen'
import AddDeliveryPerson from './screens/OrderMgr/AddDeliveryPerson'
import StockBillingScreen from './screens/StoreMgr/StockBilling'
import Checkout from './screens/Checkout'
import CustomerCategoriesMenu from './screens/Customer/CustomerCategoriesMenu'
import Productsortbycategory from './screens/Customer/Productsortbycategory'
import UpdateProfile from './screens/User/UpdateProfileScreen'
import UserProfile from './screens/User/UserProfile'
import Ratings from './screens/Admin/Ratings'
import Storemgrmain from './screens/StoreMgr/Storemgrmain'
import StoremgrProdlist from './screens/StoreMgr/StoremgrProdlist'
import Cart from './screens/Customer/Cart'
import Customerhome from './screens/Customer/Customerhome'
import AddressForm from './screens/AddressForm'
import AddBank from './screens/Customer/AddBank'
import ListofAddress from './screens/Customer/ListofAddress'
import ListofBank from './screens/Customer/ListofBank'
import CustProdList from './screens/Customer/CustprodList'
import CartitemList from './screens/Customer/CartitemList'
import OrderList from './screens/Customer/OrderList'

function App() {
  return (
    <div>
      <Router>
        <Navigation />
        <Switch>
          <div className="container">
            <Route path="/signin" component={SignInScreen} />
            <Route path="/signup" component={SignUpScreen} />
            <Route path="/about" component={AboutScreen} />
            <Route path="/admindepartment" component={AdminDepartmentScreen} />
            <Route path="/addcategory" component={AddCategoryScreen} />
            <Route path="/addseller" component={AddSellerScreen} />
            <Route path="/userlist" component={ListofUsersScreen} />
            <Route path="/sellerlist" component={ListofsellerScreen} />
            <Route path="/orderlist" component={OrderList} />
            <Route
              path="/listofcategories"
              component={ListofCategoriesScreen}
            />
            <Route path="/productlist" component={ProductListScreen} />
            <Route path="/OrderDetailList" component={OrderDetailListScreen} />
            <Route
              path="/OrderManagerMain"
              component={OrderManagerMainScreen}
            />
            {/* <Route
              path="/OrderManagerMyProfile"
              component={OrderManagerMyProfileScreen}
            /> */}
            <Route
              path="/OrderManagerUpdateProfile"
              component={OrderManagerUpdateProfileScreen}
            />
            <Route path="/addaddresscustomer" component={AddAddressCustomer} />
            <Route path="/listoffeedback" component={ListofFeedbackScreen} />
            <Route path="/addfeedback" component={AddFeedbackScreen} />
            <Route path="/listofusers" component={ListofUsersScreen} />
            <Route
              path="/detailproductlistscreen"
              component={DetailProductListScreen}
            />
            <Route path="/adddeliveryperson" component={AddDeliveryPerson} />
            <Route path="/stockbilling" component={StockBillingScreen} />
            {/* <Route path="/ordersummery" component={OrderSummeryScreen} />
            <Route
              path="/ordermanagerupdateprofile"
              component={OrderManagerUpdateProfileScreen}
            /> */}
            <Route path="/checkout" component={Checkout} />
            <Route path="/adduser" component={AddUserScreen} />
            <Route path="/addaddresscustomer" component={AddAddressCustomer} />
            <Route
              path="/CustomerCategoriesMenu"
              component={CustomerCategoriesMenu}
            />
            <Route
              path="/productsortbycategory"
              component={Productsortbycategory}
            />
            <Route path="/updateprofile" component={UpdateProfile} />
            <Route path="/userprofile" component={UserProfile} />
            <Route path="/ratings" component={Ratings} />
            <Route
              path="/storemanagingdepartment"
              component={StoreManagingDepartmentScreen}
            />
            <Route path="/storemgrmain" component={Storemgrmain} />
            <Route path="/storemgrprodlist" component={StoremgrProdlist} />
            <Route path="/cart" component={Cart} />
            <Route path="/customerhome" component={Customerhome} />
            <Route path="/addressform" component={AddressForm} />
            <Route path="/addbank" component={AddBank} />
            <Route path="/listofaddress" component={ListofAddress} />
            <Route path="/listofbank" component={ListofBank} />
            <Route path="/custprodlist" component={CustProdList} />
            <Route path="/cartitemlist" component={CartitemList} />
          </div>
        </Switch>
      </Router>
    </div>
  )
}

export default App
