//tehtävä 1

$('p:eq(1)').attr('id', 'jotain');
$('#fp').remove();
$('#fdiv').css(
    {
    backgroundColor: 'grey',
    color: 'white'
    }
);


//tehtävä 2
function sayHello() {
    $('#jotain').after('<p>Hello user</p>');
}

$('#nappi').click(sayHello);




//tehtävä 3
$('#4p').hide();

$('#sdiv').hover(
    function() {
        $('#4p').text('About to select a link...').show();
    },
    function() {
        $('#4p').hide();
    }
)
