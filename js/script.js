const showName =document.getElementById("show-name");
const selected =document.getElementsByClassName("select-button");
const playerExpences = document.getElementById('player-expences');

 
//showing the Name
var count =0;
for (var i = 0; i < selected.length; i++) {
    button = selected[i];
    button.addEventListener('click', selectedClicked);
   
}
 
function selectedClicked(event){
   
    if(count===5)
    {
    alert ('You have already added best 5 players')
    return;
    }else{
    button = event.target;
    var player= button.parentElement;
    var name = player.getElementsByClassName('name')[0].innerText;
    button.classList.add('btn-disabled');
    showNameOnList(name);
    count++;
    }
    console.log(count);
}
function showNameOnList(name){
    var showName = document.createElement('li');
    showName.classList.add('show-name');
    var showNames = document.getElementsByClassName('show-names')[0];
    var showNameItem = `${name}`;
    showName.innerHTML = showNameItem;
    showNames.append(showName);
   
}

//calculate player expences
document.getElementById('calculate').addEventListener('click',function calculate()
{
    if(count==0){
        alert("please select your best five player");
    }
    else{
    const perPlayer = document.getElementById('per-player').value;
    console.log(perPlayer);
    const totalPlayerExpences = perPlayer*count;
    playerExpences.innerText = totalPlayerExpences;
    
    if(totalPlayerExpences===0)
    {
        alert("Please add budget per player");
    }
    //calculate total cost
    document.getElementById('calculate-total').addEventListener('click',function calculateTotal()
    {
    const managerCost = document.getElementById('manager-cost').value;
   
    const coachCost = document.getElementById('coach-cost').value;
    if(parseInt(managerCost)===0)
    {
        alert("please add manager cost");
    }else if(parseInt(coachCost)===0)
    {
        alert("Please add coach cost");
    }
    const totalCost = totalPlayerExpences + parseInt(managerCost) + parseInt(coachCost) ;
    console.log(totalPlayerExpences);
    document.getElementById('total').innerText = totalCost;
    });
    }
});
 
 

