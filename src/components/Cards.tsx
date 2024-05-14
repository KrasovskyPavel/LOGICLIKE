import React from 'react';
import {Course} from '../types';
import style from '../styles/Cards.module.scss';

interface ICards {
    courses: Course[];
    tag: string;
}

const Cards: React.FC<ICards> = ({courses, tag}) => {
    const filteredCourses = courses.filter((course) =>
        tag === 'Все темы' ? true : course.tags.includes(tag)
    );

    return (
        <div className={style.container}>
            {filteredCourses.map((course) => (
                <div key={course.id} className={style.card}>
                    <div
                        style={{backgroundColor: course.bgColor}}
                        className={style.img_container}>
                        <img src={course.image} alt={course.name} />
                    </div>
                    <h3>{course.name}</h3>
                </div>
            ))}
        </div>
    );
};

export default Cards;
