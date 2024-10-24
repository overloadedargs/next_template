'use client';

// `app/table/page.tsx` is the UI for the `/table URL
export default function Page() {
    let numbers = ["One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten",
        "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen",
        "Nineteen", "Twenty", "Twenty One", "Twenty Two", "Twenty Three", "Twenty Four", "Twenty Five"];
    
    let rows = [];


    return (
        <>
            <h1>Table</h1>
            <div className="gridWrapper">
            { numbers.map((number, index) => (
                <div key={index}>
                  {index + 1}
                  &nbsp;
                  {number}
                </div>
              )) 
            }
            </div>
        </>
    )
}