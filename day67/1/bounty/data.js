var uuid = require("uuid");
var list= [
    {
        id : uuid.v4(),
        firstName:"Amr",
        SecondName:"Hneady",
        Living: true,
        bountyAmont: 55,
        type: "Sith"
    },
    {
        id : uuid.v4(),
        firstName:"Nadar",
        SecondName:"Nasab",
        Living: false,
        bountyAmont: 44,
        type: "Sith"
    },
    {
        id : uuid.v4(),
        firstName:"Mohamad",
        SecondName:"Aziz",
        Living: true,
        bountyAmont: 36,
        type: "kedi"
    },
]

module.exports=list;