import {db} from "./firebase.js"
import { getDatabase, ref, onValue } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-database.js";



let floor = document.body.dataset.floor;  

const lfloor = floor.toLowerCase();

const stallsref = ref(db, `/${lfloor}`);
console.log("HEllo")
console.log(`${stallsref}`)
onValue(stallsref, (snapshot) => {
    
        console.log("onValue triggered");
    
    const data = snapshot.val();
    if (!data) {
        console.log("No Data")
        return;}

    Object.keys(data).forEach(id => {
        console.log(`${id}`);
        const h1id = `${floor}-stall-${id}`;  // e.g. first-stall-3
        const h1 = document.getElementById(h1id);
        // console.log(`${h1}`);
        if(h1!=null)h1.style.display="inline-block"
        // console.log(`${h1id}`)
        if (h1) {
            if(floor=="Fourth") h1.textContent=`Available Seats : ${data[id]} (2:30 pm)`;
            else h1.textContent ="Waiting Time : "+ data[id] +" Minutes";
        }

        // console.log(`Updating: ${h1id} → ${data[id]}`);
    });
});
