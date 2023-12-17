// import { useState } from 'react';
// import { useRouter } from 'next/router';
// import { supabase } from '../../utils/supabase';

// const NewProject = () => {
//   const [projectName, setProjectName] = useState('');
//   const [projectDescription, setProjectDescription] = useState('');
//   const [projectlink, setProjectLink] = useState('');
//   const router = useRouter();

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Perform project submission using Supabase
//     const { data, error } = await supabase
//       .from('projects')
//       .insert([
//         {
//           name: projectName,
//           description: projectDescription,
//           link: projectlink,
//         },
//       ]);

//     if (error) {
//       console.error('Error submitting project:', error.message);
//     } else {
//       console.log('Project submitted successfully:', data);
//       // ?? do we want to implement this? Redirect to the project details page or any other page
//       router.push(`/projects/${data[0].id}`);
//     }
//   };

//   return (
//     <div>
//       <h1>Submit a New Project</h1>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label htmlFor="projectName">Project Name</label>
//           <input
//             type="text"
//             id="projectName"
//             value={projectName}
//             onChange={(e) => setProjectName(e.target.value)}
//           />
//         </div>
//         <div>
//           <label htmlFor="projectDescription">Project Description</label>
//           <textarea
//             id="projectDescription"
//             value={projectDescription}
//             onChange={(e) => setProjectDescription(e.target.value)}
//           />
//         </div>
//         <div>
//           <label htmlFor="projectLink">Project Link</label>
//           <input
//             type="link"
//             id="projectLink"
//             value={projectLink}
//             onChange={(e) => setProjectLink(e.target.value)}
//           />
//         </div>
//         <button type="submit">Submit Project</button>
//       </form>
//     </div>
//   );
// };

// export default NewProject;
