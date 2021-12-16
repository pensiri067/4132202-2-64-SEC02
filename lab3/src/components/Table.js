import React from "react";

function genTable(peoples) {
    return peoples.map((people)=>{
        const {id,name:rname,age} =people;
        return( 
            <tr>
                <td>{id}</td>
                <td>{rname}</td>
                <td>{age}</td>
                </tr>
        );       

    });

}

function DataTable(){
     const students =[
         {
             id:1,
             name : "bonat",
             age:20,
              },
             {

             id:2,
             name: "bo",
             age:20,
             },
            ];
            return(
                <table>
                    <tbody>{genTable(students)}</tbody>
            </table>
            );
     

    
}
export default DataTable;