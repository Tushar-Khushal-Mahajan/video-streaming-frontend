import './App.css';
import { RiVideoUploadLine } from "react-icons/ri";
import { MdOndemandVideo } from "react-icons/md";
import { useNavigate } from 'react-router-dom';


function App() {

  let navigate = useNavigate();

  return (
    <>
      <div className='container flex flex-col justify-self-center px-5'>
        <h1 className='text-5xl font-bold text-center my-6 text-purple-600'>Welcome to Video Streaming Platform</h1>

        <p className='text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur ipsam, vero facere dolore necessitatibus deleniti excepturi maxime id, ratione officia aliquid culpa illo rerum, laboriosam ipsa cupiditate accusantium voluptatibus libero!</p>

        <section className="flex justify-center my-20 gap-10">
          <button onClick={() => navigate("/upload")} className='flex gap-2 justify-center items-center py-2 w-36 border bg-blue-700 hover:bg-blue-800 text-white font-semibold rounded-tr-2xl'>Upload Video <RiVideoUploadLine className='size-5' /></button>

          <button onClick={() => navigate("/view")} className='flex gap-2 justify-center items-center py-2 w-36 border bg-red-500 hover:bg-red-600 text-white font-semibold rounded-tl-2xl'>Watch Video <MdOndemandVideo className='size-5' /></button>
        </section>

      </div>
    </>
  );
}

export default App;
