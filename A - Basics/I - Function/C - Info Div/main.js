/*
    Function Advanced Practice
    - Parameters
    - Default
    - Rest
    - Loop
    - Condition
*/


function showInfo(userName = "unKnow", age = "unKnow" , salary = 0 , show = "Yes" , ...skills) {  
    document.write(`<div>`); 
        document.write(`<h2>Welcome ${userName}</h2>`); 
        document.write(`<p>Age: ${age}</p>`); 
        document.write(`<p>Salary: $${salary}</p>`); 
        if(show === "Yes") {
            if(skills.length > 0) {
                for(let i = 0 ; i < skills.length ; i++) { // Print the skills
                    document.write(`<p>Skill ${i+1}: ${skills[i]}</p>`); 
                }
            }
            else {
                document.write(`<p>No Skills</p>`); 
            }
        }
        else {
            document.write(`<p>Skills Is Hidden</p>`); 
        }
    document.write(`</div>`);    
}
showInfo("Hamada" , 20 , 4000 , "Yes" , "Html" , "Css" , "Js"); 