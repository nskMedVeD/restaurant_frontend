import React, {useState} from 'react';

const MenuItem = (props) => {
    const [count, setCount] = useState(0)
    return (
        <div className='menu_card_item'>
            <div className="menu_card_header">
                <h4>{props.dish.title}</h4> из категории {props.dish.category}
                <h3>{props.dish.image}</h3>
                <img src={props.dish.image} alt={props.dish.title}/>
            </div>
            <div className="menu_card_description">
                {props.dish.ingredients}
            </div>
            <div className="menu_card_footer">
                <span>{props.dish.price} рублей</span>
                <div className="menu_card_footer_counter">
                    <button
                        onClick={()=>setCount(count-1)}
                    >-</button>
                    <input
                        onChange={event=>setCount(event.target.value)}
                        value={count}></input>
                    <button
                        onClick={()=>setCount(count+1)}
                    >+</button>
                </div>



            </div>
            <hr/>
        </div>
    );
};

export default MenuItem;