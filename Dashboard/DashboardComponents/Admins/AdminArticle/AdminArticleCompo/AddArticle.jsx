import React, { useState } from 'react';
import fileAxiosInstance from '@/src/utils/fileConfig';
import Swal from 'sweetalert2';
import { Link, useNavigate } from 'react-router-dom';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { Input } from '@/components/ui/input';
import Loader from "@/Dashboard/DashboardComponents/GlobalComponents/Loader"

const AddArticle = () => {
    const navigate = useNavigate();
    const [articleName, setArticleName] = useState('');
    const [type, setType] = useState('scheme');
    const [description, setDescription] = useState('');
    const [file, setFile] = useState(null);
    const [loading, setLoading] = useState(false);

    // console.log(description);
    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('title', articleName);
        formData.append('type', type);
        formData.append('description', description);
        formData.append('image', file);
        try {
            setLoading(true);
            const res = await fileAxiosInstance.post('/admin/article', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });

            if (res.status === 200) {
                navigate('/dashboard/admin/articles');
                Swal.fire({
                    title: 'Success!',
                    text: 'Article submitted successfully.',
                    icon: 'success'
                });
            } else {
                throw new Error('Failed to submit article. Unexpected response from server.');
            }
        } catch (error) {
            console.error('Error submitting article:', error);
            Swal.fire({
                title: 'Error!',
                text: 'Failed to submit article. Please try again later.',
                icon: 'error'
            });
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className='flex'>
            <div className="flex flex-col w-full p-10  basis-1/2 ">
                <h1 className='py-5 font-semibold text-2xl '>Add Article</h1>
                <div className="bg-white border px-5">
                    <form className="flex flex-col p-5 gap-3" onSubmit={handleSubmit}>
                        <div className="flex flex-col ">
                            Title
                            <Input
                                className="h-10 border-black"
                                value={articleName}
                                onChange={(e) => setArticleName(e.target.value)}
                                required
                            />
                        </div>
                        {loading && <Loader />}
                        <div className="flex flex-col gap-1">
                            Type
                            <select
                                className="h-10"
                                value={type}
                                onChange={(e) => setType(e.target.value)}
                                required
                            >
                                <option value="scheme">Scheme</option>
                                <option value="blog">Blog</option>
                            </select>
                        </div>
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
                            Image
                            <input
                                className='border-[1px] '
                                type="file"
                                onChange={(e) => setFile(e.target.files[0])}
                                required
                            />
                        </div>
                        <div className='py-4'>
                            <button
                                type="submit"
                                className={`w-full bg-orange-500 ${loading ? 'cursor-not-allowed opacity-50' : 'hover:bg-orange-500'} text-white font-bold py-2 px-4 rounded`}
                                disabled={loading}
                            >
                                {loading ? 'Submitting...' : 'Submit'}
                            </button>
                        </div>
                        <div className="">
                            <Link to="/dashboard/admin/articles" className="underline" style={{ color: "#0000FF" }}>
                                Cancel
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddArticle;
