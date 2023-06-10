let count =0;
function getelement(id, name, show_player_name){
    document.getElementById(id).addEventListener('click', function(){
        const player1 = document.getElementById(name);
        const playername = player1.innerText;
        const list_player_name = document.getElementById(show_player_name);
        list_player_name.innerText =playername
        count++;
        if(count==5) return;
    })
}
getelement('btn-1','player-name1', "show-player-name1")
getelement('btn-2', 'player-name2', "show-player-name2" )
getelement('btn-3', 'player-name3', "show-player-name3" )
getelement('btn-4', 'player-name4', "show-player-name4" )
getelement('btn-5', 'player-name5', "show-player-name5" )
getelement('btn-6', 'player-name6', "show-player-name6" )








