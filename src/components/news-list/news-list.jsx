import React from 'react';

import { formatNewsPublishedDate } from '../../utils/date';

const NewsList = ({ items }) => {
    return (
        <section className="news">
            <h2 className="visually-hidden">Список новостей</h2>
            {items &&
                items.map(({ title, publishedAt, id, description }) => (
                    <article className="news__item" key={id}>
                        <time className="news__item-date" dateTime={publishedAt}>
                            {formatNewsPublishedDate(publishedAt)}
                        </time>
                        <h3 className="news__item-title">{title}</h3>
                        <p className="news__item-description">{description}</p>
                    </article>
                ))}
        </section>
    );
};

export default NewsList;
