function checkDeals(deals){
    if(deals && deals.length > 0)
        return '<div class="deals"></div>';
}
function getMusictype(music_type){
    if(music_type){
        if(music_type.toLowerCase() == 'rock')
            return '<img class="music-type" src="sdk/resources/images/music/M-icon-Rock.png" />';
        else if(music_type.toLowerCase() == 'hip hop')
            return '<img class="music-type" src="sdk/resources/images/music/M-icon-hip-hop.png" />';
        else if(music_type.toLowerCase() == 'electronic')
            return '<img class="music-type" src="sdk/resources/images/music/M-icon-Electronic.png" />';
        else if(music_type.toLowerCase() == 'country')
            return '<img class="music-type" src="sdk/resources/images/music/M-icon-Country.png" />';
    }
}