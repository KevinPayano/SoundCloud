/*global SC*/
SC.initialize(
    { client_id: 'f7191bb62c854f9e0b7ff52a9260e4d4' }
);

SC.get(
    '/tracks',
    function(tracks) {
        for(var i = 0; i < tracks.length; i++) {
            var track = tracks[i];
            console.log(track.title);
        }
    });
    
var array = ["one","two","three"]