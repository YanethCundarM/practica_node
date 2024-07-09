import './AddCartBtn.css';


const AddCartBtn = ({ name, newPrice }) => {
    return (
        <button onClick={() => { alert(`Has comprado ${name} en $${newPrice}`) }}>Comprar</button>
    );
};

export { AddCartBtn };

