import React from 'react';


const Child1 = (props) => {
    return (
        <>
            <h3>Дочерний компонент 1</h3>
            <p>получено от:{props.data}</p>
        </>
        
    );
    
};

const Child2 = (props) => {
    return (
        <>
            <h3>Дочерний компонент 2 </h3>
            <p>получено от:{props.data}</p>
        </>
    )
}

class Parent extends React.Component{
    render() {
        const dataForChild ="Данные от родителя";
        return(
            <div>
                <h2>Родитель</h2>
                <Child1 data={dataForChild}/>
                <Child2 data={dataForChild}/>
            </div>
        )

    } 
}

export default Parent;