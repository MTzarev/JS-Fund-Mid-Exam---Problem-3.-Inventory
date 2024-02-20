function inventory (input){
let list = input.shift().split(`, `)
let newWord = ""
let old = ""
for (let i=0; i<input.length; i++){
    let command = input[i]
    let item=command.split(` - `)[1]
    if (command.includes("Collect")){
        if(!list.includes(item)){
            list.push(item)
        }
    }else if (command.includes(`Drop`)){
        if (list.includes(item)){
            let toDell = list.indexOf(item)
            list.splice(toDell,1)
        }
    }else if (command.includes(`Combine`)){
        old = item.split(`:`)[0]
        newWord = item.split(`:`)[1]
        let dell=list.indexOf(old)
        list.splice(dell, 1)
        list.push(newWord)
    }else if (command.includes(`Renew`)){
        if (list.includes(item)){
            let ren=list.indexOf(item)
            list.splice(ren,1)
            list.push(ren)
        }
    }else if (command.includes(`Craft!`)){
        console.log(list.join(", "));
        break;
    }
}

}
inventory(['Iron, Wood, Sword', 'Collect - Gold', 'Drop - Wood', 
    'Craft!']);
inventory(['Iron, Sword', 'Drop - Bronze', 'Combine Items - Sword:Bow', 'Renew - Iron', 'Craft!']);