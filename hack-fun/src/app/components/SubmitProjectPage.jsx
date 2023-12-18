import { useState } from 'react';
import { useRouter } from 'next/router';
// import { supabase } from '../../utils/supabase';
import { useEffect } from 'react';

const NewProject = () => {
    const [projectName, setProjectName] = useState('');
    const [projectDescription, setProjectDescription] = useState('');
    const [projectlink, setProjectLink] = useState('');
    const router = useRouter();

    useEffect(() => {
        const { data: authListener } = supabase.auth.onAuthStateChange(
            (event, session) => {
                const currentUser = session?.user;
                setProjectName(currentUser);
                setProjectDescription(currentUser?.user_metadata?.projectDescription || '');
                setProjectLink(currentUser?.user_metadata?.projectlink || '');
            }
        );
    }, []); // Added closing parenthesis and empty dependency array

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Perform project submission using Supabase
        const { data, error } = await supabase.from('projects').insert([
            {
                name: projectName,
                description: projectDescription,
                link: projectlink,
            },
        ]);

        if (error) {
            console.error('Error submitting project:', error.message);
        } else {
            console.log('Project submitted successfully:', data);
            // ?? do we want to implement this? Redirect to the project details page or any other page
            router.push(`/projects/${data[0].id}`);
        }
    };

    return (
      <h1>Hello WorldNewProject</h1>    );
};

export default NewProject;