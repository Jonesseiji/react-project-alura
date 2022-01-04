import React, { Component } from 'react';

class ListaDeCategorias extends React.Component {
    render() { 
        return <div className='listaCategorias'>
            <ul>
                <li>
                    Categorias
                </li>
            </ul>
            <input type="text" placeholder="Insira uma Categoria" />
        </div>;
    }
}
 
export default ListaDeCategorias;