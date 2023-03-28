import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import { PrivateRoute } from 'router/PrivateRoute';
// import Home from './components/Home';
import ManageCustomers from '../components/CustomerPages/ManageCustomers';
import Login from '../components/Login';
import Home from '../components/Home';
import CorporateCustomer from '../components/CustomerPages/CorporateCustomer';
import OriginHubArrivalBag from '../components/OperationPages/Origin/OriginHubArrivalBag';
import OriginHub from '../components/OperationPages/Origin/OriginHub';
import OriginHubWeighingList from '../components/OperationPages/Origin/OriginHubWeighingList';
import OriginHubDebagging from '../components/OperationPages/Origin/OriginHubDebagging';
import DestinationHubSorting from '../components/OperationPages/Destination/DestinationHubSorting';
// import DeliveryStationArrival from './components/OperationPages/Delivery/DeliveryStationArrival';
import DeliveryStationDelivery from '../components/OperationPages/Delivery/DeliveryStationDelivery';
import CorporateCustomerDetails from '../components/CustomerPages/CorporateCustomerDetails';
import CorporateCustormerDetailsPrice from '../components/CustomerPages/CorporateCustormerDetailsPrice';
import OriginHubArrivalBagView from '../components/OperationPages/Origin/OriginHubArrivalBagView';
import OriginHubWeighingListVerification from '../components/OperationPages/Origin/OriginHubWeighingListVerification';
import OriginHubDebaggingDestination from '../components/OperationPages/Origin/OriginHubDebaggingDestination';
import OriginHubSorting from '../components/OperationPages/Origin/OriginHubSorting';
import OriginHubSortingMld from '../components/OperationPages/Origin/OriginHubSortingMld';
import OriginHubSortingBkk from '../components/OperationPages/Origin/OriginHubSortingBkk';
import OriginHubSortingEkt from '../components/OperationPages/Origin/OriginHubSortingEkt';
import DmbHubArrival from '../components/OperationPages/DMB/DmbHubArrival';
import DmbHubWeighing from '../components/OperationPages/DMB/DmbHubWeighing';
import DestinationHubArrival from '../components/OperationPages/Destination/DestinationHubArrival';
import DestinationHubArrival2 from '../components/OperationPages/Destination/DestinationHubArrival2';
import DestinationHubArrivalView from '../components/OperationPages/Destination/DestinationHubArrivalView';
import DestinationHubWeighing from '../components/OperationPages/Destination/DestinationHubWeighing';
import DestinationHubWeighingView from '../components/OperationPages/Destination/DestinationHubWeighingView';
import DestinationHubDebaggging from '../components/OperationPages/Destination/DestinationHubDebaggging';
import DestinationHubSortingApapa from '../components/OperationPages/Destination/DestinationHubSortingApapa';
import DestinationHubSortingCele from '../components/OperationPages/Destination/DestinationHubSortingCele';
import DestinationHubSortingAdeolaOdeku from '../components/OperationPages/Destination/DestinationHubSortingAdeolaOdeku';
import DestinationHubSortingAwolowo from '../components/OperationPages/Destination/DestinationHubSortingAwolowo';
import DeliveryStationArrival2 from '../components/OperationPages/Delivery/DeliveryStationArrival2';
import DeliveryStationArrival from '../components/OperationPages/Delivery/DeliveryStationArrival';
import DeliveryArrivalVerify from '../components/OperationPages/Delivery/DeliveryArrivalVerify';
import DeliveryStationDeliverPickup from '../components/OperationPages/Delivery/DeliveryStationDeliverPickup';
import TransactionReport from '../components/ReportPages/TransactionReport';
import NewShipment from '../components/NewShipment/NewShipment';
import NewShipmentSearch from '../components/NewShipment/NewShipmentSearch';
// import CorporateCustomer from './components/customer/CorporateCustomer';

const RouterComponent = () => {
  return (
<Router>
    <Routes>
      <Route exact path="/" element={<Login />} />
       <Route path='/home' element={<Home />} />
       <Route path='/manage-customer' element={<ManageCustomers />} />
       <Route path='/corporate-customer' element={<CorporateCustomer />} />
       <Route path='/corporate-customer-details' element={<CorporateCustomerDetails />} />
       <Route path='/corporate-customer-details-price' element={<CorporateCustormerDetailsPrice />} />
       <Route path='/origin-hub-arrival' element={<OriginHub />} />
       <Route path='/origin-hub-arrival2' element={<OriginHubArrivalBag />} />
       <Route path='/origin-hub-bag-view' element={<OriginHubArrivalBagView/>} />
       <Route path='/origin-hub-weighing' element={<OriginHubWeighingList />} />
       <Route path='/origin-hub-weighing-verification' element={<OriginHubWeighingListVerification />} />
       <Route path='/origin-hub-debagging' element={<OriginHubDebagging />} />
       <Route path='/origin-hub-debagging-destination' element={<OriginHubDebaggingDestination />} />
       <Route path='/origin-hub-sorting' element={<OriginHubSorting />} />
       <Route path='/origin-hub-sorting-mld' element={<OriginHubSortingMld />} />
       <Route path='/origin-hub-sorting-bkk' element={<OriginHubSortingBkk />} />
       <Route path='/origin-hub-sorting-ekt' element={<OriginHubSortingEkt />} />
       <Route path='/dmb-arrival' element={<DmbHubArrival />} />
       <Route path='/dmb-sorting' element={<DmbHubWeighing />} />
       <Route path='/destination-hub-sorting' element={<DestinationHubSorting />} />
       <Route path='/destination-hub-arrival' element={<DestinationHubArrival />} />
       <Route path='/destination-hub-arrival2' element={<DestinationHubArrival2 />} />
       <Route path='/destination-hub-view' element={<DestinationHubArrivalView />} />
       <Route path='/destination-hub-weighing' element={<DestinationHubWeighing />} />
       <Route path='/destination-hub-weighing-view' element={<DestinationHubDebaggging />} />
       <Route path='/destination-hub-sorting-apapa' element={<DestinationHubSortingApapa />} />
       <Route path='/destination-hub-sorting-cele' element={<DestinationHubSortingCele />} />
       <Route path='/destination-hub-sorting-adeola-odeku' element={<DestinationHubSortingAdeolaOdeku />} />
       <Route path='/destination-hub-sorting-awolowo' element={<DestinationHubSortingAwolowo />} />
       <Route path='/delivery-station-arrival' element={<DeliveryStationArrival />} />
       <Route path='/delivery-station-arrival2' element={<DeliveryStationArrival2 />} />
       <Route path='/delivery-station-arrival-verify' element={<DeliveryArrivalVerify />} />
       <Route path='/delivery-station-sorting' element={<DeliveryStationDelivery />} />
       <Route path='/delivery-station-onforwarding' element={<DeliveryStationDelivery />} />
       <Route path='/delivery-station-pickup' element={<DeliveryStationDeliverPickup />} />
       <Route path='/transaction-report' element={<TransactionReport />} />
       <Route path='/new-shipment' element={<NewShipment />} />
       <Route path='/new-shipment-search' element={<NewShipmentSearch />} />
       {/* <Route path='/origin-hub-sorting' element={<OriginH />} /> */}
       {/* <Route path='/origin-hub-arrival-bag' element={<OriginHubArrivalBag />} /> */}

    </Routes>
</Router>
    )
}

export default RouterComponent