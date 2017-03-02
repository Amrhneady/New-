var uuid = require("uuid");
var list= [
    {
        id : uuid.v4(),
        FirstName:"Amr",
        SecondName:"Hneady",
        Living: true,
        BountyAmont: 55,
        Type: "Sith"
    },
    {
        id : uuid.v4(),
        FirstName:"Nadar",
        SecondName:"Nasab",
        Living: false,
        BountyAmont: 44,
        Type: "Sith"
    },
    {
        id : uuid.v4(),
        FirstName:"Mohamad",
        SecondName:"Aziz",
        Living: true,
        BountyAmont: 36,
        Type: "kedi"
    },
]

module.exports = list;