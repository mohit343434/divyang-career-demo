import React from 'react'
import AdminAddSector from './AdminAddSector'
import AdminChangePassword from './AdminChangePassword'

const AdminSettingMain = () => {
  return (
    <div className='p-6'>
      <h className="text-3xl">Setting</h>
  
      <AdminChangePassword/> 
    </div>
  )
}

export default AdminSettingMain
