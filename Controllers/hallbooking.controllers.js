const creatingroom={
    Numberofseatsavailable: 10,
    Aminities: "AC or non-AC,With dining",
    Pricefor1hour:1000
}

export const create_room=(req,res)=>{
    res.status(200).json({message:"Room created",data:creatingroom});
}

const bookingroom=[
    {
        Customername:"neha",
        date:"8_10_2023",
        Starttime:"9am",
        Endtime:"11am",
        Roomid:1
    },
    {
        Customername:"sow",
        date:"9_10_2023",
        Starttime:"10am",
        Endtime:"12am",
        Roomid:2
    }
]

export const get_booking_room=(req,res)=>{
    res.status(200).json({message:"List of rooms",data:bookingroom})
}

export const create_booking_room=(req,res)=>{
    const createEmpDetail={
        Roomid:bookingroom.length+1,
        Customername:req.body.Customername,
        date:req.body.date,
        Starttime:req.body.Starttime,
        Endtime:req.body.Endtime
    }
    const alreadybooked=bookingroom.find(res=>res.date===createEmpDetail.date)
    if(alreadybooked){
        res.status(200).json({message:"Already booked in this date"})
    }
    bookingroom.push(createEmpDetail)
    res.status(200).json({message:"Booking room",data:createEmpDetail})
}

const listroom=[
    {
        Customername:"neha",
        date:"8_10_2023",
        Starttime:"9am",
        Endtime:"11am",
        Roomname:"AC",
        Bookedstatus:"Booked"
    },
    {
        Customername:"sow",
        date:"9_10_2023",
        Starttime:"10am",
        Endtime:"12am",
        Roomname:"Non AC",
        Bookedstatus:"free"
    },
    {
        Customername:"mohi",
        date:"10_10_2023",
        Starttime:"11am",
        Endtime:"1am",
        Roomname:"Non AC",
        Bookedstatus:"Booked"
    }
]

export const get_list_room_bookedstatus=(req,res)=>{
    const booked_status=req.params.Bookedstatus
    console.log(booked_status);
    const Bookedstatus_detail=listroom.filter(res=>res.Bookedstatus===booked_status)
    console.log(Bookedstatus_detail);
    if(!Bookedstatus_detail){
        res.status(200).json({message:"No rooms booked"}) 
    }
    res.status(200).json({message:"Room listed",data:Bookedstatus_detail.map((roomname)=>roomname.Roomname)});
}

export const get_list_cust_bookedstatus=(req,res)=>{
    const booked_status=req.params.Bookedstatus
    const Bookedstatus_detail=listroom.filter(res=>res.Bookedstatus===booked_status)
    if(!Bookedstatus_detail){
        res.status(200).json({message:"No rooms booked"}) 
    }
    res.status(200).json({message:"Room listed",data:Bookedstatus_detail.map((custname)=>custname.Customername)});
}

const list_room=[
    {
        Customername:"neha",
        date:"8_10_2023",
        Starttime:"9am",
        Endtime:"11am",
        Roomname:"AC",
        Bookedstatus:"Booked"      
    },
    {
        Customername:"sow",
        date:"9_10_2023",
        Starttime:"10am",
        Endtime:"12am",
        Roomname:"Non AC",
        Bookedstatus:"free"
    },
    {
        Customername:"mohi",
        date:"10_10_2023",
        Starttime:"11am",
        Endtime:"1am",
        Roomname:"Non AC",
        Bookedstatus:"Booked"
    },
    {
        Customername:"mohi",
        date:"11_10_2023",
        Starttime:"12am",
        Endtime:"2am",
        Roomname:"Non AC",
        Bookedstatus:"Booked"
    }
]

export const list_rooms_with_name=(req,res)=>{
    const no_of_times={}
    list_room.map((name)=>{
        if(name.Customername in no_of_times){
            no_of_times[name.Customername]++
        }
        else{
            no_of_times[name.Customername]=1
        }
    })
    res.status(200).json({message:"Listed names with count",data:no_of_times})
}