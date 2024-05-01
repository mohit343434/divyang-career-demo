import React from 'react'
import AdminSector from './AdminSnCCompo/AdminSector'
import AdminCategories from './AdminSnCCompo/AdminCategories'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";


const AdminSectorAndCategoriesMain = () => {
  return (
    
      <div className="w-full">
      <div className="flex flex-col">
        <div className="w-full">
        <h1 className='text-xl p-4 font-semibold'> Categories & Sectores</h1>
        </div>
        <Tabs className=" w-full justify-between" defaultValue={"categories"}>
          <TabsList className="w-full bg-transparent">
            <TabsTrigger value="categories" className="text-xl">
            Categories
            </TabsTrigger>
            <TabsTrigger value="sectors" className="text-xl">
             Sectors
            </TabsTrigger>
            
          </TabsList>
          <TabsContent value="categories" className="w-full">
           
            <div className="flex  w-full py-5">
            <AdminCategories/>
            </div>
          </TabsContent>
          <TabsContent value="sectors" className="w-full">
            <div className="flex  w-full py-5">
            <AdminSector/>
            </div>
          </TabsContent>
         
        </Tabs>
        
      </div>
    </div>
      
     
   
  )
}

export default AdminSectorAndCategoriesMain
