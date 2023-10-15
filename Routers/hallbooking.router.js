import express from 'express';
import { create_room, get_booking_room, create_booking_room,get_list_room_bookedstatus,get_list_cust_bookedstatus,list_rooms_with_name} from '../Controllers/hallbooking.controllers.js';
const router=express.Router()

router.get('/data',create_room);
router.get('/getbookingroom/data',get_booking_room);
router.post('/createbookingroom/add',create_booking_room);
router.get('/getlistroomsbookedstatus/:Bookedstatus',get_list_room_bookedstatus);
router.get('/getlistcustbookedstatus/:Bookedstatus',get_list_cust_bookedstatus);
router.get('/getlistnamecount',list_rooms_with_name);
// router.get('/roomname/:Bookedstatus',list_room);
// router.get('/custname/:Bookedstatus',list_cust_booked);
// router.get('/list/:Customername',list_cust_times);
export default router;