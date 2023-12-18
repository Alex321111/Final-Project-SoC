export default function ProjectCard({ userName }) {
    return (
        <>
            <div className="max-w-2xl mx-auto">
                <div className="bg-dark-2 shadow-md border border-gray-200 rounded-lg max-w-sm dark:bg-gray-800 dark:border-gray-700">
                    <a href="#">
                        <img className="rounded-t-lg" src="https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="ReactProject" />
                    </a>
                    <div className="p-5">
                        <a href="#">
                            <h5 className="text-blue-900 font-bold text-2xl tracking-tight mb-2 dark:text-white">React SPA Hackathon</h5>
                        </a>
                        <p className="font-normal text-white mb-3 dark:text-gray-400">Welcome to the React SPA (Single Page Application) App Hackathon! This challenge is a fantastic opportunity to harness your React skills and understanding of component-based architecture.</p>
                        <a href="#" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Access Repository
                            <svg className="-mr-1 ml-2 h-4 w-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                        </a>
                    </div>
                </div>
                <p className="mt-5"> <a className="text-blue-600 hover:underline" href="#" target="_blank"></a></p>
            </div>
            <div className="max-w-2xl mx-auto">
                <div className="bg-dark-2 shadow-md border border-gray-200 rounded-lg max-w-sm dark:bg-gray-800 dark:border-gray-700">
                    <a href="#">
                        <img className="rounded-t-lg" src="https://images.unsplash.com/photo-1504805572947-34fad45aed93?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                    </a>
                    <div className="p-5">
                        <a href="#">
                            <h5 className="text-blue-900 font-bold text-2xl tracking-tight mb-2 dark:text-white">Welcome to the Next.js App Development Challenge!</h5>
                        </a>
                        <p className="font-normal text-white mb-3 dark:text-gray-400">Develop an app highlighting key Next.js features, like server-side rendering and file-based routing.</p>
                        <a href="#" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Access Repository
                            {/* <svg className="-mr-1 ml-2 h-4 w-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg> */}
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}
    






