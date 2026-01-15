        import {db} from "./firebase.js";
        import { getDatabase, get,set, ref } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-database.js";
        
        
       
        const data = {
          Ground: ["Bowling", "BumperCars", "VrCricket", "ARCADE"],
          First: ["f1", "f2", "f3", "f4"],
          Second: ["s1", "s2", "s3", "s4"],
          Third: ["BURGER kING","PIZZA HUT","PANI PURI","KFC","THICK SHAKE","STAR BUCKS","DOMINO'S PIZZA","SUBWAY","CAKE FACTORY"],
          Fourth: ["AVATAR FIRE & ASH", "ANAGANAGA OKA RAJU", "KUNG FU PANDA", "SHAWSHANK REDEMPTION","KHALEJA","ALA VAIKUNTAPURAMLOO"]
        };
        
        const floor = document.getElementById("floors");
        const mall = document.getElementById("malls");
        
        floor.addEventListener("change", () => {
          mall.style.display = "block";
        
        
         let arr = data[floor.value];
         for(let i=0;i<arr.length;i++){
          const op = document.createElement("option");
          op.value=i+1;
          op.textContent=arr[i];
          mall.appendChild(op);
         }
          
        });
        
        mall.addEventListener("change", () => {
          if(floor!="" && mall!=""){
            document.getElementById("labelhid").style.display="none";
          }
          document.getElementById("input").style.display = "block";
        });
        
        function valid(ans){
          if(ans=="") return false;
          if(ans.length>3) return false;
          for(let i=0;i<ans.length;i++){
            if(!(ans.charAt(i)>='0' && ans.charAt(i)<='9')) return false;
          }
          return true;
        }

        document.getElementById("sub-btn").addEventListener("click",
          ()=>{
              let waitingTime="12 Minutes";
              waitingTime = document.getElementById("input").value;
              let rfloor = floor.value.toLowerCase();
              let i= document.getElementById("malls").value;
              console.log(`/${rfloor}/${i} ${waitingTime}`);
              //if(valid(waitingTime))
              set(ref(db,`/${rfloor}/${i}`),waitingTime)
             console.log("Hello")
             if(valid(waitingTime)) showToast("Submitted","success");
             else showToast("Done","success");

        })
        // function showToast(msg) {
        //   const toast = document.getElementById("toast");
        //   toast.innerText = msg;
        //   toast.classList.add("show");
          
        //   setTimeout(() => {
        //     toast.classList.remove("show");
        //   }, 2500);
        // }
        function showToast(message, type = "success") {
          const toast = document.getElementById("toast");
        
          // reset classes
          toast.className = "";
          toast.id = "toast";
        
          toast.innerText = message;
          toast.classList.add("show", type);
        
          setTimeout(() => {
            toast.classList.remove("show");
          }, 2500);
        }
        
