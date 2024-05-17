import React from 'react';

import { Link  } from 'react-router-dom';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from '@/components/ui/button';

import AllBlogs from './AdminArticleCompo/AllBlogs';
import AllScheme from './AdminArticleCompo/AllScheme';

const AdminArticleMain = () => {



  return (
    <div className='flex p-10'>
      <div className="flex flex-col w-full  ">
        <h1 className='py-5 font-semibold text-2xl '> Article</h1>
        <div className='flex justify-end'>
          <Link to="/dashboard/admin/addArticles">
            <Button className="bg-divyang hover:bg-divyang"> +Add Article</Button>
          </Link>
        </div>
        <div >
          <Tabs className=" w-full" defaultValue={"blog"}>
            <TabsList className="w-full">
              <TabsTrigger value="blog" className="text-xl">
                Blogs
              </TabsTrigger>
              <TabsTrigger value="scheme" className="text-xl">
                Schemes
              </TabsTrigger>
            </TabsList>
            <TabsContent value="blog" className="">
              <AllBlogs />
            </TabsContent>
            <TabsContent value="scheme" className="w-full">
              <AllScheme />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default AdminArticleMain;
