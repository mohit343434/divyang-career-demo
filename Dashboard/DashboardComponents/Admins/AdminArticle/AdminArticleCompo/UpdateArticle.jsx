import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import axiosInstance from '@/src/utils/axiosConfig';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { Input } from '@/components/ui/input';
import { convertHtmlToText } from '@/src/utils/HtmlToText';
import { MdOutlineFileUpload } from 'react-icons/md';
import { AiOutlineDelete } from 'react-icons/ai';
import Loader from "@/Dashboard/DashboardComponents/GlobalComponents/Loader"
import fileAxiosInstance from '@/src/utils/fileConfig';

const UpdateArticle = () => {
  const { id } = useParams()
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [articleName, setArticleName] = useState('');
  const [type, setType] = useState('');
  const [description, setDescription] = useState('');
  const [file, setFile] = useState(null);

  const getSingleArticl = async () => {
    try {
      setLoading(true)
      const res = await axiosInstance.get(`/admin/article/${id}`);
      // console.log(res);
      setArticleName(convertHtmlToText(res.data.data[0].title));
      setType(res.data.data[0].type);
      setDescription(res.data.data[0].description);
      setFile((res.data.data[0].image));
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }
  useEffect(() => {
    getSingleArticl()
  }, [])
  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };


  const handleUpdate = async () => {
    try {

      const formData = new FormData();
      formData.append('title', articleName);
      formData.append('type', type);
      formData.append('description', description);
      formData.append('image', file);
      setLoading(true)
      console.log(...formData);
      const res = await fileAxiosInstance.put(`/admin/article/${id}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      console.log(res);


    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false)
    }
  };
  return (
    <div className='flex'>
      <div className="flex flex-col w-full p-10  basis-1/2 ">
        <h1 className='py-5 font-semibold text-2xl '>Update Article</h1>
        <div className="bg-white border px-5">
          <form className="flex flex-col p-5 gap-3" onSubmit={(e) => { e.preventDefault, handleUpdate }}>
            <div className="flex flex-col ">
              Title
              <Input
                className="h-10 border-black"
                value={articleName}
                onChange={(e) => setArticleName(e.target.value)}
              />
            </div>
            <div className="flex flex-col gap-1">
              Type
              <select
                defaultValue={type}
                className="h-10"
                value={type}
                onChange={(e) => setType(e.target.value)}
              >
                <option value="scheme">Scheme</option>
                <option value="blog">Blog</option>
              </select>
            </div>
            {
              loading && <Loader />
            }
            <div className="flex flex-col gap-1">
              Description
              <CKEditor
                editor={ClassicEditor}
                data={description}
                onChange={(event, editor) => {
                  const data = editor.getData();
                  setDescription(data);
                }}
              />
            </div>
            <div className="flex flex-col gap-1">
              <div className="rounded-2xl w-full h-40 object-fit overflow-hidden relative border-dotted border border-[#8E98A8]">
                {!file && (
                  <label
                    className={
                      "flex justify-center w-full h-full items-center cursor-pointer text-center flex-col"
                    }
                  >
                    <MdOutlineFileUpload className="w-6 h-6" />
                    <p className="text-[8px] text-divyang">Click here</p>
                    <input
                      type="file"
                      accept=".png"
                      onChange={handleFileChange}
                      className="hidden "
                    />
                  </label>
                )}
                {
                  file && (
                    <>
                      <AiOutlineDelete
                        icon={"ic:round-clear"}
                        className="text-3xl text-light-rt bg-main-rt rounded-full absolute top-[-10px] right-[-8px] drop-shadow-lg cursor-pointer text-red-700 hover:scale-2"
                        onClick={() => setFile(null)}
                      />
                      <img
                        src={
                          typeof file === 'string'
                            ? `https://divyangcareer.s3.ap-south-1.amazonaws.com/assets/images/banner/${file}`
                            : URL.createObjectURL(file)
                        }
                        className="w-full object-cover"
                        alt="Disability Certificate"
                      />
                    </>
                  )
                }

              </div>
            </div>
            <div className='py-4'>
              <button
                type="submit"
                className=" w-full bg-orange-500 hover:bg-orange-500 text-white font-bold py-2 px-4 rounded"
                >
                Update
              </button>

            </div>
            <Link to="/dashboard/admin/articles" className=" underline" style={{ color: "#0000FF" }}>
              Cancel
            </Link>
          </form>
          <div className=" ">

          </div>
        </div>
      </div>
    </div>
  )
}

export default UpdateArticle
