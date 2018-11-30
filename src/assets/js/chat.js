<script src="https://www.gstatic.com/firebasejs/5.5.9/firebase.js"></script>



$(document).ready(function(){
	$('.chat-application').height( $(window).height() - $('.navbar').height() - 100 );
	$(window).resize(function(){
	    $('.chat-application').height( $(window).height() - $('.navbar').height() - 100 );
	});

	if($('.chat-sidebar').length > 0){
		$('.chat-sidebar').perfectScrollbar();
	}

    var config = {
        apiKey: "AIzaSyB1SH_AxayF7QsRYUQptJZ9dmLDZ8x2Les",
        authDomain: "book-app-2ef9d.firebaseapp.com",
        databaseURL: "https://book-app-2ef9d.firebaseio.com",
        projectId: "book-app-2ef9d",
        storageBucket: "book-app-2ef9d.appspot.com",
        messagingSenderId: "445301135678"
    };
    firebase.initializeApp(config);
    var database = firebase.database().ref().child('customers');
    database.once('value', function(snapshot){
        if(snapshot.exists()){
            var content = '';
            snapshot.forEach(function(data){
                var val = data.val();
                content +='<tr>';
                content += '<td>' + val.email1+ '</td>';
                content += '<td>' + val.mobile + '</td>';

                content += '</tr>';
            });
            $('#ex-table').append(content);
        }
    });
    var database = firebase.database().ref().child('orders');
    database.once('value', function(snapshot){
        if(snapshot.exists()){
            var content = '';
            snapshot.forEach(function(data){
                var val = data.val();
                content +='<tr>';
                content += '<td>' + val.date+ '</td>';
                content += '<td>' + val.email + '</td>';
                content += '<td>' + val.status + '</td>';
                content += '<td>' + val.time + '</td>';



                content += '</tr>';
            });
            $('#ex-table-order').append(content);
        }
    });
});