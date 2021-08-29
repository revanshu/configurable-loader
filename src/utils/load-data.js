export function getData(){
    let prom = new Promise((res, rej) => {
        setTimeout(() => {
            res([
                {id: 1, value:1}, 
                {id: 2, value: 2}
            ]);
        },3000)
    })
    return prom;
}

export function getAnotherData(){
    let prom = new Promise((res, rej) => {
        setTimeout(() => {
            res([
                {id: 3, value:3}, 
                {id: 4, value: 4}
            ]);
        },5000)
    })
    return prom;
}