import React from 'react';

const MenuItem = (props) => {
    return (
        <div className='menu_card'>
            <div className="menu_card_header">
                <h4>{props.dish.title}</h4> из категории {props.dish.category}
            </div>
            <div className="menu_card_header">
                {props.dish.ingredients}
            </div>
            <div className="menu_card_footer">
                Цена и кнопка добавления в корзину
            </div>
            <hr/>
        </div>
    );
};

export default MenuItem;