import {useState} from 'react';
import styles from './styles/App.module.scss';
import Cards from './components/Cards';
import Categories from './components/Categories';
import useFetchCourses from './hooks/useFetchCourses';
import Loading from './components/Loading';

function App() {
    const {courses, loading} = useFetchCourses();
    const [tag, setTag] = useState<string>('Все темы');

    if (loading) {
        return <Loading />;
    }

    return (
        <div className={styles.app}>
            <Categories courses={courses} setTag={setTag} />
            <Cards courses={courses} tag={tag} />
        </div>
    );
}

export default App;
