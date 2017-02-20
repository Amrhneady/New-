var name = readlineSync.question("Enter your Name ") ;
var player = { name : name ,
               Hp : 100 ,
               Attack = Math.floor(Math.random(50 - 30 )+ 30)
               Iinventeory : []} ; 
Var enemy = [ "Nader" , 50 , 30] ;
             


while(enimes.length > 0) {
    var walk = readlineSync.question("Do You want to walk ");
    if(userinput == "w") {
        var chance =  Math.floor(Math.random(100 - 0 ));
        if(chance > 50) {
            var enemy = randomEnemey();
            console.log("You have met an enemy " + enemy[0]);
            while(player.health > 0 && enemy.health > 0) {
                console.log("Attack or run")
                userinput = userinput;
                if(userinput == "r") {
                    chance = 50 % 50;
                    if(chance > 50) {
                        console.log("You have escaped");
                        break;
                    } else {
                        console.log("No luck you didnt escape");
                    }
                } else if(userinput == "a") {
                    chance = 50 % 50;
                    if(chance > 50) {
                        var damage = 50 -> 100;
                        console.log("You hit the enimy for " + damage);
                        enemy.health -= damage;
                        if(enemy.health <= 0) {
                            console.log("You killed the enemy here is your reward");
                            var reward = randomAward();
                            player.inv.push(reward);
                        }
                    } else {
                        console.log("YOu missed")
                    }
            
                } else {
                    console.log("You idoit thats not an option");
                }
                console.log("Its now the enemies turn");
                chance = 50 % 50;
                if(chance > 50) {
                    var damage = 50 -> 100;
                    console.log("enimey hit you for " + damage);
                    player.health -= damage;
                } else {
                    console.log("Enemy missed");
                }
                
            }
            if(player.health <= 0) {
                console.log("You died fool");
                break;
            }
        }
    }
    if (enimes.length ==0){
            break;
}
    
}
if(player.health <= 0) {
    console.log("You lost");
} else {
    console.log("You won heres all the gear you got");
    console.log(player.inv);
}