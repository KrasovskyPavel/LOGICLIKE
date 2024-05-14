import React, {useState, useMemo} from 'react';
import {Course} from '../types';
import style from '../styles/Categories.module.scss';

interface ICategories {
    courses: Course[];
    setTag: (tag: string) => void;
}

const Categories: React.FC<ICategories> = ({courses, setTag}) => {
    const [active, setActive] = useState<number>(0);

    const tagsList = useMemo(() => {
        const allTags = courses.flatMap((course) => course.tags);
        return ['Все темы', ...new Set(allTags)];
    }, [courses]);

    return (
        <ul className={style.container}>
            {tagsList.map((item, i) => {
                return (
                    <li
                        key={i}
                        onClick={() => {
                            setActive(i);
                            setTag(item);
                        }}
                        className={active === i ? style.active : ''}>
                        {item}
                    </li>
                );
            })}
        </ul>
    );
};

export default Categories;
