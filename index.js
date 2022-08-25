const App = (data)=>{
    const {count} = data;
    
    const incHandler = ()=>{
        re.setData({
            ...data,
            count:count+1
        }, App);
    }
    const decHandler = ()=>{
        re.setData({
            ...data,
            count:count-1
        }, App);
    }
    const clearHandler = ()=>{
        re.setData({
            ...data,
            count:0
        }, App);
    }
    
    re.watch('[data-re-inc]', 'click', incHandler)
    re.watch('[data-re-dec]', 'click', decHandler)

    return(
        `<div>
            <h1>Counter</h1>
            <button data-re-inc>+</button>
            ${count}
            <button data-re-dec>-</button>
            <br/>
            ${Child(props={clearHandler})}
        </div>`
    )
}

const Child = ({clearHandler})=>{
    re.watch('[data-re-child]', 'click', clearHandler)
    return(
        `<button data-re-child>clear</botton>`
    )
}

re.start('re', App, {count: 0});
