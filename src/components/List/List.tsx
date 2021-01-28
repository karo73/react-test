import React from 'react';
import './List.scss';

interface Props {
    listItems: any[];
}

const List: React.FC<Props> = ({ listItems }) => {

    return (
        <ul className="list">
            {
                listItems.map((item, index) => (
                    <li key={index} className="list__item">
                        <a
                            className="list__link"
                            href={item.url}
                            target="_blank"
                            rel="noreferrer"
                        >
                            <figure className="list__img-box">
                                <img className="list__img" src={item.url} alt={item.categories[0]['name']} />
                            </figure>
                        </a>
                    </li>
                ))
            }
        </ul>
    );

};

export default List;