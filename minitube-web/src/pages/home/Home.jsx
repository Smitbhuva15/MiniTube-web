import React, { useEffect, useState } from 'react';
import Search from '../../component/Search';
import Video from './Video';
import { getPost } from '../../../api/PostFeching';

const Home = () => {
  const [data, setData] = useState([]);
  const [category, setCategory] = useState(null);
  const [searchVideo, setSearchVideo] = useState('');

  const getPostData = async () => {
    try {
      const res = await getPost();
      setData(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  // console.log(data);

  useEffect(() => {
    getPostData();
  }, []);

  const handleCategoryChange = (value) => {
    setCategory(value);
  };

  const handleSearchData = (searchQuery) => {
    setSearchVideo(searchQuery);
  };

  const filterVideos = () => {
    return data.filter((item) => {
      const categoryMatch = category ? item.category === category : true;
      const searchMatch = item.title.toLowerCase().includes(searchVideo.toLowerCase());
      return categoryMatch && searchMatch;
    });
  };

  const filteredVideos = filterVideos();

  return (
    <section className="pt-6 pb-20 min-h-[calc(100vh-175px)] max-w-7xl mx-auto">
      {/* category button and search */}
      <div className="flex flex-col sm:flex-row justify-between items-center mt-2 mb-5 gap-4">
        {/* category button */}
        <div className="flex gap-2">
          <button onClick={() => handleCategoryChange(null)} className={` ${category===null ? "bg-blue-500 text-white"  : "bg-blue-100 text-blue-600"}  px-4 py-1 rounded-full cursor-pointer`}>
            All
          </button>
          <button onClick={() => handleCategoryChange('react')} className={` ${category==='react' ? "bg-blue-500 text-white"  : "bg-blue-100 text-blue-600"}  px-4 py-1 rounded-full cursor-pointer`}>
            React
          </button>
          <button onClick={() => handleCategoryChange('nodejs')} className={` ${category==='nextjs' ? "bg-blue-500 text-white"  : "bg-blue-100 text-blue-600"}  px-4 py-1 rounded-full cursor-pointer`}>
            Node Js
          </button>
          <button onClick={() => handleCategoryChange('tailwind')} className={` ${category=== 'tailwindCss'? "bg-blue-500 text-white"  : "bg-blue-100 text-blue-600"}  px-4 py-1 rounded-full cursor-pointer`}>
            TailWind CSS
          </button>
        </div>
        <Search data={data} collectSearchData={handleSearchData} />
      </div>

      {/* video grid... */}
      <div>
        {filteredVideos.length > 0 ? (
          <Video data={filteredVideos} />
        ) : (
          <div>Videos are not found...</div>
        )}
      </div>
    </section>
  );
};

export default Home;
