/*
    ===========================================
    == Variables And Concatenation Challenge ==
    ===========================================

    [1] Create 3 Variables [Title, Desctiption, Date]
    -- All In One Statement
    -- Variable Name Must Be Two Words
    -- Title Content Is "Hamada"
    -- Description Content Is "Full Stack"
    -- Date Content Is "6/8/2003"
    [2] Create Variable Contains Div And This Div Contains
    -- H3 For Title
    -- P For Paragraph
    -- Span For Time
    [3] Add This Card To Page 4 Times
    [4] Use Template Literals For Concatenate

    Extra
    - Use ES6 Repeat
*/

let theTitle = 'Hamada',
    mainDescription = 'Full Stack',
    date = '6/8/2003';


let challenge = `
    <div class="card">
        <h3> Hello ${theTitle}</h3>
        <p>${mainDescription}</p>
        <span>${date}</span>
    </div>
`;

document.write(challenge.repeat(4));