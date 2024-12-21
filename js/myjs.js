$(document).ready(function(){
     


    $(".h4").click(function(){
        $("h2").toggleClass("red");

    });

 

    $("#home").mouseenter(function(){
        $("#content").html(`
          <p>I live in Taipei city.
         <h1>It is in the north of Taiwan</h1>, the capital of R.O.C. My house is a old aparment. 
         I always go upstairs 3 floor when <span style='color:red'>I come back to home every day.</span> </p>
         `);
    });

    $("#home").click(function(){
        $("#content").append(`
          <p>Kevin is an MIS engineer.</p>
         `);
    });

    $("#about").mouseenter(function(){
        $("#content").html(' <h3>System is in developping </h3>');
        $("#content").pretend(`
        <p style='color:blue'>WIP is complex system. I need some time to think and design it. </p>
       `);
    });

    $("#potofolio").mouseenter(function(){
        $("#content").html(' <p>Genesys, 緯創, 仁寶, 永豐金</p>');
        $("#content").before(`
        <p style='color:green'>6104 is 101 and Vtron is 32. </p>
       `);
    });

    $("#contact").mouseenter(function(){
        $("#content").html(`
           <h2> if you are intresting in me. Please contact me with email. my email is ka.kevinliu@gmail.com</h2>
      `);

      $("#content").after(`
      <p style='color:green'>My phone number is 0988010934. You can also line me. </p>
     `);

    });

}); 

