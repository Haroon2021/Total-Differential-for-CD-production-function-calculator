const form = document.querySelector('form');

form.addEventListener('submit', (event) =>{
    event.preventDefault()
    // Line below takes the form data from the HTML page and we have to make sure that 
    // the name tags are filled in the HTML elements otherwise we will not get proper key pair values
    // when the data is transformed
    const questionData = new FormData(form);
    // The linke below transforms the data into data with Key value pairs
    const questionDataTransformed = Object.fromEntries(questionData);

    const A = parseFloat(questionDataTransformed['A']);
    const a = parseFloat(questionDataTransformed['Alpha']);
    const b = parseFloat(questionDataTransformed['Beta']);
    const l = parseFloat(questionDataTransformed['Lvalue']);
    const k = parseFloat(questionDataTransformed['Kvalue']);
    const dk = parseFloat(questionDataTransformed['deltaK']);
    const dl = parseFloat(questionDataTransformed['deltaL']);
    const fk = A*a*(Math.pow(k,(a-1))) * (Math.pow(l,b));
    const fl = A*b * (Math.pow(k,a)) *  Math.pow(l,(b-1));

    // fk = ${A*a*(Math.pow(k,(a-1))) * (Math.pow(l,b))} 
    // fl = ${A*b * (Math.pow(k,a)) *  Math.pow(l,(b-1))}
    
    
    document.querySelector(".solving").innerText = `
    The cobb douglas equation is:

    Q = f(K,L) = ${A} * (K^(${a})) * (L^${b}) (CD production function)

    and the changes in capital and labour are:

    ΔK = ${dk}

    ΔL = ${dl}

    The first partial derivatives are:

    fk = ${A*a} (K^(${a-1})) * (L^${b})

    fl = ${A*b} (K^(${a})) * (L^${b-1})

    Evaluating the first partial derivatives at K = ${k} and L = ${l} gives:

    fk = ${A*a} * (${k}^(${a-1})) * (${l}^${b})
    fk = ${A*a} * (${Math.pow(k,(a-1))}) * (${Math.pow(l,b)})
    fk = ${A*a*(Math.pow(k,(a-1))) * (Math.pow(l,b))} 

    fl = ${A*b} * (${k}^(${a})) * (${l}^${b-1})
    fl = ${A*b} * (${Math.pow(k,a)}) * (${ Math.pow(l,(b-1))})
    fl = ${A*b * (Math.pow(k,a)) *  Math.pow(l,(b-1))}

    using the total differential/ SIF formula we get:

    dQ = fk * ΔK + fl * ΔL
    dQ = (${fk} * ${dk}) + (${fl} * ${dl})
    dQ = ${fk*dk} + ${fl*dl} 
    dQ = ${fk*dk+fl*dl} 

    `


    // alpha and ᵅᶛ

})