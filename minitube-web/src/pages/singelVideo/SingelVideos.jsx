import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Player from './Player';
import Description from './Description';
import ReletedVideos from './ReletedVideos';
import { getPost, getSingelPost } from '../../../api/PostFeching';


const SingelVideos = () => {
    const { videoId } = useParams();
    const [addData, setAddData] = useState(null);
    const [data1, setData1] = useState([]);
//    console.log("id",videoId);
    const getAllPostDetails = async () => {
        try {
            const res = await getPost([]);
            // console.log(res.data);
            setData1(res.data);

        }
        catch (error) {
            console.log("Error", error);
        }
    }


    const getPostDetails = async () => {
        try {
            const res = await getSingelPost(videoId);
            const newData = res.data;
            // console.log(newData);
            setAddData(newData);
        } catch (error) {
            console.error("Error found", error);
        }
    };

    useEffect(() => {
        getAllPostDetails();
    }, []);

    const newFilterData=data1.filter((item)=>{
        return videoId!==item.id;
    })
    // console.log( newFilterData);

    useEffect(() => {
        getPostDetails();
    }, [videoId]);

    if (addData === null) {
        return <div>Loading...</div>;  // Show a loading message or spinner while data is being fetched
    }

    return (
        <section className='pt-6 pb-20'>
            <div className='max-w-7xl mx-auto px-2 pb-20 min-h-[400px]'>
                <div className='grid grid-cols-3 gap-2 lg:gap-16'>
                    {/* Video Detail Section */}
                    <div className='col-span-full w-full space-y-8 lg:col-span-2'>
                        {(
                            <>
                                <Player data={addData} />
                                <Description data={addData} />
                            </>
                        )}
                    </div>

                    {/* Related Videos Section */}
                    <ReletedVideos  data={newFilterData}/>
                </div>
            </div>
        </section>
    );
};

export default SingelVideos;