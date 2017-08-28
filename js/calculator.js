function Pi(){
       {document.frm.total.value *= Math.PI;}
      }
      function fact(){
       {document.frm.total.value += "!";}
      }
      function bra(){
       {document.frm.total.value += "(";}
      }
      function bra2(){
       {document.frm.total.value += ")";}
      }
      function  run1() 
      {document.frm.total.value += "1";}
      function run2 () 
      {document.frm.total.value += "2";}
      function run3 () 
      {document.frm.total.value += "3";}
      function run4 () 
      {document.frm.total.value += "4";}
      function run5 () 
      {document.frm.total.value += "5";}
      function run6 () 
      {document.frm.total.value += "6";}
      function run7 () 
      {document.frm.total.value += "7";}
      function run8 () 
      {document.frm.total.value += "8";}
      function run9 () 
      {document.frm.total.value += "9";}
      function run0 () 
      {document.frm.total.value += "0";}
      function dot () 
      {document.frm.total.value += ".";}
      function reset () 
      {document.frm.total.value = "";}
      function plus () 
      {document.frm.total.value += "+";}
      function sqar () 
      {a1 = document.frm.total.value;
      document.frm.total.value += "pwr";}
      function minus () 
      {document.frm.total.value += "-";}
      function divide () 
      {document.frm.total.value += "/";}
      function multiply () 
      {document.frm.total.value += "*";}
        
     // clear variables and set display to '0'
      // $(window).load(function(){
      //   $('#frm').val(null);
      // });
     


          function equals () {
            // str = document.frm.total.value;
            str = $('.total').val();
            src = str.search("pwr");
            if (src == -1) {
              var evalo =  eval(document.frm.total.value);
              document.frm.total.value = evalo;
            } else {
              a2 = str.substr(src+3);
              if (a2 != '') {
                var evalo = Math.pow(a1,a2);
                document.frm.total.value = evalo;
              }
            }
      };
        function sin() {
            var calc = (Math.sin(document.frm.total.value))
            document.frm.total.value = calc;
      };
      function round() {
            var calc = (Math.round(document.frm.total.value))
            document.frm.total.value = calc;
      };
      function cos() {
            var calc = (Math.cos(document.frm.total.value))
            document.frm.total.value = calc;
      };
      function log() {
            var calc = (Math.log(document.frm.total.value))
            document.frm.total.value = calc;
      };
      function ln() {
            var calc = (Math.LN10(document.frm.total.value))
            document.frm.total.value = calc;
      };
      function round() {
            var calc = (Math.round(document.frm.total.value))
            document.frm.total.value = calc;
      };
       function log10E() {
            var calc = (Math.LOG10E(document.frm.total.value))
            document.frm.total.value = calc;
      };
       function ln2() {
            var calc = (Math.LN2(document.frm.total.value))
            document.frm.total.value = calc; 
      };
 
      function sqrt() {
            var calc = (Math.sqrt(document.frm.total.value))
            document.frm.total.value = calc;
      };

      function exp() {
            var calc = (Math.exp(document.frm.total.value))
            document.frm.total.value = calc;
      };
      function asin () {
            var calc = (Math.asin(document.frm.total.value))
            document.frm.total.value = calc;
      };
      function acos () {
            var calc = (Math.acos(document.frm.total.value))
            document.frm.total.value = calc;
      };
      function atan () {
            var calc = (Math.atan(document.frm.total.value))
            document.frm.total.value = calc;
      };
         //animate.css
      $('#equals').click(function () {
        $('input[name=total]').addClass('animated pulse').one('animationend',
          function  () {
           $(this).removeClass('animated pulse');
          });
      });

      $('#clear').click(function () {
        $('input[name=total]').addClass('animated flash').one(' animationend',
          function  () {
           $(this).removeClass('animated flash');
          });
      });

      $('.total').load(function () {
        reset();
      });

      $('.button-collapses').sideNav({
      menuWidth: 240, // Default is 240
      edge: 'right', // Choose the horizontal origin
      closeOnClick: true // Closes side-nav on <a> clicks, useful for Angular/Meteor
      }
    );


      $('.button-collapse').sideNav(); 

      $(".dropdown-button").dropdown();   
          
      $('.modal-trigger').leanModal();

       $('.collapsible').collapsible();