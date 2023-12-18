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

// return (
//      <div class="bg-dark-2  p-10 m-10 rounded-lg shadow-lg">
//       <h1 className="text-3xl mb-4">Submit a New Project</h1>
//       <form onSubmit={handleSubmit}>
//         <div className="mb-4">
//           <label htmlFor="projectName" className="block text-sm font-semibold mb-1">
//             Project Name
//           </label>
//           <input
//             type="text"
//             id="projectName"
//             className="w-full p-2 border rounded focus:outline-none focus:border-blue-500"
//             value={projectName}
//             onChange={(e) => setProjectName(e.target.value)}
//           />
//         </div>
//         <div className="mb-4">
//           <label htmlFor="projectDescription" className="block text-sm font-semibold mb-1">
//             Project Description
//           </label>
//           <textarea
//             id="projectDescription"
//             className="w-full p-2 border rounded focus:outline-none focus:border-blue-500"
//             value={projectDescription}
//             onChange={(e) => setProjectDescription(e.target.value)}
//           />
//         </div>
//         {/* Add a container for project picture here, if needed */}
//         <button
//           type="submit"
//           className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue"
//         >
//           Submit Project
//         </button>
//       </form>
//     </div>
//   );
// };

// export default NewProject;