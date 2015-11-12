(function(d, $, w){
    var w = $(w),
        topSect = $('.wrapper'),
        topSectHeight = topSect.outerHeight(),
        seconds = $(".counterTimer .countSeconds .amounts"),
        minutes = $(".counterTimer .countMinutes .amounts"),
        hours = $(".counterTimer .countHours .amounts"),
        days = $(".counterTimer .countDays .amounts")
    function adjustHeight(height){
        if( height > topSectHeight )
            topSect.height( height ).css({'padding': 0});
    }

    // On window resize also adjust the height of the container
    w.resize(function() {
        adjustHeight( w.height() );
    });

    // Adjust height on page load
    adjustHeight( w.height() );

    // Function to hide the address bar ion Iphone devices
    function hideIphoneBar() {
        if( !w.location.hash && w.addEventListener ){
            w.addEventListener( "load",function() {
                setTimeout(function(){
                    window.scrollTo(0, 0);
                }, 0);
            });
        }
    }

    // Pads numbers with a leading 0
    function pad(num) {
        var s = num+"";
        while (s.length < 2) s = "0" + s;
        return s;
    }

    // You can delete this function, it's only used for demo purposes to get a future date
    function futureDate() {
            var futureDate = new Date(2015, 10, 26, 1);
            futureDate.setDate(futureDate.getDate());

            dd = futureDate.getDate();
            mm = futureDate.getMonth() + 1;
            y = futureDate.getFullYear();

            futureFormattedDate = mm + '/'+ dd + '/'+ y;

            return futureFormattedDate;
    }


    function mlCountdown() {
        // Step 1: Launch Date of your site.
        var launchDate  = futureDate(); // Demo Future Date

        var eventTime   = new Date(launchDate).getTime()/1000.0;
        var startFrom   = 'D'; // Adjust from which time unit you'd like to countdown: Use D for days, H for hours, M for minutes, or S for seconds.

        // We'll take it from here
        var currentTime = Math.round(new Date().getTime() / 1000); // Grabs current time in seconds
        var timeLeft = eventTime - currentTime;

        // Calculate numbers based on what kind of time they want to count from
        if (startFrom == 'S') {
            var scLeft = Math.floor(timeLeft);

            seconds.html( pad( scLeft ) );
        }
        else if (startFrom == 'M') {
            var minLeft = Math.floor(timeLeft / 60);
            var scLeft1 = timeLeft - (minLeft * 60); // number of whole minutes
            var scLeft = Math.floor(scLeft1);

            minutes.html( pad( minLeft ) );
            seconds.html( pad( scLeft ) );
        }
        else if (startFrom == 'H') {
            var hrLeft = Math.floor(timeLeft / 60 / 60);
            var minLeft1 = hrLeft * 60 * 60; // number of whole hours
            var minLeft2 = timeLeft - minLeft1;
            var minLeft = Math.floor(minLeft2 / 60);
            var scLeft1 = minLeft * 60; //number of whole minutes
            var scLeft2 = timeLeft - minLeft1 - scLeft1;
            var scLeft = Math.floor(scLeft2);

            hours.html( pad( hrLeft ) );
            minutes.html( pad( minLeft ) );
            seconds.html( pad( scLeft ) );
        }
        // Otherwise, default as if counting from days
        else {
            var dayLeft = Math.floor(timeLeft / 60 / 60 / 24);
            var hrLeft1 = dayLeft * 24 * 60 * 60; // days left in seconds
            var hrLeft2 = timeLeft - hrLeft1;
            var hrLeft = Math.floor(hrLeft2 / 60 / 60);
            var minLeft1 = hrLeft * 60 * 60; // hours left in seconds
            var minLeft2 = timeLeft - hrLeft1 - minLeft1;
            var minLeft = Math.floor(minLeft2 / 60);
            var scLeft1 = minLeft * 60; // minutes left in seconds
            var scLeft2 = timeLeft - hrLeft1 - minLeft1 - scLeft1;
            var scLeft = Math.floor(scLeft2);


            days.html( pad( dayLeft ) );
            hours.html( pad( hrLeft ) );
            minutes.html( pad( minLeft ) );
            seconds.html( pad( scLeft ) );
        }
    }

var t = setInterval( mlCountdown, 1000);
function winLoad(){
	mlCountdown();
}
	window.onload = winLoad;
})(document, jQuery, window);
