import rand  from "../Functions/rand";

function Gele () {

    


 
     return (
 
   // vietoj div tagu galime naudoti tuscia taga <> ir </>
   //jeigu norime keliu eiluciu reikia po return deti skliaustus ir juose rasyti
   // jei norime rasyti koda dedame i garbanotus skliaustus pvz {5 * 8}
   //jei vietoj nulio irasysime pvz 5 bus Jo, o kai irasai 0 arba fale tai Ne jo
   //h2>As Bebras sako: {0 ? 'Jo':'Ne jo'} </h2>
   //ka yra kintamasis kuris generuoja
   //h2>As Bebras sako: {ka ? 'Jo':'Ne jo'} </h2>
   //jei yra tagas kabuciu nereikia
   //h2>As Bebras sako: {ka ? <i>Jo</i>:'Ne jo'} </h2>
   //kai norim daryti staila turime rasyti
 //<span style={{ color:'crimson'}}>Jo!</span>
 
     <div>
 
     <h2>As Gele sako: {1 ? <i>Jo {8 * 10}</i>:0} </h2>
     <span style={
         {
             color:'crimson',
             backgraundColor: 'skyblue'
         }
             
             }>Jo!</span>
       
 
 </div>
     )
  }
 
  export default Gele;