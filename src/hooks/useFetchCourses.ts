import {useState, useEffect} from 'react';
import {Course} from '../types';
import axios from 'axios';

const useFetchCourses = () => {
    const [courses, setCourses] = useState<Course[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchCourses = async () => {
            try {
                const response = await axios.get<Course[]>(
                    'https://logiclike.com/docs/courses.json'
                );
                setCourses(response.data);
                setLoading(false);
            } catch (err) {
                alert(err);
                setLoading(false);
            }
        };

        fetchCourses();
    }, []);

    return {courses, loading};
};

export default useFetchCourses;
