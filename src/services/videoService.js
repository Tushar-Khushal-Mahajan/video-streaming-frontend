import axios from "axios";
import { toast } from "react-toastify";

export const BASEURI = "http://localhost:8080/v1/video";

// -------------
export async function saveVideo(title, description, file, setProgress) {

  try {
    let formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("file", file);

    let response = await axios.post(`${BASEURI}`, formData, {
      headers: {
        "Content-Type": "multipart/form-data"
      },
      onUploadProgress: (progress) => {
        let percentCompleted = Math.round((progress.loaded * 100) / progress.total);
        console.log(percentCompleted);
        setProgress(percentCompleted);
      }
    });

    console.log(response.data);

    toast("Video Upload Successfull");
  }
  catch (error) {
    console.log(error);

    toast.error("Error while saving video");
  }
}
