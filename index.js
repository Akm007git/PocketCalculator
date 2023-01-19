var string = "";
var string2 = "";
let buttons = document.querySelectorAll(".button");
Array.from(buttons).forEach((buttons) =>{
buttons.addEventListener("click" , (e)=>
  {

      if(e.target.innerHTML ===  "=")
      {
        string = eval(string); 
        document.querySelector('input').value = string;
      }

        else if ( e.target.innerHTML ===  "C")
        {
          string =" ";
          document.querySelector('input').value = string;
        }
        else if ( e.target.innerHTML === "X")
          { console.log("ggggggggggggggg");
            let text = document.querySelector('input').value;
             text = text.slice(0,-1);
            // string += text;
          
            string = eval(text); 
            document.querySelector('input').value = string;
           
          
          }
          else if( e.target.innerHTML === "%")
          {
         // var value = document.querySelector("button").value;
         // value = value*0.01;
            console.log("hhhhhhhhhhhhh");
            // var value = e.target.innerHTML;
            // var value2 = prompt("enter second value");
            
           
           // value = string *(0.01 *1) ;
           //  string = eval(value);
            // var val6 = '*0.01*';
            
            string = string + '*0.01*';
            var v1 = string;
            v1 = eval(string);
            // var value = string;
            // var ans = eval();
            document.querySelector('input').value = v1;
            //  var v1 =  string ;
            
            // document.querySelector('input').value = string + '%';

           
            // string = "";
            // var v2 = string;


            // string = eval( v1*v2 / 100);
            // document.querySelector('input').value = string;

            
            


          }


else
      {

        console.log(e.target);
        string = string + e.target.innerHTML;
        document.querySelector('input').value = string;
        
      }

      
      
    
  })
  
})