import React, { useEffect, useState } from 'react'
import EditForm from './EditForm'
import { useParams } from 'react-router-dom';
import { getSingelPost } from '../../../api/PostFeching';

const EditVideo = () => {

  const { videoId } = useParams();
  const [data, setData] = useState({});
  // console.log(videoId);

  const singleData = async () => {
    try {
      const uniqueData = await getSingelPost(videoId);
      // console.log(uniqueData.data);
      setData(uniqueData.data);
    }
    catch (error) {
      console.log("error", error);
    }

  }

  useEffect(() => {

    singleData();

  }, [videoId]);

  return (
    <div className="max-w-7xl mx-auto px-5 my-5 lg:px-0">
      <div className="w-full">
        <div className="px-4 sm:px-0 pb-4">
          <h3 className="text-lg font-medium leading-6 text-gray-900">
            Edit video
          </h3>
          <p className="mt-1 text-sm text-gray-600">
            Please fillup the form to edit video
          </p>
          <span id="error-message" className=' text-red-600'> * All Input field Must Be Check Before The Submit Form !!! *</span>
        </div>
        <div className="mt-5 md:mt-0 md:col-span-2">
          <EditForm item={data} videoId={videoId} />
        </div>
      </div>
    </div>
  )
}

export default EditVideo