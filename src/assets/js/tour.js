// Define the tour!
var tour = {
    id: "demo-tour",
    showPrevButton: true,
    steps: [       
        
        {
            title: "Customizer",
            content: "This is the customizer for the theme where you can customize menu options.",
            target: "customizer-toggle-icon",
            placement: "left"
        },
        {
            title: "Full Screen",
            content: "View this page in full screen mode.",
            target: "navbar-fullscreen",
            placement: "left"
        },
        {
            title: "Pixinvent",
            content: "Check this link to know more about Pixinvent.",
            target: "pixinventLink",
            placement: "top"
        }        
    ]
};

$('#btnStartTour').on('click',function(e){
    hopscotch.startTour(tour);
});



// Start the tour!
