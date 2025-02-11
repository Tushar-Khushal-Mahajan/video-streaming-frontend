import { useRef, useState } from "react";
import { saveVideo } from "../services/videoService";

const UploadVideo = () => {

  let [uploading, setUploading] = useState(false);
  let [progress, setProgress] = useState(50);
  let resetBtn = useRef();


  async function submitForm(event) {
    // ------
    setUploading(true);
    // ------
    event.preventDefault();
    console.log(event.target.title.value);
    console.log(event.target.description.value);

    let fileInput = event.target.file;
    let file = fileInput.files[0];

    await saveVideo(event.target.title.value, event.target.description.value, file, setProgress);

    // clear inputs
    resetBtn.current.click();

    // -----
    setUploading(false);
    // -----

  }


  return (<>
    <div className="w-screen h-screen flex justify-center items-center">
      <section className="formSection w-xl border py-5">
        <h3 className="font-semibold text-center text-gray-950  text-2xl my-3">Upload Video</h3>


        <form className="max-w-sm mx-auto" onSubmit={submitForm}>
          <div className="mb-5">
            <label htmlFor="title" className="block mb-2 text-sm font-medium">Video Title</label>
            <input type="text" id="title" name="title" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Mountains Trip" required />
          </div>
          <div className="mb-5">
            <label htmlFor="desc" className="block mb-2 text-sm font-medium text-gray-900">Video Description</label>
            <textarea id="desc" rows="4" name="description" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500" placeholder="Video Desc..."></textarea>

          </div>
          <div className="mb-5">
            <label className="block mb-2 text-sm font-medium text-gray-900" htmlFor="file">Small file input</label>
            <input className="block w-full mb-5 text-sm text-gray-900 border border-gray-300 p-2 rounded-xs cursor-pointer bg-gray-50" name="file" id="file" type="file" />
          </div>

          {uploading && <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700 mb-5">
            <div className="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full" style={{ width: `${progress}%` }}> {progress}%</div>
          </div>}

          <div className="flex gap-5 justify-end">
            <button type="submit" disabled={uploading} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center disabled:opacity-50 disabled:cursor-not-allowed">Submit</button>

            <button type="reset" disabled={uploading} className="text-white bg-yellow-500 hover:bg-yellow-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center disabled:opacity-50 disabled:cursor-not-allowed" ref={resetBtn}>Reset</button>
          </div>
        </form>


      </section>
    </div>
  </>);
}

export default UploadVideo;